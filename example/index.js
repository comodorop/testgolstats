// desarrollar una función que determine si un string es un palíndromo
function isPal(str) {
  let ok = false
  let data = ''
  for(let x = (str.length -1); x>= 0; x--){
    data = data+ str[x]
  }
  if(data === str){
    ok = true
  }
  return ok
}

console.log(isPal('aaabbaaa')) // true
console.log(isPal('123454321')) // true
console.log(isPal('murcielago')) // false