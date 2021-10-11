<?php

	session_start();
	
	if (!isset($_SESSION['zalogowany']))
	{
		header('Location: index.php');
		exit();
	}
	
?>
<!DOCTYPE html>
<head>
    <link rel="stylesheet" type="text/css" href="style/">
    <link rel="glowna.php" type="php">
    <title>eApteka - Strona Glowna</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <main>
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
    </main>
</body>