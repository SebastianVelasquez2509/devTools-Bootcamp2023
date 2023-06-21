const fizzBuzz=(number)=>{
    let xxx=[]
    for (let i = 1; i <= number; i++) {
        
        if(i%3 == 0){
            xxx.push("Fizz")
        }
        else if(i%5 == 0){
            xxx.push("Buzz")
        }
        else if(i%3 == 0 && i%5 == 0){
            xxx.push("fizzBuzz")
        }
        else {
            xxx.push(i)
        }
    }
    return xxx
}

console.log(fizzBuzz(15))