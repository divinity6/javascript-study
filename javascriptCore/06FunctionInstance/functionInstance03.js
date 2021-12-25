/**
  * 프로그램 설명문서 주석
  * 2021.05 27 수업
  * 
  *           ===== constructor 프로퍼티 =====
  * 
  *           Book function 오브젝트 : {
  *               prototype: {
  *                 constructor: Book
  *               }
  *           }
  * 
  *   - 생성하는 function 오브젝트를 참조
  *   ----> function 오브젝트를 생성할 때 설정
  *   ----> prototype에 연결되어 있음
  * 
  *   - 개인 경험
  *   ----> constructor가 없더라도 인스턴스가 생성된다
  *   ----> 하지만, 필요하지 않다는 의미는 아니다
  * 
  *   - ES5: constructor 변경 불가
  *   ----> 생성자를 활용할 수 없음
  * 
  *   - ES6: constructor 변경 가능
  *   ----> 활용성 높음
  * 
  *   ------------------------------------------------------------
  *   
  *   - constructor 프로퍼티는 생성하는 function 오브젝트를 참조한다.
  *     constructor 프로퍼티는 function 오브젝트를 생성할때 설정한다.
  *     또한 prototype에 연결되어 있다.
  * 
  *   - 위의 식을보면 prototype이 오브젝트에 연결되고, prototype에
  *     constructor가 연결된다.
  *   ----> 그런데 constructor 프로퍼티의 값은 Book function 오브젝트
  *         전체를 참조한다.
  * 
  *   - 개인경험 : constructor가 없어도 인스턴스가 생성된다.
  *     ( 그러나 필요하지 않다라는 의미는 아니다. )
  * 
  *   - ES5기준에서는 의미가없다.
  *     constructor를 변경할 수도 없고, 외부에 노출되지도 않는다.
  *     ( 생성자를 활용할 수 없다는 아쉬움이 있다. )
  * 
  *   - ES6에서는 constructor를 변경할 수 있다.
  *     ( constructor에다 코드를 추가할 수 있다. == 활용성이 높다 )
  *   ----> 때문에 constructor를 활용하려면 ES6를 사용해야 한다.
  * 
  */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};

log('constructor 비교');

var Book = function(){};

var result = Book === Book.prototype.constructor;
console.log( "1 :" , result );

var obj = new Book();
console.log("2 :", Book === obj.constructor);

console.log( "3 :", typeof Book );
console.log( "3 :", typeof obj );

debugger;

/**
 *          ===== constructor 비교 =====
 * 
 *  1. Book === Book.prototype.constructor;
 *  - [실행결과] 1번에 true가 출력된 것은
 *  - Book 오브젝트와
 *    Book.prototype.constructor가 타입까지 같다는 뜻이다.
 * 
 *  - Book 오브젝트를 생성할 때
 *    Book.prototype.constructor가 
 *    Book 오브젝트(전체)를 참조하기 때문이다.
 * 
 *  2. Book === obj.constructor;
 *  - obj의 constructor가
 *    Book 오브젝트를 참조하므로
 *  - [실행결과] 2번에 true가 출력된다.
 * 
 *  3. typeof Book;
 *  - Book 오브젝트의 타입은 function
 * 
 *  4. typeof obj;
 *  - obj 인스턴스의 타입은 object
 * 
 *  5. function 오브젝트를 인스턴스로 생성했더니
 *  - object로 타입이 변경되었다.
 *  - 이것은 내부프로퍼티인 [[Constructor]]가 실행될 때
 *    생성한 오브젝트의 [[Class]]에
 *    'Object'를 설정하기 때문이다
 * 
 *  6. 오브젝트 타입이 바뀐다는 것은
 *  - 오브젝트 성격과 목적이 바뀐 것을 뜻한다
 *  - 다른 관점에서 접근해야 한다.
 *  ----> 따라서, 인스턴스는 다른관점에서 접근해야한다
 *        일반적인 함수 개념으로 접근하는 것이 아니라,
 *        인스턴스 개념으로 접근해야 한다.
 * 
 *  ----> 인스턴스의 가장 큰 특징은 prototype이 있으며,
 *        이 prototype에 많은 메소드들이 연결된다라는 것.
 *        ( 즉, 함수가 하나가 아니라 다수라는 것이다. )
 * 
 *  ----> function은 함수가 하나이다
 *        그러나 인스턴스는 함수가 다수이다.
 *        이것이 특징이다. 그래서 다른관점에서 접근해야 한다.
 *        ( 함수와 인스턴스의 차이를 정확하게 이해할 필요가 있다. )
 *  
 * 
 */






