<?php 

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


    $name = $_GET["name"];
    $email = $_GET["email"];
    $object = $_GET["object"];

    echo $object

    $oggetto = $object."\n\nMail inviata da: ".$name; 

    mail("cldevofficial@gmail.com", "Nuova mail - giuseppecassanelli.it", $oggetto);

?>