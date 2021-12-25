/**
 * 프로그램 설명문서 주석
 * 2021.11.30 수업
 *
 *           ===== u 플래그  =====
 *
 *      - 정규 표현식의 패턴을
 *      --> 유니코드의 코드 포인트로
 *          변환하여 매치
 *
 *      --> unicode 프로퍼티에 true 설정
 *
 *      - u 플래그를 사용하지 않으면
 *      --> 코드 포인트를 문자로 매치
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ u 플래그 사용 ---------------');
    // :: 31 = 1, 32 = 2
    const obj = new RegExp("\u{31}\u{32}", "u");
    log(obj.test("12"));
    // :: true;
    debugger;
    log(obj.unicode);
    // :: true
    debugger;
    log(/\u{1f418}/u.test("🐘"));
    // :: true
    debugger;

    // 1. new RegExp("\u{31}\u{32}","u")
    //    패턴을 코드 포인트로 변환하고
    //    u flag로 인스턴스를 생성한다

    // 2. obj.test("12")
    //    매치가 되므로 true가 출력된다

    // 3. obj.unicode
    //    unicode 프로퍼티 값이 true로 설정된다

    // 4. /\u{1f1418}/u.test("🐘")
    //    이모지도 매치가능
    /**
     *  - u 플래그를 사용하면, 유니코드(unicode) 프로퍼티 값이 true로 설정
     *  --> 따라서, unicode 프로퍼티 값으로 u 플래그 사용여부 체크가능
     */
}

{
    "use strict"
    log('------------ u 플래그를 사용하지 않음 ---------------');
    /**
     * 플래그를 작성하지않으면 액면그대로 문자열로써 비교한다.
     */
    const result = /\u{32}\u{32}/.test("12");
    log(result);
    // :: false
    debugger;

    // 1. / 다음에 플래그를 작성하지 않았다.
    // 2. 패턴과 코드 포인트를 일반 문자로 간주하여
    //    12와 매치하므로 false가 출력된다
}

/**
 *           ===== s 플래그  =====
 *
 *      - 정규 표현식에서 dot(점.)은
 *      --> 모든 문자를 매치하지만
 *          줄 바꿈 문자는 매치하지 않는다.
 *
 *      - s 플래그를 사용하면(ES2018)
 *      --> 줄바꿈 문자를 매치
 *      --> dotAll 플래그에 true 설정
 *
 *      - 줄 바꿈 문자
 *      --> U+000A Line Feed(LF)("\n")
 *      --> U+000D Carriage Return(CR)("\r")
 *      --> U+2028 Line Separator
 *      --> U+2029 Paragraph Separator
 *
 */

{
    "use strict"
    log('------------ u 플래그 ---------------');
    const text = `line
    줄을 바꿈`;

    // 이전 방법
    log(/[\s\S]+/.test(text));
    // :: true
    debugger;
    log(/[^]+/.test(text));
    // :: true
    debugger;

    // s 플래그
    const obj = new RegExp(".+", "s");
    log(obj.test(text));
    // :: true
    debugger;
    log(obj.dotAll);
    // :: true
    debugger;

    // 1. line 바로 뒤에 줄 바꿈 문자가 있으나
    //    표시되지 않은 것이다

    // 2. ES2018 이전에는 이전 방법으로 매치

    // 3. s 플래그로 줄 바꿈 문자를 매치할 수 있다.
}