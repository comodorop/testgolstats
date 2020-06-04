function makeCounter(counter, step) {
  console.log(counter, step)
  function next() {
    return counter += step;
  }
  
  return next;
}

var counter2 = makeCounter(10,2);
console.log(counter2)



// console.log(counter2())// sumamos dos, 12


// console.log(counter2()); // sumamos dos, 14




// var counter10 = makeCounter(50, 10);
// counter10(); // sumamos 10, 60
// console.log(counter10()); 