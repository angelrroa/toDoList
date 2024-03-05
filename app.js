import '/App/Components/formTask/formTask.js';
import '/App/Components/TaskList/tasksList.js';
import {crearTarea} from '/Apis/tasks-api.js';



addEventListener("DOMContentLoaded", (event) => {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener('submit',function(event){

        event.preventDefault();

        const titulo = formulario.titulo.value;
        const fechaInicio = formulario.fecha_inicio.value;
        const fechaFin = formulario.fecha_fin.value;
        const descripcion = formulario.descripcion.value;
        const selectNivel = formulario.nivel;
        const nivel = selectNivel.options[selectNivel.selectedIndex].value;

        formulario.reset();

        console.log(titulo, fechaInicio, fechaFin, descripcion, nivel);

        crearTarea(titulo, fechaInicio, fechaFin, descripcion, nivel);


    });
});

