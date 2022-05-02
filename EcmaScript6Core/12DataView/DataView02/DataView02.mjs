/**
 * 프로그람 설명문서 주석
 * 2022.05. 02 수업
 *
 *
 *           ===== DataView 메소드 =====
 *
 *      -----------------------------------------------------------
 *      - get/set              - Method
 *
 *      - Get                  - getInt8(), getUint8()
 *                             - getInt16(), getUint16()
 *                             - getInt32(), getUint32(), getFloat32()
 *                             - getFloat64()
 *
 *      - Set                  - setInt8(), setUint8()
 *                             - setInt16(), setUint16()
 *                             - setInt32(), setUint32(), setFloat32()
 *                             - setFloat64()
 *      -----------------------------------------------------------
 *
 *      - 메소드는 크게 get 과 set 으로 분류
 *      --> 메소드 이름으로 타입과 비트 수를 구분
 *      --> 타입( Int , Float ), 비트 수( 8 ,,, 64 )
 *      --> 타입과 비트 수는 TypedArray 와 같다
 *          단, Uint8C 타입이 없다
 *
 *      - 메소드 기능이 비슷하므로 몇 개만 살펴본다
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
/**
 *           ===== setInt8() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - byteOffset ( offset 바이트 )
 *                             - value ( 설정할 값 )
 *
 *      - 반환                  - 없음
 *      -----------------------------------------------------------
 *
 *      - 사인 부호를 가진 8비트 값을 설정한다
 *
 *      - 파라미터
 *      --> 첫 번째 : DataView 기준의 오프셋 바이트
 *      ----> ArrayBuffer 기준이 아닌 DataView 기준
 *      --> 두 번째 : 설정할 값
 */
{
    log('------------ setInt8() ---------------');
    const buffer = new ArrayBuffer( 4 );
    const view = new DataView( buffer , 1 , 2 );
    view.setInt8( 0 , 20 );
    log( view.getInt8( 0 ) );
    // :: 20
    debugger;

    // 1. view.setInt8( 0 , 20 );
    //    사인 부호를 가진 8비트에 값을 설정한다

    // 2. 파라미터 0은 오프셋 바이트로
    //    view 인스턴스의 처음부터
    //    0 바이트 떨어진 엘리먼트에 20을 설정한다
}
/**
 *           ===== getInt8() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - byteOffset ( offset 바이트 )
 *
 *      - 반환                  - ArrayBuffer 값
 *      -----------------------------------------------------------
 *
 *      - 사인 부호를 가진 8비트 값을 반환한다
 *
 *      - 파라미터
 *      --> DataView 기준의 오프셋 바이트
 *
 *      - TypedArray 의 set()메소드로
 *        ArrayBuffer 에 값을 설정하고
 *
 *      --> DataView 의 getInt8() 메소드로
 *          ArrayBuffer 의 값을 사용할 수 있다
 */
{
    log('------------ getInt8() ---------------');
    const buffer = new ArrayBuffer( 4 );
    const obj = new Int8Array( buffer );
    obj.set( [ 10 , 20 , 30 , 40 ] );
    // :: { 0 : 10 , 1 : 20 , 2 : 30 , 3 : 40 }
    const view = new DataView( buffer , 1 , 2 );
    log( view.getInt8( 0 ) );
    // :: 20
    /**
     * - view 인스턴스를 기준의 index 에 설정한다
     */
    view.setInt8( 1 , 70 );
    log(  view.getInt8( 1 ) );
    // :: 70
    log( obj );
    // :: { 0 : 10 , 1 : 20 , 2 : 70 , 3 : 40 }
    debugger;

    // 1. const view = new DataView( buffer , 1 , 2 );
    //    buffer 로 DataView 인스턴스를 생성한다
    //    20 , 30 순서로 설정된다

    // 2. view.getInt8( 0 )
    //    view 인스턴스 기준으로 0번 인덱스 값을
    //    Int8 타입으로 구한다

    // 3. view.setInt8( 1 , 70 );
    //    setInt8()로 1번 인덱스에 값을 설정한다

    // 4. log( obj );
    //    DataView 가 아니라 ArrayBuffer 에 설정되므로
    //    obj 를 출력하면 오프셋이 반영된 값이 출력된다
    /**
     *  - DataView 를 할시 offset 을 주면 set/get 등을 할때 그 값이
     *    반영된다!!
     *
     *
     *  - ArrayBuffer 의 값을
     *  --> TypedArray 와 DataView 에서 공유할 수 있다.
     */

}