<?php

	session_start();
	
	if (!isset($_SESSION['zalogowany']))
	{
		header('Location: index.php');
		exit();
	}
	
?>
<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Strona główna</title>
</head>

<body>
	
<?php

	echo "<p>Witaj ".$_SESSION['username'].'! [ <a href="logout.php">Wyloguj się!</a> ]</p>';
	echo "<br /><b>Data dołączenia</b>: ".$_SESSION['created_at']."</p>";
	if($_SESSION['admin'] == 1)
		echo "Jesteś adminem";

	echo "<br>";
	echo "Imie: ".$_SESSION['name']."<br>";
	echo "Nazwisko: ".$_SESSION['surname']."<br>";
	echo "Email: ".$_SESSION['email']."<br>";
	echo "Data urodzenia: ".$_SESSION['date_born']."<br>";

	
?>

</body>
</html>