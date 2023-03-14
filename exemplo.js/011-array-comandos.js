let entrada = require('prompt-sync')(); 

let tarefas = [
    {
        id: 1, 
        tarefa: 'Estudar js', 
        realizada: false
    }, 
    {
        id: 2, 
        tarefa: 'Estudar BD', 
        realizada: false
    }, 
    {
        id: 3, 
        tarefa: 'Dormir', 
        realizada: true
    }
];

let opcao = 0;

do {
    
    console.log('LISTA DE TAREFAS');
    console.log('1 - Listar tarefas pendentes');
    console.log('2 - Listar tarefas realizadas');
    console.log('3 - Adicionar tarefa'); 
    console.log('4 - Concluir tarefa');
    console.log('5 - Excluir tarefa');
    console.log('0 - Encerrar');
    opcao = entrada('Selecione uma opção:');

    if (opcao == 1) {

        console.log('Listando tarefas não realizadas');
        console.log('----------------------------------')
        for (var cont in tarefas){
            if(tarefas[cont].realizada == false){
            console.log('Id: ' + tarefas[cont].id);
            console.log('Tarefa ' + tarefas[cont].tarefa);
            console.log('Realizada: ' + tarefas[cont].realizada);
            console.log('--------------------------');
            }
        }    
    }

    if (opcao == 2) {

        console.log('Listando tarefas realizadas');
        console.log('----------------------------------')
        for (var cont in tarefas){
            if(tarefas[cont].realizada == true){
            console.log('Id: ' + tarefas[cont].id);
            console.log('Tarefa ' + tarefas[cont].tarefa);
            console.log('Realizada: ' + tarefas[cont].realizada);
            console.log('--------------------------');
            }
        }    
    }
    
    if (opcao == 3) {
        console.log('Adicionando Novas Tarefas');
        console.log('------------------------------------')
        let novatarefa = entrada('Adicione uma nova tarefa: ');
        const id = tarefas.length;
        tarefas.push({
            id: id + 1, 
            tarefa: novatarefa, 
            realizada: false
        })

    }

    if (opcao == 4) {
        console.log('Concluir Tarefas');
        for (var cont in tarefas){
            if(tarefas[cont].realizada == false){
            console.log(tarefas[cont].id + ' - ' + tarefas[cont].tarefa);
            }
        }  
        
        const concluida = entrada('Insira o Id da tarefa a ser concluida: ');
        const editar = concluida - 1;
        const txtTarefaEdit = tarefas[editar].tarefa;
        
        tarefas[editar] = {
                
            id: editar, 
            tarefa: txtTarefaEdit, 
            realizada: true,
        }
    }

    if (opcao == 5) {
        console.log('Excluir tarefa');
        for (var cont in tarefas){
            if(tarefas[cont].realizada == true){
            console.log(tarefas[cont].id + ' - ' + tarefas[cont].tarefa);
            }
        }  
        
        const excluir = entrada('Insira o Id da tarefa a ser excluida: ');
        const t_excluir = excluir;
        let tempArray = tarefas;
        tarefas = tempArray.filter( item => item.id != t_excluir);
        
    }

}while(opcao != 0);

console.log('Programa Encerrado!');
entrada();
        