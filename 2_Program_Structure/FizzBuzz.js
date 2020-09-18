let toDivide = 1;
for(let i = 0; i < 100; i++){
  if(toDivide % 3 === 0 && toDivide % 5 === 0) {
    console.log("FizzBuzz")
  } else if(toDivide % 3 === 0){
    console.log("Fizz")
  } else if(toDivide % 5 === 0){
    console.log("Buzz")
  } else console.log(toDivide)
  toDivide++
}
