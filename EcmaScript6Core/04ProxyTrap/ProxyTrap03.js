/**
 * 프로그람 설명문서 주석
 * 2022.02 27 수업
 *
 *           ===== get() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *                             - receiver, 설명 참조
 *      - 반환                  - 프로퍼티 값
 *      -----------------------------------------------------------
 *
 *      - 값을 구하는 트랩이다
 *      --> target, receiver 에서 값을 구한다
 *
 *      - get() 트랩이 호출되면
 *      --> 엔진이 실행 환경을 분석하여
 *          파라미터 값을 설정한다
 *
 *      - get() 트랩 활용 형태 : 조건 체크
 *
 *      - get() 트랩 활용 형태 : 데이터 변경
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ get() 트랩 ---------------');
    const target = { point : 100 };
    const handler = {
        /**
         *
         * @param target   :: target 오브젝트( receiver[[Target]] )
         * @param key      :: 설정하려는 key
         * @param receiver :: Proxy 또는 Proxy 를 상속받은 오브젝트
         */
        get( target, key , receiver ){
            return target[ key ] + 200;
        }
    }

    const obj = new Proxy( target , handler);
    log(obj.point);
    // :: 300
    log(obj.bonus);
    // :: NaN
    debugger;

    // 1. log(obj.point);
    //    get() 트랩이 호출된다

    // 2. 트랩 : get( target, key, receiver ) {
    //    target 에 target 오브젝트가 설정되고
    //    key 에 "point" 가 설정된다
    //    receiver 에 Proxy 또는 Proxy 를 상속받은
    //    오브젝트가 설정된다

    // 3. 트랩 : return target[key] + 200;
    //    target 오브젝트에서 point 값을 구하고
    //    구한 값 100 에 200 을 더해 반환한다

    // 4. log(obj.bonus);
    //    obj 인스턴스에 bonus 가 없지만
    //    obj 에 get() 트랩이 있으면 호출한다
    //    bonus 프로퍼티의 존재를 체크하지 않는다

    // 5. 트랩 : return target[key] + 200; 에서
    //    target[key] 에서 "bonus" 가 없으므로 undefined 이며
    //    200 을 더하므로 NaN 를 반환한다
}
{
    "use strict"
    log('------------ get() 트랩 활용 : 조건 체크 ---------------');
    const target = { point : 100 };
    const handler = {
        get( target , key , receiver ){
            const value = target[ key ];
            return this.check ? value + 200 : value;
        }
    };
    const obj = new Proxy(target, handler);

    handler.check = true;
    log(obj.point);
    // :: 300
    debugger;

    // 1. handler.check = true;
    //    get() 트랩에서 체크 값으로 사용한다

    // 2. 트랩 : return this.check ? value + 200 : value;
    //    this 는 handler 오브젝트를 참조한다
    //    check 값이 true 이므로 200 을 더해 반환한다

    // 3. 이처럼 조건을 부여하여 값을 구할 때
    //    호출하는 곳마다 조건 코드를 작성하지 않고
    //    get() 트랩에 조건 코드를 작성하면
    //    깨끗하게 코드를 관리할 수 있다.

    /**
     *  ====================================================
     *      getter 가 10 군데 있을 때, 10군데마다 조건을
     *      체크하기 힘들기 때문에  get() 트랩에 조건을 체크하면 된다!
     *
     *      - 그러나 이것은 데이터가 바뀌었을 때 문제가 될 수 있다
     *  ====================================================
     */
}
{
    "use strict"
    log('------------ get() 트랩 활용 : 데이터 변경 ---------------');
    let target= { point : 100 };
    /**
     *  1. 아래에서 target 전체를 대체하므로 let 변수로 선언했다
     */

    debugger;

    const handler = {
        /**
         * - 즉, get() 트랩이 호출되면
         *   @param target :: receiver[[Target]] 으로 설정됨
         *                    ( 위의 target 이 아니라!! )
         */
        get( target , key , receiver ){
            debugger;
            return target[ key ];
        }
    }

    const proxy = new Proxy( target , handler );

    debugger;

    target.point = 300;
    /**
     *  1. target 과 proxy.[[Target]] 의 point 값이 바뀐다
     */
    debugger;

    // - 와 씨 타겟은 바뀌는데 proxy.[[Target]] 은 바뀌기 전 target 을 참조하고있네...!!
    // -->  Proxy 인스턴스가 생성될 때 proxy.[[Target]] 에 target 의
    //      메모리 주소를 설정해두는 개념!!
    target = { point : 500 };
    log("1. target : " , target.point);
    // :: 500
    debugger;

    /**
     *  1. target 오브젝트 전체를 바꾼다.
     *  -  target.point 값으로 500이 출력된다
     *
     *  2. 한편, proxy.[[Target]].point 는 바뀌지 않는다
     *  -  즉, target.point 는 500 이고
     *     proxy.[[Target]].point 는 300이다
     */

    debugger;

    /**
     *  - target = { point : 500 }
     *
     *  1. { point : 500 } 은 새로운 빌트인 Object 를 생성한다
     *
     *  2. 새로운 메모리 주소를 target 에 할당하므로
     *  -  target 이 참조하는 메모리 주소가 바뀌게 된다
     *
     *  3. 이때, target 의 바뀐 메모리 주소가
     *  -  proxy.[[Target]] 반영되지 않는다
     */

    debugger;

    log("2. proxy : " , proxy.point);
    // :: 300

    /**
     *  1. get( target , key , receiver ){...} 에서
     *  -  target 에 바뀌기 전의 { point : 300 } 이 설정된다
     *  -  즉, 바뀐 target 이 설정되지 않고 proxy.[[Target]] 이 설정된다
     *
     *  2. new Proxy( target , handler ) 로 인스턴스를 생성할 때
     *  -  proxy.[[Target]] 에 target 의 메모리 주소를 설정하고
     *     get() 트랩에서 이를 사용하여
     *     target 의 프로퍼티 값을 구하는 것이 된다
     *
     *
     *   ===============================================================
     *      proxy.[[Target]] 이 사용될때마다 target 에 가서 찾아오는 게아니라,
     *      Proxy 인스턴스를 맨드는 시점에 [[Target]] 에다가,
     *      target 을 참조하는 메모리 주소를 저장하고, 그것을 사용한 다라는 것.
     *   ===============================================================
     */

    debugger;

    proxy.point = 700;
    log( "3. proxy : " , proxy.point );
    // :: 700

    /**
     *  1. proxy.[[Target]].point 값을 바꾼다
     *  -  바뀐 값인 700 이 출력된다
     */

    debugger;

    log( "4. target : " , target.point );
    // :: 500

    /**
     *  1. proxy.point = 700; 으로 바꾼 값이 target 에 반영되지 않는다
     *
     *  2. 일반적으로 target.point 에도 값이 연동되어 반영되지만
     *  -  지금은 proxy.[[Target]] 이 참조하는 메모리 주소와
     *     target 의 메모리 주소가 다르기 때문이다
     */
    debugger;

    /**
     *  1. 결과적으로
     *  -  target 의 값을 프로퍼티 단위로 바꿔야 한다
     *
     *  2. 앞의 트랩에서 체크하는 코드를 함수로 만들고
     *  -  target 의 프로퍼티를 변경하는 것도 함수로 만들면
     *     프레임 워크 개념으로 사용할 수 있다
     */

    debugger;
}

/**
 *           ===== get() 트랩 호출 =====
 *
 *      - get() 트랩이 호출되는 형태
 *      --> proxy[ key ]
 *      --> Object.create( proxy , { 프로퍼티 } )
 *      --> Reflect.get()
 */
{
    "use strict"
    log('------------ Object.create( proxy , { 프로퍼티 } ) ---------------');
    const target = { point : 600 , bonus : 100 };
    const handler = {
        get( target , key , receiver ) {
            debugger;
            return target[ key ] + 200;
        }
    };

    const proxy = new Proxy( target , handler );
    const obj = Object.create( proxy , {
        point : { value : 500 }
    } );
    log( obj.point );
    // :: 500
    log( obj.bonus );
    // :: 300
    debugger;

    // 1. log( obj.point );
    //    Object.create( proxy , { ... } ) 의
    //    두 번째 파라미터에 point 를 작성했다

    // 2. 즉, point 가 인스턴스 프로퍼티 이므로
    //    get() 트랩을 호출하지 않고
    //    point 프로퍼티 값 500을 반환한다

    // 3. get() 트랩을 호출하면 target 에
    //    { point : 600 } 이 있으므로 600 이 반환되어야 한다
    //    그런데, 이것은 point 의 계층구조상 obj
    //    자신의 프로퍼티인 point 를 먼저 반환한다

    // 4. log( obj.bonus );
    //    Object.create( proxy , {...} ) 의
    //    두 번째 파라미터에 bonus 를 작성하지 않았으므로
    //    get() 트랩이 호출된다
}

/**
 *           ===== get() 트랩 준수사항 =====
 *
 *      - target 의 프로퍼티가 data 디스크립터일 때
 *      --> [[Writable]] : false 또는
 *          ( :: 프로퍼티 값 변경 가능, 불가 여부 )
 *          [[Configurable]] : false 이면
 *          ( :: 프로퍼티 삭제 가능, 불가 여부 )
 *          반환 값을 변경하여 return 불가
 *
 *      ----> 즉, get() 트랩안에서 값을 바꾸면 안된다
 *            ( 에러가 발생한다 )
 *
 *      - target 의 프로퍼티가 악세서 디스크립터일 때
 *      --> [[Configurable]] : false 이면
 *          ( :: 프로퍼티 삭제 가능, 불가 여부 )
 *          반환 값을 변경하여 return 불가
 */
{
    "use strict"
    log('------------ 반환 값을 변경하여 return 불가 ---------------');
    const target = {};
    Object.defineProperty( target , "point" , {
        value : 500 ,
        writable : false,
    });

    const handler = {
        get( target , key , receiver ){
            debugger;
            // return target[ key ] + 200;
            return target[ key ];
        }
    };

    const obj = new Proxy( target , handler );
    log(obj.point);
    // :: 500
    debugger;

    // 1. { value : 500 , writable : false }
    //    target 오브젝트의 point 프로퍼티는
    //    { writable : false } 이다

    // 2. 트랩 : // return target[ key ] + 200;
    //    프로퍼티가 { writable : false } 일 때
    //    target[ key ] 로 구한 값을 반환해야 한다

    // 3. 트랩처럼 구한 값에 값을 더해 return 하면
    //    에러가 발생한다
    //    에러가 발생하므로 주석으로 처리했다

    // 4. { writable : true } 이면
    //    return 값을 변경할 수 있다

    // 5. get() 트랩에 try-catch 를 사용할 수 있다
    /**
     *  - get() 트랩에서는 try-catch 문을 사용할 수 없다
     *  --> 또한 값을 변경하려면 의도적으로 writable : true 를 작성해주어야 한다!
     */
}