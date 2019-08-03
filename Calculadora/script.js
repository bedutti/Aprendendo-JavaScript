var resultado = window.document.getElementById("resultado");
var val1 = '0';
var val2 = '0';
resultado.innerText = '0';
var operando = 'nenhum';
var repetir = false;

function zerar(){
    val1 = '0';
    val2 = '0';
    operando = 'nenhum';
    repetir = false;
}
function c(){
    zerar();
    resultado.innerText = '0';
}
function ce(){
    val2 = '0';
    resultado.innerText = '0';
}
function n0(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '0'
        resultado.innerText = Number(val1);
    }else{
        val2 += '0'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function virgula(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '.'
        resultado.innerText = Number(val1);
    }else{
        val2 += '.'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function n1(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '1'
        resultado.innerText = Number(val1);
    }else{
        val2 += '1'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function n2(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '2'
        resultado.innerText = Number(val1);
    }else{
        val2 += '2'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function n3(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '3'
        resultado.innerText = Number(val1);
    }else{
        val2 += '3'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function n4(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '4'
        resultado.innerText = Number(val1);
    }else{
        val2 += '4'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function n5(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '5'
        resultado.innerText = Number(val1);
    }else{
        val2 += '5'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function n6(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '6'
        resultado.innerText = Number(val1);
    }else{
        val2 += '6'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function n7(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '7'
        resultado.innerText = Number(val1);
    }else{
        val2 += '7'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function n8(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '8'
        resultado.innerText = Number(val1);
    }else{
        val2 += '8'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function n9(){
    if(repetir){
        zerar();
    }
    if(operando === 'nenhum'){
        val1 += '9'
        resultado.innerText = Number(val1);
    }else{
        val2 += '9'
        resultado.innerText = Number(val2);
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function mais(){
    if(repetir){
        val2 = '0';
    }
    if(operando === 'soma'){
        resultado.innerText = Number(val1) + Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'subtracao'){
        resultado.innerText = Number(val1) - Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'multiplicacao'){
        resultado.innerText = Number(val1) * Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'divisao'){
        resultado.innerText = Number(val1) / Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }
    operando = 'soma';
    repetir = false;
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function menos(){
    if(repetir){
        val2 = '0';
    }
    if(operando === 'subtracao'){
        resultado.innerText = Number(val1) - Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'soma'){
        resultado.innerText = Number(val1) + Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'multiplicacao'){
        resultado.innerText = Number(val1) * Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'divisao'){
        resultado.innerText = Number(val1) / Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }
    operando = 'subtracao';
    repetir = false;
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function vezes(){
    if(repetir){
        val2 = '0';
    }
    if(operando === 'multiplicacao'){
        resultado.innerText = Number(val1) * Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'subtracao'){
        resultado.innerText = Number(val1) - Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'soma'){
        resultado.innerText = Number(val1) + Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'divisao'){
        resultado.innerText = Number(val1) / Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }
    operando = 'multiplicacao';
    repetir = false;
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function divisao(){
    if(repetir){
        val2 = '0';
        operando = 'nenhum';
    }
    if(operando === 'divisao'){
        resultado.innerText = Number(val1) / Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'multiplicacao'){
        resultado.innerText = Number(val1) * Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'subtracao'){
        resultado.innerText = Number(val1) - Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }else if(operando === 'soma'){
        resultado.innerText = Number(val1) + Number(val2);
        val1 = Number(resultado.innerText);
        val2 = '0';
    }
    operando = 'divisao';
    repetir = false;
    resultado.innerText = resultado.innerText.replace('.', ',');
}
function igual(){
    if(operando === 'soma'){
        resultado.innerText = Number(val1) + Number(val2);
        val1 = Number(resultado.innerText);
        repetir = true;
    }else if(operando === 'subtracao'){
        resultado.innerText = Number(val1) - Number(val2);
        val1 = Number(resultado.innerText);
        repetir = true;
    }else if(operando === 'multiplicacao'){
        resultado.innerText = Number(val1) * Number(val2);
        val1 = Number(resultado.innerText);
        repetir = true;
    }else if(operando === 'divisao'){
        resultado.innerText = Number(val1) / Number(val2);
        val1 = Number(resultado.innerText);
        repetir = true;
    }
    resultado.innerText = resultado.innerText.replace('.', ',');
}
