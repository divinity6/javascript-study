/**
 * 프로그램 설명문서 주석
 * 2021.12.22 ~ 24 수업
 *
 *           ===== species 오버라이드 =====
 *
 *      - Symbol.species 는
 *      --> static 악세서 프로퍼티이며
 *      --> getter 만 있고 setter 는 없다
 *
 *      - Symbol.species 를 사용할 수 있는  빌트인 오브젝트
 *      --> Array, Map, Set, RegExp
 *      --> Promise, ArrayBuffer, TypedArray
 *          (심화과정)
 *
 *      - 빌트인 오브젝트를 상속받은 class 에
 *      --> Symbol.species 를 작성하면
 *          빌트인 오브젝트의 @@species 가 오버라이드 된다.
 *
 *      - 인스턴스 바꾸기
 *
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ Symbol.species ---------------');

    /**
     * 빌트인 Array 오브젝트 상속
     */
    class Sports extends Array {
        /**
         * - static 악세서 프로퍼티,
         * - getter get
         *
         * - 아래의 species 를 작성하지 않으면
         *   @@species 가 실행되지만,
         *   (constructor)
         *
         * - 아래처럼 명시적으로 [Symbol.species]을
         *   작성하면 아래의 내용이 실행됨
         */

        static get [Symbol.species]() {
            return Array;
        }
    };

    const obj = new Sports(10, 20);
    debugger;
}

{
    "use strict"
    log('------------ 인스턴스 바꾸기 ---------------');

    class Sports extends Array {
        /**
         *  - 여기서 Array를 return 하게 설정해 두므로
         *    two 의 __proto__ 는 Sports 가 아닌
         *    Array 를 직속으로 타게된다.
         */

        // [Symbol.species] == constructor
        static get [Symbol.species]() {
            debugger;
            // 빌트인 Array 오브젝트 반환
            return Array;
        };

        // static get constructor(){
        //     return Array;
        // }
    }

    const one = new Sports(10, 20, 30);
    log(one instanceof Sports);
    // :: true
    debugger;
    /**
     * - one의 메소드인 slice()를 호출할 때 [Symbol.species]()
     *   를 타네
     * --> 그치 get이니깐. get은 호출할때 타고,
     *     set은 할당할때 타니깐.
     * --> 그리고 slice(1,2)를 하게되면 새로운 인스턴스를 생성하여 반환하니깐!!
     */

    // 여기서 one 과 two의 형태가 다르다.
    const two = one.slice(1, 2);
    log(two instanceof Array);
    // :: true
    debugger;
    log(two instanceof Sports);
    // :: false
    debugger;

    // 1. class Sports extends Array {}
    // --> 빌트인 Array 오브젝트를 상속받는다

    // 2. static get [Symbol.species](){
    //    return Array; }
    // --> 빌트인 Array 오브젝트의 @@species를 오버라이드 한다

    // 3. const one = new Sports(10, 20, 30);
    // --> 인스턴스를 생성한다
    // --> 파라미터 값이 인스턴스에 설정된다

    // 4. one instanceof Sports
    // --> Sports 로 one 을 만들었으므로 true 출력

    // 5. const two = one.slice(1,2);
    // --> Array 오브젝트를 상속받았으므로
    //     one 인스턴스로 slice()를 호출할 수 있다
    // --> slice() 대상은 인스턴스에 설정된 [10, 20, 30]
    // --> 인스턴스를 반환하며 반환되는 인스턴스에 slice() 결과를 설정한다

    // 6. Symbol.species() 로 오버라이드 했으므로
    // --> static get [Symbol.species](){} 가 호출된다
    // --> 호출에 사용한 one 인스턴스 형태를 반환하지 않고
    //     Array 인스턴스를 반환한다
    // --> 이처럼 Symbol.species()로 반환할 인스턴스를 변경할 수 있다.

    // 7. two instanceof Array
    // --> two 인스턴스에는
    //     Array 인스턴스가 할당되어 있으며
    // --> Array 오브젝트로 만들었으며 true 출력

    // 8. two instanceof Sports
    // --> Sports 가 아니라 Array 오브젝트로
    //     two 인스턴스를 만들었으므로 false 출력
}
{

    "use strict"
    log('------------ 연습 ---------------');

    class Time {
        constructor(start, end) {
            this._start = start;
            this._end = end;
            this._duration = end - start;
        }

        set start(newStart) {
            debugger;
            this._start = newStart;
            this._duration = this._end - this._start;
        }

        get start() {
            debugger;
            return this._start;
        }
    }

    const time = new Time(0, 20);
    debugger;
    time.start = 5;
    debugger;
    console.log(time.start);
    debugger;
}

/**
 *  정리 ) - [Symbol.species] 는
 *          constructor 를 반환하게 되고, constructor 를 반환한다는 것은
 *          instance 를 반환한다는 것과 같다
 *
 *        - [Symbol.species] 로 반환되는 인스턴스를 바꿀 수 있다는 것.
 *
 *        - 지원하는 오브젝트
 *        --> Array, Map, Set, RegExp
 *        --> Promise, ArrayBuffer, TypedArray
 *
 *        - 형태는 위와같은 형태
 *
 *        - Class 에서 constructor 를 개발자 코드로 오버라이드 가능!
 *        --> constructor 개념을 적용하면 좀더 쉽게 Class 에 접근가능
 */