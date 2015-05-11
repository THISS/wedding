<?php
// Initialise response variables
$errors = array(); // validation error array
$data = array(); // data response array

// Test to see if we receive all the form
echo json_encode($_POST);

// Validate Form

// Full Name
if(!empty($_POST['name']))
{

}else
{
  $errors['name'] = "Your full name is required eg. Brenton Holswich";
}

// Number Responding For
if(!empty($_POST['number']))
{

}else
{
  $errors['number'] = "Are you responding for 1 or more people?";
}

// Group Of Names
if(!empty($_POST['groupName']))
{

}else
{
  $errors['groupName'] = "What are the full names of the people you are responding for?";
}

// Response
if(!empty($_POST['response']))
{

}else
{
  $errors['response'] = "You need to let us know if you are attending or not...";
}

// Song
if(!empty($_POST['song']))
{

}else
{
  $errors['song'] = "We need to know a song that will get you dancing eg. Beyonce - Single Ladies";
}

// Message
if(!empty($_POST['littleMessage']))
{

}else
{
  $errors['littleMessage'] = "You don't want to give a little message for us...";
}
// Save To File

// Send To Email Address

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
