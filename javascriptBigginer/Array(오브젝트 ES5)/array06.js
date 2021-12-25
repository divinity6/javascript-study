/**
  * 프로그램 설명문서 주석
  * 2021.02 17 수업
  * 
  *     ===== filter() =====
  * 
  *     - 구분              - 데이터(값)
  * 
  *     - data              - 반복 대상
  *     - 파라미터           - 콜백 함수
  *                         - this로 참조할 오브젝트 opt
  *     - 반환              - [ true일 때의 엘리먼트 ]
  * 
  *     ------------------------------------------------
  * 
  *     - forEach()처럼 시멘틱 접근
  * 
  *     - 배열의 엘리먼트를 하나씩 읽어가면서
  *     --> 콜백 함수에서 true를 반환하면
  *         현재 읽은 엘리먼트를 반환
  * 
  *     - 조건에 맞는 엘리먼트를 추려낼 때 유용
  * 
 */
console.log("=====================================");

window.onload = function() {
  "use strict"

  var value = [ 10 , 20, 30 , 40 ];
  var fn = function( el , index , all ){
    return el > 15;
    // 1. [ 20 , 30 , 40 ]이 15보다 크므로
    //    return el > 15에서 비교 결과가 true이다
  }
  // 2. true일 때 현재의 엘리먼트를 반환한다
  // 3. 다수를 반환할 수 있으므로
  //    반환되는 엘리먼트를 배열에 첨부한다

  var result = value.filter( fn );
  // 4. 콜백 함수에서 false만 반환하면
  //    즉, true가 하나도 없으면
  //    빈 배열이 result 변수에 할당된다.

  console.log("결과 :", result);

  /*
    위의 식에서 10이 15보다 작으므로 result에 설정되지 않는다

    그리고 20은 15보다 크므로 true가되고 filter메소드는 true가 반환되면

    현재 처리중인 result 메소드에 push한다. 그리고 다시 콜백 함수를 호출한다

    그리고 그뒤의 것도 push 개념으로 뒤쪽으로 첨부된다

    즉, 콜백함수에서 true를 반환하면 현재읽은 엘리먼트 값을 result 변수에 첨부

    시켜서 반환하는것

    ==== 조건에 맞는 엘리먼트 값을 추려낼때 유용하다 ====
  
  */

  debugger;

  /*
          ===== map() =====

      - 구분              - 데이터(값)

      - data              - 반복 대상
      - 파라미터           - 콜백 함수
                          - this로 참조할 오브젝트 opt
      - 반환              - [ 콜백 함수에서 반환한 엘리먼트 ]

      -----------------------------------------------------

      -- forEach()처럼 시멘틱 접근

      -- 배열의 엘리먼트를 하나씩 읽어가면서
      ----> 콜백 함수에서 반환한 값을 새로운 배열에 첨부하여 반환
  */

  console.log('--- 반환한 값을 배열에 첨부 ---')

  value = [ 10, 20 , 30];

  fn = function( el , index , all ){
    return el + this.add;
  };

  var point = { add: 100 };
  result = value.map( fn , point );

  console.log( result );

  /*
      map은 callback함수에 반환된 값을 result 배열에 push를 하게된다

      forEach 메소드는 반환값이 없다. 반환을 하려면 콜백함수에서 의도적으로

      코드를 작성해야한다. 하지만 map은 값을 반환해주면 그 값을 배열로 반환해준다

      이런 측면에서 forEach와 map은 차이가 있다

      ----------------------------------------------------------------------

      값을 반환한다는 측면에서 본다면 map()메소드가 편리하지만 forEach가 그렇다고

      map보다 기능이 떨어지지 않는다. 왜냐하면 forEach 메소드와 map메소드는

      근본적으로 목적이 다르다.

      forEach는 for문의 확장이다. 그리고 map은 forEach메소드의 시멘틱으로 접근하면서

      기본적으로 콜백함수에서 반환한 값을 반환해 주는것

      === 사용하는 목적이 다르다 ===
  */

  debugger;

  console.log('--- forEach() ---')

  var list = [ 10 , 20 , 30 ];

  var callBack = function( el , index , all ){
    var sum = el + 10;
    console.log(sum);
    list.push(sum);
  };

  var outcome = list.forEach( callBack );
  // forEach는 반환하는 것이 없기 때문에 undefined가 뜬다
  // forEach는 그래서 오브젝트의 값을
  // 안에서 처리할때 쓰면될듯

  console.log("결과 :", list)

  debugger;
}



