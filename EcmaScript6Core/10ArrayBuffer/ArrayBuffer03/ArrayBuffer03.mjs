/**
 * 프로그람 설명문서 주석
 * 2022.04. 19 수업
 *
 *
 *           ===== ArrayBuffer =====
 *
 *      - 바이너리 데이터를 저장하는 오브젝트
 *      ----> 일반적인 데이터가 아니라 바이너리 데이터...
 *
 *      --> new ArrayBuffer( 바이트 수 )로 생성하며
 *      --> 생성한 인스턴스의 바이트 수를 변경할 수 없다
 *
 *      - View 란
 *      --> CRUD 를 뜻한다
 *      --> Create , Read , Update , Delete
 *
 *      - ArrayBuffer 에 직접 View 불가
 *      --> ArrayBuffer 에 View 메소드가 없다
 *      --> TypedArray, DataView 로 View
 *
 *      - 혼합된 형태로 사용할 수 있다.
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ ArrayBuffer ---------------');
    // 4 바이트 ArrayBuffer 인스턴스 생성
    /**
     * - 오호 파라미터에 작성한 바이트 수만큼
     * --> [[ Prototype ]] 아래에
     *     [[ Int ( 작성한 바이트 수 ) Array ]] 가 생성되는군!!
     *
     * ---> 아 바이트 수만큼 View 할 수 있는 거네
     *      ( 엘리먼트의 갯수, 즉, 일반적인 length 가아니다!!! )
     * ---> 아래에 자세한 설명!
     */
    const buffer = new ArrayBuffer( 4 );
    const view = new Int8Array( buffer );
    log( buffer );
    // :: ArrayBuffer(4)
    log( view );
    // :: { 0 : 0 , 1 : 0 , 2 : 0 , 3 : 0 }
    debugger;

    // 1. const buffer = new ArrayBuffer( 4 );
    //    4 바이트의 ArrayBuffer 인스턴스를 생성한다
    /**
     *  - 여기서 중요한 포인트는
     *  --> 바이너리 데이터를 저장하는 것과
     *  --> 변경할 수 없는 점.
     *      ( ArrayBuffer 는 늘어나지 않는다. )
     *  --> Array 는 뒤에 값을 첨부시키면 늘어난다...
     *
     *  ----> 4 바이트를 사용하지 않고 1바이트만 사용하게 되면
     *        3 바이트가 필요없이 메모리를 할당한게 된다
     *        하지만, 그것은 무시하겠다라는 것.
     *
     *  ----> 다른 관점으로 보면, 설계할 때 정확하게 바이트 수를
     *        계산해야 한다는 것.
     *        ( 중간에 값을 넣거나 뺄 수 없기 때문... )
     *
     */

    // 2. new Int8Array( buffer );
    //    파라미터에 작성한 ArrayBuffer 인스턴스를
    //    뷰( View )할 수 있는 1바이트 정수 타입의
    //    TypedArray 인스턴스를 생성한다
    /**
     *  - 여기에서 View 는 CRUD 를 뜻한다.
     *  --> Create , Read , Update , Delete
     *
     *  --> 그런데 ArrayBuffer 에는 직접
     *      View 를 할 수 없기 때문에, TypedArray 와
     *      DataView 로 View 하게 된다.
     */

    // 3. ArrayBuffer 인스턴스의 처음부터 4 바이트를
    //    1바이트 단위로 뷰하며
    //    4개의 엘리먼트를 뷰 할 수 있다.
    /**
     *  - 즉, new ArrayBuffer( 4 ) 는
     *    4 바이트이다. 그런데
     *    new Int8Array( buffer )는 1바이트이다.
     *
     *  - 따라서 4개의 엘리먼트를 View 할 수 있다.
     *
     *  - 4개의 엘리먼트에다가 바이너리 데이터를
     *    설정하고, 읽고, 바꾸고 , 삭제하는 View 를 엘리먼트
     *    단위로 할 수 있음.
     */

    /**
     *  - TypedArray 인스턴스를 맨들면서 파라미터에다가
     *    ArrayBuffer 를 작성하면, TypedArray 에 데이터가
     *    저장되지 않고, ArrayBuffer 에 데이터가 저장된다.
     */

    // 4. 연동되기 때문에, buffer 인스턴스와 view 인스턴스가 연동된다.
    /**
     *  - 즉, Int8Array 를 이용하여 View 를 하게되고
     *    Data 는 ArrayBuffer 에 가서 저장된다는 것.
     *
     *  --> 그리고, 위에서는 Int8Array( 1 바이트 )로 View 를 했지만
     *      Int16Array( 2 바이트 )로 View 를 할 수 있다
     *
     *  --> 혼합된 형태로 사용 가능하다는 뜻!
     */
}
{
    log('------------ 구조체와 오프셋 ---------------');
    /**
     * - 아 , 각 유형별로 80비트( 10 바이트 )를 쓸 수 있구나
     * --> 개 신기하네...ㅋㅋㅋ
     */
    const buffer = new ArrayBuffer( 10 );
    const view8 = new Int8Array( buffer );
    /**
     * - Int16 이므로 2바이트 정수타입의 인스턴스 생성!
     *   2 번째 파라미터는 5번째 바이트( index 가 아닌 offset )부터 6바이트를
     *   Int16( 2바이트 ) 단위로 View
     *
     * --> 두 번째 파라미터는 바이트 시작 offset!!
     */
    const view16 = new Int16Array( buffer , 4 );
    log( view8 );
    // :: { 0: 0 , 1: 0 , 2: 0 , 3: 0 , 4: 0 , 5: 0 , 6: 0 , 7: 0 , 8: 0 , 9: 0 }

    log( view16 );
    // :: { 0: 0 , 1: 0 , 2: 0  }
    debugger;

    // 1. const buffer = new ArrayBuffer( 10 );
    //    10 바이트의 ArrayBuffer 인스턴스를 생성한다

    // 2. new Int8Array( buffer );
    //    1 바이트 정수 타입의 인스턴스를 생성한다

    // 3. new Int16Array( buffer, 4 );
    //    2 바이트 정수 타입의 인스턴스를 생성한다

    // 4. 두 번째 파라미터 4 는
    //    오프셋으로 처음부터 떨어진 바이트 수이다
    //    5번째 바이트 부터 6바이트( 10 - 4 )를
    //    2바이트 단위로 view 한다
    //    3 개의 엘리먼트를 뷰 할 수 있다

    // 5. ArrayBuffer 를 1 바이트와 2 바이트로 혼합하여
    //    view 를 정의할 수 있다
    /**
     *  - ArrayBuffer 의 바이트 수를 맞춰야 하기 때문에
     *    여기에선 Int32Array 를 사용할 수 없다.
     *  --> 만약 사용하고 싶다면 ArrayBuffer( 4 , 8 , 12 , 16 )
     *      등으로 4바이트 단위를 맞춰줘야 한다
     *
     */
}

/**
 *           ===== 정리 =====
 *
 *      - ArrayBuffer 는 바이너리 데이터를 저장하는 오브젝트!
 *      --> 생성한 인스턴스의 바이트 수를 변경할 수 없다
 *          ( 고정된 수만큼 가져가는 것 )
 *      --> ArrayBuffer 의 Data 를 직접 View 할 수 없고,
 *          TypedArray 나 DataView 로 View( CRUD )할 수
 *          있다는 것.
 *
 */
