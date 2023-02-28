//chamando a biblioteca que será utilizada
let entrada = require('prompt-sync')();

let nome = entrada('Digite o seu Nome: ');
console.log('Nome digitado: ' + nome);

// Toda entrada é String

//Forma "correta" de se fazer o problema
let num; // criação de variável

//entrade
num = entrada('Digite um número: ');
let n1 = parseInt(num);
num = entrada('Digite outro número: ');
let n2 = parseInt(num);

//processamento
let soma = n1 + n2;

//saída
console.log('A soma do nº ' + n1 + ' com o nº ' + n2 + ' é ' + soma);

/*Forma "errada" de se fazer
let n1 = entrada('Digite um numero: ');
let n2 =  entrada('Digite outro número: ');
let soma = parseInt(n1) + parseInt(n2);
console.log('A soma do 1º com o 2º número inserido é ' + soma);
*/

entrada();//espera para continuar o programa
console.log('Fim do Programa');