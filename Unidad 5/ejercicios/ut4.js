window.onload = iniciar;

    //body no se ha creado antes de poner onload.
    function iniciar() {
        anadirBoton("Generar Planta","botonPlanta");
        anadirBoton("Borrar Fila","botonBorra");
        anadirBoton("Mostrar Numero de filas","botonFilas");

        document.getElementById("botonPlanta").addEventListener("click",anadirPlanta);
        document.getElementById("botonBorra").addEventListener("click",borrarPlanta);
        document.getElementById("botonFilas").addEventListener("click",muestraFilas);
        
        var tabla = document.createElement("table");
        tabla.setAttribute("id","tabla1");
        tabla.setAttribute("border","1");
        document.body.appendChild(tabla);
    }

    function anadirBoton(nombre,id){
        var boton = document.createElement("input");
        boton.setAttribute("type","button");
        boton.setAttribute("value",nombre);
        boton.setAttribute("id",id);
        document.body.appendChild(boton);
    }

    function borrarPlanta(e){
        var tabla = document.getElementById("tabla1");
        if(tabla.rows.length>=1){
            tabla.deleteRow(-1);
        }else{
            alert("No hay filas que borrar");
        }
    }


    function muestraFilas(e){
        borrarDivs();
        var div1 = document.createElement("div");
        document.body.appendChild(div1);
        var newContent = document.createTextNode("El número de filas es " + document.getElementById("tabla1").rows.length); 
        div1.appendChild(newContent); //añade texto al div creado.   
    }

    function borrarDivs(){

        var elements = document.getElementsByTagName('div')

        while (elements[0]){
            elements[0].parentNode.removeChild(elements[0]);
        } 



    }



    function anadirPlanta(e){
        e.preventDefault();
        var nombre,ubica,ejemplar,flor;
        nombre = prompt("Introduce el nombre de la planta: ");
        ubica = prompt("Introduce la ubicación de la planta: ");
        ejemplar = prompt("Introduce el ejemplar de la planta: ");
        flor = prompt("Introduce la flor de la planta: ");

        var tabla = document.getElementById("tabla1");
        
        //para insertar al final
        var fila = tabla.insertRow(-1);

        var cell1 = fila.insertCell(0);
        var cell2 = fila.insertCell(1);
        var cell3 = fila.insertCell(2);
        var cell4 = fila.insertCell(3);
        
        cell1.innerHTML= nombre;
        cell2.innerHTML= ubica;
        cell3.innerHTML= ejemplar;
        cell4.innerHTML= flor;
    }





