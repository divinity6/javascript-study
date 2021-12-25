/**
  * 프로그램 설명문서 주석
  * 2021.02 21 수업
  * 
  *        ===== 인스턴스 연습 =====
 */
console.log("=====================================");

window.onload = function() {
    "use strict"
    // console.log 사용
  //   var log = function( value , key ){
  //     if ( key === "note") {
  //         console.log('--- ' + value +' ---');
  //     } else { console.log(value); }
  // };


  var Coffee = function(value) {
    this.value = value;
    // 여기에서 instance에 value를 설정하는구나
  }

  Coffee.prototype.getValue = function() {
    var result = this.value + 100;
    return result;
  }

  var instance = new Coffee(200);
  var two = new Coffee(100);

  console.log( "Coffee Type : ",typeof Coffee);
  console.log( "instance : ", instance);
  console.log( "instance.getValue() : ", instance.getValue());
  console.log( "two.getValue() : ", two.getValue());

  debugger;


  // -----------------------------------------------------------------

  /*
      log 만들기2

      아몰라 다음에 다시해 시간다감ㅋㅋㅋㅋ
  */


  var log = function() {
    // 1. 객체(클래스)를 생성해서 값을 지정하기(모두가 공통으로 갖는것)
    var LogClass = function( division ) {

      // 모두가 공통으로 갖는 값 지정
      this.division = division;
    };

    // 3. 객체(prototype)안에 있는 메소드를 인스턴스가 참조해 
    //    각각의 인스턴스가 주석인지 아닌지 구분하기
    LogClass.prototype.getDivisionValue = function() {
      // 4. 만약 note라고 쓰여있으면 주석처리
      if ( this.division == "note" ) {
        this.division = "첫머리 주석임 :" + this.division;

      // 5. 그러지 않을경우는 일반 주석처리
      } else { 
        this.division = "그냥 주석임 :" + this.division;
       }
      return this.division;
    };

    // 2. 들어오는 값을 받아서 인스턴스에 할당하기
    var list = [];
    var sortValue
    for ( var i = 0; i < arguments.length; i++) {
      list.push(arguments[i]);
      sortValue = new LogClass(list[i]);
    };



    console.log(sortValue.getDivisionValue());
    debugger;
    // sortValue를 반환하기
    return sortValue.getDivisionValue();

  }

  console.log(log("test1","test2"));

  debugger;

}