/**
  * 프로그램 설명문서 주석
  * 2021.01.04 수업
  * 
  * ====== Number 인스턴스 생성,인스턴스 형태 ========
  *  
  * - new Number()
  * --> 구분            - 데이터(값)
  * --> 파라미터        - 값opt
  * --> 반환            - 생성한 number 인스턴스
  * --------------------------------------------
  * --> 빌트인 Number 오브젝트로
  * --> 새로운 Number 인스턴스를 생성
  * 
 */


console.log("=====================================");
"use strict"

// obj에 인스턴스가 할당됨
// - Number('123')을 이용하여 숫자타입에서 스트링타입으로 변환
// - 여기에 new 연산자를 이용하여 인스턴스를 생성
// - 이 인스턴스를 obj에 할당
var obj = new Number('123');

console.log(obj.valueOf());
debugger;





/*
   === 인스턴스 형태 ===

   - 인스턴스를 만드는 기준
*/
var numberObject = Number;

var obj = new Number("123");
/*
   1. 새로 생성한 Number 인스턴스가 obj에 할당됨

   2. 오른쪽 Local(orGlobal)의 obj를 펼친다
   - 빌트인 넘버오브젝트인 numberObject의 프로퍼티들이 들어가있지 않다(이것이 인스턴스를 만드는 목적)
   
   1) __proto__가 있으며
   - 단 인스턴스에 이것만 설정된다
   - 여기에있는것들은 numberObject의 prototype에 있다.

   >> '인스턴스를 만드는 기준'은 prototype오브젝트를 기준으로해서 여기에 연결되어 있는것만 가져온다
   >> 이것만 인스턴스에 할당 해 준다.( 그외의 것은 인스턴스에 할당하지 않는다)

   >>> 즉, 빌트인(built-in)넘버 오브젝트에 있는것을 복사해서 넘겨주는 데 prototype에 있는것만 넘겨준다
   >>> 나머지는 가려서 넘겨준다
   
   >>>> 다른정보를 보고싶으면 원본에 와서 봐라, 그대신 prototype은 내가 복사해서 넘겨주겠다


   2) [[PrimitiveValue]]: 123이 있다.
   Primitive:원시의

*/
debugger;

var proto = obj.__proto__;
// 그런데 다른것과 혼동 될 수 있으니깐 오브젝트에 넣어서주겠다. (__proto__)라는 오브젝트

/*
   3. __proto__를 펼친다.
   - 표시된 것은 빌트인 Number 오브젝트의 함수다

   4. Number 인스턴스를 생성하는 목적은
   - '표시된 함수를 사용하기 위함'이다

   5. 인스턴스를 생성하지 않고 다른방법으로
   - 함수를 사용할 수도 있다.

*/
console.log(proto);
console.log(typeof obj);