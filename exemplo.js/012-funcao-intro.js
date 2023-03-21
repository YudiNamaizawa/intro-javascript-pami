let entrada = require('prompt-sync')(); 


//função sem parâmetro e sem retorno
function data (){
    const timeElapsed = Date.now();
    const hoje = new Date(timeElapsed);
    console.log('Hoje é: '+ hoje.toUTCString())
}

//função sem parâmetro e com retorno
function caracterAleatorio (){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const nAleatorio = Math.floor(Math.random() * (61 - 0) + 0);
    const caracter = characters.charAt(nAleatorio);
    return caracter;
}


//função com paramêtro sem retorno
function olaNome(nome = 'não foi inserido um nome') {
    console.log('Olá' + nome);
}

//função com parâmetro com retorno
function soma(n1 = 0 ,n2 = 0){
    return n1 + n2;
}

//Chamada de função sem parâmetro e sem retorno
data();

//Chamada de função sem parâmetro e com retorno
console.log(caracterAleatorio());

//Chamada de função com parâmetro e sem retorno
olaNome(' Yudi');

const resultado = soma(1, 2);
console.log(resultado);