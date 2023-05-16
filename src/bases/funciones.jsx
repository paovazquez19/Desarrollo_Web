//funciones en js
function mensaje(cadena){
    return cadena;
}
//console.log(mensaje('hola mundo')); //cuando quiero que me regrese algo mi funcion es entre parentesis si no le pongo no me va a regresar
//mensaje=50;

console.log(mensaje);
const mensaje1= function(cadena){ //asi vamos a definir los objetos constantes
    return cadena;
};


//funcion flecha
const mensaje2= (cadena)=>{ //asi vamos a definir los objetos constantes
    return cadena;
};

console.log(mensaje,mensaje1,mensaje2);

const mensaje3 = ()=>({ 
    id:1,
    nick: 'admin',
    
});
console.log(mensaje3());
