
import company,{heroes} from '../data/heroes'

//console.log(heroes,company)

const getHeroeById=(id)=>{
    return heroes.find(heroe=>heroe.id==id);
}

const getCompanyById=(id)=>{
    return company.find(company=>company.id==id);
}


//console.log(getHeroeById(3));
//console.log(getCompanyById(3));

export{
    getHeroeById,
    getCompanyById
}
