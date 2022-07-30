const tasks = [];
const id=[0];
let caixa = document.getElementById("tarefa");
caixa.focus();

function incluirTarefa(task){
    
if(task){
    tasks.push(task);
    caixa.value ="";
    caixa.focus();
    exibeTarefas(tasks);
    }
}

function exibeTarefas(task){

    
    let tabela = document.getElementById("tab");
    
    tabela.innerHTML = "";
    

    for(i=0;i < tasks.length;i++){
    
        let tr = document.createElement("tr");
        tabela.appendChild(tr);
        
        let td1 = document.createElement("td");
        td1.id = i;
        td1.innerText = task[i];
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.id = i;
        tr.appendChild(td2);

        let a = document.createElement("a");
        a.href = `javascript:excluiTarefa(${i})`;
        a.id = i;
        a.innerHTML = "<button class='btnexcluir'><img src='trash.svg' width='20px' style='color: white' />Excluir</button>";   
        td2.appendChild(a);
        caixa.focus();

}
}

function excluiTarefa(i){

    tasks.splice(i,1);
    exibeTarefas(tasks);
}

function limpaTudo(){
   
   if(tasks.length){
    var answer = window.confirm("Apagar todas as tarefas da lista?");
    if (answer) {
        
        tasks.splice(0,tasks.length);
        exibeTarefas(tasks);
        caixa.focus();
    }
    
}else{
    alert('Sua lista de tarefas está vazia!');
    caixa.focus();
}
}

document.addEventListener('keypress', function (event) {
    
    if (event.key == "Enter") {
       incluirTarefa(tarefa.value);
    }
    caixa.focus();
})

