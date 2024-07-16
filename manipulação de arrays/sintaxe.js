// map: metodo que mapeia o array, percorrendo e executando uma função em cada item do array
// nome_array.map((item,indice)=>{})

//exemplo:
let listanome =[]
listanome.push("pedro", "arrascaeta","gerson","gabigol");
listanome.map((item,index)=>{

    console.log(`achando: ${item}`);
    console.log(`qual o indice: ${index}`)

}




)
console.log("-----------")
listanome.map((item,index)=>{
    if(index==1){
        return console.log(item);
    }
}
)


