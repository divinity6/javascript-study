/**
 * 프로그램 설명문서 주석
 * 2021.11.29 수업
 *
 *           ===== y 플래그 =====
 *
 *      - lastIndex 위치에 매치
 *      --> lastIndex 부터가 아니라
 *          (g 플래그는 부터 매치했었다.)
 *          lastIndex 위치에 매치
 *      --> 즉, lastIndex 위치에 없으면 flase 구나
 *
 *      --> 매치되면 lastIndex 값이 1 증가
 *      --> const value = "AABBA", obj = /A/y
 *
 *      - lastIndex 값을 지정할 수 있음
 *      --> sticky 프로퍼티에 true 설정
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    /**
     *  lastIndex 위치에 없으면 false 반환
     */
    "use strict"
    log('------------ lastIndex 위치에 매치 ---------------');
    const value = "AABBA", obj = /A/y;
    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:1
    debugger;
    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:2
    debugger;
    log(obj.test(value) + ":" + obj.lastIndex);
    // :: false:0
    debugger;

    // 1. g 플래그를 사용하지 않았다

    // 2. obj.test(value)
    //    A가 매치되어 true가 출력된다

    // 3. lastIndex의 디폴트 값이 0이므로
    //    0번 인덱스의 A에 매치한 것이다

    // 4. obj.lastIndex
    //    1이 출력되며, 매치된 인덱스에 1을 더한 값이다
    //    y 플래그는 매치가 되면 lastIndex에 1을 더한다

    // 5. obj.test(value)
    //    A가 매치되어 true가 출력된다
    //    1번 인덱스의 A에 매치한 것이다

    // 6. obj.lastIndex
    //    2가 출력되며 매치된 인덱스에 1을 더한 값이다.

    // 7. obj.test(value)
    //    A가 매치되지 않아 false가 출력된다

    // 8. 4번 인덱스에 A가 있지만
    //    2번 인덱스에 매치하며
    //    2번 인덱스 값이 B이므로 매치되지 않는다
    /**
     *  g 플래그는 해당인덱스가 매치되지않으면 계속뒤를 탐색하는데
     *  y 플래그는 해당인덱스가 매치되지않으면 false가 되고 0으로된다.
     */

    // 9. obj.lastIndex
    //    매치되지 않으면 lastIndex 값이 0이 된다.

    // 10. 다시매치하면 처음부터 돈다
}
{
    "use strict"
    log('------------ lastIndex 값 지정 ---------------');
    const value = "AABBA", obj = /A/y;
    log(obj.sticky);
    obj.lastIndex = 4;
    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:5
    debugger;

    // 1. obj.sticky
    //    y 플래그를 사용하면
    //    sticky 프로퍼티에 true가 설정된다
    /**
     *  y 플래그 사용여부를 sticky 프로퍼티로 체크할 수 있다.
     */

    // 2. obj.lastIndex = 4
    //    lastIndex 프로퍼티 값에 4를 할당했으므로
    //    4번 인덱스의 문자에 매치하게 된다

    // 3. obj.test(target)
    //    4번 인덱스에 A가 있으므로
    //    매치가 되어 true가 출력된다

    // 4. obj.lastIndex
    //    1이 증가된 5가 출력된다.
}