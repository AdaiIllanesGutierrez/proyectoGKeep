import Nota from "./nota";

const titulo= document.querySelector("#titulo");
const contenido = document.querySelector("#contenido");
const form = document.querySelector("#nota-form");
const div= document.querySelector("#resultado-div");


var lista=new Array();

//const Notes=new Nota(titulo.value,contenido.value);

form.addEventListener("submit", (event) => {
  event.preventDefault();

 const t = titulo.value;
 const c = contenido.value;
 const note= new Nota(t,c);
 let p=document.createElement("p");
 lista.push(note);
//console.log(nota);

  //div.innerHTML = "<h1>" + note.getTitulo() + "</h1>"+ note.getContenido();
div.prepend(note.getTitulo(),note.getContenido());
});
