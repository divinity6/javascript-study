/**
 * 프로그람 설명문서 주석
 * 2022.04. 27 수업
 *
 *
 *           ===== from() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - source , Array-like 또는 이터러블
 *                             - callback, 콜백 함수
 *                             - thisArg , callback 에서 this 로 참조할
 *                               오브젝트
 *
 *      - 반환                  - 생성한 9 개 타입의 인스턴스
 *      -----------------------------------------------------------
 *
 *      - TypedArray 인스턴스를 생성하여 반환한다
 *      --> new 연산자를 사용하지 않는다
 *      --> TypedArray.from() 형태
 *
 *      - 파라미터
 *      --> 첫 번째에 Array , Array-like 를 작성한 형태
 *      --> 첫 번째에 Number, 문자열을 작성한 형태
 *      --> 두 번째에 콜백 함수 작성한 형태
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ Array, Array-like 작성 ---------------');
    const obj = Int8Array.from( [ 12 , 34 , 500 ]);
    log( obj );
    // :: { 0 : 12 , 1 : 34 , 2 : -12 }
    const like = Int8Array.from(
        { 0 : 56 , 1 : 76 , length : 2 });
    log( like );
    // :: { 0 : 56 , 1 : 76 }
    debugger;

    // 1. const obj = Int8Array.from([ 12 , 34 , 500 ]);
    //    파라미터에 배열로 [ 12 , 34 , 500 ]을 작성하였으며
    //    Int8Array 인스턴스를 생성한다
    //    엘리먼트 값으로 12 와 34 가 설정된다
    //    Int8 타입이므로 500은 비정상적인 값이 설정된다

    // 2. const like = Int8Array.from({ ... });
    //    파라미터에 Array-like 를 작성하였으며
    //    Int8Array 인스턴스를 생성한다
    //    엘리먼트 값으로 56 과 78이 설정된다
}
{
    log('------------ 문자열 작성 ---------------');

    /**
     *  - 아, 그러고보니 String 도 이터러블 오브젝트지...
     *    그니깐 array-like 를 충족하지...
     */
    log( Int8Array.from( "12" ) );
    // :: { 0 : 1 , 1 : 2 }
    /**
     *  - 인스턴스는 맨들지만 값을 설정하지 않는다
     *   ( 따라서 Number 타입으로 값을 작성할 수 없다 )
     */
    log( Int8Array.from( 12 ) );
    // :: { }
    log( new Int8Array( "12" ) );
    // :: { 0: 0 , 1: 0 , 2: 0 , 3: 0 , 4: 0 , 5: 0 , 6: 0 , 7: 0
    //      8: 0 , 9: 0 , 10: 0 , 11: 0 }
    log( new Int8Array( 12 ) );
    // :: { 0: 0 , 1: 0 , 2: 0 , 3: 0 , 4: 0 , 5: 0 , 6: 0 , 7: 0
    //      8: 0 , 9: 0 , 10: 0 , 11: 0 }
    debugger;

    // 1. Int8Array.from( "12" );
    //    파라미터에 문자열로 "12"를 작성했다
    //    문자열 "12"를 1과 2로 분할하여
    //    엘리먼트 값으로 설정한다

    // 2. Int8Array.from( 12 );
    //    파라미터에 Number 타입으로 12를 작성했다
    //    엘리먼트 값으로 설정하지 않는다

    // 3. new Int8Array( "12" );
    //    new 연산자로 인스턴스를 생성하면서
    //    문자열로 "12"를 작성했다
    //    12개의 엘리먼트를 생성한다
    /**
     *  - new 연산자로 생성하면 엘리먼트 수로 인식하는군...
     */

    // 4. new Int8Array( 12 );
    //    문자열로 "12"를 작성한 것과 같다
}
{
    log('------------ 콜백 함수 작성 ---------------');
    const that = { 1 : 10 , 2 : 20 };
    const add = function( value ) {
        debugger;
        /**
         *  - 여기서 만약 return 하지않으면
         *    기본 값인 0( 초깃 값 ) 이 설정된다.
         */
        return this[ value ];
    };

    const obj = Int8Array.from( [ 1 , 2 ] , add , that );
    log( obj );
    //:: { 0 : 10 , 1: 20 }
    debugger;

    // 1. Int8Array.from( [ 1 , 2 ] , add , that );
    //    배열의 엘리먼트를 하나씩 읽으면서 콜백 함수를 호출한다

    // 2. const add = ( value ) => { ... };
    //    반복하는 엘리먼트 값이
    //    value 파라미터에 설정된다

    // 3. return that[ value ];
    //    that 은 from()의 세 번째 파라미터이다
    //    1 , 2 를 프로퍼티 키로 하여 값을 구한다

    // 4. 콜백 함수에서 return 하지 않으면
    //    { 인덱스 : 0 } 형태의 초깃값이 설정될 뿐
    //    구한 값 10 , 20이 설정되지 않는다
}

/**
 *
 *           ===== of() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - item0[, item1 [ , item2... ]]
 *
 *      - 반환                  - 생성한 9 개 타입의 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 인스턴스에 설정할 값을
 *      --> 파라미터에 콤마로 구분하여 작성한다
 *      --> new 연산자를 사용하지 않는다
 *      --> TypedArray.of() 형태
 *
 *      - 파라미터에 작성한 순서로
 *      --> 인덱스를 증가시키면서 값을 설정
 *
 *      - 파라미터에 숫자 이외의 값을 작성
 */
{
    log('------------ 인덱스를 증가시키면서 값을 설정 ---------------');
    const obj = Int8Array.of( 10 , 20 , 30 );
    log( obj );
    // :: { 0 : 10 , 1 : 20 , 2 : 30 }
    debugger;

    // 1. const obj = Int8Array( 10 , 20 , 30 );
    //    3개의 엘리먼트를 가진
    //    Int8Array 인스턴스를 생성하고
    //    파라미터에 작성한 순서로
    //    앞에서부터 값을 설정한다

    // 2. 콤마로 구분하여 다수를 작성할 수 있으며
    //    값을 하나만 작성할 수도 있다.
}
{
    log('------------ 숫자 이외의 값을 작성 ---------------');
    const obj = Int8Array.of( "3" , null , "A" );
    log( obj );
    // :: { 0 : 3 , 1 : 0 , 2 : 0 };
    debugger;

    // 1. 파라미터 값 타입이 String 이지만
    //    값이 숫자이면 숫자로 변환하여 설정한다

    // 2. 파라미터 값 타입이 Number 가 아니면
    //    설정하지 않고 디폴트 값인 0 을 설정한다
}
/**
 *           ===== Symbol.iterator() =====
 *
 *      - TypedArray 인스턴스의
 *      --> Symbol.iterator()를 호출하면
 *      --> 이터레이터 오브젝트 생성, 반환한다
 *
 *      - TypedArray 인스턴스를
 *      --> for-of 문으로 전개 가능
 *
 */
{
    log('------------ 이터레이터 오브젝트 생성, 반환 ---------------');
    const type8 = new Int8Array( [ 10 , 20 ]);
    /**
     * - obj 는 이터레이터 오브젝트가 된다
     */
    const obj = type8[ Symbol.iterator]();
    log( obj.next() );
    // :: { value : 10, done : false }
    log( obj.next() );
    // :: { value : 20, done : false }
    log( obj.next() );
    // :: { value : undefined, done : true }
    debugger;

    // 1. const obj = type8[ Symbol.iterator ]();
    //    Int8Array 인스턴스의 Symbol.iterator()를 호출하면
    //    이터레이터 오브젝트를 생성하여 반환한다

    // 2. obj.next()
    //    이터레이터 오브젝트의 next()를 호출하면
    //    [ 실행 결과 ] 처럼 10이 반환된다

    // 3. obj.next()
    //    [ 실행 결과 ] 처럼 20이 반환된다

    // 4. log( obj.next() );
    //    오브젝트의 next()를 호출하면 처리할 값이 없으므로
    //    [ 실행 결과 ]의 마지막처럼 출력된다
}
{
    log('------------ for-or 문으로 전개 ---------------');
    const obj = new Int8Array( [ 10 , 20 ] );
    for ( const value of obj ){
        log( value );
        // :: 10
        // :: 20
    }
    debugger;
    /**
     *  - 이와같이 for-of 문으로 TypedArray 인스턴스를 반복할 수 있다
     */
}
