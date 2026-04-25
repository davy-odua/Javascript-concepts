//FUNCTIONS
//Functions are resuable blocks of code that perform specific tasks

function add(numb1, numb2){
    return numb1 + numb2
}

console.log(add(5, 4))


//Regular functions
function convertUsdToAud (usd){
    return usd * 1.5;
    
}

console.log(convertUsdToAud(1000))
console.log(convertUsdToAud(500))
console.log(convertUsdToAud(200))
console.log(convertUsdToAud(100))


// Arrow functions
const convertUsdToAud2 = (usd) => {
     return usd * 1.5;

}
console.log(convertUsdToAud2(1000))






