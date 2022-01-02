/**
 * 프로그램 설명문서 주석
 * 2022.01.02 수업
 *
 *           ===== WeakMap 오브젝트 =====
 *
 *     - WeakMap: 약한 Map?
 *     ----> 무엇이 약한가? 왜 약하게 했을까?
 *
 *     - WeakMap 은 object 만 key 로 사용 가능
 *     --> number 등의 프리미티브 타입 사용 불가
 *     ----> 반면 Map 은 프리미티브 타입 사용 가능
 *     --> value 는 제한 없음
 *
 *     - Map 에서 key 로 참조한 object 를 삭제하면
 *     --> 삭제한 object 를 사용할 수 없게 되지만
 *     --> Map 인스턴스에 object 가 남는다
 *     --> 메모리 릭(memory leak) 발생
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ 오브젝트 참조 변경 ---------------');
    let sports = {like: "축구"};
    let music = 'kPop';
    const obj = new Map([
        [sports, "like:축구"],
        [music, 'music: kPop'],
    ]);
    debugger;

    /**
     * - sports 변수가 참조하는 Object 의 메모리 주소가 바뀌었다...
     * -->  Map 인스턴스에서 참조하는 것이 달라져 버렷다.
     *      이럴때 메모리 릭이 발생
     */
    sports = {like: "농구"};
    music = 'jPop';
    debugger;

    /**
     *      - 이런문제를 해결하기 위한 것이 WeakMap 오브젝트 !!
     */
}

/**
 *           ===== WeakMap 오브젝트 =====
 *
 *     - WeakMap 의 object 를 GC 가 지운다
 *     --> GC: Garbage Collection
 *     --> 그래서 (약한, 부서지기 쉬운) WeakMap?
 *     ----> Object 가 삭제되거나 변경되었을때,
 *           Map 은 그대로 남아있지만 WeakMap 은 GC가 지운다.
 *           ( 따라서, 메모리 릭이 발생하지 않음 )
 *
 *     - WeakMap 오브젝트 메소드
 *     --> set(), get(), has(), delete()
 *     ----> 왜 이렇게 제약을 두었는가?
 *           ( 이것은 약한, weak 와 연계가 된다 )
 *
 *     --> CRUD 와 관련된 메소드만 있다
 *
 *     - WeakMap entry 의 열거 불가
 *     --> 이터레이션 불가
 *         ( 즉, next() 메소드로 entry를 하나씩 읽을 수 없다 )
 *
 */


/**
 *           ===== new WeakMap() =====
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - new WeakMap()
 *     - 파라미터             - [이터러블 오브젝트]opt
 *     - 반환                - 생성한 WeakMap 인스턴스
 *     -----------------------------------------------------------
 *
 *     - WeakMap 인스턴스를 생성하여 반환
 *
 *     - 파라미터 작성
 *     --> 대괄호[] 안에 이터러블 오브젝트 작성
 *         ( 이것은 Map과 같음 )
 *
 *     - WeakMap 오브젝트 구조
 */
{
    "use strict"
    log('------------ WeakMap() 인스턴스 생성 ---------------');
    const empty = new WeakMap();

    const sports = {};
    const obj = new WeakMap([
        [sports, "sports 오브젝트"]
    ]);
    log(typeof obj);
    // :: object
    log(obj.toString());
    // :: [object WeakMap]
    debugger;

    // 1. 파라미터를 작성하지 않아도 된다.

    // 2. new 연산자를 사용한다

    // 3. 인스턴스이므로 타입은 object 다.
}

{
    "use strict"
    log('------------ WeakMap 오브젝트 구조 ---------------');
    debugger;

    const map = Map;
    const weakmap = WeakMap;

    /**
     *  1. map 과 weakmap 이 구조에서 크게 다르지 않지
     *
     *  2. Map 오브젝트에 Symbol(Symbol.species)가 있지만
     *  -  WeakMap 오브젝트에는 없다
     *
     *  3. map.prototype 에 Symbol.iterator 가 있지만
     *  -  weakmap.prototype 에는 Symbol.iterator 가 없다
     *
     *  4. map.prototype 에는 forEach()가 있지만
     *  -  weakmap.prototype 에는 forEach() 가 없다
     *
     *  --> 따라서 WeakMap 은 순차적으로 WeakMap 인스턴스에 있는
     *      entry 들을 읽을 수 없다라는 것.
     *      ( 처리할 수 없다라는 것)
     *  ----> 아, 그래서 size 프로퍼티도 없나보다!!
     *
     *  ----> 이것이 특징이면서, 또한 목적이기도 하다.
     */
    debugger;

    const sports = {};
    const obj = new WeakMap([
        [sports, "종목"]
    ]);
    /**
     *  1. 오른쪽의 obj 를 펼치면 [[Entries]] 가 있다
     *  -  이것은 엔진에서 설정하는 것을 뜻한다
     *
     *  2. [[Entries]]를 펼치면 0 " {Object => "종목"} 형태다
     *  -  [Object, "종목"] 형태로 작성한 것을
     *  -  인덱스를 부여하여 배열로 만들고
     *  -  엘리먼트에 {Object: "종목"} 형태로 변환한다
     *
     *  3. Map 인스턴스와 구조가 같다.
     *  -  즉, Map 과 WeakMap 은 구조적으로 차이가 없다
     *     단지 그안에 들어가는 Methods 들이 다르고,
     *     GC 가 다른것 뿐.
     *
     */
    debugger;
}

/**
 *      - Map 과 WeakMap 은 구조적으로 차이가 없다
 *
 *      - 단, 처리하는 제약이 있는 것뿐.
 *        Map 은 순차적으로 전체 entry 를 처리할 수 있지만,
 *        WeakMap 은 전체를 순차적으로 처리할 수 없다.
 */










