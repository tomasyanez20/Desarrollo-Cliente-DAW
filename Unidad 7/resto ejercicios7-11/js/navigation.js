/**
 * 10.	(6.5.2) CREAR UN MENÚ DESPLEGABLE
Realice el ejercicio utilizando el archivo /ejercicios/js/navigation.js.
 La tarea es poder desplegar los ítems del menú superior de la página:
•	Al pasar el puntero del ratón por encima de un ítem del menú, se debe mostrar su submenú en caso que exista;
•	Al no estar más encima de un ítem, el submenú se debe ocultar.
•	Para poder realizarlo, utilice el método $.fn.hover para añadir o remover una clase en el submenú para poder
 controlar si debe estar oculto o visible (El archivo /ejercicios/css/styles.css incluye una clase "hover" para este propósito)

 */
$(document).ready(function() {
 $("#nav li").hover(function () { 
        $(this).addClass("hover");
        //Mostrar los submenus ul, find para encontrar los descendientes ul
        $(this).find("ul").show();
 });

 $("#nav li").mouseleave(function () { 
    $(this).removeClass("hover");
    //Mostrar los submenus ul, find para encontrar los descendientes ul
    $(this).find("ul").hide();
});

//Para hacer que los enlaces lleven a donde está la info
$("#nav li").click(function () {   
});


});