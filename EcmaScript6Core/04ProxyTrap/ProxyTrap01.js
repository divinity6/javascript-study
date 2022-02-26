/**
 * 프로그람 설명문서 주석
 * 2022.02 23~26 수업
 *
 *           ===== set() =====
 *      -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *                             - value, 프로퍼티 값
 *                             - receiver, 설명 참조
 *      - 반환                  - 처리 성공: true, 실패 : false
 *      -----------------------------------------------------------
 *
 *      - 프로퍼티를 설정하는 트랩으로
 *      --> target 또는 receiver 에
 *      --> 프로퍼티(key, value) 를 설정한다
 *      
 *      - set() 트랩을 작성하지 않은 형태
 *      
 *      - set() 트랩이 호출되면
 *      --> 엔진이 실행 환경을 분석하여 파라미터 값을 설정한다
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ set() 트랩을 작성하지 않은 형태 ---------------');
    
    /**
     *  - obj 랑 target 이랑연동되는구낭!
     */
    const target = {};
    const obj = new Proxy( target, {});
    obj.point = 100;
    log(obj.point);
    // :: 100
    debugger;
    
    // 1. obj.point = 100;
    //    100 을 point 에 할당하므로 setter 이다
    
    // 2. set() 트랩을 작성하지 않았으므로
    //    target 오브젝트의 내부메소드인 [[Set]]이 호출되며
    //    파라미터 값으로 point 와 100 을 넘겨준다
    
    // 3. [[Set]] 에서 {point : 100} 형태로
    //    target 오브젝트에 설정한다
    
    // 4. obj.point;
    //    get() 트랩을 작성하지 않았으므로
    //    target 오브젝트의 [[Get]]이 호출된다
    
    // 5. 이형태는 Proxy 를 사용하지 않아도 된다
}
{
    "use strict"
    log('------------ set() 트랩 사용 ---------------');
    const target = {};
    const handler = {
        /**
         *  - 뇌피셜이지만 receiver 는 obj 같은데...?
         *
         *  @param
         *  - target : target 오브젝트
         *  - key : 해당 key
         *  - value : 해당 value
         *  - receiver : 해당 Proxy 또는 Proxy 를 상속받은 오브젝트 전체
         *               ( 호출한 녀석을 참조하는 것으로 보임... )
         */
        set(target , key, value, receiver){
            target[ key ] = value + 200;
            debugger;
        }
    };
    
    const obj = new Proxy(target, handler);
    obj.point = 100;
    log(obj.point);
    // :: 300
    debugger;
    
    // 1. obj.point = 100; 을 실행하면
    //    set() 트랩이 호출된다
    
    // 2. 트랩: set(target, key, value, receiver){...}
    //    엔진이 target 파라미터에 target 오브젝트를 설정한다
    
    // 3. key 파라미터에 "point"를 설정하고
    //    value 파라미터에 100을 설정한다
    
    // 4. receiver 파라미터에
    //    Proxy 또는 Proxy 를 상속받은 오브젝트를 설정한다
    //    뒤에서 별도로 다룬다
    
    // 5. 파라미터 이름으로 값을 매핑하지않고
    //    파라미터 순서로 매핑한다
    //    이름은 자유롭게 사용할 수 있다
    /**
     *  - 아 그니깐 set(target , key, value, receiver) 의 파라미터 이름들을
     *    맴대로 바꿔도 된다는이야기!
     *    ( 순서대로 매핑됨 )
     */
}
/**
 *           ===== set() 트랩 호출 =====
 *
 *      - 아래처럼 값을 할당하면 set() 트랩이 호출된다
 *
 *      - 프로퍼티에 값을 할당할때
 *      --> proxy[key] = 100
 *
 *      - 또한, Object.create(proxy, {프로퍼티)}
 *
 *      ----> Object.create 함수를 호출하면 set() 트랩이 호출된다
 *            - 이것은 항상은 아니다
 *
 *      --> 인스턴스에 없는 프로퍼티를 설정할때 호출
 *      --> 인스턴스에 있는 프로퍼티를 설정할때 호출안함!
 *
 *      - Reflect.set()
 *      ----> Reflect.set() 함수를 호출하면 set() trap 이 호출된다
 *
 *      --> Reflect 오브젝트는 다음 장에서 다룬다
 *
 *      - set() 트랩에서 target 에 값을 설정해야 한다
 */
{
    "use strict"
    log('------------ 인스턴스에 없는 프로퍼티 설정 ---------------');

    const target = {};
    const handler = {
        point: 700,
        set( target , key , value , receiver ){
            debugger;
            target[key] = value + 200;
        }
    }

    const proxy = new Proxy( target , handler );
    /**
     *  - Object.create 를 하게되면 첫번째 인수에 있는애를 __proto__ 로 사용하게 되네
     *    ( 즉, 상속받아 처리하게 됨 )
     */
    const obj = Object.create( proxy , {
        bonus : {
            value : 500 , // 값
            writable : true // define property
        },
    });
    debugger;
    obj.point = 100;

    /**
     *  - obj.__proto__.[[Target]].point 에 설정한다
     *    ( 이때, set trap() 이 작동한다)
     *
     *  - 즉, handler 에서 point: 700 을 가져오는 것이 아니라
     *    target 에 set trap 으로 point 를 설정한다라는 뜻!
     *
     */
    log(obj.point);
    // :: 300
    debugger;

    // 1. const obj = Object.create( proxy , {...} );
    //    proxy 인스턴스를 상속받아 인스턴스를 생성한다

    // 2. proxy 인스턴스에 연결된
    //    handler 와 target 을 사용할 수 있다

    // 3. bonus: {value: 500, writable : true}
    //    obj 인스턴스 프로퍼티로 값을 설정한다
    //    즉, obj.bonus 에 500 이 설정된다.

    // 4. obj.point = 100
    //    obj 인스턴스 프로퍼티로 point 가 없다
    //    set() 트랩이 호출된다

    // 5. 트랩 : target[key] = value + 200
    //    target 에 {point : 300} 을 설정한다

    // 6. obj.point
    //    obj 인스턴스 프로퍼티로 point 를 검색한다
    //    point 가 없다

    // 7. target 에서 point 를 검색한다
    //    point 값인 300 이 반환된다

    // 8. handler 에서 point 를 검색하지 않는다
    //    { point : 700 } 이 있지만 반환되지 않는다
    /**
     *  - point 프로퍼티 값이 없을 때, 처음으로 설정하면
     *    set() trap 이 호출되게 된다
     *
     *  - obj 바로 안에 point 가 설정되지 않는 이유는
     *    set() trap 에서 target 파라메타가 target ={}
     *    을 참조하기 때문에 그렇다.
     *
     *  - 또한 handler 에서는 설정할 값을 검색하지 않는다!!!
     *
     *
     *  ====================================================
     *      아, obj 안에 값이 없을 때는 계층적으로 __proto__ 아래로
     *      내려가면서 찾기 때문에 set trap() 을 만나면 강제로 설정을
     *      하게 되는데 set trap() 이 연결되어 있는 target 에
     *      새로 맨들어 버리는 것!.
     *  ====================================================
     */
}

{
    "use strict"
    log('------------ 인스턴스에 있는 프로퍼티 설정 ---------------');
    const target = {};
    const handler = {
        set(target , key , value , receiver ){
            target[key] = value + 200;
            debugger;
        }
    };
    const proxy = new Proxy( target , handler);
    const obj = Object.create( proxy , {
        // writable 은 default 값이 false 이다
        // 따라서 값을 변경할려면 반드시 true 를 줘야 한다.
        point : { value : 100 , writable : true},
    })
    obj.point = 700;
    debugger;
    log(obj.point);
    // :: 700
    log(target.point);
    // :: undefined
    debugger;

    // 1. const obj = Object.create( proxy , {...} );
    //    proxy 인스턴스를 상속받아 인스턴스를 생성한다

    // 2. point: {value: 100, writable: true}
    //    obj 인스턴스 프로퍼티로 값을 설정한다
    //    즉, obj.point 에 100 이 설정된다

    // 3. obj.point = 700;
    //    obj 인스턴스 프로퍼티로 point 가 있다
    //    set() 트랩이 호출되지 않는다
    /**
     *  - 즉, obj 인스턴스 프로퍼티로 값을 설정하면
     *    set() trap 이 호출되지 않음.
     *
     *  --> 왜냐하면 set trap() 이 한단계 계층구조 아래에 있기 때문...
     */

    // 4. {point : 100} 이 obj 인스턴스 프로퍼티로 설정되고
    //    obj.__proto__ 에 handler 와 target 이 설정되므로
    //    point 를 먼저 인식하기 때문이다

    // 5. { point : 100 } 의
    //    value 값을 700 으로 변경한다

    // 6. 값을 바꾸려면 { writable : true } 이어야 한다
    //    ES5 의 "프로퍼티 디스크립트" 참조

    // 7. obj.point
    //    obj 인스턴스 프로퍼티인 point 값을 반환한다
    //    바뀐 값인 700 이 출력된다

    // 8. target.point
    //    target 오브젝트에 point 프로퍼티가 없으므로
    //    undefined 가 출력된다.
}

{
    "use strict"
    log('------------ target 에 값 설정 ---------------');
    const target = {};
    const handler = {
        set(target , key , value , receiver){
            // target[key] = value + 200;
            debugger;
        }
    };

    const obj = new Proxy( target , handler);
    obj.point = 100;
    log(obj.point);
    // :: undefined
    debugger;

    // 1. 트랩 : set(target, key, value, receiver){...}
    //    set() 트랩에서 파라미터로 받은
    //    { point : 100 } 이 target 오브젝트에
    //    자동으로 설정되지 않았다

    // 2. set() 트랩에서 target 오브젝트에
    //    { key : value } 를 설정해야 한다
    //    값 설정이 setter 의 기본 오퍼레이션이다

    // 3. log( obj.point );
    //    obj 인스턴스 전체에 point 가 없으므로
    //    undefined 가 출력된다
}
/**
 *           ===== set() 트랩 준수 사항 =====
 *
 *      - 트랩 준수 사항 invariant
 *      --> 트랩에서 준수 사항을 지키지 않으면
 *      --> 에러가 발생하거나 처리되지 않는다
 *      --> 모든 트랩에 준수 사항이 있다
 *
 *      - target 의 프로퍼티가 data 디스크립터일 때
 *
 *      --> [[Writable]] : false 또는
 *          ( :: 프로퍼티 값 변경 가능, 불가 여부 )
 *          [[Configurable]] : false 이면
 *          ( :: 프로퍼티 삭제 가능, 불가 여부 )
 *          프로퍼티 값을 설정할 수 없다
 *      ----> [[Writable]] 과 [[Configurable]] 은
 *            descriptor 의 기본적인 오퍼레이션이다.
 *
 *      - target 의 프로퍼티가 악세서 디스크립터일 때
 *      --> [[Configurable]] : false 이면
 *          프로퍼티 값을 설정할 수 없다
 */
{
    "use strict"
    log('------------ 프로퍼티 값 설정 불가 ---------------');
    const target = {};
    // 프로퍼티 정의
    Object.defineProperty( target , "point" , {
        value : 500,
        writable : false,
    } );

    const handler = {
        set(target, key , value , receiver){
            target[ key ] = value + 200;
            debugger;
        }
    };

    const obj = new Proxy( target , handler );
    // 값이 바뀌지 않네
    // 단지 console.log 를 찍으면 값인 100이 출력되는 것 뿐!!!
    log(obj.point = 100);
    // :: 100
    log(obj.point);
    // :: 500
    debugger;

    // 1. { writable : false } 가 디폴트 이지만
    //    설명을 위해 작성했다

    // 2. 트랩 : target[key] = value + 200; 에서
    //    point 프로퍼티가 { writable : false } 이므로
    //    point 프로퍼티 값을 변경할 수 없다

    // 3. 그렇다고 에러가 발생하지 않는다
    //    ( obj.point = 100 ) 에서 100 이 반환된다

    // 4. log(obj.point)
    //    obj.point 의 초깃값인 500 이 출력된다
    /**
     *  - obj.point = 100 를 console.log 찍으면 값인 100이 출력되는 것 뿐!!!
     *    이지 obj.point 를 찍으면 제대로 된 값인 500 이 출력된다.
     */

}






