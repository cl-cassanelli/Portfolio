<?php 

    $name = $_GET["name"];
    $email = $_GET["email"];
    $object = $_GET["object"];

    $oggetto = $object."\n\nMail inviata da: ".$name; 

    mail("info@giuseppecassanelli.it", "Nuova mail - giuseppecassanelli.it", $oggetto);

?>