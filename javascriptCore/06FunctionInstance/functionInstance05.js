/**
 * 프로그램 설명문서 주석
 * 2021.06 10 수업
 *
 *      ( 모든 객체는 자신의 prototype으로부터 constructor 속성을 상속 )
 *
 *           ===== prototype 확장 방법 =====
 *
 *      - prototype에 프로퍼티를 연결하여 작성
 *      ----> prototype.name = value 형태
 *
 *      - name에 프로퍼티 이름 작성
 *        예) value가 메소드이면 name은 메소드 이름이 된다.
 *            value가 Number이면 name은 프로퍼티 이름이 된다.
 *
 *      - value에 JS 데이터 타입 작성
 *      ----> 일반적으로 function을 사용
 *            (그러나 123처럼 숫자를 작성할 수도 있다.)
 *
 *      - prototype에 null을 설정하면 더이상 확장 불가
 *        (더이상 확장하지 않겠다라는 시멘틱)
 *
 *      -------------------------------------------------------
 *
 *           ===== 프로퍼티 연결 고려사항 =====
 *
 *      - prototype에 연결할 프로퍼티가 많을 때
 *      ----> Book.prototype.name1,2,3 ~ N 형태는
 *      ----> Book.prototype을 반복해서 작성해야 하므로 번거롭다.
 *      ----> Book.prototype = { name1 : value ,... } 형태로 작성
 *            ( 중괄호 안에 name : value 형태로 할당을 하게 된다. )
 *
 *      - constructor가 지워지는 문제와 대책
 *      ----> { name1 : value,... } 형태로 설정한 후
 *      ----> prototype에 constructor를 다시 연결
 *            (가독성이 좋음)
 *
 *      -----------------------------------------------------------------
 *
 *      === 나의 논리 ===
 *      - =은 할당개념이다. prototype을 {}로 할당한다는 뜻이다.
 *        그렇기 때문에 cosntructor가 사라지는 것이다.
 *        또한, 개인적인 생각으로는 사라지는것이 맞다 왜냐하면
 *        constructor에는 생성자함수전체가 할당되어있다.
 *        그러나 중괄호 형태(object 형태)로 추가하게되면
 *        ( constructor가 생성자함수전체를 담을 수 없게되므로 )
 *        Book !== Book.prototype.constructor가
 *        되기 때문에 다시 constructor를 설정해주는 것이다?
 *
 *      - 새로만들어진 객체는 constructor가 존재하지 않는다. 따라서,
 *        constructor를 만들고, 그 프로퍼티가 자신을 생성한 함수를 가리키도록
 *        재 할당하는 작업을 거쳐야 한다.
 *
 */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

/**
 *
 *           ===== constructor 연결 =====
 *
 *      1. 오브젝트 리터럴{}을 사용하여
 *      - 프로퍼티를 연결할 때에는
 *      - constructor가 지워지는 것을 고려해야 한다.
 *
 *      2. constructor가 없어도 인스턴스가 생성되지만
 *      - constructor가 연결된 것이 정상이므로
 *      - 코드처럼 constructor에 Book function을 할당한다.
 *
 */
debugger;

function Book() {
};
// 이와같이 다수의 메소드를 prototype에 연결할때는
// constructor가 지워지는 것을 고려해야하지만,
// ES5에서는 constructor가없어도 인스턴스가 생성되긴 한다.
// 그러나 있는것이 정상이기 때문에 의도적으로 작성을 해줘야한다.
Book.prototype = {
    constructor: Book,
    setPoint: function () {
    }
};

var obj = new Book();
console.log(obj.constructor);

// 위처럼 작성하는 것이 ES5환경에서는 정확하다.
// 그러나 ES6에서는 이런것을 고민하지 않아도 된다.


log('프로퍼티 확장과 인스턴스');

// 생성자함수
function Book2(point) {
    this.point = point;
};

Book2.prototype.getPoint = function () {
    return this.point
};

var obj = new Book2(100);
debugger;
obj.getPoint();

/**
 *
 *           ===== prototype 확장과 인스턴스 형태 =====
 *
 *      -------------------------------------------------
 *                     obj: {
 *                        point: 100,
 *                         __proto__ = {
 *                            constructor : Book,
 *                            getPoint : function(){},
 *                            __proto__ : Object
 *                         }
 *                     }
 *      -------------------------------------------------
 *
 *      prototype을 확장하는 방법과
 *      생성한 인스턴스 형태를 살펴본다
 *
 *      -----------------------
 *          prototype 확장
 *      -----------------------
 *
 *      1. function Book2(point){};
 *      - Book2 오브젝트 생성
 *
 *      2. Book2.prototype.getPoint = function(){}
 *      - Book2.prototype에 getPoint 메소드 연결
 *
 *      3. var obj = new Book2(100);
 *      - 인스턴스를 생성하여 obj에 할당
 *
 *      4. obj.getPoint()
 *      - obj 인스턴스의 getPoint() 호출
 *
 *      5. 인스턴스를 생성하면
 *      - prototype에 연결된 메소드를
 *      - 인스턴스, 메소드이름()형태로 호출
 *
 *      ----> 이렇게 호출하면 엔진이 obj안을 위에서부터 쭉돌면서
 *            getPoint()를 찾는다( 계층적으로 찾는 것 )
 *
 *      ----> 예) __proto__ : Object의 prototype에 있는 메소드를
 *            obj에 중복적으로 사용했다 하더라도,
 *            Object의 메소드가 호출되지는 않는다.
 *
 *      ----> 왜냐하면 앞에 있는 것이 먼저 실행되기 때문이다.
 *
 *      ----> 또한 obj.getPoint를 하면 __proto__안에있는 것이 호출되는데
 *            이것은 가독성을 위한 것이고 사실은 원본(Book2)에 있는 getPoint를
 *            호출하게 되는 것이다.
 *
 *
 */
