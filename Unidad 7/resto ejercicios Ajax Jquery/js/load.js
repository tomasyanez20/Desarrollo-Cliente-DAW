/*
16.	(7.7.1) CARGAR CONTENIDO EXTERNO
Realice el ejercicio utilizando el archivo /ejercicios/js/load.js.
Trabajaremos en el div #blog, que contiene una lista.
En cada elemento de la lista hay un <h3>, con un <a>. Y después un <p> que está oculto.

La tarea es cargar el contenido de un artículo de blog cuando el usuario haga click en el título del ítem (en el h3).
•	Crear un elemento div después de cada título h3, y guardar una referencia hacia el div en el elemento del
 título utilizando $.fn.data.
•	Vincular un evento click a cada título, el cual utilizará el método $.fn.load para cargar en cada div creado 
el contenido apropiado desde el archivo ./data/blog.html. No olvide de deshabilitar el comportamiento predeterminado 
del evento click.
Notar que cada título de artículo de blog en index.html incluye un enlace hacia el artículo. Necesitará aprovechar
 el atributo href de cada enlace para obtener el contenido propio de blog.html. Una vez obtenida el valor del atributo,
  puede utilizar la siguiente forma para procesar la información y convertirla en un selector para utilizar en conjunto 
  con $.fn.load:
var href = 'blog.html#post1';
var tempArray = href.split('#');
var id = '#' + tempArray[1];

*/

$('#blog h3').append('<div></div>');

$("#blog").find("a").click(function(e){
    e.preventDefault();
    
});

