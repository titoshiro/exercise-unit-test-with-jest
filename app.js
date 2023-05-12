
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yen
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}
const fromYenToPoundr = function(valueInYen){
    // convertimos el valor a de poundr
    let valueInPoundr = valueInYen * 0.8;
    // retornamos el valor
    return valueInPoundr;
}







const sum = (a,b) => {
    return a + b
}


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))
console.log(fromEuroToDollar(3.5))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPoundr };