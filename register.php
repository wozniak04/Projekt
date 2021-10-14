<?php

require_once "connect.php";


$username_ = $_POST['Username'];
$password_ = $_POST['password'];
$name_ = $_POST['name'];
$surname_ = $_POST['surname'];
$email_ = $_POST['email'];
$date_born_ = $_POST['date-acc'];
$gender_ = $_POST['gender'];


// // Create connection
// $conn = new mysqli($host, $db_user, $db_password, $db_name);
// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// $sql = "INSERT INTO users (id, username, password, created_at, admin, name, surname, date_born, email, gender)
// VALUES ('','$username_','$password_','','$admin_','$name_','$surname_','$date_born_','$email_','$gender_')";

// if ($conn->query($sql) === TRUE) {
//     //echo "New record created successfully";
// 	$_SESSION['gitowa'];
// 	header('Location: index_logowanie.php');
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// $conn->close();




// if(isset($_POST['przycisk_dalej']))
// {
//    $zapytanie = "INSERT INTO users (id, username, password, created_at, admin, name, surname, date_born, email, gender)
//    VALUES ('','$username_','$password_','','$admin_','$name_','$surname_','$date_born_','$email_','$gender_')";
//    $wynik = mysql_query($zapytanie);
// }
// elseif(!isset($_POST['przycisk_dalej']))
// {
//   echo "nie";
// }



// try {
// 	$Conn = new PDO ( "mysql: host = $host; nazwa_bd = $db_name" $db_user, $db_password);
// 	// Ustaw tryb błędu PDO wyjątek
// 	$Conn-> setAttribute (PDO :: ATTR_ERRMODE, PDO :: ERRMODE_EXCEPTION);
// 	$Sql ​​= "INSERT INTO users (id, username, password, created_at, admin, name, surname, date_born, email, gender)
// 	VALUES ('','$_POST['Username']','$_POST['password']','','$admin_','$_POST['name']','$_POST['surnname']','$_POST['date-acc']','$_POST['email']','$_POST['gender']')";
// 	// Zastosowanie exec () brak wyników są zwracane
// 	$Conn-> exec ($sql);
// 	echo "pomyślnie";
// 	}
// 	catch (PDOException $e)
// 	{
// 	.. Echo $ sql "Największa" $e-> getMessage ();
// 	}
	
// 	$Conn = null;








	$zapytanie = "INSERT INTO users
	(`id`, `username`, `password`, `created_at`, `admin`, `name`, `surname`, `date_born`, `email`, `gender`) 
	VALUES 
	('','$username_','$password_','','$name','$surname','$date_born_','$email','$gender')";
		
		$wynik = mysql_query($zapytanie);
		
	 	if ($wynik) {
	 		header('Location: index_glowna.php');	
	 	}
	 
	 	mysql_close($db);	
	
	// $polaczenie= mysqli_connect($host, $db_user, $db_password, $db_name);
	
	// if($polaczenie->query("INSERT INTO users (`id`, `username`, `password`, `created_at`, `admin`, `name`, `surname`, `date_born`, `email`, `gender`) 
	//  VALUES 
	//  ('','$username_','$password_','','$admin','$name','$surname','$date_born_','$email','$gender')")){
	// 	 header('Location: index_glowna.php');
	//  }else{
	// 	echo "blad";
	 
	// }
	// $polaczenie->close();
	// to do dokończenia
	

?>