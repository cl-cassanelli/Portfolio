<?php
//dichiarazione della variabile email, indirizzo alla quale arriveranno i dati raccolti dal form.
$tua_email= "cldevofficial@gmail.com";
$grazie = "../grazie.html";


$nome=$_POST['Name'];
$email=$_POST['email'];
$messaggio=$_POST['message'];

if($nome && $email && $messaggio){
        $to= $tua_email;        
        $headersClient  .= "Nome: $nome" . "\r\n";
        $headersClient  .= "Email: $email" . "\r\n";
        $headersClient  .= "Message: $messaggio" . "\r\n";
    mail($to,$msg,$headersClient);

    header("location: $grazie");//in caso di successo rimando l'utente sulla pagina specificata nella variabile

}else{

        header('location:../error.html'); //in caso di errore rimando l'utente sulla pagina specificata

}

?>