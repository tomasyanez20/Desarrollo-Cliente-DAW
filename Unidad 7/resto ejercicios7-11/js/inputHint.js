/*
7.	(5.7.1) CREAR UNA "SUGERENCIA" PARA UNA CAJA DE INGRESO DE TEXTO
Realice el ejercicio utilizando el archivo /ejercicios/js/inputHint.js. 
La tarea a realizar es utilizar el texto del elemento label y aplicar una "sugerencia" 
en la caja de ingreso de texto. Los pasos a seguir son los siguientes:
1.	Establecer el valor del elemento input igual al valor del elemento label;
2.	Añadir la clase "hint" al elemento input;
3.	Remover el elemento label;
4.	Vincular un evento focus en el input para remover el texto de sugerencia y la clase "hint";
5.	Vincular un evento blur en el input para restaurar el texto de sugerencia y la clase "hint"
 en caso que no se haya ingresado algún texto.
*/

$(document).ready(function () {

    var textoLabel = $("#search label").text();
   
    var label = $("#search label");
    
    var input= $("#search input.input_text");

    input.val(textoLabel);

    input.addClass("hint");

    label.remove();

    $("#search input.input_text").focus(
        function(){
            input.val("").removeClass("hint");
        }
    );

    $("#search input.input_text").blur(
        function(){
            input.val(textoLabel);
            input.addClass("hint");
        }
    );

    
   

});