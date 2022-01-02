
/**
 * 프로그람 설명문서 주석
 * 2021.12.30 수업
 *
 *           ===== Map 과 Object 비교 =====
 *
 *     - Map 오브젝트 구조
 *
 *     - key
 *     --> Map: 타입 제약 없음
 *     --> Object: String, Symbol
 *
 *     - {key: value} 수
 *     --> Map: size 프로퍼티로 구한다
 *     --> Object : 전체를 읽어 구해야 한다
 *
 *     - 처리시간 : MDN
 *     --> 빈번하게 key, value 를 추가/삭제 할때는
 *         Map 이 Object 보다 좋은 경우가 있다고 한다.
 */

console.log("ㅇ====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ Map 오브젝트 구조 ---------------');
    debugger;
    const map = Map;
    /**
     *  1. Map 오브젝트에 get Symbol(Symbol.species)가 있다
     *  -  따라서, constructor 를 오버라이드할 수 있다.
     *
     *  2. prototype 을 펼치면 Symbol.iterator가 있다
     *  -  따라서 이터레이션을할 수 있다.
     */
    debugger;

    const list = [1 , 2];
    const obj = new Map([
        ["one" , "첫 번째"],
        ["two" , "두 번째"],
    ]);

    /**
     *  1. 오른쪽의 obj를 펼치면 [[Entries]]가 있다
     *  -  대괄호[[]] 두개는 엔진에서 설정하는 것을 뜻한다
     *
     *  2. [[Entries]]를 펼치면 0: {"one" => "첫 번째"} 형태다
     *
     *  3. 인덱스를 부여하여 key 로 사용하고
     *  -  {"one" : "첫 번째"}를 value로 설정한다
     *
     *  4. 이것은 배열 형태와 구조가 비슷하다
     *  -  size 가 length 기능을 한다
     *  --> size 는 Entries 의 수를 나타낸다.
     *
     *  ----> 즉, Map 인스턴스는 Array 인스턴스와 구조가 같다.
     *        단, value 가 다른것 뿐!!
     *
     *  5. 인덱스를 부여하여 저장하므로 작성한 순서대로 읽혀진다.(보장)
     *
     *  - [[Entries]] 는 index : value 형태인데
     *    value 자리에 Map 인스턴스를 만들때 사용했던
     *    [ key , value ]를 저장해놓는 형태.
     *  --> 그런데 object 형태로 저장해두는 것.{key : value}
     *
     */
    debugger;

}
/**
 *      - 지금까지 일반적으로 오브젝트를 사용했다. 그런데,
 *        Map 오브젝트를 좀 더 적극적으로 사용해야할 필요가 있다.
 *
 *      --> 특별한 경우가 아니라면 Object 보다 Map 이 더 좋다.
 *      ----> Map 오브젝트는 Map 을 사용할 수 있는 메소드들이 제공되고 있다.
 *      ----> 하지만, Object 는 특별한 메소드가 없다.
 *            프로퍼티 key 로, 프로퍼티 value 를 설정하는,
 *            이런 방법을 사용하고 있다.
 *
 *      --> Map 오브젝트 사용을 적극적으로 생각해볼 필요가 있다!!
 */
