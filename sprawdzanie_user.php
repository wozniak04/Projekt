<?php
    include_once("connect.php");
    
    $polaczenie= new mysqli($host,$db_user,$db_password,$db_name);
    $sql="SELECT username FROM users WHERE username = $us ";
    $x ='mikiwu';
    
    if($polaczenie->connect_errno!=0)
        echo 'blad';
    
        $jso =json_encode($x);
        echo $jso;


?>