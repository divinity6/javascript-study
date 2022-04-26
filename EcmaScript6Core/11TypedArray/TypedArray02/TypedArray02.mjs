/**
 * 프로그람 설명문서 주석
 * 2022.04. 22 수업
 *
 *
 *           ===== new TypedArray =====
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - length, 엘리먼트 수
 *      - 반환                  - 9 개 타입의 인스턴스
 *      -----------------------------------------------------------
 *
 *      - new TypedArray()
 *      --> TypedArray() 에 Int8Array, Int16Array 처럼
 *      --> 9개 타입의 생성자 이름을 작성한다
 *
 *      - 파라미터 작성에 따라
 *      --> TypedArray 인스턴스 생성 방법이 다르다
 *
 *      - 파라미터에 엘리먼트 수를 작성한 형태
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ 엘리먼트 수 작성 ---------------');
    const obj = new Int16Array( 3 );
    log( obj );
    // :: { 0 : 0 , 1 : 0 , 2 : 0 }
    obj[ 5 ] = 500;
    log( obj[ 5 ] );
    // :: undefined
    debugger;

    // 1. const obj = new Int16Array( 3 );
    //    3 개의 엘리먼트를 가진 인스턴스를 생성한다

    // 2. log( obj );
    //    [ 실행 결과 ]처럼 3개의 엘리먼트가 출력되며
    //    엘리먼트의 초깃값은 0이다

    // 3. obj[ 5 ] = 500;
    //    만들지 않은 5번 인덱스에 500을 설정한다
    //    에러가 나지 않는다

    // 4. log( obj[ 5 ] )
    //    만들지 않은 5번 인덱스 값을 출력한다
    //    에러가 나지 않으며 undefined 가 출력된다
    /**
     *  - 만들지 않은 인덱스에 값을 설정하면 에러가 안나고 설정만안되네!!
     *  --> JS 는 이와같이 에러를 내지 않으려는 경향이 강하다
     */
}

/**
 *           ===== new TypedArray =====
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - TypedArray
 *      - 반환                  - 9 개 타입의 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 파라미터에 복사할 TypedArray 를 작성한 형태
 *
 *      - TypedArray 의 엘리먼트 값을 복사하고
 *      --> 새로운 인스턴스에 설정, 반환한다
 *
 *      - 복사 받는 인스턴스의 바이트 수가 작으면
 *        값이 잘린다.
 */
{
    log('------------ 복사할 TypedArray 작성 ---------------');
    const obj = new Int16Array( 3 );
    obj[ 0 ] = 100;
    log( obj );
    // :: { 0 : 100 , 1 : 0 , 2 : 0 }
    const obj16 = new Int16Array( obj );
    log( obj16 );
    // :: { 0 : 100 , 1 : 0 , 2 : 0 }
    log( obj === obj16 );
    // :: false
    debugger;

    // 1. const obj16 = new Int16Array( obj );
    //    파라미터에 obj 를 작성했으며 Int16 타입으로
    //    생성하는 인스턴스와 타입이 같다
    /**
     *  - 타입이 같은 인스턴스를 참조하여 인스턴스를 생성한 케이스
     */

    // 2. obj 인스턴스의 엘리먼트 값을 복사하여
    //    생성한 obj16 인스턴스의 앞에서부터 설정한다
    //    두 개 인스턴스의 타입과 값이 같다
}
{
    log('------------ Int16Array 를 Int8Array 로 복사 ---------------');
    const obj = new Int16Array( 3 );
    obj[ 0 ] = 127;
    obj[ 1 ] = 12345;
    log( obj );
    // :: { 0 : 127 , 1 : 12345 , 2 : 0 }
    /**
     * - 아 복사받는쪽 엘리먼트도 타입과 관계없이 length 는 똑같이
     *   받는구만...
     */
    const obj8 = new Int8Array( obj );
    log( obj8 );
    // :: { 0 : 127 , 1 : 57 , 2 : 0 }
    debugger;

    // 1. const obj8 = new Int8Array( obj );
    //    파라미터 obj 는 Int16 타입이다
    //    Int16 타입으로 Int8 타입의 인스턴스를 생성한다
    //    ( 어찌되었든 생성은 된다 )

    // 2. Int16 타입의 값을 Int8 타입으로 복사한다
    //    2 바이트 값을 1 바이트에 복사할 때
    //    값이 1 바이트 범위가 아니면 값이 잘린다

    // 3. 127 은 Int8 타입의 양수 최댓값으로
    //    잘리지 않고 설정된다

    // 4. 12345 는 127보다 크므로 값이 잘린다
    //    비트 단위로 앞에서부터 잘리므로
    //    값에 따라 복사되는 값이 다르다
}
/**
 *           ===== new TypedArray =====
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - Array, Array-like
 *      - 반환                  - 9 개 타입의 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 파라미터에 복사할 Array , Array-like 를 작성한 형태
 *
 *      - TypedArray 는 바이너리 데이터를 사용하므로
 *      --> TypedArray 생성자의 파라미터에
 *          Number 타입을 작성해야 하지만
 *
 *      --> Array, Array-like 를 작성할 수 있다
 *
 *      - Array, Array-like 를 작성한 경우
 *
 *      - 문자열로 작성한 경우
 */
{
    log('------------ Array , Array-like ---------------');
    const list = new Int8Array( [ 12 , 34 ] );
    log( list );
    // :: { 0 : 12 , 1 : 34 }
    const like = new Int8Array( { 0 : 56 , 1 : 78 , length : 2 } );
    log( like );
    // :: { 0 : 56 , 1 : 78 }
    const obj = new Int8Array( { 0 : 12 , 1 : 34 } );
    log( obj );
    // :: {}
    log( obj.length );
    // :: 0
    debugger;

    // 1. const list = new Int8Array( [ 12 , 34 ] );
    //    파라미터를 배열로 작성했다
    //    { 0 : 12 , 1 : 34 } 형태로 설정된다

    // 2. new Int8Array( { 0 : 56 , 1 : 78 , length : 2 } );
    //    파라미터를 Array-like 로 작성했다
    //    { 0 : 56 , 1 : 78 } 형태로 설정된다

    // 3. const obj = new Int8Array( { 0 : 12 , 1 : 34 } );
    //    파라미터를 Object 로 작성했다
    //    인스턴스가 생성되지만 값이 설정되지 않는다.
}
{
    log('------------ 문자열로 작성 ---------------');
    const obj = new Int8Array( "7" );
    log( obj );
    // :: { 0: 0 , 1: 0 , 2: 0 , 3: 0 , 4: 0 , 5: 0 , 6: 0 }
    const alpha = new Int8Array( "ABC" );
    log( alpha );
    // :: {}
    debugger;

    // 1. const obj = new Int8Array( "7" );
    //    파라미터를 문자열로 작성했으며
    //    7개의 엘리먼트를 만든다

    // 2. const alpha = new Int8Array( "ABC" );
    //    파라미터에 문자열 "ABC" 를 작성했다

    // 3. 에러가 발생하지 않고 인스턴스가 생성되지만
    //    엘리먼트가 생성되지 않는다
}
/**
 *           ===== new TypedArray =====
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - ArrayBuffer 인스턴스
 *                             - ( 선택 ) byteOffset , offset 바이트
 *                             - ( 선택 ) length , 사용할 엘리먼트 수
 *
 *      - 반환                  - 9 개 타입의 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 파라미터에 오프셋, 엘리먼트 수를 작성한 형태
 *
 *      - 파라미터
 *      --> 첫 번째에 ArrayBuffer 인스턴스 작성
 *      --> 두 번째에 offset 을 바이트 수로 작성
 *      --> 세 번째에 사용할 엘리먼트 수 작성
 *
 *      ----> 두 번째와 3 번째는 선택이다.
 */
{
    log('------------ 두 번째에 offset 작성 ---------------');

    const buffer = new ArrayBuffer( 10 );
    const obj = new Int16Array( buffer , 4 );
    /**
     * - 오호 buffer 와 obj 는 값이 연동되는구나!!
     */
    obj[ 0 ] = 15;
    /**
     *  ===== byteLength 는 바이트 수!! =====
     */
    log( obj.byteLength );
    // :: 6
    /**
     *  ===== length 는 엘리먼트 수!! =====
     */
    log( obj.length );
    // :: 3
    debugger;

    // 1. const obj = new Int16Array( buffer , 4 );
    //    두 번째 파라미터에 4를 작성했다

    // 2. buffer 의 처음부터 4 바이트 떨어진( offset )
    //    위치부터 끝까지가 대상이 된다
    //    6 바이트( 10 - 4 )를 사용하게 되며
    //    Int16 타입이므로 3개의 엘리먼트가 설정된다

    // 3. log( obj.byteLength )
    //    obj 인스턴스가 6 바이트이므로 6 이 출력된다

    // 4. log( obj.length )
    //    6 을 2 바이트 단위로 저장하므로 3 이 출력된다
}
{
    log('------------ 세 번째에 엘리먼트 수 작성 ---------------');
    const buffer = new ArrayBuffer( 10 );
    /**
     *  - 0 번 인덱스부터 4 바이트 떨어진 두 개의 엘리먼트가 대상이 됨.
     *  --> 남은 3개의 엘리먼트 중 2개의 엘리먼트만 사용하겠다는 의미!
     */
    const obj = new Int16Array( buffer , 4 , 2 );
    obj[ 1 ] = 20;

    log( obj.byteLength );
    // :: 4
    log( obj.length );
    // :: 2

    debugger;

    // 1. const obj = new Int16Array( buffer , 4 , 2 );
    //    세 번째 파라미터에 2를 작성했다

    // 2. buffer 의 처음부터 4 바이트 떨어진 위치부터
    //    두 개의 엘리먼트가 인스턴스 대상이 된다
    //    Int16 타입이므로 4 바이트를 사용하게 된다
}