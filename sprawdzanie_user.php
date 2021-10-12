<?php
    require_once "connect.php";
    $polaczenie= new mysqli($host, $db_user, $db_password, $db_name);

        if($polaczenie)
            echo '<h1>git</h1>';
        else
            echo "<h1>.blad.</h1>";


    $sql="SELECT username FROM users WHERE id=1 ";
    
    $jso =json_encode($sql);
        
    echo $jso;


?>