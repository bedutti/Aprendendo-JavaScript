let amigo = {
    nome: `José`,
    sexo: `M`,
    peso: 85.4,
    engordar(p = 0){
        this.peso = this.peso + p
    }
}
console.log(amigo.peso)
amigo.engordar(10)
console.log(amigo.peso)