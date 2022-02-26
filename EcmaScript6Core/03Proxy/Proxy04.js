/**
 * 프로그람 설명문서 주석
 * 2022.02 20 수업
 *
 *
 *           ===== new Proxy =====
 *
 *     -----------------------------------------------------------
 *      - 구분                   - 개요
 *
 *      - 파라미터                - target, 대상 오브젝트
 *                              - handler 오브젝트
 *      - 반환                   - 생성한 Proxy 인스턴스
 *      -----------------------------------------------------------
 *
 *      - Proxy 인스턴스를 생성하여 반환한다
 *
 *      - 첫 번째 파라미터
 *      --> Proxy 대상 target 오브젝트를 작성
 *      --> Object, Array, Function 등
 *
 *      - 두 번째 파라미터
 *      --> 핸들러를 작성한다
 *
 *      - Proxy 형태
 *
 *      - Proxy 인스턴스 형태
 *
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;

{
    "use strict";
    log('------------ new Proxy() ---------------');
    const target = ["A" , "B"];
    const handler = {
        // get trap 작성
        get(target , key) {
            // 여기서 this 는 handler 를 참조하네
            return target[key] + ".첫번째";
        }
    };

    const obj = new Proxy(target, handler);
    debugger;
    log(obj[0]);
    // :: A.첫번째
    debugger;

    // 1. const handler = {...}
    //    [[Get]] 대신에 실행될 핸들러이다(get trap)

    // 2. const obj = new Proxy(target, handler);
    //    Proxy 인스턴스를 생성하면서
    //    target 과 handler 를 연결한다
    //    --> 그럼으로 Proxy 에서 target 과 handler 를 모두 알 수 있다.

    // 3. new 연산자를 사용하지 않고
    //    Proxy() 로 호출하면 TypeError 가 발생한다

    // 4. handler 를 사용하지 않더라도
    //    handler 를 작성하지 않으면 에러가 발생하므로
    //    new Proxy(target, {}) 형태처럼
    //    두 번째 파라미터에 빈 Object{}를 작성해야 한다

    // 5. obj[0]
    //    값을 구하는 것이므로
    //    핸들러의 get() 트랩이 호출된다
}

{
    "use strict";
    log('------------ Proxy 오브젝트 형태 ---------------');
    debugger;

    const obj = Proxy;
    /**
     *  1. Proxy 오브젝트 구조를 살펴보기 위해 obj 에 할당했다.
     */
    debugger;
    /**
     *  1. Proxy 오브젝트 자체를 obj 에 할당했으므로
     *  -  prototype 과 constructor 가 있어야 하는데 없다
     *
     *  2. new 연산자로 인스턴스를 생성하려면
     *  -  constructor 가 있어야 하는데, 없다
     *  -  그런데도 앞에서 new 연산자로 인스턴스를 생성했다
     *  --> 이것은 말이 안되는 것아닌가...?
     *
     *  -  또한, Proxy(target, {}) 형태로 실행하면 에러가 난다고 했다
     *  --> 즉, new 연산자를 사용해야 한다고 했는데,
     *      constructor 가 없다라는 것.
     */
    debugger;
    /**
     *  3. obj.__proto__ 를 펼치면 apply(), bind() ,call() 이 있으며
     *  -  이것은 Function 오브젝트의 메소드로
     *  -  Proxy 에서 정의한 것이 아니다
     *
     *  4. 한편, 이런 구조는 Proxy 오브젝트가
     *     Function 오브젝트 특성을 갖고 있다는 것을 뜻한다
     */
    debugger;

    /**
     *  5. Proxy 오브젝트는 일반적인 형태가 아닌
     *  -  특별한 형태의 오브젝트이다
     *
     *  6. ES6 스펙에 아래와 같이 작성되어 있다
     *  -  A proxy object is an exotic object.
     *                          ( 특별한 오브젝트 )
     *
     *  --> exotic 은 SPEC 에 많이 언급되고 다룬다.
     */
    debugger;

    /**
     *  7. exotic object 에 대해
     *  -  "ES6+ 기본" 과정에서 다루었지만,
     *  -  범용성을 위한 특별한 오브젝트를 뜻한다
     *
     *  8. revocable():
     *  -  취소 가능한 오브젝트를 생성하며 뒤에서 다룬다
     *  -  Proxy 오브젝트에는 함수가 딱 하나만 있다
     */
    debugger;
}

{
    "use strict";
    log('------------ Proxy 인스턴스 형태 ---------------');
    debugger;
    const target = { point: 100}
    const handler = {
        // get trap 작성
        get(target, key){
            return target[key] + 200;
        }
    };

    const obj = new Proxy(target, handler);
    /**
     *  1. obj 를 펼치면 [[Handler]] 가 있으며, 이것은 핸들러를 뜻한다
     *
     *  2. [[Handler]] 를 펼치면 get()이 있으며
     *  -  이것은 handler 오브젝트에 작성한 트랩이다
     *
     *  3. [[Handler]].__proto__ 를 펼치면 get, set 이 있다
     *     ( get __proto__, set __proto__ )
     *  -  이것이 내부메소드 [[Get]], [[Set]] 이다
     *
     *  4. get() 트랩 뒤에 __proto__ 가 있고
     *     ( get() 내부 말고, 그니깐 [[Handler]].__proto__ )
     *  -  거기에 [[Get]] 이 있으므로 get() 트랩이 실행된다
     */
    debugger;
    /**
     *  5. [[Target]] 을 펼치면 {point: 100} 이 표시되며
     *  -  이것은 target 오브젝트이다
     *
     *  6. [[Target]].__proto__ 를 펼치면 get, set 이 있다
     *     ( get __proto__, set __proto__ )
     *  -  이것이 [[Get]], [[Set]] 이다
     */
    debugger;
    log(obj.point);
    // :: 300
    /**
     *  1. obj.point 는 getter 이다
     *
     *  2. obj Proxy 인스턴스에서 point 프로퍼티 값을 구한다
     *     ( [[Handler]] 에 가서 [[Get]]을 찾는다 )
     *  -  핸들러에 get() 트랩을 작성했으므로 get() 트랩이 호출된다
     *
     *  return target[key] + 200;
     *
     *  3. target 에서 point 프로퍼티 값을 구하고
     *  -  200 을 더해 반환한다
     *  --> [[Target]].__proto__ 의 내부프로퍼티인 [[Get]]
     *      에서 point :100 을 악세스해서 100 을 구하게 된다.
     *
     *  4. get() 트랩의 자세한 처리는 Proxy trap 에서 다룬다
     */
    debugger;
}

/**
 *           ===== Proxy.revocable() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                   - 개요
 *
 *      - 파라미터                - target, 대상 오브젝트
 *                              - handler, 핸들러 오브젝트
 *      - 반환                   - 생성한 오브젝트
 *      -----------------------------------------------------------
 *
 *      - Proxy 를 사용할 수 없는 상태로
 *      --> 바꿀 수 있는 오브젝트를 생성, 반환
 *      ----> 지금 당장, 사용할 수 없는 것이 아니라, 정상적인 상태로
 *            Proxy 인스턴스를 만들고, 필요할 때,
 *            Proxy 인스턴스를 사용할 수 없는 상태로 맨든다는 것.
 *
 *      - 생성한 오브젝트 구조
 */
{
    "use strict";
    log('------------ Proxy.revocable() ---------------');

    const target= {point: 100};
    const handler = {
        get(target, key){
            return target[key];
        }
    };
    /**
     *  - 오, 애는 구조가 한층 더 감싸져있네!
     *  --> obj 안에 proxy 로 감싸져이뜸...
     *  --> revoke 라는 함수도 생깃네...
     */
    const obj = Proxy.revocable(target, handler);
    log(obj.proxy.point);
    // :: 100
    debugger;
    obj.revoke();
    // :: obj.proxy[[Handler]] : null
    // :: obj.proxy[[Target]] : null
    // :: obj.proxy[[IsRevoked]] : true
    try {
        obj.proxy.point;
    } catch {
        log("Proxy 기능 사용 불가");
    }
    // :: Proxy 기능 사용 불가
    debugger;
    // 1. const obj = Proxy.revocable(target, handler);
    //    new Proxy(target, handler) 와 같다
    //    따라서 Proxy 를 처리할 수 있다
    // --> 즉, 인스턴스를 맨드는 것은 같지만
    //     이것은 함수() 형태로 호출하게 된다.

    // 2. 다만, obj.proxy 에 Proxy 인스턴스가 설정된다

    // 3. log(obj.proxy.point);
    //    getter 이므로 핸들러의 get() 트랩이 호출된다
    //    obj.proxy 에 Proxy 인스턴스가 있으므로
    //    obj.proxy.point 형태로 작성한다

    // 4. get() 트랩에서 100을 반환한다

    // 5. obj.revoke();
    //    obj.proxy 의 Proxy 를 사용할 수 없게 만든다

    // 6. obj.proxy.point;
    //    obj.proxy 의 Proxy 를 사용할 수 없으므로
    //    에러가 발생한다
}
{
    "use strict";
    log('------------ Proxy.revocable() 로 생성한 오브젝트 구조 ---------------');
    const target = {point: 100};
    const handler = {
        get(target, key) {
            return target[key];
        }
    };
    const obj = Proxy.revocable(target, handler);
    /**
     *  1. obj 를 펼치면, proxy 와 revoke() 가 있다
     *
     *  2. obj.proxy 를 펼치면
     *  -  [[Handler]] 와 [[Target]] 이 있다
     *  -  즉, Proxy 인스턴스이다
     *
     *  3. 이런 구조로 인해
     *  -  [[Target]] 의 point 프로퍼티 값을 구할 때
     *  -  obj.proxy.point 형태로 작성해야 한다
     *
     *  4. [[IsRevoked]] 가 있으며 이때, 값은 false 이다
     */
    debugger;
    obj.revoke();
    /**
     *  1. obj.proxy 를 펼치면,
     *  -  [[IsRevoked]] 값이 false 에서 true 로 바뀌었다
     *
     *  2. 이 값이 true 일 때,
     *  -  obj.proxy.point 를 실행하면 에러가 발생한다
     *
     *  3. revoke() 메소드는 [[IsRevoked]] 값을 true 로 설정하여
     *  -  Proxy 가 실행되지 않도록 한다
     *
     *              ===== 조금, 특별하다 =====
     */

    debugger;
}
