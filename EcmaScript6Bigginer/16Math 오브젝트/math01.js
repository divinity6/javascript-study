/**
 * 프로그램 설명문서 주석
 * 2021.11.28 수업
 *
 *           ===== Math 오브젝트 =====
 *
 *      - ES5 까지는 수학 계산 처리에 부족했으나
 *      --> ES6에서 수학 계산용 함수가 많이 추가됨
 *      --> 특히, 머신러닝/딥러닝에 대응할 수 있게 됨
 *
 *      - 일반적으로 수학 계산을 사용하지 않으므로
 *      --> 개요 중심으로 다룬다
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

/**
 *
 *           ===== 정수, 제곱근, 사인 =====
 *
 *      - Math.trunc()
 *      --> 소수를 제외한 정수 반환
 *
 *      - Math.sign()
 *      --> 값의 부호에 해당하는 값
 *
 *      - Math.hypot() : 제곱근
 *      --> 각 파라미터 값을 제곱하여 합산하고
 *      --> 합한 값의 제곱근을 반환
 *
 *      - Math.cbrt() : 세제곱근(cube roo)
 *
 */

{
    "use strict"
    log('------------ 소수를 제외한 정수 반환 ---------------');
    log(Math.trunc(12.56), Math.floor(12.56));
    // :: 12 12
    log(Math.trunc(-12.56), Math.ceil(-12.56));
    // :: -12 -12
    log(Math.trunc("45.67"), Math.trunc(true));
    // :: 45 1
    debugger;

    // 1. 12.56에서 56을 제외하고 12만 반환
    // 2. 양수이면 Math.floor()와 같고
    // 3. 음수이면 Math.ceil() (소수이하값 올림)과 같다
    // 4. 우선, Number 타입으로 변환하고
    //    결괏값으로 함수를 실행한다.

}

{
    "use strict"
    log('------------ 값의 부호에 해당하는 값 ---------------');
    log(Math.sign(5), Math.sign(-5));
    // :: 1 -1
    log(Math.sign(-0), Math.sign("123"));
    // :: -0 1

    debugger;
    // 1. 파라미터 값이 양수이면 1을 반환하고 음수이면 -1을 반환한다
    // 2. +0 또는 -0이면 0,-0을 반환한다
    // 3. Number 타입으로 변환하여 실행한다.
}

{
    "use strict"
    log('------------ 제곱하여 합산, 제곱근 ---------------');
    log(Math.hypot(3, 4));
    // :: 5
    log(Math.hypot(-7));
    // :: 7
    debugger;

    // 1. 3의 제곱은 9고, 4의 제곱은 16
    // 2. (9 + 16) = 25이고, 제곱근을 구하면 5가 된다
    // 3. 파라미터가 하나일 때는 Math.abs()와 같다(절댓값)
}

/**
 *           ===== Hyperbolic(쌍곡) =====
 *
 *      - Math.sinh() : 쌍곡 사인(sine)
 *
 *      - Math.asinh() : 쌍곡 아크사인(arcsine)
 *
 *      - Math.cosh() : 쌍곡 코사인(cosine)
 *
 *      - Math.acosh() : 쌍곡 아크코사인(arcosine)
 *
 *      - Math.tanh() : 쌍곡 탄젠트(tangent)
 *
 *      - Math.atanh() : 쌍곡 아크탄젠트(arctangent)
 *
 */

/**
 *           ===== 로그 =====
 *           
 *      - Math.log2() : 2를 밑으로 한 로그 값
 *      
 *      - Math.log10() : 10을 밑으로 한 로그 값
 *      
 *      - Math.log1p() : Math.log(1 + 파라미터 값)
 *      
 *      - Math.expm1()
 *      --> 자연로그 상수(e)의 x승 - 1
 *      --> x는 파라미터 값, (Math.exp(x) - 1)과 같음
 */

/**
 *           ===== 32비트 계산 =====
 *
 *      - Emscripten에 대처하기 위한것
 *      --> MDN Emscripten 개요
 *          (C 나 C++을 자바스크립트로 컴파일 가능, 즉 C나 C++과 interface를 위한 함수)
 *      
 *      - Math.imul()
 *      --> 곱한 값을 32비트로 반환
 *      
 *      - Math.clz32()
 *      --> 32비트 값에서 비트 값이 0인 수
 *      
 *      - Math.fround()
 *      --> 32비트 유동 소수 값으로 변환, 반올림
 */