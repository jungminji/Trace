// IIFE 패턴, 기능 단위 모듈화
(function(window, document) {
  
    // 홀수를 구분하는 함수
    function isOdd(n) {
      return n % 2 !== 0
    }
    
    // String 값을 받은 후 검증
    function extractOddNumbers(str) {
      if (typeof str !== 'string' && str instanceof String) {
        return alert('문자열 값을 입력해주세요!');
      }
      // 정규식 패턴 연속되는 숫자
      var pattern = /[0-9]+/g
      // .match 함수를 사용, 정규 표현식에 맞아 떨어지는 값들의 배열을 반환
      // 그 후 Array.prototype.filter 메소드에 isOdd 콜백 함수를 던진다.
      // filter 메소드는 isOdd 에서 true 인 값들을 찾아 새로운 배열에 할당한 후 반환
      return str.match(pattern).filter(isOdd)
    }
  
    function getResult(str) {
      // 홀수를 추출한 후, 해당 배열을 reduce 메소드를 사용해 하나의 값으로 만든다.
      return extractOddNumbers(str).reduce(function(accm, curr){ 
        // Math.pow 는 curr(string) 값을 number 값으로 변환하고, accm 는 number
        // 누적값에 계속해서 제곱된 curr 값을 누적시킨 후 반환한다.
        return accm + Math.pow(curr, 2)
      }, 0) // 누적값의 초기값을 0 으로 선언
    }
  
    var zigzag = 'ab2v9bc13j5jf4jv21'
  
    var element = document.querySelector('#result') // Just in case non-developer checks the code
    element.innerHTML = getResult(zigzag)
  
    console.log('ES5: ' + getResult(zigzag))
    
  }(window, window.document))
  
  
  
  
  // ES6 문법을 활용한 코드의 간소화
  {
    const zigzag = 'ab2v9bc13j5jf4jv21'
  
    function oddNumsPowerSums(str) {
      // 정규식 패턴 선언
      const pattern = /[0-9]+/g
      // 정규식을 사용해 매칭 값을 배열 반환
      // filter 메소드를 사용해 홀수 값들 추출후 해당 리스트의 배열 반환
      // reduce 메소드를 사용해 제곱된 값들의 총 합을 반환
      return str.match(pattern).filter(n => n % 2 !== 0).reduce((accm, curr) => accm + Math.pow(curr, 2), 0)
    }
    console.log(`ES6: ${oddNumsPowerSums(zigzag)}`)
  }