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
// const titulo=document.getElementById('titulo');
// const contenido=document.getElementById('contenido');
// const divRespuesta=document.getElementById('tareas');
// var cont=0;

// const objNota = {
//     // id:"",
//     titulo,
//     contenido
//   };

  
// var ListaNotas=[];

document.getElementById('form_Notas').addEventListener('submit',guardarNotas);

function guardarNotas(e){
    
    const titulo=document.getElementById('titulo').value;
    const contenido=document.getElementById('contenido').value;
   
    var cont=0;

    const objNota = {
        titulo,
        contenido
    };
    //localStorage.setItem('notas',JSON.stringify(objNota));
    if(localStorage.getItem('notas')=== null){
        let notas=[];
        notas.push(objNota);
        localStorage.setItem('notas',JSON.stringify(notas));
    }else{
        let notas= JSON.parse(localStorage.getItem('notas'));
        notas.push(objNota);
        localStorage.setItem('notas',JSON.stringify(notas));
    }
    MostrarNotas();
    //e.preventDefault();
   
    //console.log(MostrarNotas());

    // objNota.id=cont;
    // objNota.titulo="hola";

    // for(i=0;i<ListaNotas.length;i++){
    //     console.log(ListaNotas[i]);
    // }
    // console.log(Titulo.value);
    // console.log(Contenido.value);
    // divRespuesta.innerHTML=Titulo.value + "-"+ Contenido.value;
  
}
function MostrarNotas(e){
    let divRespuesta=document.getElementById('tareas');
    let notas= JSON.parse(localStorage.getItem('notas'));

    divRespuesta.innerHTML='';

    for(let i=0;i<notas.length; i++){

        let titulo=notas[i].titulo;
        let contenido=notas[i].contenido;

        divRespuesta.innerHTML+=`<div class="card">
                            <div class="card-body">
                                <h2>${titulo}</h2>
                                <p>${contenido}</p>
                                <a class="btn btn-danger" onclick="borrarNotas('${titulo}')">eliminar</a>
                            </div>
                        </div>`
    }

}
function borrarNotas(titulo){
console.log(titulo);

}
MostrarNotas();

