<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Регистрация</title>
</head>
<body>

<?php 

error_reporting(E_ERROR | E_PARSE);
$login = $_GET['userName'];
$password = $_GET['userPassword'];

if($login == '')
	die("Упс... У вас нет доступа к этой странице :/ Попробуйте войти!");

$file_with_password_database = fopen("MySQL_password.txt", "r");
$database_password = fgets($file_with_password_database);
fclose($file_with_password_database);

$connect_to_database = new mysqli("localhost", "root", $database_password);

if($connect_to_database->connect_error)
	die("К сожалению, мы не можем подключится к нашей базе данных :(");

$use_user_database_request = "use users_database";
$connect_to_database->query($use_user_database_request);

$insert_request = "INSERT INTO users (user_login, user_password) VALUES ('" .$login. "', '" .$password. "')";
$connect_to_database->query($insert_request);

?>

</body>
</html>