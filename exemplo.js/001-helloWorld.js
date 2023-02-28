// é utilizado para comentar uma linha
/* 
Utilizado para comentar mais de uma linha
*/
console.log('Estou desenvolvendo em java-script');
let nome = 'Yudi';
let idade = 18;
let trabalha = false;
let alturaPessoa = 1.65;
let coresFavoritas = ['preto', 'azul', 'ciano', 'roxo' ]; //array
let endereco = {

    logradouro: 'Avenida',
    nmLog: 'Brasil',
    num: '200-A',
    bairro: 'Centro',
};//objeto
let covid = null
let dengue;

console.log(alturaPessoa);
console.log("Nome:: " + nome)
console.log('O '+ nome + ' tem ' + idade + ' anos.');
console.log();
console.log('--------------------------------------');
console.log(typeof(nome));//tipo de variavel string
console.log(typeof(idade));// tipo de variavel number
console.log(typeof(trabalha));//tipo de variavel boolean
console.log(typeof(coresFavoritas));//array
console.log(typeof(endereco));// tipo de variavel object
console.log(typeof(covid));//
console.log(typeof(dengue));//tipo de variavel undefined

//Variavel ehArray assume coresFavoritas
const ehArray = Array.isArray(coresFavoritas);

//Checa se a variavel "ehArray" é uma array ou não
console.log(ehArray === true ? 'É um array' : 'Não é um array');

if (ehArray === true){
    console.log('É um array');
} else{
    console.log('Não é um array');
}
