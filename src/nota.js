class Nota {
   constructor(titulo,contenido){
    this.titulo=titulo;
    this.contenido=contenido;
   }

getTitulo(){
    return this.titulo;
}
getContenido(){
    return this.contenido;
}

}
// function Nota(titulo,contenido){
// return titulo+contenido
// }
export default Nota;
