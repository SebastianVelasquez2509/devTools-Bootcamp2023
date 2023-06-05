function next_pal(numero){
    numero++
    let num=numero.toString()
    let xxx=num.split("").reverse().join("")
    while (true){
        if(num===xxx){
            return numero
        }
        else{
            return next_pal(numero)
        }
    }
}
console.log(next_pal(11))