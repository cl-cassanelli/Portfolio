<?php 

    $param = "";

    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['object'])){

        if(isset($_POST['name'])){
            $param = $param."&name";
        }
        if(isset($_POST['email'])){
            $param = $param."&email";   
        }
        if(isset($_POST['object'])){
            $param = $param."&object";
        }
        $param[0] = "?";
        header("location: ../index.php$param");

    } else {

        echo "ciao";
       
    }
    
?>