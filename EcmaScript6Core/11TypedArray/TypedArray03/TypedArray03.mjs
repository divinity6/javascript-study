/**
 * 프로그람 설명문서 주석
 * 2022.04. 25 수업
 *
 *
 *           ===== Int 타입 =====
 *
 *      - Int8 타입으로 Int 타입을 살펴본다
 *
 *    -----------------------------------------------------------------------
 *      - 비트          7  |  6  |  5  |  4  |  3  |  2  |  1  |  0  |
 *
 *      - On/Off       0  |  1  |  1  |  1  |  1  |  1  |  1  |  1  |
 *      - 비트 값        0  | 64 |  32 |  16 |  8  |  4  |  2  |  1  |
 *      - 127 설정     127 | 127 | 63 |  31 |  15 |  7  |  3  |  1  |
 *
 *      - On/Off       1  |  1  |  1  |  1  |  1  |  1  |  1  |  1  |
 *      - 비트 값        1  |  64 |  32 |  16 |  8  |  4  |  2  |  1  |
 *      - 128 설정    -128 | -127 | -63 | -31 | -15 | -7 | -3  |  -1  |
 *
 *    ----------------------------------------------------------------------
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ Int8 타입 ---------------');
    const buffer = new ArrayBuffer( 1 );
    const obj = new Int8Array( buffer );
    [ 127 , 128 , 129 ].forEach( value => {
        obj[ 0 ] = value;
        /**
         *  - 양수 최대 값을 넘어가면 오버플로우가 일어나
         *    -128 이된다.
         *
         *  --> 따라서, 값이 Int8 의 범위를 넘치면 Int16을
         *      사용해야 한다.
         */
        log( obj[ 0 ] );
        // :: 127
        // :: -128
        // :: -127
    } )
    debugger;

    // 1. const buffer = new ArrayBuffer( 1 );
    //    값의 변화를 보기 위해 1 바이트를 생성한다

    // 2. const obj = new Int8Array( buffer );
    //    buffer 로 Int8 타입의 인스턴스를 생성한다

    // 3. [ 127 , 128 , 129 ].forEach( value => { ... } );
    //    127 ,128 ,129 를 순서대로
    //    Int8Array 인스턴스의 [ 0 ]에 설정한다

    // 3. [ 실행 결과 ] 처럼 값이 설정된다

    // 5. Int8 타입은 사인 비트( MSB )가 있으며
    //    이 값이 0 이면 양수이고 1이면 음수이다

    // 6. 127 할당
    //    사인 비트는 0이 되고 다른 7 비트는 1이 된다

    // 7. 128 할당
    //    사인 비트와 7 비트는 모두 1이 된다
    //    사인 비트를 제외한 7 비트의 누적값은 -127 이며
    //    이 값에 -1을 더하며 -128 이 된다

    // 8. 129 이상
    //    129( -127 ) , 130( -126 ), 131( -125 )가 된다
}
/**
 *           ===== Uint8 , Uint8C 타입 =====
 *
 *    - Uint8 타입은
 *    --> 사인 비트( MSB )가 없다
 *        ( 7 번 비트가 사인비트가 아니라는 뜻... )
 *
 *    ----------------------------------------------------------------------
 *      - 비트          7  |  6  |  5  |  4  |  3  |  2  |  1  |  0  |
 *
 *      - On/Off       1  |  1  |  1  |  1  |  1  |  1  |  1  |  1  |
 *      - 비트 값       128 | 64  |  32 |  16 |  8  |  4  |  2  |  1  |
 *      - 255 설정     255 | 127 | 63  |  31 |  15 |  7  |  3  |  1  |
 *
 *    ----------------------------------------------------------------------
 *
 *    - Unit8C 타입은
 *    --> Uint8 타입과 같으며, 다만
 *    --> 1바이트 값이 넘쳐도 최댓값을 유지
 */
{
    log('------------ Uint8 타입 ---------------');
    const buffer = new ArrayBuffer( 1 );
    const obj = new Uint8Array( buffer );
    [ 255 , 256 , 257 ].forEach( value => {
        obj[ 0 ] = value;
        /**
         *  - 0 부터 다시 돔...
         *  - 사인비트도 값으로 사용하므로 값을 더 사용할 수 있다.
         *  --> 0 이라는 것은 비트 전체가 1 이 아닌, 0 이라는 뜻이다.
         */
        log( obj[ 0 ] );
        // :: 255
        // :: 0
        // :: 1
    } );
    debugger;

    // 1. const buffer = new ArrayBuffer( 1 );
    //    값의 변화를 보기 위해 1 바이트를 생성한다

    // 2. const obj = new Uint8Array( buffer );
    //    buffer 로 Uint8 타입의 인스턴스를 생성한다

    // 3. Uint8 타입은 사인비트( MSB )가 없다
    //    음수도 양수도 아닌 단지 값이다
    //    음수가 아니면 양수라는 측면에서 보면 양수이지만
    //    사인 비트가 없다는 것이 더 적절하다

    // 4. 7번 비트를 사인 비트가 아닌 값으로 사용한다
    //    값의 범위가 1비트 늘어나므로
    //    1바이트의 최댓값이 127에서 255로 커진다

    // 5. [ 255 , 256 , 267 ].forEach( value => { ... } );
    //    255 , 256 ,257 을 순서대로
    //    Uint8Array 인스턴스의 [ 0 ]에 설정한다

    // 6. 255를 할당하면 8개 비트 모두 1이 된다
    //    256은 0이 되고 257은 1이 된다.
    /**
     * - Uint8 타입은 값이 넘치면 다시 0 부터 시작하는 형태.
     */
}
{
    log('------------ Uint8C 타입 ---------------');
    const buffer= new ArrayBuffer( 1 );
    const obj = new Uint8ClampedArray( buffer );
    [ 255 , 256 , 257 ].forEach( value => {
        obj[ 0 ] = value;
        log( obj[ 0 ] );
        // :: 255
        // :: 255
        // :: 255
    } )
    debugger;

    // 1. const obj = new Uint8ClampedArray( buffer );
    //    Uint8Clamped 타입의 인스턴스를 생성한다

    // 2. 기본적으로 Uint8 타입과 같다

    // 3. Uint8 타입과 다른 점은
    //    1 바이트의 최댓값이 넘쳐도 최댓값을 유지한다
    /**
     *  - Uint8C 는 8비트 처리에만 있다.
     *    Uint16 , Uint32 비트 등에는 없다.
     *    ( 특별한 목적이 있다고 볼 수 있다 )
     */

    // 4. [ 255 , 256 , 257 ].forEach( value => { ... } );
    //    [ 실행 결과 ] 처럼 값이 설정된다
    //    255 , 256 , 257 을 설정해도 최종 값은 255이다
    /**
     *  - 값이 넘쳐도 최댓값을 유지하겠다라는 이야기!
     */

    // 5. 색을 표현하는 RGB 각각의 최댓값은 FF( 255 )이다
    //    이미지의 RGB 값을 분석할 때 사용한다
    //    RGB( 255 , 255 , 255 )는 흰색이다.
    /**
     *  - 여기의 FF 는 16 진수로, 10진수 값으로는 255이다.
     *  --> 머신러닝 이미지 처리에서 RGB 값을 분석할 때 사용한다.
     *      ( 머신러닝에서 이미지 형태를 추론하려고 할때... )
     *  ----> 그 이미지를 Canvas 로 읽어 255 형태로 변환 후
     *        그 값을 ArrayBuffer 에 설정한다.
     *
     *  --> 그 후, Uint8C 타입으로 그 값을 읽어가면서...( 4 바이트 씩 -> R,G,B,A 값 )
     *      RGBA 값을 구하게 된다.
     *  ----> 구할때는 255를 넘치지 않지만, 연산과정으로 인해서 255가 넘치면,
     *        값이 이상하게 되지만 255를 유지해준다면 RGB 각각의 값이
     *        255 , 255 , 255 가 되어 흰색이된다.
     *
     *  ----> 즉, 값이 255를 넘치면 흰색으로 처리한다는 특정한 룰을 적용할 수 있다.
     *
     *  --> 또한, DOM 에서 css 를 읽을 때, 잘못해서 255를 넘치면 이상한 값이 되니깐,
     *      흰색으로 표시할 수 있도록 한다면 일관성을 가진 룰을 적용할 수 있다.
     *
     *  - 오호, 이미지를 분석할때 사용하는구먼...
     */
}
