/**
 * 프로그람 설명문서 주석
 * 2022.04. 17 수업
 *
 *      --> ArrayBuffer 를 이해하기 위해 우선 TypedArray 를 살펴본다
 *
 *           ===== TypedArray =====
 *
 *      - TypedArray 는
 *      --> Type 을 가진 Array 와 비슷한 형태
 *      ----> 그렇다고 Array 는 아니다
 *
 *      --> 스펙 : Integer-Indexed exotic object
 *          Byte Offset 개념 등
 *      ----> 예를 들어 )
 *            Array 는 Index 로 offset 개념을 가져간다.
 *            그러나, TypedArray 오브젝트에는
 *            ByteOffset 이라는 개념을 가져간다.
 *            ( index 개념의 offset 이 아니라 byte 다.
 *              bit , byte 의 byte 개념의 offset 을 가져간다 )
 *
 *      ----> 따라서, Array 는 아니다, 그러나
 *            Integer-Indexed 라는 개념은 Array 와 비슷하다.
 *
 *      - Int8Array , Int16Array , Float32Array
 *      --> 정수( Int ), 실수( Float ) 타입
 *      --> 8 비트, 16 비트 , 32 비트 , 64 비트
 *
 *      - 값은 숫자만 사용할 수 있으며
 *      --> 바이너리로 저장된다
 *      --> 따라서 처리 속도가 빠르다
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ Typed Array 형태 ---------------');
    log( [ 1 , 2 , 3 ] );
    // length 를 입력하는 거같음( 값은 0 이들어가네... )
    const obj = new Int8Array( 3 );
    log( obj );
    // :: { 0 : 0 , 1 : 0 , 2 : 0 }
    debugger;
    /**
     * - index 개념으로 접근하네...
     * --> 이런 개념은 Array 와 비슷하다.
     */
    obj[ 0 ] = 12;
    obj[ 1 ] = 34;
    log( obj );
    // :: { 0 : 12 , 1 : 34 , 2 : 0 }
    debugger;

    // 1. const obj = new Int8Array( 3 );
    //    Int 는 정수를 뜻하며 8은 8비트를 뜻한다
    /**
     *  - 즉 , 1 바이트라는 소리...
     */
    //    8 비트 크기 정수 타입의
    //    TypedArray 인스턴스를 생성한다

    // 2. 파라미터의 3은 엘리먼트 수이다
    //    인스턴스에 3개의 엘리먼트를 만든다
    /**
     *  - 배열은 값을 가지고 있지만,
     *    TypedArray 는 인스턴스를 만든 시점에서는 값이 없고,
     *    Element 3 개를 정의만 해두는 것.
     */

    // 3. 그런데, 각 엘리먼트의 타입과 크기가 같다
    //    Int8Array, Int16Array , Float32Array 등의 9타입
    //    엘리먼트에 초깃값으로 0 이 설정된다
    /**
     *  - 위 3개의 타입은 Integer 이고
     *    크기는 8비트라는 것.
     *
     *   ----> TypedArray 에는
     *         Int8Array, Int16Array , Float32Array
     *         등의 9타입이 존재...
     *
     *         8 비트 : 1 바이트 , 16 비트 : 2 바이트... , 64 비트 : 8 바이트
     */

    // 4. log( obj )
    //    { 0 : 0 , 1 : 0 , 2 : 0 } 이 출력된다

    // 5. obj[ 0 ] = 12;
    //    0 번 인덱스에 12를 설정한다
    //    0 을 프로퍼티 키라고 해도 된다
    //    스펙에 integer index property keys 로 기술한다
    /**
     *  ===== TypedArray 의 key 는 정수라는 것이 중요하다!! =====
     *
     *  - property key 는 문자가 들어올 수 있다!
     *  --> 그러나 TypedArray 오브젝트는 integer 라는 것이다!
     *      index 개념으로 사용하긴 하는데, property key 라는
     *      개념도 가져간다라는 것.
     *
     */

    // 6. obj[ 1 ] = 34;
    //    1번 인덱스에 34 를 설정한다

    // 7. log( obj )
    //    [ 실행 결과 ] 처럼 인덱스의 값이 변경된다.

    /**
     *  - 다시한번 정리하면 TypedArray 에서 key 자리에 0 , 1
     *    을 작성하는 것은 index 개념도 가져가지만,
     *    property key 개념도 가져간다라는 것.
     *
     *  - int : 정수
     *  - float : 실수
     *
     *  - 또한 값은 숫자만 사용할 수 있으며
     *  --> 바이너리로 저장된다.
     *      ( 값은 문자를 사용할 수 없고 오직 숫자이다!! )
     *
     *  --> 이것이 TypedArray 의 특징이다.
     */
}