var opcao
opcao ="/"

switch (opcao) {
    case "*":
const mult =(x,y)=> x*y;
let x=2, y=2
console.log(`multiplicação resultado:  ${mult(x,y)}`)
 break;
 
 case "+":
const soma =(a,b)=> a+b;
let a=4, b=5
console.log(`soma resultado:  ${soma(a,b)}`)
break;

case "-":
const sub =(c,d)=> c-d;
let c=8, d=6
console.log(`subtração resultado:  ${sub(c,d)}`)
break;

case "/":
    const div =(g,h)=> g/h;
let g=10, h=2
console.log(`divisão resultado:  ${div(g,h)}`)
break;
}