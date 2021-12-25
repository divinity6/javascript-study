/**
 * 프로그램 설명문서 주석
 * 2021.12.20 수업
 *
 *           ===== Symbol 사용 형태 =====
 *
 *      - Object의 프로퍼티 키로 사용
 *      --> Symbol 값이 유일하므로 중복되지 않음
 *      --> symbol-keyed property라고 부름
 *          (symbol 키드 프로퍼티)
 *      --> 프로퍼티 값 추출 방법
 *
 *      - Object에서 함수 이름으로 사용
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ symbol-keyed-property ---------------');
    const sym = Symbol("설명");
    const obj = {[sym] : 100};
    log(obj);
    // :: {Symbol(설명): 100}
    debugger;

    // 1. const obj = {[sym] : 100};

    // 2. Symbol 값을
    //    Object의 프로퍼티 키로 사용했다

    // 3. [sym]처럼 대괄호 안에
    //    Symbol()로 할당한 변수 이름을 작성한다

    // 4. 이를 symbol-keyed-property라고 부른다.

    /**
     *  - []안에 sym 변수이름을 작성하지 않고 함수이름을 작성할 수도 있다.
     *    하지만, 값을 구하기 힘듬
     */
}

{
    "use strict"
    log('------------ 프로퍼티 값 추출 ---------------');
    const sym = Symbol("설명");
    const obj = {[sym] : 100};

    log(obj[sym]);
    // :: 100
    log(obj.sym);
    // :: undefined
    debugger;

    // 1. obj[sym]
    //    Symbol() 결과를 할당한 sym을
    //    프로퍼티 키로 사용하여 값을 구한다

    // 2. 프로퍼티 값인 100이 출력된다

    // 3. obj.sym
    //    undefined가 출력되며
    //    obj[sym] 형태를 사용해야 한다.
}

{
    "use strict"
    log('------------ 함수 이름으로 사용 ---------------');
    const sym = Symbol("함수 이름");
    const obj = {
        [sym](param){
            return param;
        }
    }
    log(obj[sym](200));
    // :: 200
    debugger;

    // 1. [sym](param){} 형태로 함수를 정의하고
    // 2. obj[sym](200) 형태로 호출한다.
}

/**
 *           ===== Symbol 사용 형태 =====
 *
 *      - for-in 문에서 사용
 *      --> Symbol이 열거되지 않음
 *      --> [[Enumerable]]: false 이기 때문
 *
 *      - Object.getOwnPropertySymbols()로 열거가능
 *      --> 다음절에서 다룸
 *
 *      - for-of 문에서 사용
 *        ( for-of 문은 이터러블이여 하기때문에 배열안에작성 )
 *      --> 배열 안에 Symbol() 작성
 *
 *      - JSON.stringify() 에서 사용
 *      --> Symbol 값이 문자열로 변환되지 않음
 *      --> 이것은 조심하여야 한다.
 */
{
    "use strict"
    log('------------ for-in 문 ---------------');
    const obj = {
        [Symbol("100")] : 100,
        two : 200,
    };

    for (let key in obj ){
        log(key);
        // :: two
        debugger;
    }

    // 1. Object에 symbol-keyed 프로퍼티를
    //    사용하여 프로퍼티 값을 작성함

    // 2. for-in 문으로 열거되지 않는다
    //    에러가 나지 않는다.

    /**
     *  for-in 문에서 Symbol()은 열거되지 않는다.
     */
}

{
    "use strict"
    log('------------ for-of 문 ---------------');
    const list = [Symbol("100")];

    for (let value of list){
        log(value);
        // :: Symbol(100)
        debugger;
    }

    // 1. for-of로 전개하면 전개는 되지만
    //    Symbol("100") 코드가 그대로 나온다.

    // 2. 이것은 Symbol값을 외부로 노출시키지 않으려는 의도
}

{
    "use strict"
    log('------------ JSON.stringify() ---------------');
    const sym = Symbol("JSON");
    const result = JSON.stringify({[sym] : "ABC"});
    log(result);
    // :: {}
    debugger;

    // 1. JSON.stringify()는
    //    Object의 프로퍼티 키와 값을
    //    {"key" : "value"} 형태로 변환한다

    // 2. Symbol은 변환에서 제외된다

    // 3. 이것은, Symbol 값을 외부에
    //    노출하지 않기 위해서다

    // 4. 빈 오브젝트가 반환된다.

    /**
     *  서버로 전송할 데이터를 Syombol로 사용하는 것은 고려할 필요가 있다
     *  - 값을 노출하지 않기위해 데이터가 누락되어 버리기 때문
     */
}