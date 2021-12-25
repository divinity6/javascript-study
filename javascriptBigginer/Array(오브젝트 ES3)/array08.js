/**
  * 프로그램 설명문서 주석
  * 2021.02 06 수업
  * 
  *       ===== shift() =====
  * 
  *     - 구분              - 데이터(값)
  * 
  *     - data              - 대상
  *     - 파라미터           - 사용하지 않음
  *     - 반환              - 삭제한 엘리먼트
  * 
  *     -------------------------------------------------
  *     
  *     -- 배열의 첫 번째 엘리먼트 삭제
  * 
  *     -- 삭제한 엘리먼트 값이 undefined로 남지않고 완전히 삭제됨
  *     ----> length 값이 하나 줄어 듬
  * 
  *     -- 빈 배열이면 undefined가 반환된다
  * 
  *     ----------------------------------------------------
  * 
  *     -- 이것은 파라미터를 사용하지 않는다 정해졌으니... 첫번째 엘리먼트 삭제라는
  * 
 */
console.log("=====================================");

window.onload = function() {
  "use strict"
  
  console.log('--- 첫 번째 엘리먼트 삭제 ---');
  var value = [1 , 2, 34];
  
  console.log(value.shift());
  console.log(value);
  
  debugger;
  
  console.log('--- 빈 배열 ---');
  value = [].shift();
  console.log(value);
  // 삭제할게 없다라는 시멘틱? undefined
  
  debugger;

  /*
            ===== pop() =====

        - 구분                - 데이터(값)

        - data                - 대상
        - 파라미터             - 사용하지 않음
        - 반환                 - 삭제한 엘리먼트

        -----------------------------------------

        -- 배열의 마지막 엘리먼트 삭제

        -- 삭제한 엘리먼트 값이 undefined로 남지 않고 완전히 삭제됨
        ----> length 값이 하나 줄어든다

        -- 빈 배열이면 undefined 반환
  
  */

  console.log('--- 마지막 엘리먼트 삭제 ---');
  
  value = [1, 2, 34];
  var result = value.pop();

  console.log(result);
  console.log(value);

  /*
      다른 것은 없고 shift와 달리 마지막을 삭제한다고 보면된다
  */

  result =[].pop();
  console.log(result);
  debugger;
  
  /*
          ===== splice() =====

      - 구분                - 데이터(값)

      - data                - 대상
      - 파라미터             - 시작 인덱스, 디폴트:0
                            - 삭제할 엘리먼트 수
                            - 추가할 엘리먼트 : [item1 [,...]]] opt
      - 반환                 - 결과

      -----------------------------------------------------------

      -- 엘리먼트를 삭제하고 삭제한 엘리먼트 반환

      -- 삭제한 위치에 세 번째 파리미터 삽입

      -- 파라미터를 작성하지 않으면?

      ------------------------------------------------------------

      시작 위치부터 몇개를 삭제할 것인가
  */

  console.log('--- 파라미터 모두 작성 ---')
  value =[1,2,3,4,5];

  result = value.splice(1,3);
  // 1. 1번 인덱스부터 엘리먼트 3개를 삭제
  // 2. 뒤의 엘리먼트가 앞으로 당겨진다

  console.log(result);
  console.log(value);

  /*
      shift는 첫번째, pop은 마지막

      splice는 중간에 있는것들을 삭제하는것

      물론 splice도 마지막이나 첫번째를 삭제할 수 있지만

      시멘틱적으로 더좋은 shift나 pop을 사용한다
  
      -- 따라서 undefined를 설정하지 않고 엘리먼트를 삭제할 수있다
  */

  debugger;

  console.log('--- 삭제한 위치에 세 번째 파리미터 삽입 ---')
  
  value = [1, 2, 3, 4, 5];
  
  console.log(value.splice(1,3,'A',"B"));
  console.log(value);
  
  
  debugger;
  console.log('--- 파라미터를 작성하지 않음 ---')

  value = [1, 2, 3, 4, 5];
  // 1. 삭제하지 않는다
  console.log(value.splice());
  // 2. 삭제한 것이 없으므로 빈 배열 반환
  console.log(value);
  /*
      즉, 삭제할 엘리먼트 수는 필수이다(디폴트가 없다)
  */
  debugger;
}



