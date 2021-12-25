
/**
  * 프로그램 설명문서 주석
  * 2021.02 20 수업
  * 
  *         ===== 자바스크립트 연습 =====
  * 
  * 
 */
console.log("=====================================");

window.onload = function() {
    "use strict"
    // console.log 사용
    var log = function( value , key ){
        if ( key === "note") {
            console.log('--- ' + value +' ---');
        } else { console.log(value); }
    };
    // 넘어온 값이 빈값인지 체크한다. 
    // !value 하면 생기는 논리적 오류를 제거하기 위해 
    // 명시적으로 value == 사용 
    // [], {} 도 빈값으로 처리 
    var isEmpty = function(value){ 
        if( value == "" || 
            value == null || 
            value == undefined || 
            ( value != null && typeof value == "object" && !Object.keys(value).length ) ) { 
            return true 
        }else{ return false } 
    };
    // keys: 주어진 객체 자신의 열거가능한 속성들의 이름의 배열을 반환합니다.
    var list = [1 , 2 , 3 , 4];
    log(!Object.keys(list).length);
    // 즉 위의 list에는 뭐가 들어있어서 false 반환



}