/**
 * 프로그램 설명문서 주석
 * 2021.08 08~9 수업
 *
 *
 *           ===== 이터러블(iterable) 프로토콜 =====
 *
 *      - 이터러블 프로토콜이란?
 *      --> 오브젝트가 반복할 수 있는 구조이어야 하며
 *      --> Symbol.iterator를 가지고 있어야 한다.
 *
 *      - 아래의 빌트인 오브젝트는
 *      --> 디폴트로 이터러블 프로토콜을 가지고 있다.
 *      --> 즉, 반복할 수 있는 구조이면서 Symbol.iterabor를 가지고 있다라는 뜻.
 *      --> Array , Argument, String , TypedArray, Map, Set, DOM NodeList
 *          ( TypedArray, Map, Set은 아직 안다룸 )
 *          ( 그리고 빌트인 오브젝트는 아니지만, DOM NodeList가 있다 )
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

log('------------이터러블 프로토콜---------------');

// 배열은 반복할 수 있는 구조이다.
// 반면 Number123은 반복할 수 있는 구조가 아니라서
// 프로토콜을 만족하지 못하므로, 이터러블이 될 수 없다.

const list = [10, 20];

log(list[Symbol.iterator]);
// :: ƒ values() { [native code] }

/**
 *      - 배열로 생성한 list 오브젝트에는 Symbol.iterator가 있다.
 *      --> Symbol.iterator은 function이다
 *      ----> function values() { [native code] }
 *
 *      - 따라서, 배열은 구조도 맞고, Symbol.iterator도 갖고 있으므로,
 *        이터러블 프로토콜을 만족시킨다.
 */

debugger;

/**
 *
 *           ===== 이터러블(iterable) 오브젝트 =====
 *
 *      - 이터러블 오브젝트
 *      --> 이터러블 프로토콜을 갖고 있는 오브젝트
 *      --> 즉,반복할수 있는 구조이면서, Symbol.iterator()함수를 가지고 있는 것
 *      ----> 앞의 프로토콜은 iterator를 물어본 것이고,
 *            이터러블 오브젝트는 함수, 또는 메소드로 물어본 것이다.
 *      --> 스펙에서는 @@iterator()로 표기
 *
 *      - 이터러블 오브젝트 구조
 *
 *      - 자체 오브젝트에는 없지만
 *      --> 이터러블 오브젝트를 상속받아도 된다
 *      --> 즉, prototype chain(__proto__)에
 *          있으면 된다.(상속)
 *
 *      --> 예를 들어, Array 오브젝트를 상속 받으면 이터러블 오브젝트가 된다.
 *
 */

log('------------이터러블 오브젝트---------------');
const list2 = [10, 20];
log(list2[Symbol.iterator]);
// :: ƒ values() { [native code] }

const obj = {one: 10, two: 20};
log(obj[Symbol.iterator]);
// :: undefined

debugger;

// 1. [] 리터럴로 생성한 list2에
//    Symbol.iterator가 있으므로 Array는 이터러블 오브젝트이다.

// 2. {} 리터럴로 생성한 obj에
//    Symbol.iterator가 없으므로
//    Object는 이터러블 오브젝트가 아니다.

// 3. for 문의 반복과 이터레이션은 차이가 있듯이
//    for - in의 열거와 이터레이션은 차이가 있다.

/**
 *  - list2가 ƒ values() { [native code] } 이 나온 이유는
 *    iterator오브젝트를 가지고 있기 때문이다.
 *
 *  - 한편, 프로퍼티로 구성된 빌트인 오브젝트는 Symbol.iterator가 없다.
 *    따라서 Object는 이터러블 오브젝트가 아니다.
 *
 *  --> 왜냐하면 이터러블 프로토콜인 반복구조와 Symbol.iterator구조를
 *      만족시키지 않기 때문이다.
 *
 *  - {one: 10, two: 20} 이 오브젝트를 for - in으로 열거할 수는 있지만,
 *    이터레이션은 할 수가 없는 것이다.
 *    (이것이 열거와 이터레이션의 차이이다)
 */

log('------------이터러블 오브젝트 구조 ---------------');


{
    "use strict";
    const list = ["A", "B"];
    const func = () => {
    };
    /**
     *
     *  1. 오른쪽 list를 펼치면 __proto__가 있으며
     *     __proto__를 펼치면
     *     Array 오브젝트의 메소드가 표시된다.
     *
     *  2. 아래로 내려가면 Symbol(Symbol.iterator)가 있다.
     *  -  따라서 Array 오브젝트는 이터러블 오브젝트이다.
     */

    debugger;

    /**
     *  3. 또한 Symbol(Symbol.iterator)를 펼치면
     *  -  __proto__에 Function 오브젝트의 메소드가 연결되어 있다.
     *
     *  - 즉, Symbol.iterator는 함수이다.
     *
     *  4. Symbol.iterator가 함수이므로 호출할 수 있다.
     *  - 즉, 단지 length와 같이 값을 구하는 프로퍼티가 아니라,
     *    호출할 수 있는 함수라는 것.
     *
     */

}


/**
 *           ===== 이터러블(iterable) 정리 =====
 *
 *      - 여기서 정리를 한번 해보면, 이터러블 오브젝트,
 *        이터레이터 오브젝트를 자꾸 거론하는 것은
 *
 *      --> 개발자 코드를 이것에 맞춰 정리를 하면, 비록 이터러블
 *          프로토콜을 가지고있지 않는 오브젝트라도 이터러블 오브젝트로 만들 수 있다!
 *
 *      --> 라는 논리적 배경
 *          (개념적인 정리를 해야 논리적으로 접근해서 이터러블 오브젝트를 만들 수 있다.)
 *
 */