/**
 * 프로그램 설명문서 주석
 * 2021.12.14 수업
 *
 *           ===== yield 분할 할당 =====
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 한 줄에 다수의 yield 작성 ---------------');

    function* sports() {
        return [yield yield];
    };

    const obj = sports();
    log(obj.next());
    // :: {value: undefined, done: false}
    debugger;
    log(obj.next(10));
    // :: {value: 10, done: false}
    debugger;
    const last = obj.next(20);
    log(last);
    // :: {value: [20], done: true}
    debugger;
    log(last.value);
    // :: [20]
    debugger;

    // - 대괄호[] 안에 다수의 yield 작성
    // --> return [yield yield];

    // - next(), next(10) 호출
    // --> [실행 결과]에서 보듯이
    // --> yield를 연속해서 작성한 것과 같다
    // --> yield를 2개 모두 수행했으므로
    // --> 더 이상 처리할 yield가 없다

    // - 세번째 next(20) 호출
    // --> 파라미터 값: 20
    // --> return [yield, yield] 에서
    // --> {value: [20], done: true} 형태로 반환
    // --> 20 처럼 [] 안에 파라미터 값 20을 넣어서 반환

    // - console.log()에
    //   {value: Array(1)} 형태로 표시되지만
    //   가독성을 위해 편집했다.
}

{
    "use strict"
    log('------------ for-of 문에서 제너레이터 사용 ---------------');

    function* sports(count) {

        while(true){
            yield ++count;
        };
    };
    debugger;
    // point 에 value가 박히는구나
    // for of 문에 next가 포함되어있는것
    for (let point of sports(10)){
        log(point);
        // :: 11
        // :: 12
        // :: 13
        debugger;
        if (point > 12) {
            debugger;
            break;
        };
    }

    // 애는근데 new가 아닌데...(공유하는것 아닌가)
    const obj = sports(10);
    log(obj.next());
    debugger;
    // - for-of 문으로 제너레이터를 반복 호출

    // - 처음 for-of 문을 시작하면
    // --> sports(10)으로 제너레이터 오브젝트를 생성한다
    // --> 제너레이터 오브젝트에 10이 설정된다
    // --> 생성한 제너레이터 오브젝트를 저장할 변수가
    //     없으며 엔진 내부에 저장한다.
    // --> const engine = sports(10);과 같으며
    //     engine이 엔진 내부의 이름으로 가정한다.

    // - 다시 sports*()를 호출한다
    // --> engine.next()와 같지만  반환 값이 다르다
    // --> while(true){ yield ++count }를 실행한다
    // --> {value: 11, done: false}를 반환하지 않고
    //     value만 point 변수에 설정한다

    // - {done: true}로 종료 처리를 할 수 없으므로
    // --> break; 를 사용하여 종료시켜야 한다

    // - for-of 블록을 실행한다
    // --> 11을 출력한다
    // --> value 값이 11이므로 다시 for-of문을 수행하며
    // --> while(true) {yield ++count}를 수행

    // - 이렇게 break;를 만날때까지
    // --> 반복하여 yield ++count;를 실행한다.

    /**
     *  - for-of 문에서 제너레이터 오브젝트는
     *  --> {value: 10, done:false} 이런식으로
     *      리턴하지 않고 value 프로퍼티값만 설정한다.
     */
}