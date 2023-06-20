function countNameRepetitions(names) {
    const result = {};
    for (let i = 0; i < names.length; i++) {
    const name = names[i];
        if (result[name]) 
            {
            result[name] += '*';
            } 
    else 
        {
            result[name] = '*'
        }
    }
    return result;
}


const names = ['Sebastian', 'María', 'Pedro','Pedro', 'Juan', 'María', 'María',];
const resultado = countNameRepetitions(names);
console.log(resultado);


