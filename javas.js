const dados = document.getElementById("idtarefa")
const lista = document.getElementById('lista')
function clicar(){
    if(dados.value === ''){
        alert('Você deve inserir alguma tarefa!')
    }else{
        let li = document.createElement("li")
        li.innerHTML= dados.value
        lista.appendChild(li)
    }
    dados.value = ''
}