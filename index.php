 <?php

	session_start();
	
	if (!isset($_SESSION['zalogowany']))
	{
		header('Location: index_logowanie.php');
		exit();
	}
	
?>
 <!DoCTYPE html>
 <html lang="utf-8">

 <head>
     <title>eApteka</title>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
     <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">


     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
         integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
     </script>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
     <link rel="stylesheet" href="style/main.css">
 </head>

 <body>

     <div class="collapse" id="navbarToggleExternalContent">
         <div class="bg-light p-4 menu_wrap">

             <div class="wybierz_asys">
                 <h5 class="h4">Ustawienia</h5>
                 <label id="asys_outdiv"><b>Asystent głosowy:</b></label><br>

                 <input type="radio" name="wybor" id="asys_glos_wl" value="glos">
                 <label for="wybor1" id="asys_outdiv">Włącz</label>

                 <input type="radio" name="wybor" id="asys_glos_wyl" value="brak">
                 <label for="wybor2" id="asys_outdiv">wyłącz</label><br>

                 <!--przycisk od asystena czatowe myśle że można wywalić bo on bedzie zawsze aktywny. Co wy na to???  -->
                 <!-- <input type="radio" name="wybor" id="wybor2" value="txt">
                    <label for="wybor2" id="asys_outdiv">Asystent Tekstowy</label><br>
                    -->
             </div>
             <div class="dane1">
                 <?php

                        echo "Witaj ".$_SESSION['username'].'!<br>';
                        if($_SESSION['admin'] == 1){
                            echo "Jesteś adminem";
                        }
                        echo "<br><div id='plec'>Jesteś:".$_SESSION['gender']."</div>";
                        echo "<p><b>Data dołączenia</b>: ".$_SESSION['created_at']."</p>";

                    ?>
             </div>
             <div class="dane2">
                 <?php
                        echo "Imie: ".$_SESSION['name']."<br>";
                        echo "Nazwisko: ".$_SESSION['surname']."<br>";
                        echo "Email: ".$_SESSION['email']."<br>";
                        echo "Data urodzenia: ".$_SESSION['date_born']."<br>";
                       

                    ?>
             </div>


             <div class="wyloguj">
                 <form method="post" action="logout.php">
                     <button type="submit" class="btn btn-outline-danger">Wyloguj</button>
                 </form>
             </div>

         </div>
     </div>
     <nav class="navbar navbar-dark bg-light">
         <div class="container-fluid">
             <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse"
                 data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                 aria-expanded="false" aria-label="Toggle navigation" onmouseenter="ustawienia()" onmouseleave="stop()">
                 <span class="navbar-toggler-icon"></span>
             </button>
         </div>
     </nav>


     <main class="wrapper">

        <div class="q">
             <img src="zdjecia/logo.png" alt="logo" class="logo">
        </div>

        <!-- nawigacja -->
        <div class="navigation">
            <ul class="nav">
                <li class="spec">
                    <a href="#specjalisci" onmouseenter="specjalisci()" onmouseleave="stop()">Nasi specjaliści</a>
                </li>
                <li>
                    <a href="#dtowary" onmouseenter="towary()" onmouseleave="stop()">Dostępne towary</a>
                </li>
                 <li class="sklepy">
                     <a href="#mapa" onmouseenter="nasz()" onmouseleave="stop()">Nasze sklepy</a>
                 </li>
                 <li class="my">
                     <a href="#my" class="my" onmouseenter="onas()" onmouseleave="stop()">O nas</a>
                 </li>
             </ul>
         </div>

         <!-- baner-->
         <div class="baner">
             <h2 class="pusteh2"></h2>
             <h2>Jakieś motto</h2>
             <h2 class="pusteh2_1"></h2>
         </div>



         <div class="i">
             <div class="specjalisci spec_wrap" id="specjalisci">


                 <div class="opis1">
                     <h3>Arkadiusz Guth</h3></br>
                     Chirurg, obecnie przyjmuje pacjentów w Elektryku w Wejherowie. Specjalizuje się w chirurgi
                     plastycznej oraz klatki piersiowej.
                     Ukończył Pomorski Uniwersytet Medyczny w Szczecinie.
                 </div>
                 <div class="zdje1"></div>
                 <div class="opis2">
                     <h3>Mikołaj Woźniak</h3></br>
                     Neurolog, obecnie przyjmuje pacjentów w Elektryku w Wejherowie. Specjalizuje się w leczeniu chorób
                     obwodowego i ośrodkowego
                     układu nerwowego, specjalizuje się również z zakresu psychiatrii. Ukończył Uniwersytet Mikołaja
                     Kopernika w Toruniu.
                 </div>
                 <div class="zdje2"></div>
                 <div class="opis3">
                     <h3>Kacper Paszki</h3></br>
                     Laryngolog, obecnie przyjmuje pacjentów w Elektryku w Wejherowie. Specjalizuje się w wykonywaniu
                     zabiegów chirurgicznych w
                     obszarze głowy i szyi. Ukończył Gdański Uniwersytet Medyczny.
                 </div>
                 <div class="zdje3"></div>
             </div>
             <!-- dostępne towary i zdjecia -->
             <div class="dtowary container" id="dtowary">

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek1" onmouseenter="sinu()" onmouseleave="stop()">
                                 <h2>Sinupret:</h2> Lek Sinupret, tabletki drażowane, do leczenia ostrych niepowikłanych
                                 stanów zapalnych przynosowych z objawami kaszlu, bólu głowy i niedrażności nosa.
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/bionorica.jpg" alt="sinupret"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek2" onmouseenter="calcu()" onmouseleave="stop()">
                                 <h2>Calcium Hasco:</h2> Lek Calcium Hasco, syrop, stosowany w leczeniu osteoporozy,
                                 uzupełnia niedobory wapnia w organizmie np. w okresie ciąży
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/calcium.jpg" alt="Calcium Hasco"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek3" onmouseenter="grip()" onmouseleave="stop()">
                                 <h2>Gripex Hot:</h2> Lek Gripex Hot, saszetki rozpuszczalne w wodzie, lek stosowany na
                                 goraczke, ból głowy, katar, ból mieśni, ból gardła
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/gripex.jpg" alt="gripex Hot"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek4" onmouseenter="envil()" onmouseleave="stop()">
                                 <h2>Envil Katar:</h2> Lek Envil, podanie donosowe, łagodzi katar, udrażnia nos i
                                 zatoki, ułatwia oddychanie, działa przeciwbakteryjnie
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/envil.jpg" alt="Envil katar"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek5" onmouseenter="voltar()" onmouseleave="stop()">
                                 <h2>Voltaren Max:</h2> Lek Voltaren Max, podawany na skórę, Lek o silnym działaniu
                                 przeciwbólowym, przeciwzapalnym i przeciwobrzękowym
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/voltaren.jpg" alt="Voltaren Max"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek6" onmouseenter="fer()" onmouseleave="stop()">
                                 <h2>Fervex:</h2> Lek Fervex, saszetki rozpuszczalne w wodzie, leczy objawy
                                 przeziębienia i grypy jak i stanów grypopodobnych (gorączka i zapalenie gardła)
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/fervex.jpg" alt="Fervex"></div>
                 </div>
                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek7" onmouseenter="enterol()" onmouseleave="stop()">
                                 <h2>Enterol:</h2> Lek Enterol, kapsułki podawane doustnie, zapobiega biegunkom
                                 poantybiotykowym i zapobiega biegunkom podróżnym.
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/enterol.jpg" alt="Enterol"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek8" onmouseenter="otri()" onmouseleave="stop()">
                                 <h2>Otrivin:</h2> Lek Otrivin, podanie donosowe, Pomaga na nadmierne przekrwienie błony
                                 śluzowej nosa w przebiegu przeziębienia lub kataru siennego
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/otrivin.jpg" alt="Otrivin"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek9" onmouseenter="molek()" onmouseleave="stop()">
                                 <h2>Molekin D3:</h2> Lek Molekin D3, tabletki powlekane, wpływa na układ odpornościowy,
                                 zdrowe kości i zęby i prawidłowy poziom wapnia we krwi
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/molekin.jpg" alt="Molekin D3"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek10" onmouseenter="arge()" onmouseleave="stop()">
                                 <h2>Argentin-T:</h2> Lek Argentin-T, spray do gardła, wspomaga leczenie stanów
                                 zapalnych gardła, spodowanych przez infekcje bakteryjne
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/argentin.jpg" alt="Argentin"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8">
                         <p>
                             <div class="lek11" onmouseenter="yuwe()" onmouseleave="stop()">
                                 <h2>Termometr Yuwell:</h2> Termometr na podczerwień, świetny w pomiarze temperatury
                                 ciała.
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/termometr.jpg" alt="Termometr"></div>
                 </div>

                 <div class="row mt-5">
                     <div class="opis col-lg-8" onmouseenter="octa()" onmouseleave="stop()">
                         <p>
                             <div class="lek12">
                                 <h2>Octanisept:</h2> Lek Octanisept, podanie na skóre (doogniskowo), lek stosowany na
                                 rany, błonę śluzową i skórę
                             </div>
                         </p>
                     </div>
                     <div class="col-lg-4 text-center"><img src="zdjecia/leki/octanisept.jpg" alt="Octanisept"></div>
                 </div>





                 <div class="mapa" id="mapa">
                     <h1>Nasze sklepy</h1>

                     <a href="https://goo.gl/maps/vXZUasuTH7mUA6Ah7">Nasz sklep</a>

                     <input type="submit" value="Co na ból gardła">

                 </div>
             </div>
         </div>
         

         <!-- czat -->
         <div class="o container">
             <div class="gora row">
                 <div class="col-12">
                     Witaj w naszym czacie
                 </div>
             </div>
             <div class="dol row">
                 <div class="col-12">


                     <select>
                         <option value="volvo">Volvo</option>
                         <option value="saab">Saab</option>
                         <option value="mercedes">Mercedes</option>
                         <option value="audi">Audi</option>
                     </select>

                 </div>
             </div>
         </div>

         <div class="container x">
             <div class="row">
                 <div class="my col" id="my">Coś o nas</div>
             </div>
         </div>






         <div class="p">
             <!-- stopka -->

             <!-- fb -->
             <a class="" href="http://www.facebook.com/" target="_blank"><svg width="36px" height="36px"
                     class="social-media">
                     <path
                         d="M15.768 15.737H12v3.315h3.768V29h4.422v-9.948h4.42v-3.315h-4.42v-1.335c0-1.002 1.053-3.087 2.589-3.087h1.831V8h-3.868c-5.457.795-4.974 7.737-4.974 7.737z"
                         fill="currentColor"></path>
                 </svg><span class="audi-footer__social-media-label"></span></a>

             <!-- insta -->
             <a class="" href="http://instagram.com/" target="_blank"><svg width="36px" height="36px"
                     class="social-media">
                     <g fill="currentColor">
                         <path
                             d="M18 10.621c2.403 0 2.688.01 3.637.053.877.04 1.354.188 1.671.31.42.162.72.359 1.035.672.316.316.51.615.672 1.035.123.318.27.795.311 1.673.043.948.052 1.233.052 3.636s-.009 2.688-.052 3.637c-.04.878-.186 1.354-.31 1.671a2.8 2.8 0 01-.674 1.035c-.315.316-.615.51-1.035.672-.315.125-.792.27-1.67.311-.949.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.186-1.671-.31a2.787 2.787 0 01-1.036-.672 2.771 2.771 0 01-.671-1.036c-.125-.317-.27-.794-.311-1.67-.043-.95-.053-1.235-.053-3.638 0-2.403.01-2.688.053-3.637.04-.877.188-1.354.31-1.671.162-.42.359-.72.672-1.036.316-.315.615-.51 1.035-.671.318-.125.795-.27 1.673-.311.948-.043 1.233-.053 3.636-.053zM18 9c-2.445 0-2.751.01-3.711.054-.957.045-1.612.195-2.184.418a4.385 4.385 0 00-1.595 1.039 4.417 4.417 0 00-1.037 1.594c-.223.572-.376 1.227-.419 2.184C9.009 15.249 9 15.557 9 18c0 2.444.01 2.751.054 3.711.045.957.195 1.613.418 2.184.23.593.537 1.095 1.039 1.595a4.398 4.398 0 001.594 1.038c.572.222 1.227.375 2.184.418.96.045 1.268.054 3.711.054 2.444 0 2.751-.01 3.711-.054.957-.045 1.613-.195 2.184-.419a4.385 4.385 0 001.595-1.038 4.398 4.398 0 001.038-1.594c.222-.572.375-1.227.418-2.184.045-.96.054-1.267.054-3.711s-.01-2.751-.054-3.711c-.045-.957-.195-1.612-.419-2.184a4.412 4.412 0 00-1.038-1.595 4.41 4.41 0 00-1.594-1.037c-.572-.223-1.227-.376-2.184-.419C20.751 9.009 20.444 9 18 9z">
                         </path>
                         <path
                             d="M18 13.379a4.622 4.622 0 100 9.243 4.622 4.622 0 000-9.243zM18 21a3 3 0 110-6 3 3 0 010 6z">
                         </path>
                         <circle cx="22.805" cy="13.195" r="1.08"></circle>
                     </g>
                 </svg><span class=""></span></a>

             <!-- yt -->
             <a class="audi-footer__social-media-link" href="http://www.youtube.com/" target="_blank"><svg width="36px"
                     height="36px" class="social-media">
                     <path
                         d="M28.79 13.58s-.206-1.448-.834-2.085c-.8-.837-1.695-.84-2.104-.89-2.94-.213-7.348-.213-7.348-.213h-.009s-4.408 0-7.347.213c-.41.05-1.304.053-2.104.89-.63.637-.834 2.085-.834 2.085S8 15.276 8 16.976v1.595c0 1.698.21 3.397.21 3.397s.205 1.447.834 2.085c.8.837 1.848.81 2.316.897 1.68.162 7.14.212 7.14.212s4.413-.006 7.35-.22c.412-.049 1.306-.053 2.106-.889.63-.637.834-2.085.834-2.085s.21-1.7.21-3.399v-1.593a31.8 31.8 0 00-.21-3.398zm-12.457 6.922l-.002-5.901 5.675 2.961-5.674 2.94z"
                         fill="currentColor"></path>
                 </svg><span class=""></span></a>

             <!-- tweet -->
             <a class="" href="https://twitter.com/" target="_blank"><svg width="36px" height="36px"
                     class="social-media">
                     <path
                         d="M25.55 12.364c.982.177 1.993.12 2.95-.165a11.638 11.638 0 00-3.01 2.183 11.31 11.31 0 01-9.144 11.903 14.601 14.601 0 01-8.846-2.36s3.933 1.062 6.104-1.34c0 0-3.696.337-4.581-2.52a11.242 11.242 0 002.58-.364 4.197 4.197 0 01-3.413-4.115 4.05 4.05 0 001.928.515s-2.857-2.58-1.087-5.607c0 0 3.829 4.675 8.571 4.407a4.077 4.077 0 016.855-3.871 6.393 6.393 0 002.773-1.335 3.547 3.547 0 01-1.68 2.67z"
                         fill="currentColor"></path>
                 </svg><span class=""></span></a>
         </div>

     </main>
     <script src="main.js"></script>
     <script src="font.js"></script>
 </body>

 </html>