/**
  * 프로그램 설명문서 주석
  * 2021.02.08 테스트
  * 
  *     - 요구사항
  *       var value = [101, 26, 7, 1234];
  *       배열의 엘리먼트 값을 역순으로 정렬하라
  * 
  *     - 힌트
  *       sort()메소드는 역순 정렬을 제공하지 않는다
  *       하지만, sort()메소드의 콜백 함수를 사용하여
  *       역순으로 정렬할 수 있다.
  * 
  *     - 앞 페이지의 sort 알고리즘을 참조하라 
 */

console.log("=====================================");

window.onload = function() {
 "use strict"

 var value= [101, 26, 7 ,1234];

 value.sort(function(one, two){
    return two - one;
 });

 console.log(value);

}
