<?php

$allowed_referer = "https://cl-cassanelli.github.io/Portfolio/";

// Verifica se il referer è quello autorizzato
if (isset($_SERVER['HTTP_REFERER']) && $_SERVER['HTTP_REFERER'] === $allowed_referer) {
    // Imposta gli header CORS per consentire solo il referer autorizzato
    header("Access-Control-Allow-Origin: " . $allowed_referer);
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $name = $_GET["name"];
    $email = $_GET["email"];
    $object = $_GET["object"];

    $oggetto = $object . "\n\nMail inviata da: " . $name;

    mail("cldevofficial@gmail.com", "Nuova mail - giuseppecassanelli.it", $oggetto);

} else {
    // Restituisci un errore 403 Forbidden se il referer non è autorizzato
    http_response_code(403);
    echo "Accesso non autorizzato";
}
?>