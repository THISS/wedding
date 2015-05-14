<?php
// Initialise response variables
$errors = array(); // validation error array
$data = array(); // data response array
$details = array(); // valid details they have submitted

// Test to see if we receive all the form
// echo json_encode($_POST);

/*************************/
// Validate Form

// Generic error checker
function checkInput($data, $entity="", $problem="")
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && $entity && strlen($data) == 0)
    {
        $errors[$entity] = $problem;
    }

    return $data;
}

// Full Name
$validated = checkInput($_POST['name'], 'name', "Your full name is required eg. Brenton Holswich");
if(!empty($validated))
{
  $fullName = $validated;
  $pattern = "/^[a-zA-Z ]{2,30}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$fullName))
  {
    $details['name'] = $fullName;
  }
  else
  {
    $errors['name'][] = 'Your Name can only contain _, 1-9, A-Z or a-z and be 2-30 characters long.';
  }
}
// else
// {
//   $errors['name'][] = "Your full name is required eg. Brenton Holswich";
// }

// Number Responding For
$validated = checkInput($_POST['number'], 'number', "Are you responding for 1 or more people?");
if(!empty($validated))
{
  // variables
  $number = $validated;
  $pattern ="/^[1-9]{1}$/"; // This pattern ensures we are getting a number between 1 and 9
  // Regexpression
  if(preg_match($pattern, $number))
  {
    $details['number'] = $number;
  }else
  {
    $errors['number'][] = "You need to enter a number between 1 and 9";
  }
}
// else
// {
//   $errors['number'][] = "Are you responding for 1 or more people?";
// }

// Group Of Names
$validated = checkInput($_POST['groupName']);

if(!empty($validated))
{
  $groupName = $validated;
  $pattern = "/^[a-zA-Z ]+/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$groupName))
  {
    $details['groupName'] = $groupName;
  }else
  {
    $errors['groupName'][] = "Try to have only alphabetical letters in your name. . .";
  }
}else
{
  // Not an error because it is not required
  // $errors['groupName'] = "What are the full names of the people you are responding for?";
}

// Response
$validated = checkInput($_POST['response'], 'response', "You need to let us know if you are attending or not...");

if(!empty($validated))
{
  switch($validated)
  {
    case 'Gladly Attend':
    case 'Regretfully Decline':
    case 'Resentfully Attend':
    case 'Enthusiastically Decline':
    case 'Will Decline To Respond, But Ultimately Attend':
      $details['response'] = $validated;
      break;
    default:
      $errors['response'][] = "How did you give a response not listed?";
  };
}
// else
// {
//   $errors['response'][] = "You need to let us know if you are attending or not...";
// }

// Song
$validated = checkInput($_POST['song'], 'song', "We need to know a song that will get you dancing eg. Beyonce - Single Ladies");

if(!empty($validated))
{
  $song = $validated;
  $pattern = "/^[a-zA-Z\-\_ ]{1,40}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$song))
  {
    $details['song'] = $song;
  }else
  {
    $errors['song'][] = "Your song needs to be between 1 and 40 letters or numbers in length.";
  }
}
// else
// {
//   $errors['song'][] = "We need to know a song that will get you dancing eg. Beyonce - Single Ladies";
// }

// Message
$validated = checkInput($_POST['littleMessage']);

if(!empty($validated))
{
  $littleMessage = $validated;
  $pattern = "/^[a-zA-Z \.]+/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$littleMessage))
  {
    $details['littleMessage'] = $littleMessage;
  }else
  {
    $errors['littleMessage'][] = "Try to have only alphabetical letters in your message. . .";
  }
}else
{
  // Not an error because it is not required
  // $errors['littleMessage'] = "You don't want to give a little message for us...";
}

/*****************************/
// Save To File
$file = getcwd().'/rsvp.txt';
$current = "";
// Open the file to get existing content
try
{
  $current = file_get_contents($file);
}catch(Exception $e)
{
  $errors['fileRead'] = $e;
}
// Append a new person to the file
$newMessage .= "\n";
$newMessage .= $details['name']."\n";
$newMessage .= $details['number']." will ";
$newMessage .= $details['response']."\n";
if($details['number'] > 1)
{
  $newMessage .= "This is who:\n".$details['groupName']."\n";
}
$newMessage .= $details['song']." is the song I would like to hear.";
$newMessage .= "\n\n".$details['littleMessage']."\n";

$current .= $newMessage;
// Write the contents back to the file
try
{
  file_put_contents($file, $current);
}catch(Exception $e)
{
  $errors['fileSave'] = $e;
}

/****************************/
// Send To Email Address
$to       = 'brentonandkim@gmail.com';
$from     = 'brenton@mildmovies.com';
$cc       = 'brenton.holswich@gmail.com, kimberlyyoung89@gmail.com';
$subject  = 'Wedding: RSVP';
$message  = $newMessage;
$headers  = 'From: ' . $from . "\r\n" .
            'Cc: ' . $cc;

try
{
  if(mail($to,$subject,$message,$headers))
  {
    $data['email'] = true;
  }else
  {
    $data['email'] = false;
    $errors['email'][] = "The email service could not send.";
    $errors['email'][] = $message;
  }

}catch(Exception $e)
{
  $errors['email'][] = $e;
}

// Write email errors to a file if they occur
$emailFile = getcwd().'/email_log.txt';
try
{
  $emailFileContents = file_get_contents($emailFile);
  $emailFileContents .= $errors['email'] "\n";
  file_put_contents($emailFile, $emailFileContents);
}catch(Exception $e)
{
  $errors['emailFileSave'] = $e;
}
/****************************/
// Response To Browser
if(! empty($errors))
{
  // if there are errors in our errors array success is false and return the errors
  $data['success'] = false;
  $data['errors'] = $errors;
  http_response_code(422); // request unable to be followed due to semantic errors
}else
{
  // Return a success message to the Browser because there are no errors
  $data['success'] = true;
  $data['message'] = "Success!";
}


// Respond
echo json_encode($data);
?>
