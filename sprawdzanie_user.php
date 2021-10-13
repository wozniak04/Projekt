<?php
    $jso;
    require_once "connect.php";
    $polaczenie= mysqli_connect($host, $db_user, $db_password, $db_name);

        /*if(mysqli_connect_errno())
            echo '<h1>git</h1>';
        else
            echo "<h1>.blad.</h1>";
*/

    
    $sql="SELECT username FROM users WHERE username = 'Arek';";
    $wynik = mysqli_query($polaczenie, $sql);
    while ($row = mysqli_fetch_array($wynik))
{
   $jso=$row['username'];
}

    echo json_encode($jso);


?>