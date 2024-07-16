let lista1 =[];
let lista2 =[];

//adicionando elementos ao array
lista1.push(1,2,3,4,5);
console.log("\n",lista1.join("\n"))

lista2 = lista1.map(item=> item * item)

console.log(`nova lista criada: ${lista2.join("\n")}`)