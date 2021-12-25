/**
  * 프로그램 설명문서 주석
  * 2021.01.03 수업
  * 
  * 
  * in (어디안에) built (만들어져있는)
  * 
  * 
  * --------- 자바스크립트의 모든 구조는 
  * --------- key:value,name:value 형태를 갖는다
  * --------- 개발하는 모든 자바스크립트의 구조는 name:value,key:value 로 구성되는 프로퍼티
  * 
  * 
  *  =====빌트 인=====
  * 
  * -built-in이란?
  * --> 값 타입, 연산자, 오브젝트(object)를 사전에 만들어 놓은 것
  * --> JS 코드를 처리하는 영역에
  * 
  * - 장점 
  * --> 사전 처리를 하지 않고 즉시 사용
  * ---> 사전 처리를 해야 사용 할 수 있는 것도 있다
  * --> 자바스크립트의 매우 큰 특징
 */



 /*
    - 빌트인 값 타입
    --> Undefined,Null,Boolean,Number,String,Object

    - 빌트인 연산자 opeartor
    --> +,-,*,/,%,++,--,new 등

    - 빌트인 오브젝트
    + 데이터를 처리하는데 중점
    ++ 다수의 프로퍼티 집합이다


    --> 빌트인 오브젝트 형태

    ---> 빌트인 Number 오브젝트

    ---->> 일반 오브젝트(Object)는 {key:value},{name:value} 형태로 
    ---->> 데이터를저장 했지만 빌트인 Number 오브젝트(object)는 이미 
    ---->> key:number 형태로 만들어져 있는것 
    ---->> (대문자 Object가 데이터를 저장하는데 중점이라면)
    ---->> (소문자object는 데이터를 처리 하는것이 중점. 따라서 소문자 object에는 함수가 있다)


    ----> 123과 같은 숫자, 상수 ,지수를 처리하는 오브젝트
    ----> 여기서 오브젝트는 소문자object

    --> 빌트인 Number 오브젝트 형태

 */
console.log("=====================================");
"use strict"

debugger;
var obj = Number;
/*
    1.빌트인 Number 오브젝트를 obj에 할당
    - 따라서 obj는 빌트인 Number 오브젝트가 된다

    2. 오른쪽 scope의 local혹은 global의 obj를 펼친다
*/

debugger;

/*
    3. MAC_VALUE, MIN_VALUE,NAN, Length 등이 있다
     1) MIN_VALUE: 5e-324에서
        MIN_VALUE가 프로퍼티 이름이고 5e-324가 프로퍼티 값이다
     2) Length: 1에서 Length가 프로퍼티 이름이고 1이 프로퍼티 값이다

     4. isNaN()가 있으며 ()는 함수를 나타낸다
        isNaN이 함수 이름이고, 프로퍼티 값은 function(){}이다.
*/


debugger;
//--------------
/*
    1.빌트인 Number 오브젝트는
    - Number 처리를 위한 프로퍼티의 집합이다
    - 즉, Number 처리를 위한 오브젝트다
    - (스트링 처리를 위한 오브젝트가 하나도 없다)

    2.JS에서 Number 처리를 위한 프로퍼티를 사전에 만들어 제공하므로
    - 즉, built-in으로 제공하므로
    - Number.Length로 1을 구할 수 있으며
    - Number.isNaN()로 함수를 호출할 수 있다.
*/

console.log("Number.length:",Number.length);
// 예)isNaN === 이 값이 넘버니?라고 묻는것이라고 간단하게 생각하면됨

console.log("Number.isNaN:",Number.isNaN(123));
// 때문에 프로퍼티는 무엇이 있고 함수는 무엇이 있고
// 그 프로퍼티는 뭐하는기능이고 함수는 그것을 호출하면 무엇을 처리하고 어떤값을 반환하는지 알아보면된다.

