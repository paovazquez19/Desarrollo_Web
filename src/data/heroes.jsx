const heroes=[
    {
        id:1,
        name:'Batman',
        company:'DC',
    },
    {
        id:2,
        name:'Superman',
        company:'DC',
    },
    {
        id:3,
        name:'Spiderman',
        company:'Marvel',
    },
    {
        id:4,
        name:'aquaman',
        company:'DC',
    },
    {
        id:5,
        name:'linterna',
        company:'DC',
    },
    

];

 const company=[ //se puede exportar el arreglo desde que lo creas pero cuando lo llames es con llaves
    {
        id:1,
        company:'DC',
    },
    {
        id:2,
        company:'Marvel',
    },
   

];


//export default heroes;//otra manera de exportar

export
{
    heroes,
    company as default
}