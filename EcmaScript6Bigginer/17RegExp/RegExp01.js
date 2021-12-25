/**
 * 프로그램 설명문서 주석
 * 2021.11.28 수업
 *
 *           ===== RegExp 오브젝트 =====
 *              (정규 표현식 오브젝트)
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

/**
 *
 *           ===== lastIndex =====
 *
 *      - 정규 표현식 사용 형태
 *
 *      - 매치 시작 위치를
 *      --> lastIndex 프로퍼티에 설정
 *      --> 디폴트 값 : 0
 *
 *      - g 플래그를 사용하면
 *      --> lastIndex 프로퍼티 위치부터 매치
 *      --> const value = "ABABA", obj =/B/g
 *
 *      - g 플래그를 사용하지 않으면
 *      --> lastIndex 프로퍼티 값이 바뀌지 않음
 *      --> lastIndex 값을 지정해도
 *          적용되지 않고 0번 인덱스부터 매치
 */
{
    "use strict"
    log('------------ 정규 표현식 사용 형태 ---------------');
    const value = "ABC";
    // 여기서A는 매치대상(value)에 매치를 하게되고, g는 global 플래그(모든 문자 매치)다
    // 만약 value에 "ABCABC"가 있다면 그것을 전부 매치한다
    const obj = new RegExp("A", "g");
    debugger;
    log(obj.test(value));
    // :: true
    const reg = /A/g;
    debugger;
    log(reg.test(value));
    // :: true
    debugger;

    // 1. const obj = new RegExp("A", "g")
    //    RegExp 인스턴스를 생성한다
    //    A로 매치 대상에 매치한다
    //    g 플래그는 모두 매치한다

    // 2. obj.test(value)
    //    obj에 설정된 A를 ABC에 매치하여
    //    A가 있으므로 true를 반환한다

    // 3. const reg = /A/g
    //    정규 표현식 리터럴을 사용한 형태다
    //    new 연산자를 사용하지 않았을 뿐, 1번과 같다

}

{
    "use strict"
    log('------------ g 플래그 사용 ---------------');
    const value = "ABABA",
          obj = /B/g;

    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:2
    debugger;
    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:4
    debugger;
    log(obj.test(value) + ":" + obj.lastIndex);
    // :: false:0
    debugger;
    
    // 1. obj.test(value)
    //    B가 ABABA에 있으므로 매치되며 true 반환
    
    // 2. obj.lastIndex
    //    lastIndex 값으로 2가 출력된다
    //    B가 매치된 인덱스는 1이며 1을 더한 값이다
    //    2가 다음에 매치를 시작할 위치다

    // 3. obj.test(value)
    //    lastIndex 값이 2이므로
    //    대상 문자열의 2번 인덱스부터 B를 매치한다.
    
    // 4. obj.lastIndex
    //    lastIndex 값으로 4가 출력된다
    //    B가 매치된 인덱스는 3이며 1을 더한 값이다.

    // 5. g 플래그는 매치가 되면
    //    lastIndex 값에 1을 더한다

    // 6. obj.test(value)
    //    대상 문자열의 4번 인덱스부터 B를 매치하며
    //    매치가 되지 않아 false가 출력된다.

    // 7. obj.lastIndex
    //    매치가 되지 않으면 lastIndex 값은 0이된다.
    //    (그 뜻은 문자열의 처음부터 매치를 하게 된다는 뜻)
    //    매치가 안됐으면 실패했다는 이야기이기 때문에 다음문장에서부터는
    //    처음부터 매치할 수 있도록 0으로 설정 해두는 것.


    /**
     * obj.lastIndex === 다음에 매치를 시작할 위치
     */
}

{
    "use strict"
    log('------------ g 플래그를 사용하지 않음 ---------------');
    const value = "ABABA",
          obj =/B/;

    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:0
    debugger;
    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:0
    debugger;

    // 1. obj = /B/
    //    g 플래그를 사용하지 않았따

    // 2. obj.test(value)
    //    B가 ABABA에 있으므로 매치되며 true 반환

    // 3. obj.lastIndex
    //    lastIndex 값으로 0이 출력된다
    //    0은 디폴트 값으로 값이 바뀌지 않는다
    //    g 플래그를 작성하지 않으면 값이 바뀌지 않는다

    // 4. obj.test(value)
    //    매치가 되어 true가 출력된다

    // 5. obj.lastIndex
    //    lastIndex 값으로 0이 출력된다.

    /**
     *  lastIndex가 0이라는 이야기는
     *  계속 문자열의 처음부터 간다는 뜻
     */
}

{
    "use strict"
    log('------------ lastIndex 값 지정 ---------------');
    const value = "ABACC" ,
          obj = /B/;

    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:0
    debugger;
    obj.lastIndex = 2;
    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:2
    debugger;
    log(obj.test(value) + ":" + obj.lastIndex);
    // :: true:2
    debugger;

    // 1. true : 0
    //    매치가 되었으므로 1이 출력되어야 한다

    // 2. obj.lastIndex = 2
    //    lastIndex에 2를 설정했으므로

    // 3. obj.test(value)
    //    2번 인덱스부터 매치를 해야 하지만
    //    0번 인덱스부터 매치한다

    // 4. 2번 인덱스부터 매치하면
    //    B가 없으므로 false가 반환되어야 한다.

}