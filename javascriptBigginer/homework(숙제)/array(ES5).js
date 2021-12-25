/**
  * 프로그램 설명문서 주석
  * 2021.02.15 테스트
  * 
  *     - 목적: 함수 호출 시간 측정
  * 
  *      [ 요구 사항 ]
  * 
  *     - 함수 코드가 없는 빈 함수 작성
  *       함수 이름 : check()
  * 
  *     - 배열에 1부터 1,000,000까지 작성
  * 
  *     - forEach()로 배열을 반복하면서
  *       check()함수 호출
  *       즉, 1,000,000번 check()함수 호출
  * 
  *     - 반복이 끝나면 실행 시간을 출력하라
  *       종료 시각 - 시작 시각
  * 
  *     ----------------------------------
  * 
  *     - 힌트 : 
  *     --> 현재 시각 구하기 :
  *         var start = Date.now();
  *         (Date오브젝트의 now 함수를 호출하면 된다)
  *     --> 현재 시각을 1/1000초로 반환
  * 
  *     - 결론
  *     --> 실행 시간이 매우 짧다
  *     --> 함수 호출에 부담을 갖지 않아도 된다.   
  * 
  * 
 */

console.log("=====================================");

window.onload = function() {
  "use strict"


  
  

  
  var timeCalc = function( startNumber , endNumber ) {
    var check = function(){};
    var list = [];
    var allNumber = endNumber + 1;
    for(;startNumber < allNumber; startNumber ++){
      list.push(startNumber);
    }
    console.log(list);
    var start = Date.now();
    list.forEach(check);
    var end = Date.now();

    return end - start;
  }

  var result =  timeCalc(1, 1000000);
  console.log("함수를 호출하는데 걸린 시간 :", result + "초");


  // 아래 방식으로도 구할수 있네(버그있음)
  var arr = new Array(1000000);

  arr[0] = 1;

  var check2 = function( el , index , all ){
    if( index < 999999 ){
      arr[ index + 1 ] = el + 1;
    }
  }
  
  arr.forEach(check2);
  console.log(arr);
}

