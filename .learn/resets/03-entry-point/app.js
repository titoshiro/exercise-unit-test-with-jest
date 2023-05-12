const sum = (a,b) => {
    return a + b
}


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
    

    
}
const fromDollarToYen = ()=> {
    return  
}
const fromEuroToDollar = ()=> {
    return  
}
const fromYenToPound = ()=> {
    return 
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))
console.log(fromEuroToDollar(3.5))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };