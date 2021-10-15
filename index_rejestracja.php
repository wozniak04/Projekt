<!DOCTYPE html>
<head>
    <link rel="stylesheet" type="text/css" href="style/css_index.css">
    <title>eApteka - Rejestracja na strone</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">   
</head>
<body>
    <main>
        <div id="logowanie_eh">
            <!--Rejestracja Konta - menu rejestracji-->
            <p id="logowanie">Zarejestruj Sie!</p>
            <img src="zdjecia/zdjecie_rejestracja.png" id="zdjecie_logowanie">
            <p id="masz_konto">Masz konto? <a href="index_logowanie.php" > Zaloguj sie!</a></p>
            <p id="private_user">Zachowujemy prywatnosc Naszych uzytkownikow!</p>
            <form action="register.php" method="post">
                
                
                <input type="text" value="" name="Username" placeholder="Username" id="logowanie_u" required onfocusout="sprawdzanie_czy_uzytkownik_istnieje()"><br><br>
                <p id="blad_username">wprowadź nazwe użytkownika</p>
                
                <input type="password" value="" name="password" placeholder="Haslo" id="logowanie_h" required onkeypress="sprawdz_haslo()" onclick="czysc1()"><br><br>
                <p id="blad_password">hasło powinno mieć conajmniej osiem znakó</p> <br>
                
                
                <input type="password" value="" name="password1" placeholder="Powtorz haslo" id="logowanie_h1" required onfocusout="porownanie()" onclick="czysc2()"><br><br>
                <p id="blad_password_powtorz">hasło powinno być takie same</p>
                
                <input type="text" value="" name="email" placeholder="Email" id="logowanie_e" required onfocusout="sprawdzanie_email()"><br><br>
                <p id="blad_email">email powinien posiadać 6 liter przed @</p>
                
                <input type="text" value="" name="name" placeholder="Imie" id="logowanie_n" required onfocusout="imie()"><br><br>
                <p id="blad_imie">wpisz imie</p>
                <input type="text" value="" name="surname" placeholder="Nazwisko" id="logowanie_s" required onfocusout="nazwisko()"><br><br>
                <p id="blad_nazwisko">wpisz nazwisko</p>
                <input type="date" value="" name="date-acc" id="logowanie_d" min="1900-01-01" max="2021-12-31"required onfocusout=""><br><br>
                
                
                
                <input type="submit" value="Dalej" name="przycisk_dalej" id="przycisk_dalej_logowanie" ><br><br>
            
                <div id="form_checkbox">
                
                    <input type="radio" id="kobieta_box" name="gender" value="Kobieta">
                    <label for="kobieta"> Kobieta</label><br>
                    <input type="radio" id="mezczyzna_box" name="gender" value="Mezczyzna">
                    <label for="mezczyzna_box"> Mezczyzna</label><br>
                
                </div>
            </form>
            
        </div>       
    </main>
    <script src="walidacja.js"></script>
</body>
