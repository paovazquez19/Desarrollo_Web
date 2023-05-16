//objetos literales
//persona es el objeto y los demas sus atributos
const persona= {
    nombre: "Paola",
    apellido: "Vazquez",
    edad: 43,
    direccion:{
        calle:"De las azucenas",
        no: 12343,
        colonia:"Gregorio Ramo",
        municipio:"Puebla",
    },
 };

 console.log(persona.apellido);
 console.log(persona.direccion.colonia);

 



 //operador de propagacion os spread
 const persona2={...persona};
 console.log(persona.edad);
 persona2.edad=45;
 console.log(persona2.edad);
