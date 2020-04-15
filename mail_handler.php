<?php 
if(isset($_POST['submit'])){
    $to = "muhammadwamiqnehal@gmail.com"; // this is your Email address
    $name = $_POST['name'];
    $contact = $_POST['contact'];
    $profession = $_POST['profession'];
    $course = $_POST['course'];
    $subject = "New Message From KnowledgeInnAcademy.com";
    $message = "Name: ". $name . "\nContact: " . $contact.
    "\nProfession: " . $profession . "\nCourse: " . $course . "\nMessage: " . $_POST['message'];

    $headers = "From:" . $name;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
?>