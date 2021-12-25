/**
 * 프로그램 설명문서 주석
 * 2021.09 01 ~ 02 수업
 *
 *           ===== isNaN() =====
 *
 *      --> number가 아니냐고 묻는 것이 아니라 값이 NaN이냐고 묻는 것이다
 *          ( js에서 NaN은 값이다. )
 *      --> isUndefined냐고 묻는것과 맥락이 같다
 *
 *      --> 그러나 글로벌 오브젝트의 isNaN은 Number가 아니냐고 묻는 것이다.
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Number.isNaN()
 *      - 파라미터                 - 비교 대상
 *      - 반환                    - NaN 이면 true, 아니면 false
 *      -----------------------------------------------------------
 *
 *      - NaN 값의 여부를 체크
 *      --> NaN 값이면 true, 아니면 false 반환
 *
 *      - NaN 체크 방법
 *      --> NaN === NaN
 *          결과가 false 이므로 사용 불가
 *
 *      --> isNaN(), 글로벌 오브젝트에 있는 것은
 *      ----> Number 타입으로 변환한 후에 체크
 *
 *      --> Number.isNaN()
 *      ----> 값 액면그대로를 비교
 *
 *      --> Object.is(NaN, NaN): true
 *
 *      ----> Number.isNaN() 과 Object.is(NaN, NaN)의 차이는 무엇인가
 *      ------> Number와 Object의 차이
 *      ------> 시멘틱이 Number가 더 가깝다
 *              왜냐하면 NaN은 Number에 속하는 값이기 때문.
 *              따라서, 이때는 Number.isNaN으로 물어보는것이 가까운 것
 *
 *      ------> Object.is는 범용성이다.
 *      ------> Object는 좀 포괄적이다.
 *              (더 크게 포괄적으로 글로벌 오브젝트가 있지만 Object보다는 Number가 더 가깝다라는 것)
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;
{
    "use strict"
    log('------------ isNaN() ---------------');

    // 글로벌 오브젝트의 isNaN은 값타입이 Number가 아닌 것을 체크한다

    /**
     *  - 여기서 "ABC"는 NaN 값이 아니다. 문자열 ABC,
     *    넘버가 아니냐고 물어보면 애는 true 인데, NaN 값자체를 물어보기
     *    때문에 false
     *
     *  - 한편, 글로벌 오브젝트(window)의 isNaN은 값 타입이 Number가 아닌 것을 체크(String)
     *    따라서 true 반환
     */
    log(Number.isNaN("ABC"), isNaN("DEF"));
    // :: false true
    log(Number.isNaN(NaN), isNaN(NaN));
    // :: true true
    log(Number.isNaN(0 / 0), isNaN(0 / 0));
    // :: true true

    /**
     *  - Number.isNaN에서 100은 문자열로 100이다.
     *    따라서 false가 나온다
     *
     *  - 그런데 global오브젝트(window)의 isNaN은 우선
     *    문자열 200을 숫자로 변환하고 그결과를 비교한다
     *    Number가 아니냐고 묻는 것이니깐 false가 반환된다
     *
     */
    log(Number.isNaN("100"), isNaN("200"));
    // :: false false

    debugger;

    // 1. 글로벌 오브젝트의 isNaN("DEF)
    //    값 타입이 Number가 아닌 것을 체크한다
    //    DEF가 String 타입이므로 true 반환

    // 2. NaN와 0/0은 값이 NaN이므로 true가 된다

    // 3. Number.isNaN("ABC")
    //    값이 NaN가 아니므로 false가 된다

    // 4. 글로벌 오브젝트의 isNaN("200")
    //    값을 숫자로 변환하고 그 결과로 비교한다
    //    변환한 값 200이 Number이므로 false 반환

    /**
     *      - ES5에서는 이와같이 값을 비교할 때, 우선 Number로 변환하고
     *        그 결과를 가지고 체크하는 함수들이 많다.
     *
     *      - 그러나 Number.isNaN()과 같이 값을 변환하지 않고 액면 그대로를
     *        물어보는 함수들이 ES6에는 많다.
     *
     *      - 특히 숫자와 관련된 부분에 대해서는 이점을 신경써야 한다.
     *        (액면 그대로 물어보는가? 숫자로 변환해서 물어보는가?)
     *
     *      --> 대표적인 예) true, false, null
     */

}

/**
 *           ===== isInteger() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                      - 데이터(값)
 *
 *      - 형태                      - Number.isInteger()
 *      - 파라미터                   - 비교 대상
 *      - 반환                      - 정수이면 true, 아니면 false
 *      -----------------------------------------------------------
 *
 *      - 파라미터 값이 정수이면 true
 *        아니면 false 반환
 *
 *      - 정수로 인식
 *
 *      - 정수가 아닌 것으로 인식
 *
 */


{
    "use strict"
    log('------------ 정수로 인식 ---------------');
    log(Number.isInteger(0));
    // :: true
    log(Number.isInteger(1.0));
    // :: true
    log(Number.isInteger(1.01));
    // :: false
    debugger;

    // 1. 1.0은 정수이고 1.01은 소수
}

{
    "use strict"
    log('------------ 정수가 아닌 것 ---------------');
    // "12"는 숫자로 변환하면 정수지만
    //  Number.isInteger는 액면그대로를 물어보는 것.
    log(Number.isInteger("12"));
    // :: false

    // true도 숫자로 변환하면 1이지만 Number.isInteger는
    // 액면 그대로를 물어보기에 false
    log(Number.isInteger(true));
    // :: false
    debugger;

    // 1. 값을 Number로 변환하여 체크하지 않는다
    // 2. Number로 변환하면, "12"와 true가 Number이므로 정수로 인식한다.
}

/**
 *           ===== isSafeInteger() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                      - 데이터(값)
 *
 *      - 형태                      - Number.isSafeInteger()
 *      - 파라미터                   - 비교 대상
 *      - 반환                      - safe 정수이면 true, 아니면 false
 *      -----------------------------------------------------------
 *
 *      - 파라미터 값이 safe 정수이면 true
 *        아니면 false 반환
 *
 *      - -(2의 53승 - 1) ~ (2의 53승 - 1): true
 *        아니면 false
 *
 *      - true로 인식
 *
 *      - false로 인식
 *
 */
{
    "use strict"
    log('------------ true로 인식 ---------------');
    const isSafe = Number.isSafeInteger;

    log(isSafe(7.0));
    // :: true
    log(isSafe(Number.MAX_SAFE_INTEGER));
    // :: true
    log(isSafe(Number.MIN_SAFE_INTEGER));
    // :: true

    debugger;
    // 1. 7.0은 정수이며, 값 범위에 속하므로 true
}

{
    "use strict"
    log('------------ false로 인식 ---------------');
    const isSafe = Number.isSafeInteger;

    log(isSafe(7.1));
    // :: false
    log(isSafe("100"));
    // :: false
    log(isSafe(NaN));
    // :: false
    log(isSafe(Infinity));
    // :: false

    debugger;
    // 1. 7.1은 정수가 아니다

    // 2. 값을 Number로 변환하여 체크하지 않는다

    // 3. Number로 변환하면,
    //    "100"이 Number이므로 정수로 인식된다. 
    //    그러나 액면그대로로 보니깐 false가 나온다
}

/**
 *           ===== isFinite() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Number.isFinite()
 *      - 파라미터                 - 비교 대상
 *      - 반환                    - 유한 값이면 true, 아니면 false
 *      -----------------------------------------------------------
 *
 *      - 파라미터 값이 유한 값이면 true
 *        아니면 false 반환
 *
 *      - 글로벌 오브젝트의 isFinite()와
 *        체크 결과가 다르다
 *
 *      - 함수는 오브젝트에 속해야 하므로
 *        Number와 관련된 것은 Number 오브젝트의 함수 사용
 *        글로벌 오브젝트의 함수는 글로벌 사용이 목적
 */
{
    "use strict"
    log('------------ 유한 값 체크 ---------------');
    const num = Number.isFinite,
        global = isFinite;

    log( num(100) , global(200));
    // :: true true

    log( num("70") , global("80"));
    // :: false true
    log( num(true) , global(true));
    // :: false true

    log( num(NaN) , global(NaN));
    // :: false false
    log( num(undefined) , global(undefined));
    // :: false false
    debugger;

    // 1. 글로벌 오브젝트의 isFinite()는
    //    파라미터 값을 Number로 변환하여 체크한다.

    // 2. Number.isFinite()는 파라미터의 값을 숫자로 변환하지 않는다.

    // 3. 그러나 window.isFinite()는 Number타입으로 변환한다.
}
/**
 *      - 여기서 시스템을 설계할때의 방법!
 *
 *      --> 함수는 오브젝트에 속해야 한다.
 *      ----> 글로벌 오브젝트의 함수는 글로벌 사용이 목적이다.
 *      
 *      ----> Number 오브젝트의 함수는
 *            Number가 대상이다 (범위가 다른 것 )
 *
 *      ------> 예) isFinite()는 숫자가 대상인데 이것이
 *                  global 오브젝트에 들어가 있는것은 맞지 않는것.
 *
 *      ------> 예) book 오브젝트를 만듬.
 *                 book 오브젝트 안에는 book에 관련된 메소드와 함수가
 *                 있을 것이다.
 *                 그런데 이안에 쌩뚱맞게 sports와 관련된 함수가 있다면
 *                 말이 안되는 것.
 *
 *      ------> 예) 마찬가지로 global 오브젝트에 isFinite()같이 숫자를
 *                  대상으로 하는 함수가 있기때문에 조금 그랬다.
 *                  
 *                  그런데 ES6에서는 그런 것들을 각자의 소속으로..
 *                  Number는 Number로 String은 String으로...
 *
 *                  - 그렇다고 글로벌 오브젝트에있는 것을 지울수는 없다. 기존에쓰이는 것들이 많음
 *                  - 따라서, 중복되는 것들이 많은데 기본적으로 알맞는 오브젝트안에 있는 것들을
 *                    사용해야 한다.
 */