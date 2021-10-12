<?php

	session_start();
	
	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		header('Location: index_glowna.php');
		exit();
	}

?>

<!DOCTYPE html>
<head>
    <link rel="stylesheet" type="text/css" href="style/css_logowanie.css">
    <title>eApteka - Logowanie na strone</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <main>
        
        <div id="logowanie_eh">
            <!--Rejestracja Konta - menu rejestracji-->
            <p id="logowanie">Zaloguj Sie!</p>
            <img src="zdjecia/zdjecie_rejestracja.png" id="zdjecie_logowanie">
            <p id="masz_konto">Nie masz konta? <a href="index_rejestracja.php"> Zarejestruj sie!</a></p>
            <p id="private_user">Zachowujemy prywatnosc Naszych uzytkownikow!</p>
            
            <form action="login.php" method="post">
                <input type="name" value="" name="login" placeholder="Username" id="logowanie_u" required><br><br>
                <input type="password" value="" name="haslo" placeholder="Haslo" id="logowanie_h" required><br><br>
                <input type="submit" value="Dalej" name="przycisk_dalej" id="przycisk_dalej_logowanie" onclick=""><br><br>
            </form>
           
        </div>       
    </main>
<?php
	if(isset($_SESSION['blad']))	echo $_SESSION['blad'];
?>
</body>