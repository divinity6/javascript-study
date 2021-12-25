/**
  * 프로그램 설명문서 주석
  * 2021.01.16 수업
  * 
  *     ======== substring() ========
  * 
  *     --> 시작인덱스부터 끝 인덱스 직전까지 반환한다는걸 알고있으면된다
  *     ---> 개념과 대강의 기능을알고 써먹을 수있으면 된다.
  * 
  *     - 구분                - 데이터(값)
  * 
  *     - data                - 반환 대상
  * 
  *     - 파라미터             - 시작인덱스
  *                           - 끝 인덱스
  * 
  *     - 반환                 - 결과
  * 
  *   --------------------------------------
  *   -- 파라미터의 시작 인덱스부터 끝 인덱스 직전까지 반환
  * 
  *   -- 두 번째 파라미터를 작성하지 않으면 반환 대상의 끝까지 반환
  * 
  *   -- 다양한 추출 조건 작성
  * 
 */

console.log("=====================================");
window.onload = function() {
  "use strict"
  debugger;

  var value = "01234567";

  console.log(value.substring(2,5));
  // 2번 인덱스부터 5번 인덱스 직전까지 반환
  


  debugger;
  
  console.log(value.substring(5));
  
  // 1. 첫 번째 파라미터만 작성하면
  //    첫 번째 인덱스부터 끝까지 반환
  console.log(value.substring());
  // 2. 파라미터를 모두 작성하지않으면 전체 반환
  
  
  debugger;
  
  console.log(value.substring(5,20));
  
  // 1. 두 번째 파라미터 값이 전체 length보다 크면
  //    전체 문자열 length 사용
  
  // 2. 따라서 시작 인덱스부터 끝까지 반환
  
  debugger;
  
  console.log(value.substring(-7,2));
  // 1. 파라미터 값이 음수이면 0으로 간주
  //    0번 인덱스부터 2번인덱스 직전까지 반환
  
  console.log(value.substring(5,1));
  // 2. 첫 번째 파라미터 값이 두 번째보다 크면
  //    파라미터 값을 바꿔서 처리
  //    value.substring(1, 5) 형태가 됨
  
  console.log(value.substring(5,"A"));
  // 3. NaN은 0으로 간주
  //    첫 번째 파라미터 값이 두 번째 보다 크므로
  //    value.substring(0,5) 형태가됨
  
  debugger;
  
  
  /*
            - substr()
  
  
  - 구분                - 데이터(값)
  
  - data                - 반환 대상
  
  - 파라미터            - 시작 인덱스
                        - 반환할 문자수
  
  - 반환                - 결과
  
  ---------------------------------------
  -- 파라미터의 시작 인덱스부터
  지정한 문자 수를 반환
  
  
  -- 첫 번째 파라미터
  
  ---> 값이 음수이면 length에서
  ---> 파라미터 값을 더해 시작 인덱스로 사용
  
  
  -- 두 번째 파라미터를 작성하지 않으면 양수 무한대로 간주
  */
 
  debugger;
  
  console.log(value.substr(0,3));
  // 1. 0번 인덱스부터 문자 3개 반환
  
  
  console.log(value.substr(-3,3));
  //  값이 음수이면 length에서
  //  파라미터 값을 더해 시작 인덱스로 사용 (그냥 대충 이해만 - 외울필요 x)
  
  
  console.log(value.substr(4));
  //  1. 두 번째 파라미터를 작성하지 않으면
  //     양수 무한대, 즉 최댓값이므로
  //  2. 첫 번째 파라미터부터 전체 반환
  // -----> 4번인덱스부터 전체...ㅋㅋ
  
  console.log(value.substr());
  //  3. 첫 번째 파라미터를 작성하지 않으면 0으로 간주
  //     따라서 전체가 반환된다
  
  
  debugger;


  /*
            - slice()
  
  
  - 구분                - 데이터(값)
  
  - data                - 반환 대상
  
  - 파라미터            - 시작 인덱스
                        - 끝 인덱스
  
  - 반환                - 결과
  
  ---------------------------------------
  -- 파라미터의 시작 인덱스부터
     끝 인덱스 직전까지 반환
  
  
  -- 첫 번째 파라미터
  
  ---> 값을 작성하지 않거나 NaN이면 0으로 간주
  
  
  -- 두 번째 파라미터

  ---> 작성하지 않으면 length 사용
  ---> 값이 음수이면 length에 더해 사용

  */

 console.log(value.slice(1,4));
 // 1. 1번 인덱스부터 4번 인덱스 직전까지 반환
 console.log(value.slice(false,4));
 // 2. false, undefined, null, 빈문자열은 0으로 간주
 

  debugger;

  console.log(value.slice("A"));
  // 1. 첫 번째 파라미터가 NaN이면 0으로 간주
  console.log(value.slice());
  // 2. 파라미터를 모두 작성하지 않으면 전체 반환
  
  
  
  
  debugger;
  
  console.log(value.slice(5));
  // 1. 두 번째를 작성하지 않으면 length 사용
  console.log(value.slice(5, 3));
  // 2. 첫 번째가 두 번째보다 크거나 같으면 빈 문자열
  
  debugger;
  
  console.log(value.slice(4, -2));
  // 1. 파라미터 값이 음수이면 length를 더해 사용
  //    더한 값이 0보다 작으면 0을 사용
  // 2. 3개의 결과에 대한 논리를 설명하라
  
  console.log(value.slice(-5, -2));
  console.log(value.slice(-2, -5));

  
  


};



