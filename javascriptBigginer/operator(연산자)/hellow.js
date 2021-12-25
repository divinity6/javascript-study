/**
 * 프로그램 설명문서 주석
 * 2021.01.01 수업
 * 
 * 연산자
 * 
 * 자바스크립트는 표현식의 연결이다
 */

 //먼저 =앞을 연산한후 할당
 var point = 7;
 point += 3;
 console.log(point);






 console.log("=====================================");
 /*
    +연산자 
    한쪽이라도 숫자가 아니면 연결
 */
var two="2";
// 일반적으로 맞지않지만 자바스크립트는 특정한부분에서 에러가나서
// 전체웹페이지가 뜨지않는것을 방지하려는 경향이있다.
// 되도록이면 에러가나지않는경향
 var value= 1+two;
 console.log(value);
 console.log(typeof value);

 var value2 = 1 + 5 + "ABC"
 console.log(value2);
 console.log(typeof value2);













 console.log("=====================================");

/*
    자바스크립트는 값을 숫자로 변환하는것을 시도한다
    숫자와 undefinded를 더하면
    NaN값이 나온다
*/

 var value3;
 console.log(10 + value3);

 console.log('---');
 console.log(10 + undefined);
 console.log(10 + null);
 console.log(10 + true);
 console.log(10 + false);
 console.log(10 + Number);

 console.log('---');
 //더하기는 값이 숫자라도 타입이 string이면 문자열로 연결하지만
 console.log(10 + '123');
 // -,*,/는 숫자로 변환하여 연산한다
 console.log(123 - '23');
 console.log('123' - 23);












 console.log('==================================');
  /*
    NaN반환
    양쪽의 평가 결과가 하나라도 숫자가 아닐때
    NaN반환
 */

 console.log(10 * '20');
 console.log(10 * true);
 console.log(10 * false);
 console.log(10 * null);
 console.log(10 * 'A');
 
 //소수점이 생기는 경우의 처리
 /*
    6.9로 출력되지않음
    IEEE 754유동 소수점 처리때문
    대응방법 - 실수를 정수로 변환하여 값을 구하고
       - 다시 정수를 실수로 변환한다
 */
 console.log(2.3 * 3);
 console.log(((2.3 * 10) * 3) / 10);
 
 









 
 console.log('==========================');
 /*
    /연산자
    왼쪽 결과로 오른쪽 결과로 나눔
    
    NaN 반환
    양쪽 결과가 하나라도 숫자가 아닐때,
    분모,분자가 모두 0일때

    -분모,분자가 0일때
    분모가 0이면 infinity 반환
    분자가 0이면 0 반환
 */
console.log(5/'A');
console.log(0/0);
console.log('---');
console.log(10/0);
console.log(0/10);

/*
%연산자
왼쪽 결과를 오른쪽 결과로 나누어 나머지를 구함
*/

console.log('---');
console.log(5%2.5);
console.log(5%2.3);
console.log((5*10 - ((2*2.3)*10)) / 10);









console.log('=========================');

/*
    단항 + 연산자
    형태 : +value
    값을 number타입으로 변환
    +를 더하기로 착각할수 있음
    Number()도 같은 기능
*/

var value4 = "7";
console.log(typeof value4);
console.log(typeof +value4);
console.log(typeof Number(value4));

/*
    단항 - 연산자
    형태 : -value

    값의 부호를 바꿈
    +는 -로, -는 +로

    연산할 때만 바꿈(원래 값은 바뀌지 않음)
*/

value = 7;
console.log(-value);
//가독성 측면에서 곱하기 -1등을 사용
console.log(value*-1);
console.log(8 + -value);
console.log(value);








console.log('=========================');
/*
    후치 ++ 연산자
    값을 자동으로 1 증가시킴
    문장을 수행한후1증가
    즉,세미콜론 (;)다음에 증가
*/
var one =1;
value = one++ + 3;
console.log(value);
console.log(one);


console.log('---');
/*
    전치 ++ 연산자
    값을 자동으로 1 증가시킴
    문장을 수행하기전1증가
*/
one =1;
value = ++one + 3;
console.log(value);








console.log('=========================');
/*
    !연산자
    -논리 NOT연산자
    -형태 !value

    -표현식 평가결과를 true,false로 변환 후 
    true면 false를
    false면 true를 반환

    -원래 값은 바뀌지 않고 사용할 때만 변환
*/
value = true;
console.log(!value);
console.log(!!"A");








console.log('=========================');
/*
   - 유니코드
    자바스크립트는 \를 사용한다

    -utf-8
    Unicode Transformation Format
    유니코드의 코드 포인트를 매핑하는 방법
*/
value = true;
console.log('\u0031');
console.log('\u0041');
console.log('\u1100');
console.log('\uac01');







console.log('=========================');
/*
   - 관계 연산자
    <,>,<=,>= 연산자
    instanece of 연산자
    in 연산자

    - >연산자 : 양쪽이 Number타입일시 왼쪽이 오른쪽보타크면 tue, 아니면 false
    - string타입 비교 : 한쪽이 string 이면 false,
      양쪽이 모두 string타입이면 유니코드 순서로비교,
    -  문자하나씩 비교  
*/
console.log((1 + 2) >1);
console.log(1 >"A");
console.log('---');
console.log('\u0033' > '\u0032');
console.log('A' > '1');
console.log('가' > '다');
console.log('---');
//A가 같기때문에 다음것을 비교 0보다2가크기때문에 false반환
//결정되면 다음것은 비교하지않음
console.log('A07' > 'A21');








console.log('=========================');
/*
   - ==연산자,!= 연산자(a != b 와 !(a == b)는 같다)
   
   -> 동등 연산자,부등 연산자

   -> 값 타입은 비교하지않음

   -> 값 타임이 다르면 '문자:문자','숫자:문자'일때
   문자 타입을 숫자타입으로 변환하여 비교
*/
console.log(1 == '1');
value =undefined;
console.log(value == undefined);
//값만 비교하는것(type이아님)
console.log(value == null);




console.log('---');
/*
   - ===연산자,!==연산자
   
   -> 일치 연산자,불일치 연산자

   -> 값 타입이 모두같으면 true 하나라도 다르면 false

*/
console.log(1 === 1);
console.log(1 === '1');
//undefined와 unll비교
console.log('---');
console.log(value == null);
//타입이 다르다
console.log(value === null);







console.log('=========================');
/*
   - 콤마 연산자,()연산자 == ()안의 표현식을 먼저 평가


   - || 연산자
   -> 논리 OR 연산자
   -> 표현식의 평가 결과가 하나라도 true이면 true 아니면 false
   -> !!!!!!!그리고 논리값이 아니라 변수값을 반환한다
   -> 왼쪽 결과가 true면 오른쪽은 비교하지 않음

*/
value, zero = 0, two = 2;
//숫자값에서 0을제외한수는 true, 0 == false
console.log(value || zero);
//마지막까지 비교하였는데 true면 true변수값 반환
console.log(value || zero || two);


console.log('---');
//모두가 false일때
value, zero = 0
//마지막까지 비교하였는데 모두 false이면 마지막 변수값반환
console.log(zero || value);

console.log('----');
one =1;
console.log(one === 1 || two === 2);






console.log('=========================');
/*
   - && 연산자

   -> 논리 AND 연산자
   -> 표현식의 평가결과가 모두 true면 true,아니면 false
   -> 왼쪽 결과가 false이면 오른쪽은 비교하지 않음

*/
one = 1, two = 2;
//숫자값에서 0을제외한수는 true, 0 == false
console.log(one && two);
debugger;
//one과 zero를 비교하였는데 false이므로 nine은 비교하지않고 zero값을반환
console.log(one && zero && nine);






console.log('=========================');
/*
   - 조건 연산자
   -> 기호 : exp ? exp-1 : exp-2
   -> 3항 연산자라고도 함
   -> exp 위치의 표현식을 먼저 평가
   -> true면 exp-1의 결과 반환
   ->false면 exp-2의 결과 반환 

*/
console.log(1 === 1 ? "같음" : "다름");
console.log(1 === "1" ? "같음" : "다름");




/**
 * 연산자우선순위
 * ECMA-262 스펙에 없음
 * 
 * 우선순위가 가장높은것은()
 * MDN Operator precedence 참조- 여기에 나와있음
 */