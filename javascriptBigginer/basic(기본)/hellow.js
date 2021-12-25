/**
 *  프로그램 설명문서 주석
 *  2021.01.01 수업
 * 
 * 데이터타입등 기본
 */


console.log('==============================');
var hello = '안녕하세요';
document.body.innerText = hello;
// 시멘틱 - 의미를 부여해서 변수이름작명(즉 잘 알아볼수있게 짓는것)
// 포괄적으로 적지않고 상세하게적어야함
var book ="책", point= 123;
console.log(point);









console.log('==============================');
// 자바스크립트는 정수와 실수를 구분하지않고 실수로 계산한다
// 상수변수는 선언적 의미일뿐(자바스크립트에선) 상수  - 대문자로 사용
console.log(Number.MAX_VALUE);
//0X는 16진수를 나타내는것
//0O는 8진수를 나타내는것
console.log(0XF);








console.log('==============================');
//typeof 연산자
//typeof value에 데이터작성
console.log(typeof point);
console.log(typeof book);

point ="책";
console.log(typeof point);

point= 123;
point = -1.23;
//숫자값의 범위는 2의 64승의 -2 53승 + 3
console.log(typeof point);

//NaN는 값이 숫자가 아닌 것을 나타내는 값 Not-a-Number
//프로그램이 죽지않도록 이변수는 값이아닙니다!!라는것을 알려주는것
point= 1 * "A";
console.log(point);






console.log('==============================');
//string 타입
//문자타입 -값을 ""또는 ''안에 작성

/*
    Undefined(대문자) 타입 == spect에서사용하는 타입
    undefined(소문자) 타입 == 값
    var point2;
    변수를 선언만 한것이므로 undefined가 초기 값으로 설정된다
    변수가 반드시 이름과 값이 있어야 하기때문에 초기값인 undefined로 선언된다
    변수를 선언만한것 = undefined
*/
var point2;
console.log(point2);

point2 = undefined;
console.log(point2);








console.log('==============================');
/*
    Null(대문자) 타입 == spec에서사용하는 타입
    null(소문자) 타입 == 값
    var point2;

    null과 undefined의 차이
    값을 할당해야 null이됨
    의도적으로 값을 할당한것
*/
point2 = null;
console.log(point2);








console.log('==============================');
/**
 * Object형태
 * {name:value} 형태
 * 이것을 프로퍼티(property)라고한다
 * Object는 프로퍼티의 집합
 * 아래는 book2의 프로퍼티들
 * 왼쪽을 프로퍼티 key또는 name이라고부르고
 * 오른쪽을 프로퍼티 값이라고 부른다
 */
 var book2 = {title:'책', point:'123'};
 
 console.log('==============================');
 console.log(typeof 123);
 console.log(typeof "문자열");
 console.log(typeof true);
 console.log(typeof undefinded);

//typeof 의 한계 null
//typeof 로 null 과 property로 구성된 값을 구분할 수 있는 방법은 없다
 console.log(typeof null);
 console.log(typeof {book:'책'});


