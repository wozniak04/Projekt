<?php
    $jso=null;
    $q = $_REQUEST['q'];

    require_once "connect.php";
    $polaczenie= mysqli_connect($host, $db_user, $db_password, $db_name);

   
        $sql="SELECT email FROM users WHERE email= '$q';";
        $wynik = mysqli_query($polaczenie, $sql);


        while ($row = mysqli_fetch_array($wynik))
        {
           $jso=$row['email'];
        }
       
             
    echo json_encode($jso);




    
    

?>