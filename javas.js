const dados = document.getElementById("idtarefa")
const lista = document.getElementById('lista')
function clicar(){
    if(dados.value === ''){
        alert('Você deve inserir alguma tarefa!')
    }else{
        let li = document.createElement("li")
        li.innerHTML= dados.value
        lista.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    dados.value = ''
    saveData()
}
lista.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData() {
    localStorage.setItem("data", lista.innerHTML)

}
function showTask(){
    lista.innerHTML = localStorage.getItem("data")
}
showTask()