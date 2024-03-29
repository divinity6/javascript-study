/**
  * 프로그램 설명문서 주석
  * 2021.02 04 수업
  * 
  *       ===== unshift() =====
  * 
  *     - 구분              - 데이터(값)
  * 
  *     - data              - 기준
  *     - 파라미터           - [item1 [,item2 [,...]]] opt
  * 
  *     ---------------------------------------------------
  * 
  *     -- 0번 인덱스에 파라미터 값 삽입
  *   
  *     -- 배열에 있던 엘리먼트는 뒤로 이동
  * 
  *     ----------------------------------------------------
  * 
  *     -- 파라미터를 작성하지 않을 수도 있다는 뜻이다.
  * 
  *     -- 하나만작성시엔 그냥 작성. 2개이상은 콤마작성
 */
console.log("=====================================");

window.onload = function() {
  "use strict"
  /**
   *  앞쪽에 삽입하는 거구나
   */
  console.log('--- unshift ---')
  var value = [1,2];
  value.unshift(345,67);
  console.log(value);
  // :: [345, 67, 1, 2]
  
  debugger;

  /*
            ===== push() =====
  
        - 구분                - 데이터(값)

        - data                - 첨부 기준
        - 파라미터             - [item1, [item2 ,[...]]] opt;
        - 반환                 - 첨부 후의 length

        ----------------------------------------------------

        -- 배열 끝에 파라미터 값을 첨부
  */

  console.log('--- push ---')
  value = [1,2];
  value.push(345,67);
  console.log(value);

  debugger;

  /*
        서버에서 데이터를 받아서 행과 열이 있는 형태로 만들려고한다

        그런데 매번 데이터와 첨부기준 그리고 그다음것을 하게되면


        100번을 html에 인서트를 시켜야한다. 그때마다 렌더링을 해서

        웹페이지에 표시하게 된다. 그렇다면 100번을 렌더링을 해야한다

        그것은 조금 그렇다


        그럴때 쓰는것이 서버에서 받은 데이터를 html을 만든다(문자열)

        100개를 push형태로 배열에 집어넣는다. 나중에 배열 전체를

        읽어서 문자열만 정리를 하게 된다.

        그 후 브라우저는 한번만 렌더링 한다.

        
        ES3에서는 +로 연결하는것보다 push해서 문자열을 쭉 배열에 넣은

        다음에 이것을 다시 join해석을 해서 문자열로 연결하는 것이 훨씬 빨랏다


        ES6에서는 템플릿을 많이 쓴다. 템플릿은 값을 변수로 연결 할 수 있다

        바로 직접 작성하지 않고 변수이름을 작성하면 값이 자동으로 설정된다

        템플릿이 있으면 100줄,200줄 만드는것은 문제가없다. 데이터만 바꿔주면 된다.


        테이블 형태를 쓸때는 push,join을 많이 쓴다
  */

  debugger;

  /*
  
            === concat() ===

      - 구분                - 데이터(값)
  
      - data                - 연결 기준
      - 파라미터             - [item1 ,[item2 ,[item3]]];
      - 반환                - 연결 결과

      ---------------------------------------------------

      -- 배열에 파라미터 값을 연결하여 새 배열을 반환

      -- 파라미터가 1차원 배열이면 값만 반영
  */

  value = [1,2];

  var result = value.concat(3,4);
  console.log(result);
  // :: [1, 2, 3, 4]
  debugger;
  
  value = [1,2];
  result = value.concat([3],[4]);
  console.log(result);
  debugger;
  /*
      push( )함수는 기존 배열에 원소를 추가하며 배열의 총 길이를 리턴한다. 

      concat( )함수는 기존 배열을 복사한 후 원소를 추가하며 새 배열을 리턴한다.

      따라서 concat는 2개 배열을 합칠 때 많이 사용한다
  */

}



