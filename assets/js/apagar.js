const botoes = document.querySelectorAll(".btn-apagar")

function apagar(id) {

    console.log("apagar tarefa", id)

    //buscar os dados

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    //remover tarefa

    const tarefas_filtradas = tarefas.filter(tarefa => tarefa.id !== id)

    //salvar localsotrage

    localStorage.setItem("tarefas", JSON.stringify(tarefas_filtradas))

    atualizar()

    calcularEstatisticas()

}

