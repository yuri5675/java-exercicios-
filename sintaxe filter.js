
// filter: serve para filtrar os itens do array
//obs: o filter vai verificar o vetor em cima de uma condiçção logica

// sintaxe: nome_array.filter((item=>{}))

//exemplo: filtragem de valorem com categoria especifica 


let lista1 =[]
let lista2 =[]

lista1.push(54,45,9,7,10,12,80);

// filtar valores acima de 20
    lista2 = lista1.filter(item=>{
        if(item>20){
            return true;
        }else{
            return false;
        }
        

    });
console.log(`filtragem de valores:  ${lista2.join(",")}`)

