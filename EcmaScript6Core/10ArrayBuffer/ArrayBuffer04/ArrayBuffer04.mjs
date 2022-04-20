/**
 * 프로그람 설명문서 주석
 * 2022.04. 20 수업
 *
 *
 *           ===== new ArrayBuffer =====
 *
 *
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - length, ArrayBuffer 바이트 수
 *      - 반환                  - 생성한 ArrayBuffer 인스턴스
 *      -----------------------------------------------------------
 *      - ArrayBuffer 인스턴스를 생성하여 반환한다
 *
 *      - 파라미터에 바이트 수를 작성한다
 *
 *      - ArrayBuffer 의 바이트 수 범위
 *      --> 스펙에서는 0 이상을 체크하며
 *          최댓값은 정의하지 않았다
 *      --> 크롬 52 버전에서
 *          3억은 사용가능, 4억은 에러 발생
 *          브라우저와 버전에 따라 다르다
 *
 *      - ArrayBuffer 인스턴스 구조
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ new ArrayBuffer ---------------');
    const buffer10 = new ArrayBuffer( 10 );
    // 특별한 경우가 아니면 의미없는 인스턴스
    const buffer0 = new ArrayBuffer();
    // 값이 숫자이면 String 으로 작성 가능
    const buffer12 = new ArrayBuffer( "12" );
    log( buffer10 );
    // :: ArrayBuffer(10)
    log( buffer0 );
    // :: ArrayBuffer(0)
    log( buffer12 );
    // :: ArrayBuffer(12)
    debugger;

    // 1. new ArrayBuffer( 10 );
    //    10 바이트의 ArrayBuffer 인스턴스를 생성한다

    // 2. new ArrayBuffer();
    //    파라미터에 값을 작성하지 않았다
    //    에러가 발생하지 않으며
    //    0 을 디폴트 값으로 사용한다

    // 3. 생성한 인스턴스의 바이트 수를 변경할 수 없으므로
    //    특별한 경우가 아니면 의미 없는 인스턴스이다

    // 4. new ArrayBuffer( "12" );
    //    파라미터 값이 숫자이면
    //    문자열로 작성할 수 있다
}
{
    log('------------ ArrayBuffer 인스턴스 구조 ---------------');

    const buffer = ArrayBuffer;
    /**
     *  1. buffer 에 isView(), Symbol( Symbol.species ) 함수가 있으며
     *  -  prototype 이 있다
     *
     *  2. isView()는 ArrayBuffer.isView() 형태로 호출한다
     *
     *  3. prototype 에 slice() , Symbol( Symbol.toStringTag ) 메소드가 있다
     *
     *  4. 데이터를 저장하는 오브젝트이므로 구성이 심플하다
     */

    debugger;

    const obj = new ArrayBuffer( 6 );
    /**
     *  1. 6 바이트의 ArrayBuffer 인스턴스를 생성한다
     *
     *  2. obj 에 [[ Int8Array ]] , [[ Int16Array ]] , [[ Unit8Array ]]
     *     가 있으며 표시된 TypedArray 오브젝트를 생성할 수 있다.
     *
     *  3. [[ Int8Array ]] 를 펼치면 6개의 엘리먼트가 표시된다
     *  -  Int8Array 는 1 바이트 단위로 View 를 하므로
     *     6개의 엘리먼트를 View 할 수 있다
     *
     *  4. [[ Int16Array ]] 를 펼치면 3개의 엘리먼트가 표시된다
     *  -  Int16Array 는 2 바이트 단위로 View 를 하므로
     *     3 개의 엘리먼트를 View 할 수 있다
     *
     *  5. [[ Int32Array ]] 가 표시되지 않은 것은
     *     바이트 수 단위가 맞지 않기 때문이다
     *     ( 바이트 수 단위가 맞아야 하구나 )
     *  -  자세한 것은 다음 절에서 다룬다
     */

    debugger;
}

/**
 *           ===== byteLength =====
 *
 *      - ArrayBuffer 의 바이트 수를 반환한다
 *
 *      - Proxy 의 get() 트랩을 사용한 형태이다
 *      --> ArrayBuffer 는 바이트 수를 변경할 수 없으므로
 *      --> set() 트랩이 없다
 */
{
    log('------------ byteLength ---------------');
    const buffer = new ArrayBuffer( 10 );
    log( buffer.byteLength );
    // :: 10
    debugger;

    // 1. 파라미터에 작성한 10을 반환한다
}
{
    log('------------ Proxy 의 get() 트랩 사용 ---------------');
    const buffer = new ArrayBuffer( 10 );
    const handler = {
        get( target , key ){
            return target[ key ] + '바이트';
        }
    };

    const proxy = new Proxy( buffer , handler );
    log( proxy.byteLength );
    // :: 10바이트
    debugger;

    // 1. const proxy = new Proxy( buffer , handler );
    //    buffer 인스턴스로 Proxy 인스턴스를 생성한다

    // 2. proxy.byteLength
    //    get() 트랩이 호출된다

    // 3. 트랩 : get( target , key ){ ... }
    //    target 에 buffer 인스턴스가 설정되며
    //    key 에 "byteLength" 가 설정된다

    // 4. return target[ key ] + '바이트';
    //    buffer 인스턴스의 byteLength 값은 10이다
}
/**
 *           ===== slice() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - begin, 시작 위치
 *                             - end, 끝 위치
 *      - 반환                  - 복사한 새로운 ArrayBuffer 인스턴스
 *      -----------------------------------------------------------
 *
 *      - ArrayBuffer.prototype.slice()
 *      --> ArrayBuffer 의 데이터를 복사한다
 *      --> 새로운 인스턴스에 설정하여 반환한다
 *
 *      - 파라미터
 *      --> 첫 번째에 복사 시작 인덱스
 *      --> 두 번째에 복사 끝 인덱스
 *      --> 시작 인덱스 포함, 끝 인덱스 미포함
 *      ----> 즉, 끝 인덱스 직전까지 복사
 *
 */
{
    log('------------ slice() ---------------');
    const buffer = new ArrayBuffer( 10 );
    const objAll = buffer.slice( 0 );
    const obj37 = buffer.slice( 3 , 7 );
    log( objAll.byteLength );
    // :: 10
    log( obj37.byteLength );
    // :: 4
    debugger;

    // 1. const objAll = buffer.slice( 0 );
    //    시작 인덱스로 0 을 작성했다

    // 2. 끝 인덱스를 작성하지 않으면
    //    byteLength 값을 끝 인덱스로 사용한다
    //    즉, 전체를 복사하게 된다

    // 3. objAll.byteLength
    //    10 바이트를 복사했으므로 10이 출력된다

    // 4. const obj37 = buffer.slice( 3, 7 );
    //    3 번 인덱스부터 7 번 인덱스 직전까지 복사한다

    // 5. obj37.byteLength
    //    4 바이트를 복사했으므로 4가 출력된다
}
/**
 *           ===== isView() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - 체크 대상( TypedArray or DataView )
 *      - 반환                  - 설명 참조
 *      -----------------------------------------------------------
 *
 *      - ArrayBuffer.isView()
 *      --> TypedArray 또는 DataView 이면 true 를,
 *          아니면 false 를 반환한다
 *
 *      --> 파라미터에 체크 대상을 작성한다
 */
{
    log('------------ ArrayBuffer.isView() ---------------');
    const buffer = new ArrayBuffer( 10 );
    log( ArrayBuffer.isView( buffer ) );
    // :: false

    const int16 = new Int16Array( buffer );
    log( ArrayBuffer.isView( int16 ) );
    // :: true

    const view = new DataView( buffer );
    log( ArrayBuffer.isView( view ) );
    // :: true
    debugger;

    // 1. ArrayBuffer.isView( buffer );
    //    파라미터에 ArrayBuffer 인스턴스를 작성했으며
    //    TypedArray 와 DataView 오브젝트가 아니므로
    //    false 를 반환한다.

    // 2. ArrayBuffer.isView( int16 );
    //    파라미터에 TypedArray 인스턴스를 작성했으므로
    //    true 를 반환한다.

    // 3. ArrayBuffer.isView( view );
    //    파라미터에 DataView 인스턴스를 작성했으므로
    //    true 를 반환한다.
}