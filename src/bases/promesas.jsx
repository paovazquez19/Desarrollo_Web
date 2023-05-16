//promesas en javaScript
//Una promesa son asincronas por definicion
//de mandera secuencial segun el orden que yo indico sincrono
//asincrono que no lleva esa secuencia no se realiza de manera ordenada como yo lo puse todas las peticiones de apis son asinco
import { getCompanyById,getHeroeById } from "./bases/importacionyexportacion";
//import { heroes } from "./data/heroes";

const getHeroeByIdAsyc=(id)=>{


    return new Promise ((resolve,reject) =>{

        setTimeout(()=>{
            //console.log('han pasado 2 segundos'); //cambio a estado fulfill
            const heroe=getHeroeById(id);
            //console.log(heroe); //creamos objetos y asignamos
            if(heroe)
                resolve(heroe);
            

            else
                reject('no se encuentra el heroe')
            
            
        },2000); //tiempo en que llame  la promesa
    });
    
}

getHeroeByIdAsyc(10)
.then(heroe=>{console.log(heroe); })
.catch(error=> console.log(error))






/*

const promesa=new Promise((resolve,reject) =>{

    setTimeout(()=>{
        //console.log('han pasado 2 segundos'); //cambio a estado fulfill
        const heroe=getHeroeById(2);
        //console.log(heroe); //creamos objetos y asignamos
        resolve(heroe);
    },2000); //tiempo en que llame  la promesa
});

promesa.then(( heroe)=>{
    console.log(heroe);
}).catch(()=>{
    console.log('error');
});



//console.log(getHeroeById(1),getCompanyById(2));
*/
