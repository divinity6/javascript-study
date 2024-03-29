/**
 * 프로그램 설명문서 주석
 * 2021.07 25 수업
 *
 *
 *           ===== let 변수 개요 =====
 *           
 *      - let book = "책";
 *      --> let 변수의 가장 큰 특징은 블록(block) 스코프를 가진 변수이다
 *      --> 변수가 선언된 블록이 스코프
 *      
 *      - 스코프 적용 기준
 *      --> 블록{}, 문, 표현식
 *      
 *      - 블록{} 안과 밖이 스코프가 다름
 *      --> 변수 이름이 같아도 값이 대체되지 않음
 * 
 */
console.log("=====================================");
"use strict";
// console.log 사용
const log = function (value) {
    console.log('--- ' + value + ' ---');
};

log('블록 스코프');

let sports = "축구";
if(sports){
    // 변수가 선언된 곳이 하나의 스코프
    // 함수가아니어도 스코프다.
    let sports = "농구";
    console.log('안: ' , sports);
};
// sports가 각각 존재
console.log('밖: ' , sports);

// var 키워드라면 각각 존재할 수 없다.
// 최종적으로 sports에 할당한 값으로 대체된다
// 블록별로 각각의 변수를 가지게된다(let 변수의 특징)

/**
 * 
 *           ===== 다시한번 정리(let 변수의 특징) =====
 * 
 *      - let 변수는 블록 스코프를 갖는다.
 *      - function은 function 전체가 하나의 스코프다.
 *      - 함수안에는 다수의 block이 존재(각각 블록 스코프)
 */

/**
 *
 *           ===== let 변수 선언 =====
 *
 *      - Syntax
 *      --> let name1 [= value1] [, name2[= value2]]
 *      
 *      - name1, name2에 변수 이름 작성
 *      --> 식별자로 사용
 *      --> []는 생략 가능을 나타냄
 *      --> 값을 할당하지 않아도 된다
 *      
 *      - value1, value2에 초깃값 작성
 *      --> 표현식 작성 가능, 평가 결과 사용
 */

log('변수 이름 선언');

let book;
let one, two;
// 1. let book;
//    값을 할당하지 않고 변수만
//    선언할 수 있다.
//    초깃값으로 undefined가 할당된다
//    (여기의 undefined는 사용할 수 없는 undefiend이다)

// 2. let one, two;
//    콤마로 구분하여 다수를 선언할 수 있다.

/**
 *      var 키워드도 초깃값은 undefined이지만, 사용할 수 있는 undefined이다.
 *      그런데 let은 undefined를 갖긴 갖아도 변수가 선언되지 않은것으로 처리된다.
 */

log('변수에 초깃값 할당');
let book2 = "책";
let one2 = 1, two2 = (10 + 20);

// 1. let book2 = "책";
//    변수를 선언하고 초깃값을 할당함

// 2. let one2 = 1, two2 = (10 + 20);
//    콤마로 구분하여 다수의 변수를 선언하고
//    값을 할당한 형태

// 3. let five = 5, let six = 6;
//    SyntaxError 발생
//    let을 처음에 한번만 작성한다

// 4. let five = 5, var six = 6;
//    콤마로 구분하여
//    let과 var을 같이 사용할 수 없다.

/**
 *
 *           ===== 블록 스코프 =====
 *
 *      - 블록 기준
 *      --> 중괄호 { 코드 }
 *      --> function name(){ 코드 }
 *      --> if(a === 1){ 코드 }
 *      ----> 중괄호안의 변수와 밖의 변수는 다르다(같은이름이 존재가능)
 *      ----> 블럭이 나오면 스코프가 다르다
 *
 *      - 블록 안과 밖이 스코프가 다르다
 *      --> 변수 이름이 같아도 값이 대체되지 않는다
 *      
 *      - 스코프에 같은 이름 사용 불가
 *
 */

log('블록 스코프');

let sports2 = "축구";
if(sports2) {
    let sports2 = "농구";
    console.log("안: ", sports2);
};
console.log("밖: ", sports2);
// 1. (sports2){...}
//    블록{} 안과 밖에 let sports2를 작성했으며
//    스코프가 다르므로 같은 이름을 사용할 수 있다.

// 2. 변숫값이 대체되지 않고 유지된다

// 3. 블록 안에서 블록 밖의 변수는 접근할 수 있지만
// 4. 블록 밖에서 블록 안의 변수는 접근할 수 없다.
//    (정보 보호가 되는 것)

log('블록 스코프');
let sports3 = "축구";
sports3 = "농구";
console.log(sports3);
// let sports3 = "배구";

{
    let sports3 = "탁구";
    console.log(sports3);
};

// 1. sprots3 = "농구";
//    스코프에서 sports3 식별자를 해결한다
//    바로 앞에 있으므로 값을 할당한다.

// 2. // let sports3 = "배구";
//    let을 사용하여 같은 스코프에 같은 이름의
//    변수를 선언할 수 없다

// 3. { let sports3 = "탁구";}
//    블록{}을 사용했으며 스코프가 다르므로
//    let을 사용하여 변수를 선언할 수 있다.

/**
 *     - 이와같이 블록은 블록안과 블록 밖에 같은 이름을 사용할 수 있다.
 *
 *     - 편리한지를 생각해보아야한다.
 *       강의에서 같은이름을 사용한것은 같은이름을 사용할 수있다는것을
 *       설명한 것이지, 같은이름을 쓰면 코드를 일일히 읽어봐야한다.
 *       (가능하면 이름을 다르게 해주는 것이 가독성이 더 높다)
 *
 */





