/**
 * 프로그람 설명문서 주석
 * 2022.05. 01 수업
 *
 *
 *           ===== DataView 개요 =====
 *
 *      - ArrayBuffer 를 View( CRUD ) 하는 방법은
 *      --> TypedArray 오브젝트 사용
 *      ----> TypedArray 는 인스턴스를 맨들면서 Type 과 크기가 구분되었다
 *
 *      --> DataView 오브젝트 사용
 *      ----> DataView 는 맨들때는 단지, 인스턴스만 맨들고,
 *            메소드를 호출하여 타입, 크기 구분
 *
 *      - DataView 오브젝트는
 *      --> 메소드 이름으로 get/set 타입,크기를 구분
 *      --> Endian 사용 가능
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
/**
 *           ===== new DataView() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - ArrayBuffer 인스턴스
 *                             - ( 선택 ) offset 바이트
 *                             - ( 선택 ) view 하려는 byteLength
 *
 *      - 반환                  - DataView 인스턴스
 *      -----------------------------------------------------------
 *
 *      - DataView 인스턴스 생성, 반환한다
 *
 *      - 파라미터
 *      --> view 구간( 범위 )을 작성한다
 *      --> 두 번째 : ArrayBuffer 의 오프셋 바이트
 *      --> 세 번째 : view 하려는 바이트 수
 */
{
    log('------------ DataView 인스턴스 생성 ---------------');
    const buffer = new ArrayBuffer( 4 );
    const obj = new Int8Array( buffer );
    obj.set([ 10 , 20 , 30 ]);
    // :: { 0 : 10 , 1 : 20 , 2 : 30 , 3 : 0 }
    /**
     * - DataView 는 TypedArray 처럼 타입과, 크기를 정하지 않는다!
     * --> 단지 인스턴스만 맨들뿐
     */
    const view = new DataView( buffer );
    log( view.getInt8( 0 ) );
    // :: 10
    debugger;

    // 1. const view = new DataView( buffer );
    //    파라미터의 buffer 인스턴스가 view 대상이며
    //    전체 데이터를 View 한다
    //    이때, Int8 처럼 타입과 크기를 정하지 않는다

    // 2. view.getInt8( 0 );
    //    view 인스턴스의 0번 인덱스 값을
    //    8비트의 Int 타입으로 구한다
    /**
     *  - 메소드는 getInt8, setInt8, getInt16, setInt16 등
     *    메소드가 있다
     */

    // 3. 메소드 이름으로
    //    get/set, 값 타입, 값 크기를 구분한다
    //    이에 대해서는 뒤에서 다룬다
}
{
    log('------------ 오프셋 바이트, View 바이트 수 ---------------');
    const buffer = new ArrayBuffer( 4 );
    const obj = new Int8Array( buffer );
    obj.set( [ 10 , 20 , 30 , 40 ] );
    // :: { 0 : 10 , 1 : 20 , 2 : 30 , 3 : 40 }

    /**
     * - 세번째 byteLength 는 몇 바이트를 view 할 것인지 의 바이트 수
     */
    const view = new DataView( buffer , 1 , 2 );
    /**
     *  - view 인스턴스 기준으로 byteOffset 을 view 함
     *    ( buffer 인스턴스 기준이 아님 )
     */
    log( view.getInt8( 0 ) );
    // :: 20
    debugger;

    // 1. const view = new DataView( buffer , 1 , 2 );
    //    두 번째 파라미터는 오프셋 바이트로
    //    buffer 의 처음부터 떨어진 위치이다

    // 2. 세 번째 파라미터는 view 하려는 바이트 수이다
    //    2 바이트를 view 한다

    // 3. [ 10 , 20 , 30 , 40 ]에서 20과 30을 view 하게 된다

    // 4. log( view.getInt8( 0 ) );
    //    view 인스턴스 기준으로 0번 인덱스 값을
    //    Int8 타입으로 구한다
    /**
     *  - view 인스턴스 단위로 접근해야 ArrayBuffer 를 구조체로 접근할 수 있다.
     *
     *  --> 예 )
     *          몇 바이트는 Int8로 하고, 그다음의 몇 바이트는 Int16으로 하고...
     *          이런식으로 DataView 인스턴스를 맨들면 된다
     */

    // 5. DataView() 의 두 번째와 세 번째 파라미터를 작성하지 않으면
    //    buffer 전체를 view 한다
}
/**
 *           ===== DataView 프로퍼티 =====
 *
 *      - buffer
 *      --> DataView 인스턴스와 연결된 ArrayBuffer 반환
 *
 *      - byteOffset
 *      --> 오프셋 바이트 값
 *      --> new DataView( buffer , 1 )에서
 *          두 번째 파라미터에 작성한 값
 *
 *      - byteLength
 *      --> view 바이트 수
 *      --> new DataView( buffer , 1 , 2 )의
 *          세 번째 파라미터에 작성한 값
 */
{
    log('------------ DataView 프로퍼티 ---------------');
    const buffer = new ArrayBuffer( 4 );
    const view = new DataView( buffer , 1 , 2 );
    log( view.buffer === buffer );
    // :: true
    log( view.byteOffset );
    // :: 1
    log( view.byteLength );
    // :: 2

    debugger;

    // 1. const view = new DataView( buffer , 1 , 2 );
    //    두 번째 파라미터는 오프셋 바이트 값이다
    //    세 번째 파라미터는 view 하려는 바이트 수이다

    // 2. log( view.buffer === buffer );
    //    buffer 로 view 인스턴스를 생성했으므로
    //    view.buffer 와 buffer 가 같다

    // 3. log( view.byteOffset );
    //    new DataView( buffer , 1 , 2 )에서 1이 출력된다

    // 4. log( view.byteLength );
    //    new DataView( buffer , 1 , 2 )에서 2가 출력된다
}