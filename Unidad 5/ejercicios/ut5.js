window.onload = iniciar;

    //body no se ha creado antes de poner onload.
    function iniciar() {
        anadirBoton("Generar Personaje","botonGPersonaje");
        anadirBoton("Borrar Fila","botonBorra");
        anadirBoton("Mostrar Numero de filas","botonFilas");

        document.getElementById("botonGPersonaje").addEventListener("click",anadirPersonaje);
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



    function anadirPersonaje(e){
        e.preventDefault();
        var opcion;
        opcion = prompt("Elija el nombre del personaje:\n1. Sanji \n2. Zoro \n3. Nami \n4. Luffy.");

        var imagen = document.createElement("img");
        document.body.appendChild(imagen);

        switch(opcion){
            case "1" : 
                    imagen.setAttribute("src","archivos/img_onepiece/sanji.jpg");
            break;
            case "2": 
                    imagen.setAttribute("src","archivos/img_onepiece/zoro.jpg");
            break;
            case "3":
                    imagen.setAttribute("src","archivos/img_onepiece/nami.jpg");
            break;
            case "4":
                    imagen.setAttribute("src","archivos/img_onepiece/luffy.jpg");
            break;
            default: alert("No has introducido una opción correcta");
        }

        
        
    }





