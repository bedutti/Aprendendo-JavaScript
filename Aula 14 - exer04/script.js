function contar(){
    const inicio = window.document.getElementById("txtInicio")
    const fim = window.document.getElementById("txtFim")
    const passo = window.document.getElementById("txtPasso")
    //Se algum campo está vazio
    if (txtInicio.value == "" || txtFim.value == "" || txtPasso.value == ""){
        window.alert("Todos os dados devem ser preenchidos.")
        return
    }
    const numInicio = Number(inicio.value)
    const numFim = Number(fim.value)
    const numPasso = Number(passo.value)
    //Verifica se a contagem é crescente com o passo negativo
    if(numInicio < numFim && numPasso < 0){
        window.alert("Para contagem crescente, utilize um passo positivo.")
        return
    }
    //Verifica se a contagem é decrescente com o passo positivo
    if(numInicio > numFim && numPasso > 0){
        window.alert("Para contagem decrescente, utilize um passo negativo.")
        return
    }
    //Verifica se o início e o fim são iguais
    if(numInicio == numFim){
        window.alert("Impossível contar se Início e Fim são iguais.")
        return
    }
    //Verifica se o passo é maior que a diferença entre o início e o fim
    if((numPasso > 0 && numPasso > numFim-numInicio) ||(numPasso < 0 && numPasso < numFim-numInicio) ){
        window.alert("Impossível contar com Passo maior que a diferença entre Início e Fim.")
        return
    }
    //Verifica se o passo é zero
    if(numPasso == 0){
        window.alert("Impossível contar com Passo igual à zero.")
        return
    }
    //Estando tudo validado ele começa a contagem
    const resposta = window.document.getElementById("res");

    resposta.innerHTML = "&#9757;&#127995; "
    resposta.innerHTML += "&#128073;&#127995; "

    for(var i = numInicio ; numPasso > 0 ? i <= numFim : i >= numFim ; i = i + numPasso){
        resposta.innerHTML += `${i} `
        resposta.innerHTML += "&#128073;&#127995; "
    }
    resposta.innerHTML += "&#128588;&#127995;"

}