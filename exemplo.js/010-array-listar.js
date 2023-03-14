let alunos = [
    { 
        nome: 'Naruto Uzumaki',
        dt_nasc: '10/9/2007',
        sexo: 'M'
    },
    { 
        nome: 'Sasuke Uchiha',
        dt_nasc: '23/7/2007',
        sexo: 'M'
    },
    { 
        nome: 'Sakura Haruno',
        dt_nasc: '28/3/2007',
        sexo: 'F'
    },
    { 
        nome: 'Kakashi Hatake',
        dt_nasc: '15/9/2007',
        sexo: 'M'
    }
]

let tamanhoArray = alunos.length;

for(let cont = 0; cont < tamanhoArray; cont ++){

// console.log((cont + 1) + ' º Aluno: ');
// console.log('Nome: ' + alunos[cont].nome);
// console.log('Data de Nascimento ' + alunos[cont].dt_nasc);
// console.log('Sexo: ' + alunos[cont].sexo);
// console.log('--------------------------');

if(alunos[cont].sexo == 'M'){

    console.log('Alunos Masculinos:  ');
    console.log('Nome: ' + alunos[cont].nome);
    console.log('Data de Nascimento ' + alunos[cont].dt_nasc);
    console.log('Sexo: ' + alunos[cont].sexo);
    console.log('--------------------------');    
}

}

//ou fazer como abaixo

for (var cont in alunos){
console.log((parseInt(cont) + 1) + ' º Aluno: ');
console.log('Nome: ' + alunos[cont].nome);
console.log('Data de Nascimento ' + alunos[cont].dt_nasc);
console.log('Sexo: ' + alunos[cont].sexo);
console.log('--------------------------');

}
