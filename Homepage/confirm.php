<?php
  session_start();
  
?>

<!DOCTYPE html>
<html>
<head>
  <title>Confirmation</title>
</head>
<body>
  <h1>Confirmation</h1>
  <p>Please confirm that the following information is correct:</p>
  <ul>
    <li><strong>First name:</strong> <?php echo $_POST["firstname"]; ?></li>
    <li><strong>Last name:</strong> <?php echo $_POST["lastname"]; ?></li>
    <li><strong>Status:</strong> <?php echo $_POST["status"]; ?></li>
    <li><strong>Gender:</strong> <?php echo $_POST["gender"]; ?></li>
    <li><strong>Phone:</strong> <?php echo $_POST["phone"]; ?></li>
    <li><strong>Address:</strong> <?php echo $_POST["address"]; ?></li>
    <li><strong>Email:</strong> <?php echo $_POST["email"]; ?></li>
    <li><strong>Motivation:</strong> <?php echo $_POST["motivation"]; ?></li>
    <li><strong>Project suggestion:</strong> <?php echo $_POST["project"]; ?></li>
    <li><strong>Subscribe to newsletter:</strong> <?php echo $_POST["subscribe"] ? "Yes" : "No"; ?></li>
  </ul>
  
  <form action="process.php" method="post">
    <input type="submit" name="submit" value="Confirm">
    <input type="submit" name="submit" value="Edit">
  </form>
</body>
</html>