/**
 * 프로그람 설명문서 주석
 * 2022.02 26 수업
 *
 *           ===== set() 의 4번째 파라미터 =====
 *
 *      - set() 트랩의 4번째 파라미터에
 *      --> Proxy 인스턴스가 설정된다
 *
 *      - const obj = Object.create( proxy , { 프로퍼티 } )
 *      --> 4번째 파라미터에 Object.create() 로
 *          생성한 인스턴스가 설정된다
 *
 *      --> 전체 코드이다
 *
 *      - Object.create() 와 인스턴스 구조
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ Proxy 인스턴스 설정 ---------------');
    const target = { point : 100 };
    const handler = {
        set(target , key , value , receiver){
            log(Object.is( target , receiver));
            // :: false

            /**
             *  [[Get]] trap 이 없으므로 기본 [[Get]] 이 호출됨
             */
            log(receiver.point);
            // :: 100
            debugger;
        }
    };

    const obj = new Proxy( target , handler );
    obj.point = 500;
    debugger;

    // 1. obj.point = 500;
    //    set() 트랩이 호출된다

    // 2. 트랩 : set( target , key , value, receiver ){...}
    //    set() 트랩의 receiver 파라미터에
    //    obj.point = 500 의 obj 가 설정된다
    //    즉, Proxy 인스턴스가 설정된다

    // 3. 트랩 : log(Object.is(target, receiver));
    //    target 과 receiver 가 같지 않으므로
    //    false 가 출력된다

    // 4. 트랩 : log( receiver.point )
    //    receiver(Proxy 인스턴스)에 get() 트랩이 없으므로
    //    target 의 [[Get]] 을 호출하며, 100 을 반환한다

    // 5. 500이 반환되지 않는 이유는 기본 오퍼레이션 때문
}
{
    "use strict"
    log('------------ Object.create() 로 생성한 인스턴스 설정 ---------------');
    const target = {};
    const handler = {
        set(target , key , value , receiver){
            target[ key ] = value + 200;
            target.title = receiver.title + '.JS';
            debugger;
            /**
             *  - 여기에서 반환하는 true 는 호출한 곳으로 반환하는 것이 아니라
             *    엔진에게 성공적으로 처리된 것을 알려주는 것!
             */
            return true;
        }
    };

    const proxy = new Proxy(target , handler);
    const obj = Object.create( proxy , {
        title : { value : '책'}
    });
    obj.point = 100;
    log(obj.point);
    // :: 300
    log(obj.title);
    // :: '책'
    log(target.title);
    // :: '책.JS'
    debugger;

    // 1. 개요를 설명하기 위한 코드 전체이다
}

{
    "use strict"
    log('------------ Object.create() 와 인스턴스 구조 ---------------');
    debugger;
    const target = { point : 500 };
    const handler = {
        set( target , key , value , receiver ){
            target[ key ] = value + 200;
            target.title = receiver.title + '.JS';
            debugger;
            return true;
        }
    };

    const proxy = new Proxy(target , handler);
    /**
     *  1. Proxy 인스턴스를 생성하여 proxy 변수에 할당한다
     *
     *  2. proxy 에 [[Handler]] 가 있으며, 그 안에 set() 트랩이 있다
     *     [[Target]] 이 있으며, 그 안에 {point: 500} 이 있다
     */

    debugger;
    const obj = Object.create( proxy , {
        title : { value : '책'}
    });
    /**
     *  1. create() 함수는 두 번째 파라미터로 인스턴스를 생성하고
     *  -  { title : "책" } 을 인스턴스 프로퍼티로 설정한다
     *
     *  2. 생성한 인스턴스의 __proto__ 에 첫 번째 파라미터를 첨부한다
     *  - [[Handler]] 의 set() 트랩과
     *  - [[Target]] 의 {point : 500} 을 사용할 수 있게 된다
     */
    debugger;

    obj.point = 100;
    /**
     *  1. obj.__proto__ 에 연결된 [[Handler]] 의 set() 트랩이 호출된다
     */
    debugger;

    /**
     *  - set( target, key , value , receiver ) {...}
     *
     *  1. receiver 파라미터에 obj 가 설정된다
     *  -  receiver 에서 title : { value : "책" } 을 참조할 수 있으며
     *  -  [[Handler]] 와 [[Target]] 을 참조할 수 있다
     *
     *  2. 이처럼 set() 트랩에서
     *  -  Proxy 이외의 다른 오브젝트를 참조할 수 있다
     */

    debugger;

    /**
     *  - target[ key ] = value + 200;
     *
     *  1. value 값 100 에 200 을 더해 target 의 key("point")에 할당한다
     *  -  target 오브젝트의 point 프로퍼티 값이 300으로 바뀐다
     */

    debugger;

    /**
     *  - target.title = receiver.title + ".JS";
     *
     *  1. receiver(obj 인스턴스)에 title 프로퍼티가 있으며
     *  -  값은 "책" 이다
     *
     *  2. target 오브젝트의 title 프로퍼티에 연결한 문자열을 설정한다
     *  - 이때, target 이 아닌 receiver 에 값을 설정하면
     *  - receiver 가 읽기 전용이므로 에러가 발생한다
     */

    debugger;

    /**
     *  - return true;
     *
     *  1. return true; 는 호출한 곳으로 true 를 돌려 반환하는 것이 아니라
     *  -  엔진에게 이처리가 성공적으로 처리된 것을 알려주는 것이다
     */

    debugger;

    log(obj.title);
    // :: "책"

    /**
     *  1. obj 를 펼치면 인스턴스 프로퍼티로 { title : "책" } 이 있으며
     *  -  [[Target]] 에 { title : "책.JS" } 가 있다
     *
     *  2. 인스턴스 구조의 위에서부터 검색하므로
     *  -  인스턴스 프로퍼티 값인 "책" 이 반환된다
     */

    debugger;

    log(target.title);
    // :: "책.JS"

    /**
     *  1. Proxy 가 아닌 target 오브젝트의 [[Get]] 을 호출한다
     *  -  따라서 "책.JS" 가 출력된다
     */
    debugger;

    /**
     *   =======================================================
     *      이와같이 Object.create() 함수로 Proxy 를 포함한
     *      인스턴스를 만들어서 사용한다면 좀더 확장성있는 코드를 작성 가능
     *      - 프로퍼티를 다양한 형태로 모아서 사용 가능
     *   =======================================================
     */
}

/**
 *           ===== set()과 this =====
 *
 *      - set() 트랩에서 this 는
 *      --> handler 오브젝트를 참조한다
 */
{
    "use strict"
    log('------------ this 가 핸들러 참조 ---------------');
    const target = {point : 100};
    const handler = {
        point: 123,
        set( target, key , value , receiver ){
            // this 가 handler 참조
            log(this.point);
            // :: 123
            this.book = "책";
        }
    }
    const obj = new Proxy( target , handler );
    obj.point = 500;
    log(handler.book);
    // :: "책"
    log(target.book);
    // :: undefined
    debugger;

    // 1. log(this.point)
    //    this 가 handler 오브젝트를 참조하므로
    //    handler 의 {point : 123} 에서 123 을 반환한다

    // 2. this.book = "책";
    //    this 가 handler 오브젝트를 참조하므로
    //    handler 에 { book : "책" } 이 설정된다

    /**
     *  - trap 에서 this 가 handler 오브젝트를 참조한다는 것을
     *    활용 할 수 있는 방법도 있다
     *
     *  --> 예)
     *          handler.point = 1000 을 설정했다!
     *          trap 내부에서 handler.point 값을 활용할 수 있다라는 것
     *          단지, handler 가 trap 을 감싸는 오브젝트만은 아니라는 것!!
     */
}