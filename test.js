

test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One dollar should be 127.9 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(2)).toBe(255.8); //1 dolar son 255.8 yens, entonces 2 dolares deberian ser = (1.2 * 127.9)
})
test("One yen should be 0.8 Poundr ", function(){
    // importo la funcion desde app.js
    const { fromYenToPoundr } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPoundr(2)).toBe(1.6); //1 yen son 0.8 Poundr, entonces 2 yen deberian ser = (2 * 0.8)
})