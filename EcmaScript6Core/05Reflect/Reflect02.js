/**
 * 프로그람 설명문서 주석
 * 2022.03. 06 수업
 *
 *           ===== get() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *                             - receiver,( 선택 ) this 로 참조할 오브젝트
 *      - 반환                  - 프로퍼티 값
 *      -----------------------------------------------------------
 *
 *      - target 의 프로퍼티 값을 반환한다
 *
 *      - target 의 getter 와 차이는
 *      --> receiver 에 this 로 참조할 오브젝트 작성
 *          ( 이것은 선택이다 )
 *
 *      - Proxy 핸들러의 get() 트랩에서
 *      --> target[ key ] 로 값을 구하는 형태
 *
 *      - get() 트랩에 Reflect.get() 을 사용한 형태
 *
 */

console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ receiver 에 this 로 참조할 오브젝트 작성 ---------------');
    const target = {
        point : 100,
        get getPoint(){
            debugger;
            // this 가 참조하는 오브젝트가 key point!
            return this.point + 500;
        }
    };
    debugger;
    log( target.getPoint );
    // :: 600
    log( Reflect.get( target , "getPoint" ) );
    // :: 600
    const that = { point : 300 };
    /**
     *  아하, 여기서 this 가 참조하는 값을 that 으로 변경할 수 있구나!!
     */
    log( Reflect.get( target, "getPoint" , that ) );
    // :: 800
    debugger;

    // 1. log( target.getPoint );
    //    getter 이므로 target 의 getPoint() 가 호출된다
    //    getPoint() 에서 this 가 target 을 참조한다

    // 2. Reflect.get( target , "getPoint" );
    //    target 의 getPoint() 가 호출된다
    //    getPoint() 에서 this 가 target 을 참조한다

    // 3. Reflect.get( target , "getPoint" , that );
    //    3 번째 파라미터에 that 을 작성했다
    //    getPoint() 에서 this 가 that 을 참조한다

    // 4. this 로 참조하는 오브젝트를 바꿀 수 있다
    /**
     *  - Reflect.get() 의 세번째 파라미터에서 [[Get]] 에서
     *    참조하는 this 를 지정하여 변경 할 수 있다!.
     */
}

{
    "use strict"
    log('------------ get() 트랩 호출 ---------------');

    const target = {
        point : 100,
        get getPoint(){
            debugger;
            return this.point + 500;
        }
    };

    const handler = {
        /**
         * - Reflect.get 으로 호출하면 여기서의
         *   receiver 가 this 를 참조하는구만!!
         */
        get( target , key , receiver ){
            debugger;
            return target[ key ];
        }
    };

    const proxy = new Proxy( target , handler );
    debugger;
    log( Reflect.get( proxy , "getPoint" ) );
    // :: 600
    const that = { point : 200 };
    log( Reflect.get( proxy , "getPoint" , that ));
    // :: 600
    debugger;

    // 1. Reflect.get( proxy , "getPoint" );
    //    get() 트랩이 호출된다.

    // 2. 트랩 : get( target , key , receiver ){ ... }
    //    target 오브젝트 , "getPoint" 가 설정되고
    //    receiver 에 Proxy 인스턴스가 설정된다

    // 3. 트랩 : return target[ key ];
    //    getPoint() 를 호출한다

    // 4. get getPoint(){ return this.point + 500 };
    //    getPoint() 에서 this 가 target 을 참조한다.
    //    this.point 값은 100 이다

    // 5. Reflect.get( proxy , "getPoint" , that );
    //    3번째 파라미터에 that 을 작성했다
    //    getPoint() 에서 this 가 that 을 참조하지 않고
    //    target 을 참조한다.

    // 6. 한편, get() 트랩을 작성하지 않으면
    //    getPoint() 에서 this 가 that 을 참조한다
    //    200 과 500 을 더해 700 이된다.
    /**
     *  - receiver 가 Reflect.get() 으로 호출하면 this 를 참조하네!!
     */
}
{
    "use strict"
    log('------------ get() 트랩에서 Reflect.get() 사용 ---------------');
    const target = {
        point: 100,
        /**
         *  - get 에서 this 가 get 트랩의  receiver 파라미터 참조
         */
        get getPoint(){
            debugger;
            return this.point + 500;
        }
    };
    const handler = {
        get( target , key , receiver ){
            debugger;
            // Reflect.get 으로 값을 구함
            return Reflect.get( target , key , receiver );
        }
    };

    const proxy = new Proxy( target , handler );
    const that = { point : 200 };
    debugger
    log( Reflect.get( proxy , "getPoint" , that ) );
    // :: 700
    debugger

    // 1. Reflect.get( proxy , "getPoint" , that );
    //    3 번째 파라미터에 that 을 작성했다

    // 2. 트랩 : get( target , key , receiver ){ ... }
    //    receiver 에 { point : 200 } 이 설정된다

    // 3. 트랩 : return Reflect.get( target , key , receiver );
    //    target 의 getPoint() 가 호출된다

    // 4. getPoint() 에서 this 가
    //    receiver 의 { point : 200 } 을 참조한다.

    // 5. 결과적으로 target.getPoint 로 값을 구하는 것은
    //    that 을 사용할 수 없으므로 확장성이 떨어진다

    // 6. Reflect.get( proxy , "getPoint" , that )과
    //    return Reflect.get( target , key , receiver ); 를
    //    사용하면 일련의 코드를 변경하지 않아도 된다

    // 7. 상황에 따라 get() 트랩에서
    //    return 값을 바꿀 수 있다.
    /**
     *  - 맨상단의 target.getPoint 로 값을 구하는 것은
     *    this 로 참조하는 곳을 바꿀 수 없으므로 확장성이 떨어진다.
     *
     *  --> 따라서, Reflect.get() 과 같이 세번째 파라미터에
     *      that 을 넘겨주고!
     *
     *  --> get trap 에서 [[Get]] 을 호출하면 코드들을 변경하지
     *      않아도 된다!!
     *
     *  --> 함수를 호출하기전에 this 로 참조하는 오브젝트만 바꿔주면,
     *      데이터만 바뀌는 것이다. 코드는 바뀌지 않는다!!
     *
     *  ----> 이런 형태로 작성 가능.
     *  ----> 또한, 상황에 따라 get trap 에서 return 값을 바꿀 수 있다.
     *        ( 조건에 따른 변환 등으로... )
     *
     *  - 이런식으로 코드를 작성하면 거의 완전하게 코드를 작성할 수 있다!!
     *
     *  --> this 가 참조하는 오브젝트만 바꾸면 되는 것이고, getter 는
     *      손대지 않아도 된다는 것이다.
     *
     *  ----> 왜냐하면 getter 는 여기 뿐만이 아닌, 다른곳에서도
     *        사용할 수 있기 때문!!
     *
     *  ========================================================
     *      이렇게 사용한다면, 거의 완전에 가깝게 프레임워크 개념으로
     *      코드를 만들 수 있다.
     *  ========================================================
     */
}