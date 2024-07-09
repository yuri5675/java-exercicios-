var carros = []

carros.push("uno","hb20","argo","fit","onix")
console.log(`
carros: ${carros}
${carros.join("\n-")}

`)



// excluir carros
carros.splice(2,1);
carros.splice(3,1);
carros.splice(4,1);

console.log(`
ATUALIZAÇÃO DE CARROS EXCLUIDOS
carros 
${carros.join("\n-")}

`)

// modicar e adicinar carros

carros.splice(2,1,"fiat - MOBI");
carros.splice(3,1,"lamborghini  - HURACAN");
carros.splice(4,1,"bugatti- VEYRON")

console.log(`
LISTA DE CARROS ATUALIZADAS 2 
${carros.join("\n-")}

`)

