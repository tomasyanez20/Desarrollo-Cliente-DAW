/**
 * 11.	(6.5.3) CREAR UN SLIDESHOW
Realice el ejercicio utilizando el archivo /ejercicios/js/slideshow.js. La tarea es añadir un slideshow a la página con JavaScript.
1.	Mover el elemento #slideshow a la parte superior de la página;
2.	Escribir un código que permita mostrar los ítems de forma cíclica, 
mostrando un ítem por unos segundos, luego ocultándolo con un efecto fade out 
y mostrando el siguiente con un efecto fade in;
3.	Una vez llegado al último ítem de la lista, comenzar de nuevo con el primero;
Para un desafío mayor, realice un área de navegación por debajo del slideshow que muestre cuantas imágenes existen y en cual se encuentra (ayuda: $.fn.prevAll puede resultar útil).

 */


 
$(document).ready(function(){


 $("#slideshow").prependTo("#main");

 //Almacenar los li en un vector:
 var items =  $("#slideshow").find("li");


});



