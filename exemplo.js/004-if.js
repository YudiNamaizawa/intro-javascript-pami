let entrada = require('prompt-sync')();

let idade  = entrada('Digite a sua Idade: ');

if(idade == 18){
    console.log('Você tem idade para a carteira de habilitação!')
}

if (idade > 18){
    console.log('Você ja poderia estar dirigindo se tivesse habilitação!')
}

if (idade <18){
    console.log('Você só anda de carona!')
}

//outro modo de se fazer

if(idade > 18){
    console.log('Você ja poderia estar dirigindo se tivesse habilitação!')
} else if (idade < 18){
    console.log('Você só anda de carona!')
} else {
    console.log('Você tem idade para a carteira de habilitação!')
}
console.log('');
console.log('Fim do Programa');
entrada();