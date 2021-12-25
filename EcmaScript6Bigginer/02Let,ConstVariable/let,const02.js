/**
 * 프로그램 설명문서 주석
 * 2021.07 23 수업
 *
 *
 *           ===== function 블록 =====
 *
 *      - function name(){}도 블록 스코프
 *
 *      - function 안과 밖에
 *      --> 같은 이름의 let 변수 선언 가능
 *      --> 스코프가 다르기 때문
 *
 *      - function 밖의 let 변수를
 *      --> function 안에서 사용 가능(클로저)
 */
console.log("=====================================");
"use strict";
// console.log 사용
const log = function (value) {
    console.log('--- ' + value + ' ---');
};

log('function 블록');

let sports = "축구";
function show() {
    // 이것은 값이 대체되지않고 각각 존재
    let sports = "농구";
    console.log("안: " , sports);
};
show();
console.log("밖: ", sports);

/**
 *  ES6 환경에서는 초기화하지않으면 재할당을 할 수 없구만ㅋㅋㅋ
 */
log('함수 밖 변수 사용(클로저)');
let sports2 = "축구";
function show2() {
    console.log(sports2);
};
show2();

/**
 *
 *           ===== try-catch =====
 *      
 *      - try-catch 문도 블록 스코프
 *        (이때, {}블록의 기준은 try)
 *
 *      - try 블록{} 기준으로
 *      --> 안과 밖에 같은 이름의 let변수 선언 가능
 *      
 *      - catch()에서 try 밖의 변수 사용
 */

log('try-catch');
let sports3 = "축구";
try {
    // sports3가 각각존재
    let sports3 = "농구";
    console.log("안: ", sports3);
} catch(e){};
console.log("밖: " , sports3);

// 1. try 블록의 안과 밖에 let sports를 선언했으며
// 2. 안과 밖이 스코프가 다르므로 변숫값이 각각 설정된다

log('try 밖의 변수 사용');
let sports4 = "축구";
try {
    let sports4 = "농구";
    console.log("안:" , sports4);
    // 에러 설정(변수이름 음슴)
    abc = error;
} catch (e){
    console.log("catch: " , sports4);
};
console.log("밖: ", sports4);
// :: 안: 농구 :: catch:  축구 :: 밖:  축구

// 1. let sports4 = "농구";
//    try 블록에서 값을 할당한다.

// 2. abc = error;
//    error 변수가 없으므로 에러가 발생한다.

// 3. log("catch: ", sports4)
//    try 블록 안에서 선언한 sports4 값을
//    출력하지 않고 try 밖의 sports4값을 출력한다.

/**
 *  catch문은 try안 블록의 변수를 사용하지 않고 밖의 변수를 사용한다.
 */


/**
 *
 *           ===== switch-case =====
 *
 *      - switch 문도 블록 스코프
 *
 *      - switch 블록 기준으로
 *      --> 같은 이름의 let 변수 작성 불가
 *      --> case, default는 블록 스코프가 아님
 *
 */


log('switch-case');
let item = 1;
switch(item) {
    case 1:
        let sports5;
        break;
    case 2:
        // 여기서 다시선언하면 에러가남(같은이름 사용불가)
        // let sports5;
    default:

        console.log(sports5);
}

// 1. // let sports;
// 2. switch 블록 안에서
//    let을 사용하여 선언한 변수가 있는데
//    다시 let을 사용하여 변수를 선언하므로 에러가 발생
// 3. 그래서 주석으로 처리
// 4. 실행 에러가 아니라 컴파일 에러

// let sports4; => 같은 switch 블록 안에서
// let을 사용하여 선언한 변수가 이미 있으므로
// 다시 let을 사용하여 같은 이름의 변수를 재선언하면 에러가 발생함

// 그러므로 case와 default는 자체적으로 다른 블록을 가지지 않고...switch 블록 안에 case와 default가 포함됨








