function calcularEstatisticas(){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    const pendentes = tarefas.filter(t => t.concluida == false )
    
    const qtdePendente = pendentes.length
    document.querySelector("#qtde-pendente").innerHTML = qtdePendente
}

calcularEstatisticas()
