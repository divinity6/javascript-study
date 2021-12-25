/**
 * 프로그램 설명문서 주석
 * 2021.06 22 수업
 *
 *
 *           ===== this와 인스턴스 =====
 *
 *      - 인스턴스 목적?
 *      --> 인스턴스마다 고유 값 유지
 *
 *      - 인스턴스에서 this의 목적?
 *      --> this로 인스턴스를 참조하여
 *      --> this.name 형태로 프로퍼티에 접근
 *      
 *      -__proto__ 프로퍼티 접근
 *      --> prototype에 연결된 프로퍼티가
 *      --> 인스턴스의 __proto__에 첨부되며
 *      --> this.method()형태로
 *          __proto__에 첨부된 method() 호출
 *          ( 여기서 prototype에 연결된 메소드는 모든 인스턴스에서 공유,
 *           그리고 인스턴스마다 고유의 값을 유지 )
 *           ---> 일관된 환경에서 값만 다르게 가져가겠다는 것.
 *                ( 데이터 중심의 처리 )
 */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

/**
 *
 *           ===== this와 인스턴스 =====
 *
 *      1. var obj = new book.Point(100);
 *      - book.Point 인스턴스를 생성
 *
 *      2. this.point = point;
 *      - this가 생성한 인스턴스를 참조하므로
 *        point는 인스턴스 프로퍼티가 된다.
 *
 *      - 이 논리로 인스턴스마다 프로퍼티 이름과
 *        값을 유지할 수 있다.
 *
 *      3. obj.getPoint();
 *      - obj 인스턴스의 getPoint()메소드 호출
 *
 *      4. console.log(this.point);
 *      - obj.getPoint()로 호출, this가 obj 참조
 *      - obj는 book.Point 인스턴스
 *      - book.Point 인스턴스의 point 값 출력
 *
 */

log('this와 인스턴스');
var book = {};
book.Point = function(point){
    // obj를 참조하는 this
    this.point = point;
}

// 프로토타입에 연결된 메소드에서 인스턴스의 프로퍼티를 새로 만들 수도 있다.
// 즉, 아무데서나 인스턴스에 값을 설정할 수 있다. (매우 유연)
// 그런데 여기있는 메소드들은 모두 인스턴스가 같다 (공유)
book.Point.prototype.getPoint = function(){
    console.log(this.point);
};

var obj = new book.Point(100);
// 여기서의 getPoint는 앞의 obj를 참조하게 된다.
obj.getPoint();

/**
 *           ===== 지금까지의 this와 인스턴스의 관계 정리. =====
 *
 *      - 인스턴스마다 값을 가져갈수있고 __proto__에 전체의 인스턴스에서
 *        공유할 수있는 메소드를 가지고 있다.
 *        (이것은 클래스관점의 접근이다)
 *
 *      - 클래스라는 하나의 덩어리(데이터 중심)
 *
 *      --> Point라는 하나의 클래스에는 point와 관련된
 *          메소드들이 안에 존재하게 된다.
 *      --> 따라서, Point 클래스만 보면 Point와 관련된 메소드들을 전부 알 수 있다.
 *          (가독성과 유지보수도 쉽다.)
 *
 *      === 이런관점에서 접근하면 확장성있는 시스템을 만들 수 있다. ===
 *          또한, 만드는 인스턴스마다 this로 참조하게되므로 안의 코드가 심플하다
 *
 *          변수도 별로없고 메소드의 흐름으로 시나리오를 처리할 수 있다.
 *          (클래스 사용 적극 추천)
 * */

/* test */
var test = 1;
book.Point2 = function(obj){
    this.obj = obj;
}

var obj2 = new book.Point2({
    test : this.test,
})
debugger;
console.log(obj2);


