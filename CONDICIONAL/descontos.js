var valortotal, funci, vip, produto1,cliente,valorfinal,pagar;
produto1 = 60
cliente = 2

switch(cliente){
    case 1:
        valorfinal = (produto1*(10/100))
        produto1-= valorfinal
        console.log(`
        cliente vip, obtem 5% de deconto 
        valor total: ${produto1}
        
        `)
        break;

        case 2: 
        valorfinal = (produto1 * (10/100))
        produto1 -= valorfinal
        console.log(`
        funcionario, obtem 10% de desconto
        valor total: ${produto1}
        
        `)
        break;

        case 3:
            valorfinal = produto1
            console.log(`
            valor total: ${valorfinal}
            obrigdo volte sempre
            
            `);

}



