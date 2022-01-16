/**
 * 프로그램 설명문서 주석
 * 2022.01.12 수업
 *
 *           ===== Map 과 WeakMap 차이 =====
 *
 *
 *      - 참조하는 object 를 삭제하면
 *      --> Map 은 그대로 갖고 있지만
 *      --> WeakMap 은 GC 처리로 삭제된다
 *
 *      - Map 과 WeakMap 차이
 *      --> Map 은 열거하거나 반복해서 처리할 수 있다.
 *      --> WeakMap 은 열거도 할 수 없고, 전개도 할 수 없다
 *          오직, WeakMap 의 key 로 설정된 object 를
 *          설정하거나, 읽거나, 삭제만 할 수 있다.
 *
 *      ===== 이것은 GC 처리로 인해서 WeakMap 에 저장된
 *            entries 가 유동적으로 변하기 때문에 그렇다 =====
 *
 *     -----> key 로 사용한 object 가 변경되거나 삭제될 수 있다면
 *            Map 이 아닌 WeakMap 사용을 고려
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ Map 과 WeakMap 차이 ---------------');
    let mapObj = new Map();
    (function(){
        /**
         * 여기에 있는 변수들은 함수가 끝나면 메모리에서 지운다.
         */
       const obj = {key: "value"};
        /**
         *  그러나 Map 안에 설정되어 있는녀석들은 살아있는 치명적인 문제가 있다.
         */
       mapObj.set(obj, "Map");
    }());
    debugger;

    let weakObj = new WeakMap();
    (function(){
        /**
         *  상단과 실행환경이 같지만 사용하는 인스턴스가 다를 뿐이다!!
         */
        const obj = {key: "value"};
        /**
         *  참조하는 obj 가 삭제되면 WeakMap 오브젝트에서도 삭제됨
         */
        weakObj.set(obj , "WeakMap");
    }());
    debugger;

    // 1. let mapObj = new Map();
    //    (function(){...}());
    // -  즉시 실행 함수는 일회용으로
    //    변수를 저장하지 않을때 사용한다
    // -  함수가 끝나면
    //    obj 변수를 GC 가 메모리에서 지운다
    // -  Map 은 obj 변수가 지워지더라도
    //    Map 에 설정된 obj 를 지우지 않고 유지한다

    // 2. const weakObj = new WeakMap();
    //    (function(){...}());
    // -  앞의 실행 환경과 같다
    // -  다만, Map 이 아닌 WeakMap 에 저장한다
    // -  WeakMap 은 obj 변수가 메모리에서 삭제되면
    //    WeakMap 에 설정된 obj 를 삭제한다

    // 3. Map 과 WeakMap 차이

    /**
     *  - Map 인스턴스는 참조하는 오브젝트가 메모리에서 삭제되는 경우와 같이
     *    불일치가 발생할때는 사용할 수 없다.
     *
     *  - 그때는 WeakMap 인스턴스를 사용해야 한다.
     */
}

{
    "use strict"
    log('------------ Map 과 WeakMap 차이2 ---------------');
    let mapObj = new Map();
    (function(){
        const obj = {key: "value"};
        mapObj.set(obj, "Map");
    }());
    debugger;
    /**
     *  1. mapObj 를 펼치면 entry 가 있다.
     */

    let weakObj = new WeakMap();
    (function(){
        const obj = {key: "value"};
        weakObj.set(obj , "WeakMap");
    }());
    /**
     *  1. weakMap 을 쳘지면 entry 가 있다.
     */
    debugger;
    setTimeout(()=>
        log("mapObj:" , mapObj , "weakObj" , weakObj), 5000);
    // :: mapObj: Map(1) {{…} => 'Map'} weakObj WeakMap {}
    debugger;
    /**
     *  1. mapObj 에는 entry 가 있지만 weakObj 에는 없다
     *
     *  2. GC 가 obj 를 지우면서 WeakMap 의 obj 도 지우기 때문이다.
     */
}


