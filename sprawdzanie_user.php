<?php
    $jso="";
    $q = $_REQUEST['q'];
    require_once "connect.php";
    $polaczenie= mysqli_connect($host, $db_user, $db_password, $db_name);

        

   
        $sql="SELECT username FROM users WHERE username='$q';";
        $wynik = mysqli_query($polaczenie, $sql);


        while ($row = mysqli_fetch_array($wynik))
        {
           $jso=$row['username'];
        }
            // $jso=$q;
    echo json_encode($jso);




    
    

?>