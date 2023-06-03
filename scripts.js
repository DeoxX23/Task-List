let input = document.querySelector("#input-principal")
let botao = document.querySelector("#botao-adicionar")
let listaCompleta = document.querySelector("#tarefas")


let arrayDeTarefas = []

const mostrarNaTela = () => {
    let novaLista = ""

    arrayDeTarefas.forEach (tarefa => {
        novaLista = novaLista + `
        <li class="item-tarefaS">
            <p id="">${tarefa}</p>
        </li>
        `
        listaCompleta.innerHTML = novaLista
    })

}

const clique = () => {
    arrayDeTarefas.push(input.value)
    mostrarNaTela()
}

botao.addEventListener(`click`, clique)