const sum = (a,b) => {
    return a + b
}


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
    

    
}
const fromDollarToYen = (num1)=> {
    return  num1 * 127.9
}
const fromEuroToDollar = (num2)=> {
    return num2 * 1.2 
}
const fromYenToPound = (num3)=> {
    return num3 *0.8
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))
console.log(fromEuroToDollar(3.5))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };