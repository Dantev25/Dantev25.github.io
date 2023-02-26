
<?php
  session_start();
  
  // Check which button was clicked
  if ($_POST["submit"] == "Confirm") {
    // Store form values in session
    $_SESSION["firstname"] = $_POST["firstname"];
    $_SESSION["lastname"] = $_POST["lastname"];
    $_SESSION["status"] = $_POST["status"];
    $_SESSION["gender"] = $_POST["gender"];
    $_SESSION["phone"] = $_POST["phone"];
    $_SESSION["address"] = $_POST["address"];
    $_SESSION["email"] = $_POST["email"];
    $_SESSION["motivation"] = $_POST["motivation"];
    $_SESSION["project"] = $_POST["project"];
    $_SESSION["subscribe"] = isset($_POST["subscribe"]);
    // Redirect to a thank you page
    header("Location: /thankyou/thankyou.html");
    exit();
  } else if ($_POST["submit"] == "Edit") {
    // Redirect back to the form page
    header("Location:  /Homepage/join-us.html");
    exit();
  }
?>