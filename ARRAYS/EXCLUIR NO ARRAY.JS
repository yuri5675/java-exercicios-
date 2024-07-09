// EXCLUINDO O PRIMEIRO ELEMENTO ARRAY

var receitabolo = [];
receitabolo.push("trigo","açucar","fermento");
console.log(`
-----ingredientes-----
${receitabolo}
`);

// excluindo agora o primeiro elemento 

receitabolo.shift();
console.log(`
atualização após excluir o primeiro elemento:
\n-${receitabolo.join("\n-")}

`);

//excluir o ultimo elemento 
receitabolo.pop();
console.log(`
atualização após o ultimo elemento
\n-${receitabolo.join("\n-")}


`);

// excluindo elemntos em posições especificas 
receitabolo.splice(2,1);
console.log(`
atualizção após excluir elemento específico 
\n-${receitabolo}

`)

// quantidade de ingrediente que sobram
console.log(`
quantidade que sobra na lista:
${receitabolo.length}
`)

//excluir tudo
receitabolo.length = 0;
console.log(`
receita do bolo 
${receitabolo}

`)