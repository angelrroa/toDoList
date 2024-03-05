import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyApBszIhLUGFp8KAh-e3sGbVDStH9qJwpI",
    authDomain: "todotask-bf25f.firebaseapp.com",
    projectId: "todotask-bf25f",
    storageBucket: "todotask-bf25f.appspot.com",
    messagingSenderId: "1039345980681",
    appId: "1:1039345980681:web:aa97cc11cde364a0fd6fd8",
    measurementId: "G-F3G0E89QHJ"
  };


  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const collectionRef = db.collection('tasks');

export function crearTarea(titulo, fechaInicio, fechaFin, descripcion, nivel) {
  return collectionRef.add({
    titulo: titulo,
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    descripcion: descripcion,
    nivel: nivel
  })
  .then((docRef) => {
    var alert = document.getElementById('alert');
    console.log('Tarea creada con ID: ', docRef.id);
    alert.classList.remove('d-none')
    setTimeout(function() {
      alert.classList.add('d-none'); 
    }, 2000);
    return docRef.id;
  })
  .catch((error) => {
    console.error('Error al crear la tarea: ', error);
    throw error;
  });
}

// Leer todas las Tareas de la colección
export function obtenerTareas() {
  return collectionRef.get()
    .then((querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
      });
      return tasks;
    })
    .catch((error) => {
      console.error('Error al obtener las tareas: ', error);
      throw error;
    });
}

// Actualizar una Tarea existente por su ID
export function actualizarTarea(id, newData) {
  return collectionRef.doc(id).update(newData)
    .then(() => {
      console.log('Tarea actualizada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la tarea: ', error);
      throw error;
    });
}

// Eliminar una Tarea existente por su ID
export function eliminarTarea(id) {
  return collectionRef.doc(id).delete()
    .then(() => {
      console.log('Tarea eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la tarea: ', error);
      throw error;
    });
}