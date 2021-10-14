<?php

require_once "connect.php";
require_once "";

$username_ = $_POST['username'];
$password_ = $_POST['password'];
$name_ = $_POST['name'];
$surname_ = $_POST['surnname'];
$email_ = $_POST['email'];
$date_born_ = $_POST['date_born'];



$zapytanie = INSERT INTO users
(`id`, `username`, `password`, `created_at`, `admin`, `name`, `surname`, `date_born`, `email`, `gender`) 
VALUES 
('','$username_','$password_','','$admin','$name','$surname','$date_born_','$email','$gender');
	
	$wynik = mysql_query($zapytanie);
	
	if ($wynik) {
		header('Location: index_glowna.php');	
	}
 
	mysql_close($db);		

//to do dokończenia

?>