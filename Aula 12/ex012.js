var agora = new Date();
console.log(`Agora são exatamente ${agora.getHours()} horas`);
if(agora.getHours() < 12){
    console.log(`Dom dia!`);
}else if(agora.getHours() <= 18){
    console.log(`Boa tarde!`);
}else{
    console.log(`Boa noite!`);
}