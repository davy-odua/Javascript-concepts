//LOOPS
//Loops repeat the same code over and over again
//DRY

counter = 1

while (counter <= 20){
    console.log(counter)
    counter += 1;
}
console.log("While loop finished running")


for (let i = 1; i <= 50; i++){
    console.log(i) 

}



//EXAMPLE
for (let i = 1; i <= 15; i++ ){
    if (i % 5 === 0){
        console.log(`${i} ASAP Frontend`)
    }
    else if (i % 2 === 0 ){
        console.log(`${i}  Frontend`)
    }
    else{
        console.log(`${i} ASAP`)
    }
}

//Example2
str = "ASAP Frontend"
for (let i = 0 ; i < str.length ; i++){
    console.log(str[i])
}






