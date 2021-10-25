<?php
require_once "connect.php";

$mysqli = new mysqli($host, $db_user, $db_password, $db_name);

$username_ = $_POST['Username'];
$password = $_POST['password'];
$password_ = password_hash($password, PASSWORD_DEFAULT);
$date_ = date('Y-m-d H:i:s');
$admin_ = 0;
$name_ = $_POST['name'];
$surname_ = $_POST['surname'];
$email_ = $_POST['email'];
$date_born_ = $_POST['date-acc'];

if ($_POST['gender'] == 'Mezczyzna')
	$gender_ = 'm';
else
	$gender_ = 'k';


	$zapytanie = "INSERT INTO users ".
	"(id, username, password, created_at, admin, name, surname, date_born, email, gender) "."
	VALUES "."
	(NULL, '$username_', '$password_', '$date_', '$admin_',  '$name_', '$surname_', '$date_born_', '$email_', '$gender_')";
		
		//$wynik = mysql_query($zapytanie);
		if ($mysqli -> query($zapytanie)) {
			isset($_SESSION['zalogowany']);
			header('Location: index_logowanie.php');
			exit();
		 }
		 if ($mysqli -> errno) {
			printf("Niestety wystąpił błąd: %s<br />", $mysqli -> error);
		 }

		 $mysqli -> close();
?>