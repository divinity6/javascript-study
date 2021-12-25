/**
  * 프로그램 설명문서 주석
  * 2021.05 14~15 수업
  * 
  * 
  *   - 지금까지 엔진 중심으로 다루었지만, 지금부터는 엔진처리를
  *     바탕으로 한 활용을 다룬다.
  *   - 아울러, 자바스크립트에서 고려할 사항들이 있다.
  * 
  *   -----------------------------------------------------
  * 
  *           ===== function 인스턴스 기준 =====
  * 
  *   - function 구분
  *   ----> 빌트인 Function 오브젝트
  *   ----> function 오브젝트 : function 키워드로 생성
  *   ----> function 인스턴스 : new 연산자로 생성
  * 
  *   - function 오브젝트도 인스턴스
  *   ----> 빌트인 Function 오브젝트로 생성하기 때문
  *   ----> 성격적으로는 인스턴스이지만
  *   ----> new 연산자로 생성한 인스턴스와
  *         구분하기 위해 강좌에서는 function 오브젝트로 표기한다
  * 
  *   - new 연산자로 생성하는 인스턴스는
  *   ----> 일반적으로 prototype에 프로퍼티를 작성한다.
  * 
  *   -----------------------------------------------------
  *   
  *   - 앞서다루었지만 전체 시나리오를 위해 다시 정리한다.
  *   ----> function 구분에서 built-in Function 오브젝트가 있다.
  *         ( 이것은 엔진에서 제공해 주는 것이다. )
  *   ----> 그리고 function 키워드로 생성하는 function 오브젝트가 있다.
  *   ----> 그리고 new 연산자로 생성하는 function 인스턴스가 있다.
  * 
  *   - 그런데 function 오브젝트도 인스턴스이다.
  *   ----> 왜냐하면 bulit-in Function 오브젝트로 생성하기 때문에 그렇다.
  *   ----> 하지만, 성격적으로는 인스턴스 이지만.
  *         new 연산자로 생성한 인스턴스와 구분하기 위해서
  *         강좌에서는 function 오브젝트로 표기한다.
  *         ( 일반적으로 말하는 함수는 function 오브젝트이다. )
  * 
  *   - new 연산자로 생성하는 인스턴스는
  *   ----> 일반적으로 prototype에 프로퍼티를 작성한다.
  *         Book.prototype하고 getPoint 메소드, setPoint 메소드등
  *         프로퍼티 이름과 값으로 첨부시킬 수 있다.
  * 
  *   ----> 따라서, prototype만 보면 new 연산자로 인스턴스를 
  *         만들겠다는 것을 짐작할 수 있다.
  * 
  *   ----> 만약, new 연산자를 사용해서 인스턴스를 만들지 않는다면
  *         특별한 케이스이다.
  *         ( 물론, Book.prototype.getPoint로만 만들 수도 있지만
  *           일반적인 케이스는 아니다. )
  * 
  *   - 왜냐하면 new 연산자로 인스턴스를 만들지 않는다면 그냥 function으로
  *     선언하는 것이 낫기 때문이다.
  * 
  */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};


log('function 인스턴스 생성');

function Book( point ) {
  this.point = point;
  // 그리고 인스턴스를 return한다
};

Book.prototype.getPoint = function(){
  return this.point + 200;
};
debugger;
var obj = new Book(100);
obj.getPoint();
console.log( obj );
console.log( typeof Book );
console.log( Book );
console.log( obj.point );
console.log( obj.getPoint() );
debugger;

/**
 *          ===== function 인스턴스 생성 =====
 * 
 *  위 코드는 function 인스턴스를 생성하는 전형적인 형태다.
 *  
 *  ----------------------------
 *     인스턴스 생성 순서, 방법
 *  ----------------------------
 * 
 *  1. function Book( point ){...}
 *  - Book 오브젝트를 생성한다
 *  - Book.prototype이 만들어 진다.
 * 
 *  2. Book.prototype.getPoint = function(){}
 *  - Book.prototype에 getPoint를 연결하고
 *    function(){}을 할당한다.
 *  - Book.prototype이 오브젝트이므로
 *    프로퍼티를 연결할 수 있다.
 * 
 *  3. var obj = new Book(100);
 *  - Book()을 실행하면 인스턴스를 생성하고
 *    생성한 인스턴스에 point 값을 할당한다.
 * 
 *  4. console.log( obj.point );
 *  - obj 인스턴스에서 프로퍼티 이름으로 값을 구해 출력한다.
 * 
 *  5. console.log( obj.getPoint() );
 *  - obj 인스턴스의 메소드를 호출한다.
 * 
 *  6. return this.point + 200;에서
 *  - this가 obj 인스턴스를 참조한다.
 * 
 *  7, 강좌의 함수/메소드 사용 기준
 *  - Book() : 함수
 *  - getPoint() : 메소드, prototype에 연결
 * 
 *  -----------------------------------------------------------
 * 
 *  - 위의 코드는 function 인스턴스를 만드는 전형적인 형태이다.
 *    ( 개념적으로 살펴보겠다. )
 *  1. function Book에서 Book은 Book 오브젝트를 만든다.
 *     이때, Book오브젝트에 prototype이 만들어 진다.
 *     ( 이것은 엔진이 자동으로 만든다. )
 * 
 *  2. [[그리고 prototype은 오브젝트이다]]
 *     ( 그래서 인스턴스를 만들면 proto가 Object 타입인가 부다. )
 *     따라서 prototype.getPoint 처럼 프로퍼티를 연결할 수 있는 것이다.
 * 
 *  ----> Book.prototype에 getPoint를 연결하고 
 *        function(){}(function 오브젝트)를 할당한다.
 *        프로퍼티 관점에서 본다면 getPoint는 이름이되고 function(){}는 값이 된다.
 *        { getPoint : function() {} }
 * 
 *  ----> Book.prototype이 오브젝트이기 때문에 프로퍼티를 연결할 수 있다.
 * 
 *  3. 그리고 내려와서 new Book()을 실행하면, Book을 호출한다.
 *     그럼 Book이 실행된다. 그럼 실행되자마자 우선 인스턴스를 생성한다.
 *     그리고 [[ 생성한 인스턴스에 코드를 실행해서 point 값을 설정]]하게 된다.
 * 
 *  ----> [[여기서 this는 생성한 인스턴스를 참조한다.]]
 *        따라서, 인스턴스에 point값이 할당된다.
 * 
 *  ----> 그럼 어떻게 들어가는가? point 값이 현재 100이다.
 *        { point : 100 } 형태로 들어가게 된다.
 * 
 *  ----> 그리고 Book.prototype에 연결되어 있는 메소드들,
 *        그것을 생성한 인스턴스에다가 설정한다.
 *  
 *  ----> 이때, Book.prototype을 빼버린다. 즉 { 이름 : 값 }
 *        형태로 인스턴스에다가 설정한다.
 *        { getPoint : function(){} } 형태
 *        
 *        이것은 프로토 타입에 연결되어 있는 모든것이 대상이 된다.
 *        ( 하나도 빠짐없이 이름과 값 형태로 인스턴스에 할당하게 된다. )
 *  
 *  ----> 그리고 인스턴스에 할당된 것을 가지고 
 *        return 문이 없더라도 자동적으로 인스턴스를 리턴하게 된다.
 *        그렇게 되면 obj에 할당하게 된다.
 * 
 *  4. 그리고 obj.point는 obj가 인스턴스다.
 *     그러면 obj인스턴스에서 프로퍼티 이름으로 point를 찾는다.
 *      ( 식별자 해결을 하는 것 )
 *  ----> 그러면 new Book(100)에서 넘겨준 100이 반환될 것이다.
 * 
 *  5. 그다음 인스턴스의 getPoint 메소드를 호출한다.
 *  
 *  ----> 이것은 prototype에 연결되어있다.
 *        하지만, prototype을 작성하지 않고 부른다.
 *        바로, 인스턴스 name에 getPoint()를 호출한다.
 *        ( obj.getPoint() );
 * 
 *  ----> 그러면 Book.prototype.getPoint이 실행된다.
 *        이때, 그안의 return this.point + 200;의
 *        this는 obj를 참조하게 되는데,
 *        obj가 무엇인가 하면 인스턴스이다. new Book(100)으로 만든,
 * 
 *  ----> 그럼 인스턴스를 생성한 function Book(point) {}안의
 *        this.point를 참조하게 될것이다.
 * 
 *  ----> 그럴때 point의 값이 100이니깐 100 + 200이 되는 것이다.
 * 
 */