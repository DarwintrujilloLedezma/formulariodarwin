
/*SE CREA UNA VARIABLE FIGURA PARA CAPTURAR EL ELEMENTO DEL ID*/ 
/*TOGGLE: AGREGA Y QUITA LA FUNCION LAS VECES QUE SE DE CLIC*/ 

function circulo(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("circulo")

}

function rombo(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("rombo")

}

function rectanguloh(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("rectanguloh")

}

function rectangulov(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("rectangulov")

}

function arriba(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("arriba")

}

function abajo(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("abajo")

}


function izquierda(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("izquierda")

}


function derecha(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("derecha")

}

function triangulo(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("triangulo")

}

function diagonal(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("diagonal")

}

function triangulo(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("triangulo")

}

function imagen(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("imagen")

}


/*CAPTURAR DATOS FORMULARIO*/

function capturarDatos(){

    /*CAPTURAR LOS VALORES DE CADA UNO DE LOS CAMPOS DEL FORMULARIO*/
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    /*CAPTURAMOS LOS ELEMENTOS A LOS CUALES LES ASIGNAMOS LOS VALORES*/

    var mfoto = document.getElementById("mFoto");
    var mnombres = document.getElementById("mNombre");
    var mdescripcion = document.getElementById("mDescripcion");
    var medad = document.getElementById("mEdad");
    var mfecha = document.getElementById("mFecha");
    var mgenero = document.getElementById("mGenero");
    var memail = document.getElementById("mEmail");


    var contAvatar = document.getElementById("contAvatar");


    mnombres.textContent = nombres; 
    medad.textContent = edad; 
    mdescripcion.textContent = descripcion; 
    mfecha.textContent = fecha; 
    mgenero.textContent = genero;
    memail.textContent = email;  
    
    if (genero =="Masculino" ){
        mfoto.src="img/hombre.png"; 
    }else if(genero == "Femenino"){
        mfoto.src="img/mujer.png";
    }else
        mfoto.src="img/usuario.png";
    


    switch (color) {
        case "Verde":
          var contenedor = document.getElementById("contAvatar");
          contenedor.classList.add("Verde");
          break;
          case "Amarillo":
          var contenedor = document.getElementById("contAvatar");
          contenedor.classList.add("Amarillo");
          break;
          case "Rojo":
          var contenedor = document.getElementById("contAvatar");
          contenedor.classList.add("Rojo");
          break;
          case "Azul":
          var contenedor = document.getElementById("contAvatar");
          contenedor.classList.add("Azul");
          break;
          case "Rosado":
          var contenedor = document.getElementById("contAvatar");
          contenedor.classList.add("Rosado");
          break;
          
      }
      

      }
     