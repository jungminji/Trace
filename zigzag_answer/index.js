// ES5 IIFE pattern, and modualized functions
(function(window, document) {

  function isOdd(n) {
    return n % 2 !== 0
  }

  // Expected to get String value when function is called
  // RegEx to find only numbers from given string, then filter the odd numbers
  function extractOddNumbers(str) {
    var pattern = /[0-9]+/g
    return str.match(pattern).filter(isOdd)
  }

  // Never said given String has only a single number so, decided to use reduce method
  function getResult(str) {
    return extractOddNumbers(str).reduce(function(accm, curr){ 
      return accm + Math.pow(curr, 2) // Math.pow will convert String value to Number (which is curr)
    }, 0) // Set initial accumulator value to 0 (typeof Number), if not specify, initial value is set to the first element of array
  }

  var zigzag = 'ab2v9bc13j5jf4jv21'

  var element = document.querySelector('#result') // Just in case non-developer checks the code
  element.innerHTML = getResult(zigzag)

  console.log(getResult(zigzag))
  
}(window, window.document))




// ES6, single methods
{
  const zigzag = 'ab2v9bc13j5jf4jv21'

  function oddNumsPowerSums(str) {
    const pattern = /[0-9]+/g

    return str.match(pattern).filter((n) => {
      return n % 2 !== 0
    }).reduce((accm, curr) => {
      return accm + Math.pow(curr, 2)
    }, 0)
  }
  console.log(oddNumsPowerSums(zigzag))
}