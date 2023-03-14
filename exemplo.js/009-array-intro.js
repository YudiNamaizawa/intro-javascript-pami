
console.log('Exemplo Array');
let notas = [9, 8.5, 7];
console.log(notas);
console.log('1ª nota: '  + notas[0]);
console.log('2ª nota: '  + notas[1]);
console.log('3ª nota: '  + notas[2]);

//editar posições do array
notas[0] = 'MB';
notas[1] = 'MB';
notas[2] = 'B';
console.log('Notas convertidas: ');
console.log(notas[0] + ' - ' + notas[1] + ' - ' + notas[2]);

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

console.log('3º Aluno: ')
console.log('Nome: ' + alunos[2].nome);
console.log('Data de Nascimento ' + alunos[2].dt_nasc);
console.log('Sexo: ' + alunos[2].sexo);
