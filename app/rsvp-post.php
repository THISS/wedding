<?php
// Initialise response variables
$errors = array(); // validation error array
$data = array(); // data response array
$details = array(); // valid details they have submitted

// Test to see if we receive all the form
// echo json_encode($_POST);

/*************************/
// Validate Form

// Full Name
if(!empty($_POST['name']))
{
  $fullName = $_POST['name'];
  $pattern = "/^[a-zA-Z ]{2,30}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$fullName))
  {
    $details['name'] = $_POST['name'];
  }
  else
  {
    $errors['name'][] = 'Your Name can only contain _, 1-9, A-Z or a-z and be 2-30 characters long.';
  }
}else
{
  $errors['name'][] = "Your full name is required eg. Brenton Holswich";
}

// Number Responding For
if(!empty($_POST['number']))
{
  // variables
  $number = $_POST['number'];
  $pattern ="/^[1-9]{1}$/"; // This pattern ensures we are getting a number between 1 and 9
  // Regexpression
  if(preg_match($pattern, $number))
  {
    $details['number'] = $_POST['number'];
  }else
  {
    $errors['number'][] = "You need to enter a number between 1 and 9";
  }
}else
{
  $errors['number'][] = "Are you responding for 1 or more people?";
}

// Group Of Names
if(!empty($_POST['groupName']))
{
  $groupName = $_POST['groupName'];
  $pattern = "/^[a-zA-Z ]+/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$groupName))
  {
    $details['groupName'] = $_POST['groupName'];
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
if(!empty($_POST['response']))
{
  switch($_POST['response'])
  {
    case 'Gladly Attend':
    case 'Regretfully Decline':
    case 'Resentfully Attend':
    case 'Enthusiastically Decline':
    case 'Will Decline To Respond, But Ultimately Attend':
      $details['response'] = $_POST['response'];
      break;
    default:
      $errors['response'][] = "How did you give a response not listed?";
  };
}else
{
  $errors['response'][] = "You need to let us know if you are attending or not...";
}

// Song
if(!empty($_POST['song']))
{
  $song = $_POST['song'];
  $pattern = "/^[a-zA-Z\-\_ ]{1,40}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$song))
  {
    $details['song'] = $_POST['song'];
  }else
  {
    $errors['song'][] = "Your song needs to be between 1 and 40 letters or numbers in length.";
  }
}else
{
  $errors['song'][] = "We need to know a song that will get you dancing eg. Beyonce - Single Ladies";
}

// Message
if(!empty($_POST['littleMessage']))
{
  $littleMessage = $_POST['littleMessage'];
  $pattern = "/^[a-zA-Z \.]+/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$littleMessage))
  {
    $details['littleMessage'] = $_POST['littleMessage'];
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
$file = 'rsvp.txt';
// Open the file to get existing content
try
{
  $current = file_get_contents($file);
}catch(Exception $e)
{
  $errors['fileSave'] = $e;
}
// Append a new person to the file
$current .= "\n\n\n";
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


/****************************/
// Response To Browser
if(! empty($errors))
{
  // if there are errors in our errors array success is false and return the errors
  $data['success'] = false;
  $data['errors'] = $errors;
}else
{
  // Return a success message to the Browser because there are no errors
  $data['success'] = true;
  $data['message'] = "Success!";
}

// Respond
echo json_encode($data);
?>
