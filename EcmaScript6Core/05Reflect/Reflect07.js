/**
 * 프로그람 설명문서 주석
 * 2022.03. 09 수업
 *
 *           ===== construct() =====
 *
 *     --> Reflect 나름의 목적이 있고, 사용성이 있다.
 *         ( 반환하는 형태가 달라서 에러방지에 효과적, 및 this 참조 )
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 호출할 생성자 함수
 *                             - [ params ], 호출할 함수에 넘겨줄 파라미터
 *                             - newTarget, (선택) 새로운 생성자 함수
 *      - 반환                  - 생성한 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 인스턴스를 생성하여 반환한다
 *
 *      - Reflect.construct( target , params ) 형태
 *
 *      - 세 번째 파라미터는 선택이다
 *      --> 생성자 함수를 작성한다
 *      --> 작성한 함수로 인스턴스를 생성한다
 *      ----> constructor 로 인스턴스를 생성하는게아니라,
 *            세번째 생성자 함수를 작성하면 세번째 함수로 인스턴스를 생성한다
 *            ( constructor 를 호출하지만 생성하는건 세번째 생성자 함수! )
 *
 *      - 핸들러의 construct() 트랩 호출
 *
 */

console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ Reflect.construct( target , params) 형태 ---------------');
    class Point {
        constructor( one , two ){
            this.point = one + two;
        }
    };
    const obj = Reflect.construct( Point , [ 100 , 200 ]);
    debugger;
    log( obj.point );
    // :: 300
    debugger;

    // 1. Reflect.construct( Point , [ 100 ] );
    //    Point 클래스의 constructor() 를 호출한다
    //    [ 100 ] 처럼 값이 하나라도 배열로 작성한다

    // 2. constructor( one , two ){ ... }
    //    100 이 one 에 200 이 two 에 설정된다

    // 3. Point 인스턴스를 생성하여 반환한다
    /**
     *  - 이것도 new 연산자 처럼 인스턴스를 생성하여 반환하는 구만
     *    ( constructor 로 인스턴스 생성 )
     */
}
{
    // 애는 JS 에서 오버라이드 하는것처럼 사용할 수 있구나!!
    "use strict"
    log('------------ 세 번째의 newTarget 파라미터 사용 ---------------');
    class Point {
        /**
         *  - Reflect.construct 를 사용해도
         *    첫번째 파라미터의 constructor 를 탐
         *
         *   --> 단지 반환만 3번째 파라미터로 만든 인스턴스임!
         */
        constructor( point ){
            debugger;
            // this 가 Book 클래스 참조
            this.point = point;
        }

        getPoint(){
            return this.point;
        }
    };

    class Book {
        getTitle(){
            return 'JS: ' + this.point;
        }
    };

    debugger;
    const obj = Reflect.construct( Point , [ 100 ] , Book );
    log(obj.getPoint);
    // :: undefined
    log(obj.getTitle());
    // :: JS: 100
    debugger;

    // 1. const obj = Reflect.construct( Point , [ 100 ] , Book );
    //    3 번째 파라미터에 Book 클래스를 작성했다
    //    Point 클래스의 constructor 가 호출된다

    // 2. constructor( point ){ this.point = point; }
    //    Point 가 아니라 Book 으로 인스턴스를 생성한다
    //    this 가 Book 클래스의 인스턴스를 참조한다

    // 3. this.point = point;
    //    point 가 인스턴스 프로퍼티로 설정된다

    // 4. 외부 API 사용처럼 변경할 수 없는 환경에서
    //    클래스의 프로퍼티를 인스턴스 프로퍼티로 사용하면서
    //    클래스의 prototype 을
    //    오버라이드하는 형태로 사용할 수 있다.
    /**
     *  - 예)
     *  --> Point 를 외부에서 제공하는 API 로 가정.
     *      그렇다면 Point 에 손을 댈 수 없지 않는가
     *
     *  --> 그런데 여기의 this.point 같은 프로퍼티는 사용하고 싶은것이다
     *      constructor 는 Point 것을 그대로 불렀다
     *
     *  ----> 즉, constructor 는 그대로 사용하는데, 여기의 getPoint,
     *        Prototype 에 연결되어 있는 것은 Book.prototype 에
     *        연결되어 있는 것을 사용한다는 이야기.
     *
     *  --> 그러면 거의 Class 를 오버라이드 하는 개념이 된다!!
     */

    // 5. obj.getPoint
    //    obj 인스턴스에 getPoint() 가 없으므로 undefined 출력

    // 6. obj.getTitle()
    //    Book 의 getTitle() 이 호출된다

    /**
     *  -  즉, 첫 번째 파라미터의 constructor 를 타지만,
     *     반환하는 인스턴스는 3 번째 생성자 함수로 생성한 인스턴스이다!!
     */
}

{
    "use strict"
    log('------------ construct() 트랩 호출 ---------------');
    class Point {
        constructor( ...point ){
            debugger;
            this.point = point;
        }

        getPoint(){
            return this.point;
        }

    };

    const handler = {
        // 맞아 여기 첫번째 인자는 proxy 내부의 target 이들어가지!!
        construct( target , params , proxy ){
            debugger;
            return Reflect.construct( target , params );
        }
    };

    debugger;
    const proxy = new Proxy( Point, handler );
    const obj = Reflect.construct( proxy , [ 1, 2 ] );
    log( obj.getPoint() );
    // :: [ 1 , 2 ]
    debugger;

    // 1. const obj = Reflect.construct( proxy , [ 1, 2 ] );
    //    constructor() 트랩이 호출된다

    // 2. 트랩 : construct( target , params , proxy ) {
    //    Point 클래스가 target 에 [ 1 , 2 ] 가 params 에 설정된다
    //    proxy 에 Proxy 인스턴스가 설정된다

}
/**
 *           ===== apply() =====
 *
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 호출할 함수
 *                             - this, ( 선택 ), this 로 참조할
 *                               오브젝트 / 값
 *                             - ( 선택 ) 호출할 함수에 넘겨 줄 파라미터
 *      - 반환                  - 호출된 함수에서 반환한 값
 *      -----------------------------------------------------------
 *
 *      - target 에 작성한 함수를 호출한다
 *
 *      - Reflect.apply( target , {} , [ params ] ) 형태
 *
 *      - call(), apply() 통합
 *
 *      - 핸들러의 apply() 트랩 호출
 */
{
    "use strict"
    log('------------ apply( target , {} , [ params ] ) 형태 ---------------');
    function add( ...values ){
        debugger;
        return values.map( value => value + this.plus );
    };
    debugger;
    /**
     *  - 2 번째 파라미터가 this 로 참조됨!!
     *
     *  - 3 번째는 ㄹㅇ 파라미터!
     */
    log( Reflect.apply( add , { plus : 100 } , [ 1, 2]) );
    // :: [ 101 , 102 ]
    debugger;

    // 1. Reflect.apply( add , { plus : 100 } , [ 1, 2 ] );
    //    add() 함수를 호출한다

    // 2. function add( ...values ){ ... }
    //    [ 1 , 2 ] 가 values 파라미터에 설정된다

    // 3. map() 에서 this 가 { plus : 100 } 을 참조한다
    //    코드처럼 화살표 함수를 사용해야 한다
    //    map( function( value ){ ... } ) 형태는
    //    this 가 window 를 참조한다

}

{
    "use strict"
    log('------------ call(), apply() 통합 ---------------');
    /**
     *  - 여기서 알 수 있는것!
     *  --> JS 의 기본 메소드들은 전부 this 로 처리를 한다는 것!!
     */
    const indexOf = String.prototype.indexOf;

    log( indexOf.call( "ABC" , "B" ));
    // :: 1
    log( Reflect.apply( indexOf , "ABC" , [ "B" ] ) );
    // :: 1
    debugger;

    // 1. const indexOf = String.prototype.indexOf;
    //    String.prototype.indexOf() 메소드이다

    // 2. call() 로 호출
    //    indexOf.call( "ABC" , "B" );

    // 3. Reflect.apply() 로 호출
    //    Reflect.apply( indexOf , "ABC" , [ "B" ] );
    //    call() 과 apply() 를 통합하여
    //    Reflect.apply() 로 호출한다.
    /**
     *  - call , apply 모두 Reflect.apply() 로 호출!!
     *  --> 아, 그리고 실제 JS 메소드들은 this 로 처리를 하기 때문에
     *      this 만 바꿔주면 작동하는 구만!!
     */
}

{
    "use strict"
    log('------------ apply() 트랩 호출 ---------------');
    function add( ...values ) {
        debugger;
        return values.map( value => value + this.plus );
    };

    const handler = {
        // 여기서 this 는 handler 참조!
        apply( target , that , params ){
            debugger;
            return Reflect.apply( target , that , params );
        }
    };

    const obj = new Proxy( add , handler );
    log( obj.apply( { plus : 100 } , [ 1, 2 ] ) );
    // :: [ 101 , 102 ]
    debugger;

    // 1. const obj = new Proxy( add , handler );
    //    add 가 apply() 트랩에서 호출할 함수이다

    // 2. obj.apply( { plus : 100 } , [ 1, 2 ] )
    //    apply() 트랩이 호출된다

    // 3. 트랩 : apply( target , that , params ) {
    //    add() 함수가 target 에 설정된다
    //    { plus : 100 } 이 that 에 설정되고
    //    [ 1, 2 ] 가 params 에 설정된다.
}