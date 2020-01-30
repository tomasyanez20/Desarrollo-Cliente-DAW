/*
8.	(5.7.2) AÑADIR UNA NAVEGACIÓN POR PESTAÑAS
Realice el ejercicio utilizando el archivo /ejercicios/js/tabs.js. 
La tarea a realizar es crear una navegación por pestañas para los dos elementos div.module.
 Los pasos a seguir son los siguientes:
1.	Ocultar todos los elementos div.module;
2.	Crear una lista desordenada antes del primer div.module para utilizar como pestañas;
3.	Interactuar con cada div utilizando $.fn.each.
 Por cada uno, utilizar el texto del elemento 
h2 como el texto para el ítem de la lista desordenada;
4.	Vincular un evento click a cada ítem de la lista de forma que:
•	Muestre el div correspondiente y oculte el otro;
•	Añada la clase "current" al ítem seleccionado;
•	Remueva la clase "current" del otro ítem de la lista;
5.	Finalmente, mostrar la primera pestaña.

*/

$(document).ready(function(){



var $modulos= $("div.module");

//modulos.hide();
var $texto;
var $li;
var $mod;


var $lista= $("<ul>");
$lista.insertBefore($modulos.first());

$modulos.each(
    function(){
        $mod=$(this);
        $texto= $mod.find("h2").text();
        $li= $("<li> " + $texto + "</li>");

        $li.click(
            function(){
                $li.addClass("current");
                $li.siblings().removeClass("current");
                $mod.show();
                $mod.siblings(".module").hide();
            }
        );

        $lista.append($li);
    }
);

});