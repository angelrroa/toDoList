export class formTask extends HTMLElement{
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = /* html */`
      <style rel="stylesheet">
          @import "./App/Components/formTask/formTask.css";
        </style>
      <h2>CREAR TAREA</h2>
        <form id="formulario">
            <div class="form-group">
                <label for="titulo">Título:</label>
                <input type="text" class="form-control" id="titulo" placeholder="Ingrese el título de la tarea">
            </div>
            <div class="form-group">
                <div class="date-container">
                    <div class="date-group">
                        <label for="fecha_inicio">Fecha de Inicio:</label>
                        <input type="date" class="form-control" id="fecha_inicio">
                    </div>
                    <div class="date-group">
                        <label for="fecha_fin">Fecha de Fin:</label>
                        <input type="date" class="form-control" id="fecha_fin">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción:</label>
                <textarea class="form-control" id="descripcion" rows="3" placeholder="Ingrese la descripción de la tarea"></textarea>
            </div>
            <div class="form-group">
                <label for="nivel">Nivel de Prioridad:</label>
                <select class="form-control" id="nivel">
                    <option value="">Selecciona una opción</option>
                    <option value="Alto">Alto</option>
                    <option value="Medio">Medio</option>
                    <option value="Bajo">Bajo</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">AGREGAR TAREA</button>
        </form>
      `;
  }
}     
customElements.define("form-task", formTask);