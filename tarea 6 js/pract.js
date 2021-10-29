const Desarrollo_Web = {
    nombre: "Desarrollo",
    Estudiantes: [{
        nombre: 'Juan',
        nota: 10
    }, {
        nombre: 'Maria',
        nota: 30
    }, {
        nombre: 'Carlos',
        nota: 20
    }, {
        nombre: 'Karla',
        nota: 40
    }]


}


const Programacion_2 = {
    nombre: "Progra2",
    Estudiantes: [{
        nombre: 'Lili',
        nota: 30
    }, {
        nombre: 'Cleo',
        nota: 40
    }, {
        nombre: 'Pedro',
        nota: 33
    }, {
        nombre: 'Marco',
        nota: 21
    }]


}



let estudianteweb = Desarrollo_Web.Estudiantes[0];
let estudiante1web = Desarrollo_Web.Estudiantes[1];
let estudiante2web = Desarrollo_Web.Estudiantes[2];
let estudiante3web = Desarrollo_Web.Estudiantes[3];


let estudianteprogra2 = Programacion_2.Estudiantes[0];
let estudiante1progra2 = Programacion_2.Estudiantes[1];
let estudiante2progra2 = Programacion_2.Estudiantes[2];
let estudiante3progra2 = Programacion_2.Estudiantes[3];



//desarrollo web
contenedor = document.getElementById('contenedor_1');

let html = `<ol> <li>Nombre: ${estudianteweb.nombre} y su es Nota: ${estudianteweb.nota}</li>
<li>Nombre: ${estudiante1web.nombre} y su es Nota: ${estudiante1web.nota}</li>
<li>Nombre: ${estudiante2web.nombre} y su es Nota: ${estudiante2web.nota}</li>
<li>Nombre: ${estudiante3web.nombre} y su es Nota: ${estudiante3web.nota}</li> </ol>`;

console.log(html);

contenedor.innerHTML = html;
if (Desarrollo_Web.Estudiantes.nota == 10) {
    contenedor = document.getElementById('#contenedor_1').querySelectorAll("li");
    contenedor.set("style", "color:red");

} else if (Desarrollo_Web.Estudiantes.nota >= 11 && Desarrollo_Web.Estudiantes.nota <= 20) {
    contenedor = document.getElementById('#contenedor_1').querySelectorAll("li");
    contenedor.set("style", "color:green");
} else if (Desarrollo_Web.Estudiantes.nota >= 21) {
    contenedor = document.getElementById('#contenedor_1').querySelectorAll("li");
    contenedor.set("style", "color:blue");
}
//progra 2

contenedor2 = document.querySelector('#contenedor_2');

let html2 = `<ul> <li>Nombre: ${estudianteprogra2.nombre} y su es Nota: ${estudianteprogra2.nota}</li>
<li>Nombre: ${estudiante1progra2.nombre} y su es Nota: ${estudiante1progra2.nota}</li>
<li>Nombre: ${estudiante2progra2.nombre} y su es Nota: ${estudiante2progra2.nota}</li>
<li>Nombre: ${estudiante3progra2.nombre} y su es Nota: ${estudiante3progra2.nota}</li> </ul>`;

console.log(html2);

contenedor2.innerHTML = html2;
let multipli = document.getElementById("multiplicar");
let dividi = document.getElementById("dividir");
let suma = document.getElementById("sumar");
let resta = document.getElementById("restar");

function operar() {
    let numeros = document.getElementById("numero").value;

    for (var i = 1; i <= 10; i++) {
        multipli.innerHTML += `${numeros} * ${i} = ${numeros*i} <br />`
    }
    for (var i = 1; i <= 10; i++) {
        dividi.innerHTML += `${numeros} / ${i} = ${numeros/i} <br />`
    }
    for (var i = 1; i <= 10; i++) {
        suma.innerHTML += `${numeros} + ${i} = ${parseInt(numeros)+i} <br />`
    }
    for (var i = 1; i <= 10; i++) {
        resta.innerHTML += `${numeros} - ${i} = ${numeros-i} <br />`
    }
}