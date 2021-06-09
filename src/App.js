import React from 'react';
import './App.css';

function App() {
  function Usuario (name, lastName, mascotas, libros) {

      this.name = name;
      this.lastName = lastName;
      this.mascotas = mascotas;
      this.libros = libros;

    this.getFullName = () => {
      return(
        `El nombre completo del Usuario es: ${this.name} ${this.lastName}`
      )
    };

    this.addMascota = (e, newMascota) => {
      e.preventDefault();
      this.mascotas.push(newMascota);
      document.getElementById("mascota").value = "";
      alert(`Haz agregado un/a ${newMascota} a tu lista de mascotas`);
    };

    this.getMascotas = () => {
      console.log(`El usuario tiene ${this.mascotas.length} mascotas`);
    };

    this.addLibro = (e, nuevoAutor, nuevoLibro) => {
      e.preventDefault()
      this.libros.push({nombre: `${nuevoLibro}`, autor: `${nuevoAutor}`});
      document.getElementById("libro").value = "";
      document.getElementById("autor").value = "";
      alert("Haz agregado un nuevo libro a tu biblioteca");
    };

    this.getLibros = () => {
      this.libros.map((x) => console.log(x.nombre));
    }
  };

  class UsuarioClase {
    constructor(name, lastName, mascotas, libros) {
      this.name = name;
      this.lastName = lastName;
      this.mascotas = mascotas;
      this.libros = libros;
    }

    getFullName(){
      return(
        `El nombre completo del Usuario es: ${this.name} ${this.lastName}`
      )
    };

    addMascota(e, newMascota){
      e.preventDefault();
      this.mascotas.push(newMascota);
      document.getElementById("mascotaClase").value = "";
      alert(`Haz agregado un/a ${newMascota} a tu lista de mascotas`);
    };

    getMascotas(){
      console.log(`El usuario tiene ${this.mascotas.length} mascotas`);
    };

    addLibro(e, nuevoAutor, nuevoLibro){
      e.preventDefault()
      this.libros.push({nombre: `${nuevoLibro}`, autor: `${nuevoAutor}`});
      document.getElementById("libroClase").value = "";
      document.getElementById("autorClase").value = "";
      alert("Haz agregado un nuevo libro a tu biblioteca");
    };

    getLibros(){
      this.libros.map((x) => console.log(x.nombre));
    }
  };


  let anthony = new Usuario("Anthony", "Perez", [], []);
  let alexa = new UsuarioClase("Alexa", "Paz", [], []);
  let nuevaMascota = "";
  let nuevoAutor = "";
  let nuevoLibro = "";

  const detectarNuevaMascota = (e, mascota) => {
    e.preventDefault();
    nuevaMascota = mascota;
  };

  const detectarNuevoLibro = (e, libro) => {
    e.preventDefault();
    nuevoLibro = libro;
  };

  const detectarNuevoAutor = (e, autor) => {
    e.preventDefault();
    nuevoAutor = autor;
  }

  return (
    <>
      <div>
        <h1>USUARIO FUNCION</h1>
        <h2>{anthony.getFullName()}</h2>
        <p>Agregar una nueva Mascota:</p>
        <input onChange={(e)=> detectarNuevaMascota(e, e.target.value)}  id="mascota" type="text"></input>
        <button onClick={(e) => anthony.addMascota(e, nuevaMascota)}>Agregar Mascota</button>
        <p>Agregar Nuevo Libro</p>
        <input id="libro" onChange={(e) => detectarNuevoLibro(e, e.target.value)} type="text" placeholder="nombre"></input>
        <input id="autor" onChange={(e) => detectarNuevoAutor(e, e.target.value)} type="text" placeholder="autor"></input>
        <button onClick={(e) =>anthony.addLibro(e, nuevoAutor, nuevoLibro)}>Agregar a lista de Libros</button>
        <br></br>
        <button onClick={() =>anthony.getMascotas()}>Ver Mascotas</button>
        <br></br>
        <button onClick={()=>anthony.getLibros()}>Ver Libros</button>
      </div>

      <div>
        <h1>USUARIO CLASE</h1>
        <h2>{alexa.getFullName()}</h2>
        <p>Agregar una nueva Mascota:</p>
        <input onChange={(e)=> detectarNuevaMascota(e, e.target.value)}  id="mascotaClase" type="text"></input>
        <button onClick={(e) => alexa.addMascota(e, nuevaMascota)}>Agregar Mascota</button>
        <p>Agregar Nuevo Libro</p>
        <input id="libroClase" onChange={(e) => detectarNuevoLibro(e, e.target.value)} type="text" placeholder="nombre"></input>
        <input id="autorClase" onChange={(e) => detectarNuevoAutor(e, e.target.value)} type="text" placeholder="autor"></input>
        <button onClick={(e) =>alexa.addLibro(e, nuevoAutor, nuevoLibro)}>Agregar a lista de Libros</button>
        <br></br>
        <button onClick={() =>alexa.getMascotas()}>Ver Mascotas</button>
        <br></br>
        <button onClick={()=>alexa.getLibros()}>Ver Libros</button>
      </div>
    </>
  );
}

export default App;
