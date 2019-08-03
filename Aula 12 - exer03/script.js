function verificar(){
    var data = new Date();
    var ano = Number(data.getFullYear());
    var fAno = window.document.getElementById("txtAno");
    var res = window.document.getElementById("res");
    if(fAno.value.length == 0 || Number(fAno.value) > ano || Number(fAno.value) < 0){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }else{
        var fSex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fSex[0].checked){
            genero = 'Homem'
            if(idade < 10){
                img.setAttribute('src', 'fotobebemenino.png');
            }else if(idade < 21){
                img.setAttribute('src', 'fotojovemhomem.png');
            }else if(idade < 50){
                img.setAttribute('src', 'fotoadultohomem.png');
            }else{
                img.setAttribute('src', 'fotosenhorhomem.png');
            }
        }else if(fSex[1].checked){
            genero = 'Mulher';
            if(idade < 10){
                img.setAttribute('src', 'fotobebemenina.png');
            }else if(idade < 21){
                img.setAttribute('src', 'fotojovemmulher.png');
            }else if(idade < 50){
                img.setAttribute('src', 'fotoadultamulher.png');
            }else{
                img.setAttribute('src', 'fotosenhoramulher.png');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.style.textAlign = 'center';
        res.appendChild(img);
    }
}