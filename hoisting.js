
//variable en hoisting
console.log(miNombre);
let miNombre = 'Nico';
// regresara un undefined

//funciones en hoisting
hola();

function hola(){
    console.log('Hola ' + name);

}
let name='nico';

//imprimira la funcion pero no el valor de la variable