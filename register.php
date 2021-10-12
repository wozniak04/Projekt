<?php

require_once "connect.php";
require_once "";

$username_ = $_POST['username'];
$password_ = $_POST['password'];
$name_ = $_POST['name'];
$surname_ = $_POST['surnname'];
$email_ = $_POST['email'];
$date_born_ = $_POST['date_born'];



$zapytanie = "INSERT INTO users (name, surnname, username, date_born, email) VALUES ('$name_','$surname_','$username_','$date_born_','$email_','')" or die(mysql_error());
	
	$wynik = mysql_query($zapytanie);
	
	if ($wynik) {
		echo 'Prawidłowo dodano do bazy danych';	
	}
 
	mysql_close($db);		

//to do dokończenia

?>