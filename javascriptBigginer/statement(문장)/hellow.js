/**
 * 프로그램 설명문서 주석
 * 2021.01.01 수업
 * 
 * 문장
 * 
 * 자바스크립트는 표현식의 연결이다
 * 
 * opt == option 로 표기한다
 */





console.log("=====================================");
 /*
    - 세미콜론
    - 형태: ;(세미콜론)

    자바스크립트가 자동으로 ;을 삽입함(줄바꿈시)
 */
var one = 1
var two = 2;
console.log(one);







console.log("=====================================");
 /*
    - 블록
    - 형태: {}(중괄호) - opt(옵션)

 */
one = 1, two = 1;
if (one === two) {
    var result = one + two;
    console.log(result);
}



console.log("=====================================");
 /*
    - if

    -> 형태: if(표현식) 문장1
    -> if(표현식) 문장1 else 문장2

    -> 조건에 따른 처리
    -> 먼저 표현식 평가, 평가결과를 true/false로 반환
    -> true면 문장1 실행,false면 문장2 실행



 */
var a =1, b =1;
if(a === b) console.log('블록을 사용하지않음');

if(a === b) 
console.log('1번줄') 
console.log('2번줄');

console.log('---');
var a =1, b =1;
if(a === b) { console.log('블록을 사용'); }







console.log("=====================================");
 /*
    - debugger
    -> debugger 위치에서 실행을 멈춤
    -> 브라우저의 개발자 도구가 열려있을때만 멈춤
    -> 열려있지 않으면 멈추지않음

    - 실전사용
    --> 실행되는 코드까지 debugger작성 
    --> 그럼 오류나는코드앞까지이동 가능
    
    -- 중간중간 코드앞까지 debugger를 지워나가면서 테스트

 */
debugger;
var sports= "스포츠";
console.log(sports);








console.log("=====================================");
 /*
    - while
    -> 표현식의 결과가 false가 될때까지 문장을 반복하여 실행
    -> 반복이 종료되는 조건이 필요
 */
var k =1;
while( k < 3) {
    console.log(k);
    k++;
};


console.log("=====================================");
 /*
    - do ~ while
    -> 처리방법은 while과 같음
    단, do문을 먼저실행
 */
k =0;
do{
    console.log('do :', k);
    k++;
}while( k < 3) {
    console.log('while :',k);
};



console.log("=====================================");
 /*
    - for
    -> for (초깃값opt;비교opt;증감opt) 문장
    -> 2번째의 비교 표현식의 결과가 true인 동안 문장을 반복실행

    -> for문은 opt 생략가능
 */
for(var k =0; k < 2;k++) {
    console.log(k);
}


console.log('-- 증감 생략 --');

//증감 생략
for(var k =0; k < 2;) {
    console.log(k);
    k++;
}

console.log('-- 초깃값과 증감생략 --');
//초깃값과 증감생략
k = 0;
for(; k < 2;) {
    console.log(k);
    k++;
}

console.log('-- 비교와 증감생략 --');
//비교와 증감생략
for(var k =0;;) {
    console.log(k);
    k++;
    if(k > 1) {
        break;
    }
}









console.log("=====================================");
 /*
    - break
    -> break;
    -> 반복문 종료
    -> for, for ~ in ,while , do ~ while, switch 사용
 */
var k = 0,m = 0;
while (k < 3) {
    m++;
    if( m === 2) {
        break;
    }
    console.log(m);
}








console.log("================= continue ================");
 /*
    - continue
    -> ontinue;
    -> 반복문 처음으로 되돌아감
    -> for, for ~ in ,while , do ~ while 사용
 */
for (var k = 0; k < 5;k++){
    if(k ===2 || k ===3) {
        continue;
    };
    console.log(k);
};








console.log("=====================================");
 /*
    - switch
    -> switch;
    -> case 표현식: 문장 리스트 opt
    -> default : 문장 리스트 opt

    -> switch 표현식의 값과 일치하는 case문 실행(그후break나올때까지 실행)
    -> 일치하는 case가 없으면 defult 실행
    ->OR(||)형태
 */
var exp=1;
switch(exp){
    case 1: 
        console.log(100);
    //주의 case아래의 문장도 실행, 방지하려면 break를 작성
    case 2: 
        console.log(200);
}

console.log('----');

exp=7;
switch(exp){
    case 1: 
        value = 100;
    default:
        value = 700;
    case 2: 
        value = 200;
    //case 2도 실행이 되서 200이 나온다
    console.log(value);
}



console.log('----');

exp=2;
//case가 2또는 3일때 하위문장실행 (매개변수값이)
switch(exp){
    case 2: 
    case 3: 
    console.log(100);
}







console.log("=====================================");
 /*
    - try-catch
    -> try 블록 catch(식별자-매개변수)블록;
    -> try 블록 finally 블록
    -> try 블록 catch(식별자-매개변수)블록 finally 블록

    -> try 문에서 예외 발생을 인식
    -> 예외가 발생하면 catch 블록 실행
    -> finally 블록은 예외 발생과 관계없이 실행
    
    -> 에러가 발생할 가능성이 있으면 반드시 try-catch문을 사용해야 한다
 */
try{
    //에러가 발생하는 문장을 try문안에 작성하지 않으면 프로그램이 죽는다-에러발생
    // 예)보험을 드는것
    value = ball; 
    //ball이라는 변수가없기때문에 에러발생 그러면 예외가발생하기때문에 catch문실행
} catch(error) {
    console.log('catch 실행');
}

console.log('----');

var sports2;
try{
    sports2 = ball; 
    //에러가 난부분이 catch의 매개변수에 들어간다
} catch(error) {
    console.log('catch 실행',sports2);
//finally는 기본적으로 실행
} finally {
    console.log('finally 실행');
}









console.log("=====================================");
 /*
    - throw
    -> throw 표현식;
    -> 명시적으로 예외를 발생시킴
    -> 예외가 발생하면 catch 실행
 */
try{
    //throw문을 만나면 throw문의 ;이후의 문장을 점프하여 catch문으로간다
    throw "예외 발생시킴";
    var baseball ="야구";
} catch(error){
    console.log(error);
    console.log(baseball);
}

console.log('----');

try{
    //trhow 표현식에 오브젝트를 작성한 형태
    throw {
        //name, value
        msg: '예외 발생시킴',
        //key ,value
        bigo: '임의의 이름 사용'
    };
} catch(error){
    console.log(error.msg);
    console.log(error.bigo);
}


console.log('----');

try{
    //new == 새로운 오브젝트 생성
    throw new Error('예외 발생시킴');
    //Error == 자바스크립트에서 제공하는 object
} catch(error){
    console.log(error.message);
}









console.log("=====================================");
 /*
    - strict 모드
    -> 형태 "use strict"(문자열)
    --> 자바스크립트 코드도아니다,작성만 하는것
    --> 이것은 엄격하게 자바스크립트 문법을 사용하겠다는 선언
    --> 시스템처리에미치는 영향이 매우좋음 :
    --> 퍼포먼스도빨라짐,자바스크립트 엔진이 처리하는 알고리즘도 심플해짐

    -> 엄격하게 js문법 사용의 선언
    -> 작성한 위치부터 적용
    -> ES5부터 지원
 */

//var을 작성하지 않고도 변수가선언되고 책할당
book = "책";
console.log(book);


console.log('----');

//코딩 실수를 예방할 수 있으므로 use strict 선언이 필수이다
//페이지 맨위에 이걸작성한후 코드작성하는것을 습관화 해야한다
"use strict";
try {
    //use strict 때문에 여기서 에러발생
    book = "변수 선언하지 않음";
    console.log(book);
} catch(error) {
    console.log(error.message);
}




