<?php
  if ($_SERVER["HTTP_ACCEPT_LANGUAGE"] == "it")
    header("location: ../index.html");
  else 
    header("location: ../en.html");
?>