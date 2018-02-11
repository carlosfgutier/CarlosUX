<?php

	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = 'carlosfgutier@gmail.com';
    $email_subject = "New Email From carloshere.com";
    $email_body = "You have received a new message from $name.\n".
        "Here is the message:\n $message".

	$to = "carlosfgutier@gmail.com";
	$headers = "From: $email_from \r\n";
	$headers .= "Reply-To: $visitor_email \r\n";
	mail($to,$email_subject,$email_body,$headers);

?>