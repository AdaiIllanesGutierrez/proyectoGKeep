// let submit=document.querySelector(".submit");
// let notesElem=document.querySelector('.notes');
// let title=document.querySelector("#text");
// let desc=document.querySelector('#desc');

// let notes=JSON.parse(localStorage.getItem("notes"));


// if(notes){
//     notes.forEach(element => {
//         addNotes(element)
//     });
// }
// submit.addEventListener("click", (e)=>{
//     e.preventDefault();
//     addNotes()
// })
// function addNotes(obj) {
//     let card=document.createElement("div");
//     card.classList.add("card");
//     let titleval=title.value;
//     let descVal=desc.value;
//     if(obj){
//         titleval=obj.title;
//         descVal=obj.desc;
//     }
//     if(titleval){
//         card.innerHTML=`<h3>${titleval}</h3>
//                                     <p class="ptag">${descVal}</p>
//                              <button class="del">Borrar</button>`;
//         notesElem.appendChild(card);
//         updateLs()
//     }
//     let del=card.querySelector(".del");
//     del.addEventListener('click', ()=>{
//         card.remove();
//         updateLs();
//     })
// }
// function updateLs() {
//     let card=document.querySelectorAll(".card");
//     let arr=[];
//     card.forEach(element => {
//         arr.push({
//             title:element.children[0].innerText,
//             desc:element.children[1].innerText
//         })
//     });
//     localStorage.setItem("notes", JSON.stringify(arr));
// }
//import Nota from "./nota.js"

// var notas= new Nota();
const Titulo=document.getElementById('titulo');
const Contenido=document.getElementById('contenido');
const divRespuesta=document.getElementById('tareas');

var ListaNotas=[];
document.getElementById('form_Notas').addEventListener('submit',alerta);

function alerta(e){
e.preventDefault();
console.log(MostrarNotas());
console.log(Titulo.value);
console.log(Contenido.value);
divRespuesta.innerHTML=Titulo.value + "-"+ Contenido.value;
  
}
function MostrarNotas(){
    return "Mostrando notas";
}
