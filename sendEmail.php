<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set your Gmail email address where you want to receive messages
    $to = "your-email@gmail.com";

    // Subject of the email
    $subject = "New Message from Contact Form";

    // Compose the message
    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n\n";
    $body .= "Message:\n" . $message;

    // Headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Attempt to send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    // Redirect if accessed directly
    header("Location: contact.html");
    exit();
}
?>
