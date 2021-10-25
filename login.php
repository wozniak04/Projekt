<?php

	session_start();
	
	if ((!isset($_POST['login'])) || (!isset($_POST['haslo'])))
	{
		header('Location: index.php');
		exit();
	}

	
	require_once "connect.php";

	$polaczenie = new mysqli($host, $db_user, $db_password, $db_name);
	
	if ($polaczenie->connect_errno!=0)
	{
		echo "Error: ".$polaczenie->connect_errno."  Opis:".$polaczenie->connect_error;
	}
	else
	{
		$login = $_POST['login'];
		$haslo = $_POST['haslo'];
		
		$login = htmlentities($login, ENT_QUOTES, "UTF-8");
		
	
		if ($rezultat = @$polaczenie->query(
		sprintf("SELECT * FROM users WHERE username='%s'",
		mysqli_real_escape_string($polaczenie,$login))))
		{
			$ilu_userow = $rezultat->num_rows;
			if($ilu_userow>0)
			{
				$wiersz = $rezultat->fetch_assoc();
				if(password_verify($haslo, $wiersz['password'])){

					$_SESSION['zalogowany'] = true;
					
					
					$_SESSION['id'] = $wiersz['id'];
					$_SESSION['username'] = $wiersz['username'];
					$_SESSION['admin'] = $wiersz['admin'];
					$_SESSION['created_at'] = $wiersz['created_at'];
					$_SESSION['name'] = $wiersz['name'];
					$_SESSION['surname'] = $wiersz['surname'];
					$_SESSION['email'] = $wiersz['email'];
					$_SESSION['date_born'] = $wiersz['date_born'];
					$_SESSION['gender'] = $wiersz['gender'];

					
					unset($_SESSION['blad']);
					$rezultat->free_result();
					header('Location: index.php');
			}else {
				$_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło!</span>';
				header('Location: index_logowanie.php');
			}

			} else {
				
				$_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło!</span>';
				header('Location: index_logowanie.php');
				
			}
			
		}
		
		$polaczenie->close();
	}
	
?>