let num = [5,6,7,8]
console.log(`Nosso vetor é o ${num}`)
num[3] = 4
console.log(`Nosso vetor é o ${num}`)
num.push(7.5)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
num.sort()
console.log(`Nosso vetor é o ${num}`)
num.push(16.8)
num.sort((a,b)=>a-b) //Rearranja o array crescentemente
num.push(1)
num.sort((a,b)=>b-a) //Rearranja o array decrescentemente
console.log(`Nosso vetor é o ${num}`)
var nam = num.reduce((a,b)=>a+b) //Soma todos os valores da array em uma nova array
console.log(`Nosso vetor é o ${nam}`)
nam = num.filter(a=>Number.isInteger(a)) //Filtra os valores de uma array em nova array
console.log(`Nosso vetor é o ${nam}`)
for(let pos in nam){ //for exclusivo para arrays
    console.log(nam[pos])
}
console.log(num.indexOf(55)) // retorna o indice do valor 7