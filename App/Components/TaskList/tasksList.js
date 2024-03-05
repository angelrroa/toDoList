import {obtenerTareas} from '/Apis/tasks-api.js';

export class formTask extends HTMLElement{
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = /* html */`
      <style rel="stylesheet">
          @import "./App/Components/TaskList/taskList.css";
        </style>
        <h1>Tareas Pendientes</h1>
        
        <ul id="task-list">
            <li class="task-item">
                <div class="task-column">
                    <input type="text" class="task-input" value="Hacer la compra" disabled>
                </div>
                <div class="task-column">
                    <input type="checkbox" class="task-completed"> Completada
                </div>
                <div class="task-column">
                    <input type="checkbox" class="task-failed"> Fallida
                </div>
            </li>
            <li class="task-item">
                <div class="task-column">
                    <input type="text" class="task-input" value="Terminar el informe" disabled>
                </div>
                <div class="task-column">
                    <input type="checkbox" class="task-completed"> Completada
                </div>
                <div class="task-column">
                    <input type="checkbox" class="task-failed"> Fallida
                </div>
            </li>
            <li class="task-item">
                <div class="task-column">
                    <input type="text" class="task-input" value="Llamar al cliente" disabled>
                </div>
                <div class="task-column">
                    <input type="checkbox" class="task-completed"> Completada
                </div>
                <div class="task-column">
                    <input type="checkbox" class="task-failed"> Fallida
                </div>
            </li>
        </ul>
      `;
  }
}     
customElements.define("task-list", formTask);

// Función para obtener las tareas y mostrarlas en el formato especificado
export function mostrarTareas() {
    obtenerTareas()
      .then(tareas => {
        const taskList = document.getElementById('task-list');
  
        // Limpiar la lista de tareas antes de agregar las nuevas
        taskList.innerHTML = '';
  
        // Recorrer todas las tareas y agregarlas al DOM
        tareas.forEach(tarea => {
          const taskItem = document.createElement('li');
          taskItem.classList.add('task-item');
  
          const taskColumn1 = document.createElement('div');
          taskColumn1.classList.add('task-column');
          const taskInput = document.createElement('input');
          taskInput.type = 'text';
          taskInput.classList.add('task-input');
          taskInput.value = tarea.titulo;
          taskInput.disabled = true;
          taskColumn1.appendChild(taskInput);
  
          const taskColumn2 = document.createElement('div');
          taskColumn2.classList.add('task-column');
          const completedCheckbox = document.createElement('input');
          completedCheckbox.type = 'checkbox';
          completedCheckbox.classList.add('task-completed');
          completedCheckbox.checked = tarea.completada;
          taskColumn2.appendChild(completedCheckbox);
  
          const taskColumn3 = document.createElement('div');
          taskColumn3.classList.add('task-column');
          const failedCheckbox = document.createElement('input');
          failedCheckbox.type = 'checkbox';
          failedCheckbox.classList.add('task-failed');
          failedCheckbox.checked = tarea.fallida;
          taskColumn3.appendChild(failedCheckbox);
  
          taskItem.appendChild(taskColumn1);
          taskItem.appendChild(taskColumn2);
          taskItem.appendChild(taskColumn3);
  
          taskList.appendChild(taskItem);
        });
      })
      .catch(error => {
        console.error('Error al obtener las tareas:', error);
      });
  }
  
  // Llamar a la función para mostrar las tareas cuando se cargue la página
  document.addEventListener('DOMContentLoaded', mostrarTareas);
  