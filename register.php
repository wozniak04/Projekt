<?php
require_once "connect.php";

$mysqli = new mysqli($host, $db_user, $db_password, $db_name);



$username_ = $_POST['Username'];
$password_ = $_POST['password'];

$name_ = $_POST['name'];
$surname_ = $_POST['surname'];
$email_ = $_POST['email'];

$date_born_ = $_POST['date-acc'];
//$gender_ = $_POST['gender'];



	$zapytanie = "INSERT INTO users ".
	"(id, username, password, created_at, admin, name, surname, date_born, email, gender) "."
	VALUES "."
	('', '$username_', '$password_','', '',  '$name_', '$surname_', '$date_born_', '$email_', '')";
		
		//$wynik = mysql_query($zapytanie);
		if ($mysqli -> query($zapytanie)) {
			printf("Record inserted successfully.<br />");
		 }
		 if ($mysqli -> errno) {
			printf("Could not insert record into table: %s<br />", $mysqli -> error);
		 }


		// $sql = "INSERT INTO tutorials_tbl ".
        //        "(tutorial_title,tutorial_author, submission_date) "."VALUES ".
        //        "('$tutorial_title','$tutorial_author','$submission_date')";
	 	// if ($wynik) {
	 	// 	header('Location: index_glowna.php');	
	 	// }
	 
	 	// mysql_close($db);	
		 //(`username`, `password`, `admin`, `name`, `surname`, `date_born`, `email`, `gender`) 
	
		 $mysqli -> close();
?>