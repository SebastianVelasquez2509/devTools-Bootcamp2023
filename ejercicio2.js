const createPhoneNumber=(Number)=>{
    if(Number.length !== 10){
        return "El numero introducido tiene mas de 10 digitos" 
    }
    const number=Number.slice()
    const number2=number.splice(0,0,"(")
    const number3=number.splice(4,0,")")
    const number4=number.splice(5,0," ")
    const number5=number.splice(9,0,"-")
    const unir=number.join("")
    return unir
}
console.log(createPhoneNumber([3,1,8,7,2,2,0,6,8,2]))