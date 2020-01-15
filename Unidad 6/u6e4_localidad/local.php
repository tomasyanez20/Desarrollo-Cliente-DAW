<?php

//Nombres de sugerencia
$a= array("Burgos","Lerma","Madrid","Bilbao","Lyon","Malaga","Almeria","Vitoria","Aranda de Duero");

//capturar el valor del input del html, extraerlo de la url

$cadena="";
$flag=false;

$nombre= $_REQUEST["nombre"];

//vale con post tambien, captura el valor de la variable nombre de la url

if($nombre!=="" ){
     //a minusculas
     $nombre= strtolower($nombre);
   

    foreach($a as $nom){ 

        if($nombre==strtolower($nom)){
            $flag=true;
        }
    }
}

if($flag==true){
    echo "La ciudad está incluida en la lista de ciudades";
}else{
    echo "La ciudad no está incluída en la lista";
}


?>