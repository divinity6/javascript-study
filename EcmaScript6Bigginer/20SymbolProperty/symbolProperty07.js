/**
 * 프로그램 설명문서 주석
 * 2021.12.25 수업
 *
 *           ===== iterator =====
 *
 *      - @@iterator가 있는 빌트인 오브젝트
 *      --> String, Array, Map, Set, TypedArray
 *
 *      - 빌트인 Object 에는 @@iterator 가 없지만
 *      --> 개발자 코드로 작성할 수 있다
 *
 *      - 이 절에서 String, Array, Object 를 다루고
 *      --> Map, Set은 관련된 곳에서 다룬다
 *      --> TypedArray 는 ES6+ 심화 과정에서 다룬다.
 *
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{

    /**
     *           ===== Array.prototype[@@iterator] =====
     *
     *      - Array 오브젝트의 [Symbol.iterator]()를 호출하면
     *      --> 이터레이터 오브젝트 반환
     *      --> next()로 배열 엘리먼트 값을 하나씩 구할 수 있다.
     */

    "use strict"
    log('------------ Array[@@iterator] ---------------');

    const list = [10, 20];

    // 실행까지 시켜서 이터레이터 오브젝트를 할당하네
    const obj = list[Symbol.iterator]();
    // :: type === [object Array Iterator]

    debugger;
    log(obj.next());
    // :: {value: 10, done: false}
    debugger;
    log(obj.next());
    // :: {value: 20, done: false}
    debugger;
    log(obj.next());
    // :: {value: undefined, done: true}
    debugger;

    /**
     *  - obj 에 [Symbol.iterator]를 연결하면
     *    배열의 엘리먼트 값을 이터레이터 오브젝트형태로 하나씩 반환
     */
}

{
    /**
     *           ===== String.prototype[@@iterator] =====
     *
     *      - String 오브젝트의 [Symbol.iterator]()를 호출하면
     *      --> 이터레이터 오브젝트 반환
     *      --> next()로 문자열에서 문자를 하나씩 구할 수 있다.
     */

    "use strict"
    log('------------ String[@@iterator] ---------------');

    const list = '1A';
    const obj = list[Symbol.iterator]();
    // :: type === [object String Iterator]
    debugger;

    log(obj.next());
    // :: {value: '1', done: false}
    debugger;
    log(obj.next());
    // :: {value: 'A', done: false}
    debugger;
    log(obj.next());
    // :: {value: undefined, done: true}
    debugger;

    /**
     *  - next()가 호출될 때마다 문자열에서 문자 하나씩 읽는다.
     */
}

/**
 *           ===== Object 이터레이션 =====
 *
 *      - 빌트인 Object 에는 Symbol.iterator 가 없다
 *      --> Symbol.iterator 가 반복을 처리하므로
 *      --> Object에 Symbol.iterator를 작성하면
 *          반복할 수 있다
 *
 *      - 엔진이 for-of 문을 시작하면
 *      --> 먼저 obj 에서 [Symbol.iterator] 검색
 *          이를 위해 obj에 [Symbol.iterator] 작성
 *
 *      - for(const result of obj)를 처음 실행할 때
 *      --> obj의 [Symbol.iterator]()가 호출되며
 *          return{} 문을 실행
 *      --> obj.maxCount = 2;로 반복 횟수 정의
 */

{
    "use strict"
    log('------------ Object 이터레이션 ---------------');
    /**
     *  * 들어가기전 정리
     *  --> iterator 오브젝트의 프로토콜은
     *      이터레이터 오브젝트에 next() 메소드가 존재해야함.
     *
     *  --> 빌트인 Object 에는 [Symbol.iterator]가 없지만
     *      작성하면 이터레이터 오브젝트가 반환된다.
     *
     *  ----> [Symbol.iterator] 호출시 이터레이터 오브젝트 반환
     *        iterator 오브젝트의 프로토콜에는 next() 존재
     */


    const obj = {
        [Symbol.iterator](){
            return {
                // 클로저 -> count, maxCount
                count : 0,
                maxCount : this.maxCount,
                // next 메소드 오버라이드( Object 에서 처리 할 수 있도록... )
                next() {
                    if (this.count < this.maxCount) {
                        // ++ 후치 연산자 (반환 후 값이 올라감)
                        return {value: this.count++, done: false};
                    };
                    return {value: undefined, done: true};
                }
            }
        }
    }

    debugger;
    obj.maxCount = 2;
    const iteratorObj = obj[Symbol.iterator]();
    debugger;

    log(iteratorObj.next());
    // :: {value: 0, done: false}
    debugger;
    log(iteratorObj.next());
    // :: {value: 1, done: false}
    debugger;

    /**
     *  - for ~ of 문을 작성하게되면 iterator 오브젝트를 만든다
     *    [Symbol.iterator] 가 작성된 것을 체크
     *
     *  - [Symbol.iterator]()로 iterator 오브젝트를 만들어서 그안의 next() 호출.
     */
    for (const value of obj){
        log(value);
        // :: 0
        // :: 1
        debugger;
    }

    /**
     *   - 이렇게 이터레이션이 안되는 빌트인 Object를
     *     [Symbol.iterator] 와 next() 메소드로
     *     이터레이션이 될수 있도록 정의할 수 있다.
     */
}