// desarrollar una función que sume todos los dígitos contenidos en un string. 
function sumNumbers(str) {
  let suma= 0
  str.split("").map(num=>{
    if(num>=0){
      suma += parseInt(num)
    }
  })
 return suma
}

console.log(sumNumbers('23a5we2w3s4') === 19)
console.log(sumNumbers('7c2we4q2s3as5') === 23)
console.log(sumNumbers('8a3vgh7h6h-4s6') === 34)