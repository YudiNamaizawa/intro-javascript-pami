/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
    DICA: TENTE UTILIZAR A ESTRUTURA DO WHILE.
*/

let entrada = require('prompt-sync')(); 

console.log('Atividade 2')
let valor;
valor = entrada('Insira o valor inicial: ');
let n1 = parseInt(valor);
valor = entrada('Insira o valor final: ');
let n2 = parseInt(valor);

if (n1 < n2){

    for (let cont = n1; cont <= n2; cont++) {
        console.log(cont);
        
    }
}

if (n1 > n2){
let cont = n1;
    do {
        console.log(cont);
        cont--;

    } while(cont >= n2);
}

console.log('');
console.log('Fim do Programa');
entrada();