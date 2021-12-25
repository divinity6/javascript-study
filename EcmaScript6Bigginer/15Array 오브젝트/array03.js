/**
 * 프로그램 설명문서 주석
 * 2021.11.07 수업
 *
 *           ===== generic() =====
 *
 *      - 스펙에서 아래 문장을 볼 수 있다
 *      - copyWithin function is intentionally generic
 *      --> copyWithin 함수는 의도적으로 generic이라는 뜻이다
 *
 *      - ES7 스펙, 22.1.3.3 copyWithin()
 *
 *      --> The "copyWithin" function is intentionally generic; it dose not require
 *          that its "this" value be an Array object.
 *          Therefore it can be transferred to other kinds of objects for use as a method.
 *
 *      ----> copyWithin 메소드가 Array오브젝트 안에 있으므로 copyWithin안에서
 *          this는 Array 오브젝트를 참조하게 된다.
 *          ( 그래야 배열 처리를 할 수 있기 때문이다 )
 *
 *      ----> 그런데 Array 오브젝트가 아니어도 된다는 것.
 *          그러므로 이것은 다른 오브젝트의 타입을 사용할 수 있다라는 것.
 *          예) Array-like 오브젝트(copyWithin에서는 사용할 수 있다라는 것)도 사용가능
 *
 *          ===== 이것이 generic의 개념 =====
 *
 *          - 즉, generic 개념하나로 인해 copyWithin 메소드를 만드는 개발자는 Array-like가 들어와도
 *            대처가 되는 코드를 만들어야 한다.
 *          --> Array 오브젝트뿐만이 아니라, Array-like와 같은 다른 오브젝트, Array 오브젝트로써
 *              대응할 수 있는 형태라면, copyWithin 메소드에서 이를 처리해 주어야 한다.라는 스펙
 *
 *
 *    - MDN copyWithin()
 *    --> MDN에도 존재한다.
 *
 *      - generic 사용 형태
 *
 *      - generic이 뜻하는 것은?
 *      --> copyWithin()이 Array 메소드이므로
 *          Array 오브젝트가 처리 대상이지만
 *
 *      --> generic은 Array 오브젝트가 아닌
 *          Array-like, 이터러블 오브젝트를
 *          처리할 수 있다는 것을 뜻한다.
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ generic: Array-like ---------------');
    const like = {0: 10, 1: 20, 2: 30, length: 3};

    /***
     *  배열로 반환하지않고 대상(this로 참조하는) 오브젝트 형태로 반환하네
     */
    log(Array.prototype.copyWithin.call(like, 1, 0));
    // :: { 10, 10, 20 , length : 3}

    debugger;
    // 1. call()의 첫 번째 파라미터에
    //    Array-like를 작성했으며
    //    Array-like 타입은 Object이다

    // 2. copyWithin()이 Array 메소드이므로
    //    Array를 넘겨주어야 하는데
    //    Array-like를 넘겨주어도 처리가 된다

    // 3. 이것이 Generic이다
    //    copyWithin()은 generic 함수이다

    // 4. 배열로 반환하지 않고
    //    대상 오브젝트 형태로 반환한다.

    /**
     *  - copyWithin 메소드의 기능은 그대로 수행했다.
     *    그런데 형태가 배열이 아닌, 오브젝트!
     *
     *  - generic은 Array 오브젝트가 아닌 Array-like,
     *    또는 이터러블 오브젝트를 처리할 수 있다는것을 뜻함
     *
     *  - Array가 아닌 반복할 수 있는 개념이 된다면, Generic이구나,
     *    그리고 또하나의 특징은 넘겨준 오브젝트(this)의 특징을 그대로 반환한다는 것.
     */
}

/**
 *  ===== copyWithin 메소드는 배열만 처리할 수 있는 것이 아니다 =====
 *  - 그것의 논리적인 근거는 generic이라는 것이다.
 */