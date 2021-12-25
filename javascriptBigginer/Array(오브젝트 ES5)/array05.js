/**
  * 프로그램 설명문서 주석
  * 2021.02 16 수업
  * 
  *     ===== every() =====
  * 
  *   - 구분                - 데이터(값)
  * 
  *   - data                - 반복 대상
  *   - 파라미터             - 콜백 함수
  *                         - this로 참조할 오브젝트 opt
  *   - 반환                 - true, false
  * 
  *   ---------------------------------------------------
  * 
  *   - forEach() 처럼 시멘틱 접근
  * 
  *   - 배열의 엘리먼트를 하나씩 읽어가면서
  *   ----> false를 반환할 때까지 콜백 함수 호출
  *   ----> 즉, false가 반환되면 반복 종료
  *   ----> false를 반환하지 않으면 true 반환
  * 
  *   - false가 되는 조건이 배열의 앞에 있을때 효율성이 높음
  * 
 */
console.log("=====================================");

window.onload = function() {
  "use strict"

  var value = [ 20 , 10 , 30 , 40 ];
  var fn = function( el , index , all ){
    console.log( el );
    return el > 15;
    // 1. 처음에 20을 읽으면 15보타 크므로 true 반환
    // 2. 다음의 10은 15보다 작으므로 false 반환
    //    false이므로 반복을 종료한다
    // 3. 따라서 [ 30 , 40 ]은 처리하지 않는다
  };
  
  var result = value.every( fn );
  // 4. result 변수에 false가 할당된다
  console.log( " 결과" , result );
  // 5. 배열의 마지막까지 처리했는데
  //    false가 반환되지 않으면
  //    true가 반환되며 result 변수에 설정된다.

  debugger;

  /*
          ===== some() =====

      - 구분                - 데이터(값)

      - data                - 반복 대상
      - 파라미터             - 콜백 함수
                            - this로 참조할 오브젝트 opt
      - 반환                 - true , false

      ---------------------------------------------------

      - every() 처럼 시멘틱 접근

      - 단, true를 반환할 때까지 콜백 함수 호출
      ----> 즉, true가 반환되면 반복 자동 종료
      ----> true를 반환하지 않으면 false 반환

      - true가 되는 조건이 배열의 앞에 있을 때 효율성이 높음
  */

  console.log('--- true, false 반환 ---')

  value = [ 10 , 20 , 30 , 40 ];
  fn = function( el , index , all ){
    console.log( el );
    return el > 15;
    // 1. 처음에 10을 읽으면 15보다 작으므로 false 반환
    //    false 이므로 다음 엘리먼트를 읽는다
    // 2. 다음의 20은 15보다 크므로 true 반환
    //    true 이므로 반복을 종료한다
    // 3. 따라서 [ 30, 40 ]은 처리하지 않는다
  }
  
  result = value.some( fn );
  // 4. result 변수에 true가 할당된다

  console.log("result :", result );

  debugger;
  /*
      지금까지 every() 메소드와 some() 메소드를 정리해보면

      forEach()메소드와 시멘틱접근은 같다
  
      다만 true 또는 false를 반환할 때까지 반복을 한다라는 것 뿐이다.

      그리고 그때마다 콜백함수를 호출하는 것이다
  
  */

}



