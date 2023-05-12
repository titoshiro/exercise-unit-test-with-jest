

test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One dollar should be 106.58333333333334 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(106.58333333333334); //1 dolar son 106.58333333333334, entonces 1dolares deberian ser = (1 / 1.2 * 127.9)
})
test("One yen should be 0.006254886630179828 Poundr ", function(){
    // importo la funcion desde app.js
    const { fromYenToPoundr } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPoundr(1)).toBe(0.006254886630179828); //1 yen son 0.006254886630179828 Poundr, entonces 1 yen deberian ser = (1/127.9 * 0.8)
})