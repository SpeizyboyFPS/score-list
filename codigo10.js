"use strict"

// call to div
const materiasHTML = document.querySelector(".materias");

// array with notes and subject
const materias = [
    {
        nombre : "física",
        nota : 10
    },{
        nombre : "calculo",
        nota : 9
    },{
        nombre : "química",
        nota : 8
    },{
        nombre : "biología",
        nota : 9
    },{
        nombre : "matemáticas",
        nota : 8
    }
]

// get subject
const obtenerMateria = (id)=> {
    return new Promise((res,rej)=>{
        let materia = materias[id];
        if(materia == undefined) {
            rej("La materia no existe");
        } 
        else {
            setTimeout(()=>{
                res(materia)
            },Math.random()*400);
        }
    })
}

// return subject
const devolverMateria = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMateria()