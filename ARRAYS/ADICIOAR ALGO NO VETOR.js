// metodo ou função para adicioar algo no array
// O METODO É: NOME_VARIAVEL.PUSH(INSERIR ELEMENTO)

var receitabolo = [];
receitabolo.push("trigo","açucar","fermento");
console.log(`
-----ingredientes-----
${receitabolo}
`);

// metodo/ função para modificar o formato do array
// nome_varíavel.join{}

var receitabolo = [];
receitabolo.push("trigo","açucar","fermento");
console.log(`
-----ingredientes-----
${receitabolo.join("\n")}
`);

//adicionando no inicio 
receitabolo.unshift("fermento");
console.log(`
lista atualizada: 
${receitabolo.join("\n")}

`);



console.log(receitabolo.indexOf("açucar"))
// adicionando em um posição especifica 
receitabolo.splice(2,0, "trigo")
console.log(`
Receita atualizadannnnn
${receitabolo.join("\n")}

`);