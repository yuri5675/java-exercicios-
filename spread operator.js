// spread operator: unindo dois ou mais arrays 

//sintaxe consiste em tres pontos

let lista1 =[]
let lista2 =[]
let lista3 =[]

lista1.push(7,8,9,10)
lista2.push(1,2,3,4,5,6, ...lista1);
lista3.push(...lista2, 11,12,13.14,15)

// exibição
console.log(`
exibição de valores da primeira lista: ${lista1.join("-")}
exibição de valores da segunda lista: ${lista2.join("-")}
exibição de valores da terceira lista: ${lista3.join("-")}


`)