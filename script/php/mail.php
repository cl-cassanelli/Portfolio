<?php 

    $name = $_REQUEST["name"];
    $email = $_REQUEST["email"];
    $object = $_REQUEST["object"];

    $oggetto = $object."\n\nMail inviata da: ".$name; 

    mail("info@giuseppecassanelli.it", "Nuova mail - giuseppecassanelli.it", $oggetto)

    header("Location: /");

?>