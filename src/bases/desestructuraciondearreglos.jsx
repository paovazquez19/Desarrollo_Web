//desestructuracion de arreglos
const personajes=['Mazinger','Ultratam','goku','pedro picapiedra'];
console.log(personajes[2]);//asi acceso a un atributo

//desetructuremos el primer personaje
//const[p1,p2]=personajes; //p1 o p2 es el objeto
//console.log(p1,p2);

const[,,,p2]=personajes; //p1 o p2 es el objeto
console.log(p2);

const arreglo=()=>
{
    return['ASDF',1234];
}

const[letras,numeros]=arreglo();
console.log(letras,numeros);

const _useState=(valor)=>{

    return [valor, () =>'esta es la funcion'];
}

console.log(_useState('Daniel'));

//ejercicio para 1/2 
//desestructura el arreglo que proviene de invocar a la funcio _useState()
//el valor desestructuralo como""nombre"
//la funcion desestructurala como "GetMensaje"

const [nombre,GetMensaje]=_useState('daniel');
console.log(nombre,GetMensaje());

