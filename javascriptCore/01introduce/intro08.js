/**
  * 프로그램 설명문서 주석
  * 2021.03 23 수업
  * 
  *           ===== 강좌 범위 =====
  * 
  *         Executable Code and Execution Contexts*
  *           Types of Executable Code
  *             Strict Mode Code
  *           Lexical Environments
  *             Environment Records
  *             Lexical Environment Operations
  *             The Global Environment
  *           Execution Contexts
  *             Identifier Resolution*
  *           Establishing an Execution Context
  *             Entering Global Code
  *             Entering Eval Code
  *             Entering Function Code
  *           Declaration Binding Instantiation
  *           Arguments Object
  * 
  *    ----------------------------------------------------
  * 
  *         - 자바스크립트(ES5) 엔진 처리 중심
  *         ----> 위쪽 항목을 모두 다룬다
  *         ----> 바탕 개념과 활용을 다룬다.
  * 
  *         - 기능보다 논리에 중점을 두고 접근
  *         ----> function 오브젝트 구조와 생성
  *         ----> 실행 콘텍스트
  *         ----> 식별자 해결, 스코프
  *         ----> this, prototype, OOP
  *         ----> 호이스팅, 오버로딩, 아규먼트
  *         ----> 재귀 함수, 즉시 실행 함수, 클로저
  * 
  *     --------------------------------------------------
  * 
  */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};


window.onload = function() {

};
