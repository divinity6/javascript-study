/**
 * 프로그램 설명문서 주석
 * 2021.08 10 수업
 *
 *
 *           ===== 이터레이터(iterator) 프로토콜 =====
 *
 *      - 이터레이터(iterator) 프로토콜
 *      --> 값을 순서대로 생성하는 방법(규약)
 *
 *      - 이터레이터 오브젝트
 *      --> Symbol.iterator()를 호출하면
 *
 *      --> 이터레이터 오브젝트를 생성하여 반환
 *      ----> 아래에선 obj에 할당.
 *
 *      --> 이터레이터 오브젝트에 next()가 있다
 *
 *      --> 생성한 오브젝트를 이터레이터라고도 부른다
 *      ----> 이터레이터 === 이터레이터 오브젝트
 *
 *      - 이터레이터 오브젝트 구조
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

log('------------이터레이터 오브젝트---------------');

const list = [10, 20];
const obj = list[Symbol.iterator]();

log(obj.next());
// :: {value: 10, done: false}
log(obj.next());
// :: {value: 20, done: false}
log(obj.next());
// :: {value: undefined, done: true}

// 1. 이터레이터 오브젝트의 next()를 호출하면
//    이터레이터를 호출한다고도 한다.
//    ( next가 메소드이지만 이터레이터를 호출한다고도 한다. )

// 2. {value: 10, done : false}를 반환한다.
//    value는 [10, 20]에서 첫 번째 값이고
//    done: false 는 이터레이터 상태입니다.

// 3. 두 번째 next() 호출

// 4. {value: 20, done: false}를 반환한다.
//    value는 [10, 20]에서 두 번째 값이고
//    done: false는 이터레이터 상태이다.

// 5. 세 번째 next() 호출

// 6. {value: undefined, done: true} 반환
//    undefined는 처리할 값이 없다는 것을 뜻하며
//    done: true는 이터레이터의 종료를 뜻한다.

/**
 *
 *      - 일반적인 for문은 반복을 통해서 배열을 끝까지 반복을 했었다.
 *      --> 그러나 이터레이터는 step by step이다.
 *
 *      - 이터레이터는 next()를 호출할때마다 element 하나씩을 읽어들인다.
 *
 */

log('------------이터레이터 오브젝트 구조---------------');

{
    "use strict";
    debugger;

    const list = [1, 2];
    /**
     *  1. list.__proto__를 펼치면
     *  -  Symbol(Symbol.iterator)가 있으므로
     *  -  이터레이터 오브젝트를 만들 수 있다.
     *  --> 따라서 obj로 이터레이터 오브젝트를 만든다
     */

    debugger;

    const obj = list[Symbol.iterator]();

    /**
     *  1. 위 형태로 호출하면
     *  -  이터레이터 오브젝트를 생성하여 반환한다.
     *
     *  2. obj.__proto__를 펼치면 next()가 있다.
     *  -  next()가 있으므로 obj는 이터레이터 오브젝트이다.
     *  --> 이것이 이터레이터 프로토콜이다.
     *  --> 오브젝트에는 반드시 next()라는 이름을 가진 메소드가 있어야 한다라는 것.
     */
    debugger;

    log(obj.next());
    // :: {value: 1, done: false}
    log(obj.next());
    // :: {value: 2, done: false}
    log(obj.next());
    // :: {value: undefined, done: true}
    debugger;
}

/**
 *           ===== 지금까지 정리 =====
 *
 *      - 이터레이션과 관련된 것은 2가지가 있었다.
 *      
 *      --> 이터러블 프로토콜
 *      ----> 이터러블 프로토콜을 준수한 것을 이터러블 오브젝트라고 했다.
 *      ------> (반복할 수 있는가? , [Symbol.iterator]() 함수를 가지고 있는가)
 *
 *      --> 이터레이터 프로토콜
 *      ----> 이터레이터 프로토콜을 준수한 것을 이터레이터 오브젝트라고 한다
 *      ------> (값을 순서대로 생성할 수있는가?, next()메소드가 포함되어 있는가? )
 *
 *      ----> 이터레이터 오브젝트를 이터레이터라고도 한다.
 *
 */