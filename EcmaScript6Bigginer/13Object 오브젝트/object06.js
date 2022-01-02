/**
 * 프로그램 설명문서 주석
 * 2021.10.05 수업
 *
 *
 *           ===== 함수로 추가 =====
 *
 *      - new 연산자로 인스턴스를 생성하고
 *      --> 인스턴스의 프로퍼티로 함수를 추가
 *      --> 다른 인스턴스와 공유하지 않음
 *
 *      - 인스턴스에 추가한 후의 인스턴스 구조
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 인스턴스에 추가한 후의 인스턴스 구조 ---------------');
    debugger;

    function Book() {
        this.point = 100;
    };

    const obj = new Book();
    debugger;

    Book.prototype.getPoint = function () {
        return this.point;
    };

    debugger;


    // 인스턴스 프로퍼티(함수)로 추가한다(prototype에 연결되어 있지 않으니 함수)
    obj.setPoint = function (param) {
        this.point = param;
    };

    // obj를 펼치면 __proto__ 위에 setPoint가 표시된다
    debugger;

    //-------------------------------------
    obj.setPoint(200);
    // 인스턴스의 함수 형태로 호출한다
    // 함수에서 this가 인스턴스를 참조한다.

    log(obj.getPoint());
    // :: 200
    // prototype에 연결된 메소드를 호출한다
    debugger;


    //-------------------------------------
    const newObj = new Book();
    log(newObj.setPoint);
    // :: undefined

    /**
     *      1. 새로운 인스턴스를 생성하면
     *      -  setPoint()를 인스턴스에서 사용할 수 없게 된다.
     *
     *      2. 인스턴스의 프로퍼티로 설정했기 때문이다
     *
     *      3. 인스턴스의 프로퍼티로 연결한 것과
     *      -  prototype에 연결한 메소드의 차이이다.
     */
    debugger;
}