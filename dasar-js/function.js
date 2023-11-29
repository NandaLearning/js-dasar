function kubus (a,b){
    let nilaiA = a * a * a
    let nilaib = b * b * b

    let nilaiC = nilaiA + nilaib

    return nilaiC;
}
console.log(kubus(17,2))



//refactoring (konsep penulisan kode efisien)
function kotak(a,b){
    return a * a * a + b * b * b;
}
console.log(kotak(10,2))