/**
 * 프로그람 설명문서 주석
 * 2022.04. 26 수업
 *
 *
 *           ===== Float 타입 =====
 *
 *      - Float 타입은
 *      --> 12.34 와 같은 실숫값을 View 할 수 있다
 *      --> Float32 타입과 Float64 타입이 있으며
 *          Float8 , Float16 타입은 없다
 *          ( float 는 8 , 16 이 없구만... )
 *      --> Float64 타입으로 살펴본다
 *
 *      - Float32 에 Number.MAX_VALUE 를 설정하고
 *      --> 비교하면 false 를 반환한다
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ Float64 타입 ---------------');
    const buffer = new ArrayBuffer( 16 );
    const obj = new Float64Array( buffer );
    obj[ 0 ] = Number.MAX_VALUE;
    log( obj[ 0 ] === Number.MAX_VALUE );
    // :: true
    debugger;
    // 1. const buffer = new ArrayBuffer( 16 );
    //    16 바이트 인스턴스를 생성한다

    // 2. const obj = new Float64Array( buffer );
    //    buffer 로 Float64 타입의 인스턴스를 생성한다
    //    buffer 가 16바이트이고
    //    Float 64타입이 8바이트 이므로
    //    2 개의 엘리먼트를 사용할 수 있다.

    // 3. obj[ 0 ] = Number.MAX_VALUE;
    //    자바스크립트의 최댓값을 설정한다.

    // 4. log( obj[ 0 ] === Number.MAX_VALUE );
    //    두 값의 비교 결과는 true 이다.
    /**
     *  - JS 는 8바이트로 값을 표현한다( 64 비트 )
     *    또한, obj[ 0 ] 도 8 바이트이다.
     *  --> 따라서, Number 오브젝트의 최댓값( MAX_VALUE )가
     *      할당될 수 있다.
     *
     *  --> Float32 에는 Number 오브젝트의 최댓값을 할당하면
     *      오버플로우가 일어난다.( 바이트가 모자람 )
     */
}
/**
 *           ===== TypedArray 프로퍼티 =====
 *
 *      - BYTES_PER_ELEMENT
 *      --> TypedArray 인스턴스에서
 *      --> 엘리먼트 하나의 바이트 수를 반환한다
 *
 *      - buffer
 *      --> TypedArray 인스턴스 생성에 사용한
 *      --> ArrayBuffer 인스턴스를 반환한다
 *
 *      - byteOffset
 *      --> ArrayBuffer 의 오프셋 값을 반환한다
 */
{
    log('------------ BYTES_PER_ELEMENT ---------------');
    const buffer = new ArrayBuffer( 10 );
    const obj = new Int16Array( buffer );
    log( obj.BYTES_PER_ELEMENT );
    // :: 2
    debugger;

    // 1. const obj = new Int16Array( buffer );
    //    Int16 타입의 인스턴스를 생성한다.

    // 2. log( obj.BYTES_PER_ELEMENT );
    //    obj 가 Int16 타입이므로
    //    엘리먼트의 바이트 수는 2이다.
}
{
    log('------------ buffer ---------------');
    const bufferObj = new ArrayBuffer( 10 );
    const obj = new Int16Array( bufferObj );
    const check = obj.buffer;
    log( check.byteLength );
    // :: 10
    log( check === bufferObj );
    // :: true
    debugger;

    // 1. const check = obj.buffer;
    //    obj 인스턴스 생성에 사용한
    //    ArrayBuffer 인스턴스가 반환된다

    // 2. log( check.byteLength );
    //    byteLength 는 ArrayBuffer 인스턴스의
    //    바이트 수를 반환하며 10을 출력한다
}
{
    log('------------ ArrayBuffer 의 오프셋 값 ---------------');
    const buffer = new ArrayBuffer( 10 );
    const obj = new Int16Array( buffer , 4 );
    log( obj.byteOffset );
    // :: 4
    debugger;

    // 1. const obj = new Int16Array( buffer , 4 );
    //    두 번째 파라미터에 4를 작성했으며
    //    이것은 ArrayBuffer 의 처음부터
    //    떨어진( offset ) 바이트 수이다

    // 2. log( obj.byteOffset );
    //    두 번째 파라미터의 4가 출력된다
}