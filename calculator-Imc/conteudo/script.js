

function calcImc(peso,altura){
    return  peso/(altura**2)*10000
}
console.log(calcImc(100,110).toFixed(2))