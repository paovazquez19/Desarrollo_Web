//Async-

import { getCompanyById,getHeroeById } from "./bases/importacionyexportacion";

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

const getHeroeByIdAsyc2=async(id)=>{
    try{
        const heroe=await getHeroeByIdAsyc(id);
        console.log(heroe);
    } catch(error){
        console.log(error);
    }
}
getHeroeByIdAsyc2(5);