/**
 * 프로그람 설명문서 주석
 * 2022.02 20 수업
 *
 *
 *           ===== target =====
 *
 *      - target 은
 *      --> Proxy 대상 오브젝트이다
 *      --> Array, Object 등을 사용할 수 있다
 *
 *      - const obj = new Proxy(target, {}) 형태에서
 *      --> 첫 번째 파라미터에 target 을 작성한다
 *      --> 이렇게 Proxy 인스턴스를 생성하므로
 *      --> Proxy 인스턴스와 target 이 연결된다
 *      ----> 두번째 파라미터에 빈 Object 를 작성했다
 *            지금부터 이것을 설명하겠다
 *
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
/**
 *           ===== trap, handler =====
 *
 *      - trap
 *      --> OS(Operating System) 에서 사용하는 용어로
 *      --> 실행 중인 프로그람에 이상이 발생했을 때
 *          실행을 중단하고 사전에 정의된 제어로 전환하는 것
 *
 *      - 가운데 사람이 밥을 받아
 *      --> 자신 앞에 있는 수저를 같이 건네 준다면
 *          Proxy 에 수저를 건네주는 코드가 필요하다
 *
 *      --> 이것이 Proxy 를 사용하는 목적이다
 *      ----> 뻘쭘하게 가운데 앉아있지말고, target 한테 밥을 받고,
 *            거기에다가 수저도 같이 보내라는 것.
 *
 *      ----> 그럼으로써 Proxy 가 할일이 생긴 것이다.
 *
 *      ------> Proxy 가 수저를 건네주지 않는다면 왼쪽 사람이
 *              바로 target 한테 바로 "밥 줘!" 라고 할 것이다
 *
 *      ------> 그런데, Proxy 가 수저를 건네줄 수 있는 기능을 가지고 있는 것이다
 *              그래서 어쩔수 없이 "Proxy 야, 밥하고 수저 좀 같이 건네줘!"
 *              라고 말을 하는 것이다
 *
 *      ===== 이것이 바로 Proxy 를 사용하는 목적이다 =====
 *
 *      - const handler = {...}
 *      --> 오브젝트에 get(), set() 이 있다
 *      --> handler 를 핸들러 오브젝트라고 하며
 *          약칭으로 핸들러라고 부른다
 */

{
    "use strict";
    log('------------ Trap ---------------');
    const target = {food : "밥"};
    const handler = {
        /**
         * - 여기의 get 은 Proxy 의 프로퍼티를 호출할때만 호출되는구낭!
         * --> 그리고 파라미터 값은 고정이구낭!
         *
         * - 아래 형태를
         * --> get 트랩,
         * --> set 트랩이라고 부른다
         */
        get( target, key ){
            return target[ key ] + "수저";
            // return arguments[0][ arguments[1] ] + "수저";
        },
        set(target, key){
            debugger;
        }
    };

    const middle = new Proxy(target, handler);
    debugger;
    const left = middle.food;
    log(left);
    // :: "밥수저"
    debugger;

    // 1. trap 과 handler 를 대략적으로 살펴본다
    //    자세한 것은 계속해서 다룬다

    // 2. get() 이 getter 이고 set() 이 setter 이다

    // 3. get() 과 set() 을 trap 이라고 한다

    // 4. const left = middle.food;
    //    middle.food 를 실행하면
    //    [[Get]] 대신에 get() 트랩을 실행한다

    /**
     *  - 만약 Proxy 내부에 위처럼 get trap 을 작성하지 않게되면
     *    내부 메소드 [[Get]] 을 호출하게 되고, target 의
     *    내부 메소드 [[Get]] 을 호출하게 된다.
     *
     *  - 그런데, 지금은 get trap 을 작성했다라는 것.
     *    즉, 중간에서 내부메소드 [[Get]] 을 가로채는 것이다
     *    그래서, 수저까지 같이 돌려주는 역할
     *
     *
     *   ===== 즉, 오버라이드 개념이 되는 것이다 =====
     *
     *   - 구조적으로는 get trap 이 위에있는 것.
     */

    // 5. target[key] 는 target 의 [[Get]] 이 실행된다
    //    target[key] 값이 "밥" 이므로

    /**
     *  - 이것이 trap 이다!
     *
     *  - get trap 과 set trap 을 가지고 있는 것을
     *    handler 오브젝트라고 하며! 약칭으로 handler 라고 부른다!
     *
     *  --> handler 는 Proxy 의 두 번째 파라미터에 작성한다
     */
}

/**
 *           ===== Proxy Trap =====
 *
 *      --> 13 개의 내부 메소드와 핸들러 메소드가 있다
 *      ----> 여기서 handler 라는 것은 trap 을 통칭하는 것이다
 *
 *        ( 내부 메소드 )             ( 핸들러 메소드 )
 *      - Internal Method       :   Handler Method
 *
 *        [[GetPrototypeOf]]    :   getPrototypeOf()
 *        [[SetPrototypeOf]]    :   setPrototypeOf()
 *        [[IsExtensible]]      :   isExtensible()
 *        [[PreventExtensions]] :   preventExtensions()
 *        [[GetOwnProperty]]    :   getOwnPropertyDescriptor()
 *        [[DefineOwnProperty]] :   defineProperty()
 *        [[HasProperty]]       :   has()
 *        [[Get]]               :   get()
 *        [[Set]]               :   set()
 *        [[Delete]]            :   deleteProperty()
 *        [[OwnPropertyKeys]]   :   ownKeys()
 *        [[Call]]              :   apply()
 *        [[Construct]]         :   construct()
 *
 *      - enumerate()
 *      --> ES6 에서는 있었으나 ES7 에서 deprecated(삭제)
 */