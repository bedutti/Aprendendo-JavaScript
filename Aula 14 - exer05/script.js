function gerarTabuada(){
    const lista = window.document.getElementById("lstTabuada")
    const txtNum = window.document.getElementById("txtNumero")
    if(txtNum.value == ""){
        window.alert("Por favor, escolha um valor")
        return
    }
    lista.innerHTML = ``
    const num = Number(txtNum.value)
    let i = 1
    while(i<=10){
        let opt = window.document.createElement("option") //Cria uma opção para usar no HTML Select
        opt.innerHTML = `${num} x ${i} = ${Number.isInteger(num*i) ? (num*i) : Number(num*i).toFixed(2)}` //Altera o texto em html da opção
        lista.appendChild(opt) //Dá um append com a opção nova e adiciona a lista (Select)
        i++
    }
}