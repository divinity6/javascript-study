/**
 * 프로그램 설명문서 주석
 * 2021.12.19 수업
 *
 *           ===== return =====
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - generatorObject.return()
 *     - 파라미터             - 제너레이터로 넘겨 줄 값 opt
 *     - 반환                - return()의 파라미터 값
 *     -----------------------------------------------------------
 *
 *     - 이터레이터를 종료시킨다
 *     --> 즉, return메소드를 사용하면 이터레이터가 끝난다
 *
 *     - return()의 파라미터 값을
 *     --> {value: 값, done: true}에서
 *     --> value 프로퍼티 값으로 설정
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ return ---------------');

    function* sports(count){
        while(true){
            yield ++count;
        }
    }

    const obj = sports(10);
    log(obj.next());
    // :: {value: 11, done: false}
    debugger;
    log(obj.next(20));
    // :: {value: 12, done: false}
    debugger;
    /**
     *  제너레이터 함수를 호출하지 않고 이터레이터를 종료시킴!!
     */
    log(obj.return(70));
    // :: {value: 70, done: true}
    debugger;
    log(obj.next(50));
    // :: {value: undefined, done: true}
    debugger;

    // 1. obj.return(70)
    //  - 이터레이터를 종료시키며 파라미터 값 70을 반환

    // 2. obj.next(50)
    //  - 이터레이터가 종료되었으므로
    //    {value: undefined, done: true} 반환

    // 3. 파라미터 값 50을 반환하지 않는다.

    /**
     *  - 즉, generatorObject.return()을
     *    작성하면 이터레이터를 종료시키고 파라미터 값을 반환한다.
     *    (제너레이터 함수를 호출하지 않고 종료시킴)
     *
     *  --> return 메소드는 이터레이터를 즉시 종료시킴
     */
}

/**
 *
 *           ===== throw() =====
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - generatorObject.throw()
 *     - 파라미터             - 에러 메시지, Error 오브젝트
 *     - 반환                - {value: 에러메시지, done: true};
 *     -----------------------------------------------------------
 *
 *     - Error를 의도적으로 발생시킨다
 *
 *     - 제너레이터 함수의
 *     --> catch() 문에서 에러를 받음
 *
 *     - 제너레이터 함수에 throw 문을 작성
 *     --> 이것과 generatorObject.throw()는 차이가 있다.
 *         제너레이터 함수에 작성하는 것은 statement,
 *         위의 것은 method
 *
 */

{
    "use strict"
    log('------------ throw() ---------------');

    function* sports(){
        try {
            yield 10;
            /**
             *  throw를 실행하면 generator 함수의
             *  catch 문에서 이것을 받는다.
             */
        } catch (message){
            // throw = catch문안의 yield 실행
            yield message;
        };
        yield 20;
    };

    // 제너레이터 오브젝트 생성
    const obj = sports();

    log(obj.next());
    // :: {value: 10, done: false}
    debugger;
    log(obj.throw("에러발생"));
    // :: {value: "에러발생", done: false}

    /**
     *  done: false = generator가 종료되지 않았다는 뜻.
     */
    debugger;
    log(obj.next());
    // :: {value: 20, done: false}
    debugger;

    // 1. obj.throw("에러 발생")를 실행하면
    //  - sports()의 catch(message)가 실행되고
    //    "에러 발생"이 message에 설정된다

    // 2. catch()의 yield message;를 수행하게 되며
    //  - {value: "에러 발생", done: false}를 반환한다
    //    제너레이터가 종료되지 않는다

    // 3. 다음의 obj.next() 호출
    //  - throw() 호출로 인해 에러가 발생하지만
    //    {done: false}이므로 next()를 호출할 수 있다

    // 4. yield 20;을 실행하게 되며
    //  - {value: 20, done: false}를 반환한다.
}
{
    "use strict"
    log('------------ throw 문 작성 ---------------');

    function* sports(){
        yield 10;
        // 여기서 에러를 던지네
        throw "에러 발생";
        yield 20;
    };

    const obj = sports();
    try {
        log(obj.next());
        // :: {value: 10, done:false}
        debugger;
        const result = obj.next();
    } catch (message) {
        log(message);
        // :: 에러 발생
    }

    // :: 아여기는 프로그람이 죽어뻐리는구나
    log(obj.next());
    // :: {value: undefined, done: true}
    debugger;

    // 1. const result = obj.next()를 실행하면
    //    제너레이터 함수에서 throw로 인해 에러가 발생한다

    // 2. 그래서 next()를 try 문에 작성했다

    // 3. try문의 catch(message)에서 에러를 받는다

    // 4. throw "에러 발생"에서
    //    "에러 발생"이 message에 설정된다.

    // 5. 제너레이터 함수에서 에러가 발생하면 이터레이터가 종료된다

    // 6. 마지막 줄에서 obj.next()를 호출하면
    //    제너레이터가 실행되지 않는다

    // 7. 제너레이터 함수에 yield 20이 있지만
    //    {value: undefined, done: true} 반환

    /**
     *  throw 메소드와 throw 문을 작성한것은차이가 있다.
     *
     *  - throw() 메소드 : 이터레이터가 종료되지 않음
     *  - throw 문 : 이터레이터가 종료됨
     */
}