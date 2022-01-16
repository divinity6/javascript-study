/**
 * 프로그램 설명문서 주석
 * 2022.01.11 수업
 *
 *           ===== 가비지 컬렉션(GC) =====
 *
 *
 *      - 참조하는 object 가 바뀌면
 *      --> 참조했던 오브젝트가 가비지 컬렉션 처리된다
 *
 *      - 가비지 컬렉션 처리
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ 참조 오브젝트 변경 ---------------');
    const obj = new WeakMap();
    // 이런 {point: 1} 들이 계속 쌓이게 되면 문제가 된다.
    // --> 메모리 릭 발생 원인
    let sports = () => {point: 1};
    /**
     *  여기의 set 은 위의 sports 를 참조하고 있고
     */
    obj.set(sports , "변경전");
    debugger;

    sports = () => {point : 2};
    /**
     *  여기의 set 은 위의 sports 를 참조하고 있다
     *  ( 두개의 메모리 주소가 다름 )
     */
    obj.set(sports , "변경후");
    console.log(obj);
    // :: WeakMap {ƒ => '변경전', ƒ => '변경후'}
    debugger;

    // 1. let sports = () => {point: 1};
    //    obj.set(sports, "변경전");
    // --> sports 에 Function 오브젝트를 할당하고
    // --> 이것을 WeakMap 인스턴스에 key 로 설정

    // 2. sports = () => {point: 2};
    // --> 새로운 함수를 생성하여 할당한다
    // --> 바로 위의 sports 가 참조하는 메모리 주소가 바뀐다
    // --> sports 가 참조하는 메모리 주소가 바뀌면
    //     앞의 sports 가 참조했던 오브젝트를 호출할 수 없게된다.

    // --> 이렇게 사용할 수 업게된 {point: 1} 오브젝트는 GC(가비지콜렉터) 대상이 된다
    // --> 엔진이 주기적으로 GC(가비지콜렉션) 처리를 한다.

    // 3. obj.set(sports , "변경후");
    // --> sports 를 key 로 하여 WeakMap 에 설정한다
    // --> 앞에서 sports 를 key 로 하여 설정했으며
    //     여기서도 sports 를 key 로 하여 설정하므로
    //     값이 대체되어야 하지만

    // --> 두 개의 sports 가 참조하는 주소가 다르므로 sports 가 추가된다.

    // 4. WeakMap 인스턴스의 GC 상태
}
{
    "use strict"
    log('------------ WeakMap 오브젝트의 상태 ---------------');
    debugger;

    let obj = new WeakMap();
    let sports = () => {point: 1};
    obj.set(sports , "변경전");
    debugger;
    /**
     *  1. 아래에서 sports 변수에 {point: 2} 를 할당하므로
     *  -  sports 가 참조하는 오브젝트가 바뀐다.
     */

    sports = () => {point: 2};
    obj.set(sports, "변경후");
    debugger;
    /**
     *  1. obj 의 [[Entries]] 를 펼치면 0과 1이 있다
     *  -  변숫 값은 바뀌어 하나지만
     *  -  WeakMap 인스턴스에는 두 개가 있다.
     *
     *  2. {point: 1} 과 {point: 2} 의 메모리 주소가 다르며
     *  -  sports 는 사람이 보는 것으로
     *  -  WeakMap은 값인 메모리 주소가 다르므로 각각 저장한다
     *  --> 이름이 같다고해서 같이 저장하는 것은 곤란하다는 이야기
     *      ( 왜냐하면 실질적으로 저장하는 메모리 주소가 다르기 때문 )
     *
     *  3. 그래서 sports 로 저장하지 않고
     *  -  인덱스를 부여하여 저장하는 것이다.
     *  -  엔진은 인덱스가 key 이며
     *  -  sports 는 프로퍼티 value 에서 프로퍼티 키다.
     *
     *  ===== 이와같은 구조를 가지기 위해서 엔진은 index 를 이용해서 가져갔던 것 =====
     *
     *  ===== 이것은 Map 오브젝트도 같은 방법을 사용한다 =====
     *
     */
    // WeakMap 오브젝트의 상태
    // - 와 진짜 GC 가 안쓰는건 지워버리네 ㅋㅋㅋ
    // 4초 기둘려야함
    setTimeout(function(){
        debugger;
        log(obj.get(sports));
        // :: 변경후
        log(obj);
        // :: WeakMap {ƒ => '변경후'}
        debugger;
    },4000);

    debugger;
    /**
     *  1. {point: 1} 의 sports 를 사용할 수 없으므로
     *  -  GC 가 {point: 1}의 sports 를 메모리에서 지운다
     *  -  또한 obj 의 "변경 전" 도 삭제한다
     *
     *  2. 인덱스 1번이 0 번이 된다
     *
     *  3. Map 오브젝트에서 entry 를 삭제해도 인덱스를 정리한다.
     */

    /**
     *          ===== WeakMap 인스턴스 =====
     *      - WeakMap 인스턴스에는 변경후 만 남아있다.
     *      --> 가비지 콜렉션 처리를 통해 ƒ =>{point:1} 이 날라가 뻐린것!!
     *
     *  ===== 이것이 바로 WeakMap 오브젝트의 특징이고 Map 오브젝트와의 차이점이다. =====
     *
     *      - 우와 이거 개신기하네~~
     *      --> 따라서 GC가 일어났을때 초래되는 결과들이 있다~
     */
}



