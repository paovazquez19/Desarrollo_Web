//const { useContext } = require("react");

//Desestructuracion
const vehiculo={
    anhio:2023,
    id: 123,
    marca: 'Nissan',
    modelo:'sentra',
};

const modelo='march';
console.log(vehiculo.marca);


//para que yo acceda solo hago referencia al objeto desestructurado
const{modelo:modelo2,id,anhio}=vehiculo; //esta es la desestructuracion que hace
console.log(modelo,id,anhio,modelo2);

//const getModelo= (v)=>{ //asi vamos a definir los objetos constantes
    //const{modelo}=v;
    //return modelo;

//};


const getModelo= ({modelo})=>{ //asi desestructuro mas facil cualquier atributo
   return modelo;

};
console.log(getModelo(vehiculo));

const user={     //objeto
    nickname:"Admin",
    name: "jahir",
    pass:"1234",
};

const _useContext= ( {nickname, name, pass} ) =>{

    return{
        nombre: name,
        usuario: nickname,
        contraseña:pass,
        llaves:{
            publica:'asyueuyway',
            privada:'123456',

        }

    }
};
console.log(_useContext(user));

const resul=_useContext(user);//creo otro objeto

const{llaves}=resul;
const{publica}=llaves;
const{privada}=llaves;

console.log(publica);
console.log(privada);

