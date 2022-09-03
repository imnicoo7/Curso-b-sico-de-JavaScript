//reto juego piedra papel y tijera
/*
let usuario = prompt(' usuario escoge piedra, papel o tijera')
console.log(`el usuario 1 escogio ${usuario}`);

let usuario2 = prompt('maquina escoge piedra, papel o tijera');
console.log(`el usuario 2 escogio ${usuario2}`)

let papel = 'papel';
let piedra = 'piedra';
let tijera = 'tijera';

function juego( user, maquina) {
    if (user != maquina) {
        if(user === piedra && maquina === tijera){
            console.log(`usuario 1 gano con ${piedra}`)
        }else if (user === papel && maquina === piedra) {
            console.log('gano el usuario 1 con ' + papel)
        }else if(user === tijera && maquina === papel){
            console.log(`Gano el usuario 1 con ${tijera}`)
        }else if(user === maquina){
            console.log('Es un empate');
        }
        else{
            console.log('Ha ganado el usuario 2')
        }
        
    }
}

juego(usuario, usuario2) */
let usuario = prompt(' usuario escoge piedra, papel o tijera')
console.log(`el usuario 1 escogio ${usuario}`);

let usuario2 = prompt('maquina escoge piedra, papel o tijera');
console.log(`el usuario 2 escogio ${usuario2}`)
let papel = 'papel';
let piedra = 'piedra';
let tijera = 'tijera';

switch (usuario != usuario2){
    case usuario === piedra && usuario2 === tijera:
        console.log(`usuario 1 gano con ${piedra}`);
        break;
    case usuario === papel && usuario2 === piedra:
        console.log('gano el usuario 1 con ' + papel);
        break;
    case usuario === tijera && usuario2 === papel:
        console.log(`Gano el usuario 1 con ${tijera}`);
        break;
    case usuario === usuario2:
        console.log('Es un empate');
        break;
    default:
        console.log('Ha ganado el usuario 2');
        break;
}