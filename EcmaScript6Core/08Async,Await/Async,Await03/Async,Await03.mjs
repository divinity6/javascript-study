/**
 * 프로그람 설명문서 주석
 * 2022.04. 11 수업
 *
 *           ===== Symbol.asyncIterator =====
 *
 *      - Symbol.asyncIterator 는
 *      --> for-await-of 에 대응하는 Well-known Symbol 이며
 *      --> 비동기로 반복을 실행한다
 *
 *      - Well-known Symbol 은 12 개 이다
 *      --> 11개는 "ES6+ 기본" 과정에서 다루었다
 *      --> 중복되므로 개념 설명을 생략한다
 *
 *      - Symbol.iterator 와 차이
 *      -----------------------------------------------------------
 *      -                - 이터레이터             - Async 이터레이터
 *
 *      - 이터러블 프로퍼티   - Symbol.iterator    - Symbol.asyncIterator
 *      - next() 반환 형태  - { value : 값,      - Promise.resolve()
 *                         done : true/false}
 *      - Symbol 대응 반복문 - for-of            - for-await-of
 *      -----------------------------------------------------------
 *
 *      - Symbol.asyncIterator()를 호출하면
 *      --> AsyncIterator 인스턴스를 생성하여 반환한다
 *
 *      - 생성한 인스턴스의 next()를 호출하면
 *      --> { value : 값 , done : false } 형태로 반환하며
 *      --> 이 값을 Promise.resolve()의 파라미터 값으로 사용한다
 *
 *      - for-await-of 로 반복한다
 *
 *      --> 이 차이의 중심에는 비동기가 있는 것이다.
 *          ( async 가 있는 것... )
 *
 *      - Symbol.asyncIterator 와 제너레이터 함수 관계
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ Symbol.asyncIterator ---------------');
    // async 제너레이터 함수
    async function* point(){
        yield 10;
    };
    /**
     * - 반환된 것을 gen 에 할당하므로, gen 은
     *   AsyncGenerator 인스턴스가 된다
     */
    const gen = point();
    // :: [[GeneratorState]] : 'suspended'
    debugger;
    log( gen[ Symbol.toStringTag ] );
    // :: AsyncGenerator
    log( gen[ Symbol.asyncIterator ] );
    // :: [Symbol.asyncIterator]() { [native code] }
    /**
     *  - gen[ Symbol.asyncIterator ]() 를 하면
     *    next 메소드가 들어가 있다는 소리
     */
    log( gen[ Symbol.asyncIterator ]().next );
    // ::  next() { [native code] }
    debugger;

    // 1. const gen = point();
    //    AsyncGenerator 인스턴스를 생성하여 반환한다

    // 2. gen[ Symbol.toStringTag ]
    //    AsyncGenerator 를 출력한다

    // 3. gen[ Symbol.asyncIterator ]
    //    gen 인스턴스의 Symbol.asyncIterator 를 출력하며
    //    함수가 출력된다

    // 4. gen[ Symbol.asyncIterator ]().next
    //    asyncIterator 인스턴스를 생성하여 반환하며
    //    인스턴스에는 next() 가 있다.
}
{
    log('------------ for await of 반복 ---------------');
    async function* point(){
        yield 10;
        debugger;
        yield 20;
        debugger;
        yield 30;
        debugger;
    };
    // asyncGenerator 오브젝트 생성
    const gen = point();
    async function show(){
        // Promise.resolve( param ) 안에 첨부하여 보냄
        gen[Symbol.asyncIterator]().next().then( value => {
            console.log( value );
            // :: { value : 10 , done : false }
            debugger;
        })

        debugger;
        /**
         *  - gen 의 Symbol.asyncIterator() 호출, next() 호출
         */
        for await ( const point of gen ){
            log( point );
            // :: 20
            // :: 30
            debugger;
        }
    }
    show();

    debugger;

    // 1. for await ( const of gen ) { ... }
    //    gen 은 AsyncGenerator 인스턴스이다
    //    gen 의 Symbol.asyncIterator()를 호출한다

    // 2. AsyncIterator 인스턴스를 생성하여 반환하며
    //    인스턴스의 next()를 호출한다

    // 3. yield 10을 { value : 10 , done : false }로 반환하며
    //    Promise.resolve( param )의
    //    파라미터 값으로 사용하여 for-await-of 로 보낸다
    /**
     *    Promise.resolve( param )에 파라미터 값으로 사용하여 보낸다
     *    { value : 10 , done : false }를... 그다음엔
     *    { value : 20 , done : false }를 보냄
     */

    // 4. { value : 10 }에서 10을 point 에 설정한다
    /**
     *  - 이와 같은 방법으로 비동기로 반복하게 된다.
     *  --> 이렇게 Symbol.asyncIterator 를 사용하여 비동기로 반복할 수 있다.
     */
}