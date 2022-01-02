/**
 * 프로그람 설명문서 주석
 * 2022.01.02 수업
 *
 *           ===== forEach() =====
 *
 *     --> Array 오브젝트와 Map 오브젝트에 같은 이름의 forEach 메소드가 있는것!!
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype.forEach()
 *     - 파라미터             - callback 함수
 *                          - this 로 참조할 object(opt)
 *     - 반환                - undefined
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스를 반복하면서 callback 함수 호출
 *     --> map(), filter() 등의 callback 함수가 동반되는 메소드 사용 불가
 *     ----> Map 오브젝트는 오직 forEach 메소드만 지원한다.
 *
 *     - callback 함수에 넘겨주는 파라미터
 *     --> value, key, Map 인스턴스
 *         ( key, value 순서가 아니다 !!)
 *     ----> 또한 value,key,Map 인스턴스에서 Map 인스턴스 자체도 넘어간다.
 *           (즉, Map 인스턴스 안에있는 메소드들도 넘어간다는 이야기!! )
 *
 *     --> 콜백 함수에서 this 사용
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ forEach() ---------------');
    const obj = new Map([
        ["one" , 100],
        ["two" , 200]
    ]);
    const callback = (value, key , map)=> {
        log(`${key}, ${value}`);
        // :: one, 100
        // :: two, 200
    };
    obj.forEach(callback);
    debugger;
}

{
    "use strict"
    log('------------ 콜백 함수에서 this 사용 ---------------');
    const obj = new Map([
        ["one", 100],
        ["two", 200]
    ]);

    function callback(value, key, map) {
        log(`${key} , ${value}, ${this.check}`);
        // :: one , 100 , 50
        // :: two , 200 , 50
    }
    obj.forEach(callback, {check: 50});
    debugger;

    // 1. 콜백 함수를 일반 함수로 작성

    // 2. 콜백 함수를 화살표 함수로 작성하면
    //    this 가 window 오브젝트를 참조한다

    // 3. 콜백 함수에서 this 가
    //    forEach()의 두 번째 파라미터에 작성한
    //    오브젝트를 참조한다.
}

/**
 *           ===== delete() =====
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype.delete()
 *     - 파라미터             - key 값
 *     - 반환                - 삭제 성공: true, 실패: false
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스에서 파라미터 값과 같은 entry 삭제
 *     --> 파라미터와 같은 key 가 있으면 true 반환, 없으면 false 반환
 *     ----> 즉, 삭제에 성공하면 true 를 반환하고 실패하면 false 를 반환.
 */

{
    "use strict"
    log('------------ delete() ---------------');
    const obj = new Map([
       ["one", 100],
       [{}, "오브젝트"]
    ]);

    /**
     *  - 여기서 delete 를 하면 한칸씩 땡겨지네.
     */
    log(obj.delete("one"));
    // :: true
    // :: obj : {{} => "오브젝트"}
    debugger;
    /**
     *  - 여기서 각각 {}는 참조하는 메모리 주소가 다르다.
     *    ( delete 실패 === false )
     */
    log(obj.delete({}));
    // :: false
    // :: obj : {{} => "오브젝트"}
    debugger;

    const sports = {};
    obj.set(sports , "스포츠");
    log(obj.delete(sports));
    // :: true
    // :: obj : {{} => "오브젝트"}
    debugger;
}

/**
 *           ===== clear() =====
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype.clear()
 *     - 파라미터             - 파라미터 없음
 *     - 반환                - 업음
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스의 모든 entry 를 지운다
 *     --> Map 인스턴스 자체를 삭제하는 것은 아니다
 *     --> 따라서 [key, value] 를 추가할 수 있다
 *
 *     - size 프로퍼티
 *     --> Map 인스턴스의 entry 수를 반환한다
 *     --> 개발자 코드로 수정할 수 없다.
 */
{
    "use strict"
    log('------------ clear() ---------------');
    const obj = new Map([
        ["one", 100],
        ["two", 200]
    ]);
    log(obj.size);
    // :: 2
    debugger;

    obj.clear();
    log(obj.size);
    // :: 0
    debugger;
    obj.set("add" , "추가");
    log(obj.size);
    // :: 1
    debugger;

}
/**
 *            ===== 정리 =====
 *
 *      - Map 오브젝트는 다양한 메소드를 지원하고
 *        iteration 도 할 수 있다.
 *        그리고, for-of 문으로 전개 가능
 *
 *      - Map 오브젝트가 빌트-인 오브젝트보다
 *        더 확장성이 있다. ( 유연하다 )
 */












