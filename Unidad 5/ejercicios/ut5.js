window.onload = iniciar;

    //body no se ha creado antes de poner onload.
    function iniciar() {
        anadirBoton("Generar Personaje","botonGPersonaje");
        anadirBoton("Borrar Personaje","botonBorra");
        anadirBoton("Mostrar Numero de filas","botonFilas");

        var div1 = document.createElement("div");
        div1.setAttribute("id","contenedor");

        document.body.appendChild(div1);
        
        anadirBoton("Nº Sanji","boton1");
        anadirBoton("Nº Zoro","boton2");
        anadirBoton("Nº Nami","boton3");
        anadirBoton("Nº Luffy","boton4");



        document.getElementById("botonGPersonaje").addEventListener("click",anadirPersonaje);
        document.getElementById("botonBorra").addEventListener("click",borrarPersonaje);
       
        document.getElementById("boton1").addEventListener("click",cuenta);
        document.getElementById("boton2").addEventListener("click",cuenta);
        document.getElementById("boton3").addEventListener("click",cuenta);
        document.getElementById("boton4").addEventListener("click",cuenta);

        var div2 = document.createElement("div");
        div2.setAttribute("id","contenedor2");
        document.body.appendChild(div2);
      
    }

    function anadirBoton(nombre,id){
        var boton = document.createElement("input");
        boton.setAttribute("type","button");
        boton.setAttribute("value",nombre);
        boton.setAttribute("id",id);
        document.body.appendChild(boton);
    }

    function borrarPersonaje(e){
        var imagenUlt = document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1];
        
        if(imagenUlt!=null){
             document.getElementById("contenedor").removeChild(imagenUlt);
        }else{
            alert(" Ninguna imagen que borrar");
        }
    }


    function anadirPersonaje(e){
        e.preventDefault();
        var opcion;

        opcion = prompt("Elija el nombre del personaje:\n1. Sanji \n2. Zoro \n3. Nami \n4. Luffy.");

        var imagen; 
        //document.body.appendChild(imagen);

        switch(opcion){
            case "1" : 
                    imagen = document.createElement("img");
                    imagen.setAttribute("src","archivos/img_onepiece/sanji.jpg");
            break;
            case "2": 
                    imagen = document.createElement("img");
                    imagen.setAttribute("src","archivos/img_onepiece/zoro.jpg");
            break;
            case "3":
                    imagen = document.createElement("img");
                    imagen.setAttribute("src","archivos/img_onepiece/nami.jpg");
            break;
            case "4":
                    imagen = document.createElement("img");
                    imagen.setAttribute("src","archivos/img_onepiece/luffy.jpg");
            break;
            default: alert("No has introducido una opción correcta"); 
        }

            if(imagen!=null){
                document.getElementById("contenedor").appendChild(imagen);
            }
        
        
        }

        function cuenta(e){
            e.preventDefault();

            var cadena = "El número de imágenes ";

            if(e.target.id =="boton1"){
                cadena +=" de Sanji es: " ;
                numero= document.querySelectorAll("img[src='archivos/img_onepiece/sanji.jpg']").length;
            }

            if(e.target.id =="boton2"){
                cadena +=" de Zoro es: " ;
                numero= document.querySelectorAll("img[src='archivos/img_onepiece/zoro.jpg']").length;
            }

            if(e.target.id =="boton3"){
                cadena +=" de Nami es: " ;
                numero= document.querySelectorAll("img[src='archivos/img_onepiece/nami.jpg']").length;
            }

            if(e.target.id =="boton4"){
                cadena +=" de Luffy es: " ;
                numero= document.querySelectorAll("img[src='archivos/img_onepiece/luffy.jpg']").length;
            }

            document.getElementById("contenedor2").innerHTML= cadena + numero;
            
        }





