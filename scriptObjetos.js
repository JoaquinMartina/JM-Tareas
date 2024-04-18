window.onload = iniciar;

function iniciar(){
    let btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", btnClickAgregar);

    let btnLimpiar = document.getElementById("btnLimpiar");
    btnLimpiar.addEventListener("click", btnClickLimpiar);

    mostrarListadoTareas();
}

function btnClickAgregar(){
    
    let titulo = document.getElementById("txtTarea").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    //Limpiar Inputs Text despues de guardar
    document.getElementById("txtTarea").value="";
    document.getElementById("txtDescripcion").value="";
    //OBJETOS
    let tarea = {
        "titulo": titulo,
        "descripcion": descripcion
    }

    let listadoTareas = [];
    if(localStorage.tareas){
        listadoTareas = JSON.parse(localStorage.tareas);
    }
    //Guardo el objeto en un array
    listadoTareas.push(tarea);
    //Local Storage -> almacenar de manera local el array
    //JSON.stringify -> convierte un objeto en string
    localStorage.tareas = JSON.stringify(listadoTareas);
    
    mostrarListadoTareas();
}

function mostrarListadoTareas(){
    let listado = document.getElementById("todoList");
    let cadena = "";

    let listadoTareas = [];
    if(localStorage.tareas){
        listadoTareas = JSON.parse(localStorage.tareas);
    }

    for (let tarea of listadoTareas){
        cadena += "<li>" + tarea.titulo + ": " + tarea.descripcion + "</li>";
    }
    listado.innerHTML = cadena;
}

function btnClickLimpiar(){
    localStorage.clear();
    mostrarListadoTareas();
}
