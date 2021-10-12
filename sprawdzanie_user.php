<?php
    //require_once("connect.php");
    //$polaczenie= new mysqli($host, $db_user, $db_password, $db_name);

        //if($polaczenie->connect_errno!=0)
            //echo '<h1>blad</h1>';

    //$sql="SELECT username FROM users ";
    $x ='mikiwu';
    $jso =json_encode($x);
        
    echo $jso;


?>