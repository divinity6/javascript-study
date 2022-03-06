/**
 * 프로그람 설명문서 주석
 * 2022.03. 06 수업
 *
 *           ===== set() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *                             - value, 프로퍼티 값
 *                             - receiver,( 선택 ) this 로 참조할 오브젝트
 *      - 반환                  - 처리 성공 : true , 실패 : false
 *      -----------------------------------------------------------
 *
 *      - target 에 프로퍼티 키와 값을 설정한다
 *
 *      - true , false 를 반환한다
 *      --> set 함수의 가장 큰 특징은 set 함수를 실행한 후
 *          true, false 를 반환하는 점이다.
 *
 *      - this 로 참조할 오브젝트 작성
 *
 *      - Proxy 핸들러의 set() 트랩 호출
 *
 *      - set() 트랩에서 this 참조 변경
 *
 */

console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ true, false 반환 ---------------');
    const target = {
        point : 100,
    };
    log( target.point = 200 );
    // :: 200
    log( Reflect.set( target , "point" , 300 ));
    // :: true
    log( target.point );
    // :: 300
    debugger;

    // 1. log( target.point = 200 )
    //    setter 는 point 에 설정한 값을 반환한다

    // 2. Reflect.set( target , "point" , 300 );
    //    target 에 point 가 있으면 300 으로 대체하고
    //    없으면 추가한다.
    //    이것은 setter 와 같다

    // 3. 한편, set() 은 처리를 성공하면 true 를 반환하고
    //    실패하면 false 를 반환한다

    // 4. 에러로 프로그람이 중단되는 것을 방지할 수 있다.
    /**
     *  - 이것은 Reflect 오브젝트의 특징이기도 하다
     */
}
{
    "use strict"
    log('------------ this 로 참조할 오브젝트 작성 ---------------');
    const target = {
        point : 100,
        set setPoint( key ){
            debugger;
            // this 참조! key point!
            target[ key ] = this.point + 500;
        }
    };

    target.setPoint = "point";
    log( target.point );
    // :: 600
    debugger;
    const that = { point : 300 };
    Reflect.set( target , "setPoint" , "point" , that );
    log( target.point );
    // :: 800
    debugger;

    // 1. target.setPoint = "point";
    //    setPoint() 가 호출되며
    //    "point" 가 파라미터 값으로 넘어간다

    // 2. setPoint() 에서 this 가 target 을 참조한다
    //    target.point = ( 100 + 500 ) 형태가 된다

    // 3. Reflect.set( target , "setPoint" , "point" , that );
    //    4 번째 파라미터에 that 을 작성했다
    //    setPoint() 에서 this 가 that 을 참조한다
    //    target.point = ( 300 + 500 ) 형태가 된다
}

{
    "use strict"
    log('------------ set() 트랩 호출 ---------------');
    const target = {
        point : 100,
        set setPoint( key ){
            debugger;
            target[ key ] = this.point + 500;
        }
    };

    const handler = {
        set( target , key , value , receiver ){
            debugger;
            // this 참조 변경
            const check = Reflect.set( target , key , value , receiver );
            log( check );
            // :: true
        }
    };

    const proxy = new Proxy( target , handler );
    debugger;
    proxy.setPoint = "point";
    debugger;
    log( target.point );
    // :: 600
    debugger;

    // 1. proxy.setPoint = "point"
    //    set() 트랩이 호출된다

    // 2. 트랩 : set( target , key , value , receiver ){ ... }
    //    target 파라미터에 target 이 설정된다
    //    key 에 setPoint 가 설정되고
    //    value 에 point 가 설정된다
    //    receiver 에 Proxy 인스턴스가 설정된다

    // 3. 트랩 : Reflect.set( target , key , value , receiver );
    //    setPoint() 를 호출한다
    //    setPoint() 에서 this 가 receiver( Proxy ) 를 참조하며
    //    Proxy.[[target]].point 값을 사용한다
}
{
    "use strict"
    log('------------ set() 트랩에서 this 참조 변경 ---------------');

    const target = {
        point : 100,
        set setPoint( key ){
            debugger;
            target[ key ] = this.point + 500;
        }
    };

    const handler = {
        set( target , key , value , receiver ){
            debugger;
            // this 참조 변경
            const check = Reflect.set( target , key , value , receiver );
            log( check );
            // :: true
        }
    };

    const proxy = new Proxy( target , handler );
    const that = { point : 300 };
    debugger;
    // this 를 that 으로 변경
    Reflect.set( proxy , "setPoint" , "point" , that );
    log( proxy.point );
    // :: 800
    debugger;

    // 1. Reflect.set( proxy , "setPoint" , "point" , that );
    //    4 번째 파라미터에 that 을 작성했다
    //    set() 트랩이 호출된다

    // 2. 트랩 : set( target , key , value ,receiver ) { ... }
    //    receiver 에 that 오브젝트가 설정된다

    // 3. 트랩 : Reflect.set( target , key , value , receiver );
    //    setPoint() 를 호출한다

    // 4. target[ key ] = this.point + 500
    //    this 가 receiver 를 참조하며, receiver 는 that 이다
    //    this.point 에서 { point : 300 } 을 사용한다

    /**
     *  - set 트랩의 receiver 에 proxy 가 아닌 that 함수를 설정!!
     *
     *  --> set 도 get 과 마찬가지로, this 로 참조하는 오브젝트를 변경하고,
     *      필요한 부분을 set trap 안에 작성하고, 이렇게하면 전반적인 일련의
     *      코드는 바꾸지 않고 프레임 워크 형태로 사용할 수 있는 것이다.
     *
     *  ----> 처음에는 부족한 부분이 있겠지만 계속 보강해 나가면 완전한 형태로
     *        사용할 수 있을 것이다.
     *
     *  ----> check 사항이 늘어난다면, 함수를 하나 호출해서 처리하는 것도 하나의 방법이다.
     *        조건 처리는 이 함수안에서 다처리하는, 그런 형태로 분리해서 작성하는 것도
     *        괜찮은 방법이다.
     *
     *  ============================================================
     *           - 메인 프로세스에 대한 코드가 심플하게!
     *             가독성 있게 유지될 수 있게 된다
     *  ============================================================
     */
}

