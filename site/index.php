<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Личный кабинет</title>
</head>
<body>

<?php

$data = $_GET['userName'];
$password = $_GET['userPassword'];

echo "Your login is: ";
echo $data;

echo "<br>";

echo "Your password: ";
echo $password;

echo "<br>";

echo "Поздравляем! Вы вошли в ЛК!";

?>

</body>
</html>
