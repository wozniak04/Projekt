<?php

require_once "connect.php";


$username_ = $_POST['Username'];
$password_ = $_POST['password'];
$name_ = $_POST['name'];
$surname_ = $_POST['surname'];
$email_ = $_POST['email'];
$date_born_ = $_POST['date-acc'];
$gender_ = $_POST['gender'];



	$zapytanie = "INSERT INTO users
	(`id`, `username`, `password`, `created_at`, `admin`, `name`, `surname`, `date_born`, `email`, `gender`) 
	VALUES 
	('','$username_','$password_','','$name','$surname','$date_born_','$email','$gender')";
		
		$wynik = mysql_query($zapytanie);
		
	 	if ($wynik) {
	 		header('Location: index_glowna.php');	
	 	}
	 
	 	mysql_close($db);	
	

?>