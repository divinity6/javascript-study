/**
 * 프로그람 설명문서 주석
 * 2022.04. 21 수업
 *
 *
 *           ===== TypedArray =====
 *
 *      - 9 개 오브젝트의 총칭
 *      --> 슈퍼 클래스이며
 *      --> 9 개 오브젝트에 자동으로 상속된다
 *          ( 아 class 의 그 super 클래스... )
 *      --> 직접 사용할 수 없으며
 *          9 개 오브젝트에서 사용할 수 있다
 *      --> Int8Array, Int32Array 등
 *
 *      -  스펙에 %TypedArray% 로 표기되어 있지만
 *      --> 강좌에서는 TypedArray 로 표기한다
 *
 *      - TypedArray Objects 스펙
 *      --> TypedArray Object 는 array-like view 이다
 *          ( 대상은 binary data buffer )
 *      --> 그런데, view 하는 형태가 array-like 이지
 *          오브젝트 형태 자체가 array-like 는 아니다.
 *          ( length 가 없기 때문... )
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
/**
 *           ===== ArrayBufferView =====
 *
 *      - 9개의 TypedArray 와 DataView 를 지칭한다
 *      --> ES2019 스펙에서는 사용하지 않지만
 *      --> 표준화를 위한 W3C IDL 에서 사용한다
 *
 *      - W3C IDL
 */

/**
 *
 *           ===== TypedArray 생성자 =====
 *
 *     ----------------------------------------------------------------------------------------------
 *      - 생성자 이름           - 타입     - 바이트    - 개요                               - C 언어 타입
 *
 *      - Int8Array          - Int8    - 1       - 8 비트 2's 보수법 , signed integer   - signed char
 *      - Uint8Array         - Uint8   - 1       - 8 비트 unsigned integer            - unsigned char
 *      - Uint8ClampedArray  - Uint8C  - 1       - 8 비트 unsigned integer( clamped ) - unsigned char
 *      - Int16Array         - Int16   - 2       - 16 비트 2's 보수법 , signed integer  - short
 *      - Uint16Array        - Uint16  - 2       - 16 비트 unsigned integer           - unsigned short
 *      - Int32Array         - Int32   - 4       - 32 비트 2's 보수법 , signed integer  - int
 *      - Uint32Array        - Uint32  - 4       - 32 비트 unsigned integer           - unsigned int
 *      - Float32Array       - Float32 - 4       - 32 비트 IEEE 부동 소숫점              - float
 *      - Float64Array       - Float64 - 8       - 64 비트 IEEE 부동 소숫점              - double
 *     ----------------------------------------------------------------------------------------------
 *
 *     - 데이터 타입과 바이트 수에 따라 생성자 이름이 다르다
 */

/**
 *          ===== 타입과 바이트 =====
 *
 *    --------------------------------------------------------------------------------------
 *      - 생성자 이름                    - ArrayBuffer 16 바이트
 *
 *      - Int8Array     0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
 *      - Int16Array      0   |   1   |   2   |   3   |   4   |    5    |    6    |   7
 *      - Int32Array          0       |       1       |       2         |         3
 *      - Float64Array                0               |                 1
 *    -------------------------------------------------------------------------------------
 *
 *    - ArrayBuffer 16바이트를
 *    --> TypedArray 를 사용하여 구조체 형태로 사용할 수 있다
 *        ( 자바스크립트에서 지금까지 없었던 형태이다 )
 *    --> Int8Array 로 앞에서 8 바이트를 사용하고
 *        Int32Array 로 나머지 8 바이트를 사용할 수 있다
 *    ----> ArrayBuffer16 바이트를 이와같이 구조체 형태로
 *          나눠서 사용할 수 있는 것이다.
 *
 *    - 가장 큰 타입의 바이트 수 단위에 맞아야 한다
 *    --> 22 바이트의 ArrayBuffer 는
 *    --> Uint32Array 와 Float64Array 단위에 맞지 않으므로
 *    --> 구조체 형태로 나누어 사용할 수 없다
 *    ----> Uint32Array 은 4 바이트 단위인데
 *          4 * 5 = 20, 4 * 6 = 24 이므로
 *          22 바이트는 맞지 않음
 *    ----> Int16Array 와 Int32Array 를 같이 사용하려 한다면
 *          Int32Array 형태에 맞춰야 한다는 것.
 *
 *    ------> Int16Array 와 Int32Array 를 ArrayBuffer 22 바이트에
 *            사용하려한다면 Int16Array( 2 바이트 ) 는 11개로 맞아 떨어지지만
 *            Int32Array( 4 바이트 ) 는 4 * 5 = 20, 4 * 6 = 24 처럼
 *            맞아 떨어지지 않아서 사용할 수 없다.
 */

/**
 *          ===== TypedArray 메소드 =====
 *
 *      - TypedArray 를 Array-like 형태로 view 하므로
 *      --> Array-like 를 지원하는
 *          Array 메소드를 사용할 수 있다
 *
 *      --> Array-like 는 index 를 프로퍼티 키로 사용하여
 *          index 번째의 값을 구하는 모습을 뜻한다
 *
 *      --> TypedArray 형태가 Array-like 형태는 아니다
 *      ----> Array-like 형태로 작성할때는 length 프로퍼티를
 *            사용해야 한다.
 *            그런데 TypedArray 는 length 프로퍼티를 사용하지 않는다.
 *            ( 만들어논 상태의 index 를 프로퍼티 키 개념으로 악세스 가능 )
 *            --> 이것이 Array-like 형태로 view 한다는 뜻.
 *
 *      - Array 오브젝트에만 있는 메소드( 즉, TypedArray 에는 없는 메소드 )
 *      --> concat(), pop(), push(), shift() , unshift()
 *      --> ArrayBuffer 의 바이트 수에 영향을 미치는 메소드
 *          ( 위 메소드들의 공통점 : 바이트 수에 영향을 미치는 메소드들은 사용 불가 )
 *
 *      ----> 이런 메소드들은 지원하지 않지만, Array-like 를 지원하는 Array 메소드,
 *            forEach , map 등은 사용할 수 있다.
 *
 *      - TypedArray 오브젝트 형태
 */
{
    log('------------ Typed Array 오브젝트 형태 ---------------');
    const obj = Int8Array;
    /**
     *  1. obj 를 펼치면 프로퍼티와 prototype 이 있다
     *
     *  2. prototype 을 펼치면 프로퍼티와 __proto__ 가 있다
     *
     *  3. prototype.__proto__ 를 펼치면
     *  -  forEach(), join(), map() 등이 있으며
     *  -  이것은 Array 오브젝트의 메소드이다
     *  -  concat(), push()는 없으며 이것은 사용할 수 없다
     */
    debugger;
    /**
     *  4. obj.__proto__ : ƒ TypedArray() 처럼 작성되어 있다
     *  -  이것은 TypedArray 를 상속받은 것을 뜻한다
     *  -  9 개 오브젝트에 상속된다
     *  ----> extends 키워드를 사용해서 상속을 하지 않아도
     *        엔진이 알아서 상속을 해준다.
     *
     *  5. obj.__proto__ 를 펼치면 프로퍼티와 함수가 있으며
     *  -  이것은 TypedArray 의 프로퍼티와 함수이다
     *
     *  6. obj.__proto__.prototype 을 펼치면
     *  -  join(), map(), 등이 있으며, Array 오브젝트의 메소드이다
     *  ----> Array-like 를 지원하는 메소드들은 사용가능.
     *        ( 하지만 , pop, push 처럼 바이트 수를 조절하는 메소드는 사용 불가 )
     *        TypedArray 는 인스턴스를 만들때 엘리먼트를 화정하며, 변경 불가...
     */
    debugger;

    const obj8 = new Int8Array( 3 );
    /**
     *  1. new Int8Array( 3 )을 호출하면
     *  -  obj.prototype.constructor 가 호출되며
     *  -  obj.prototype 에 연결된 프로퍼티로 인스턴스를 생성하여
     *  -  obj8.__proto__ 에서 참조할 수 있도록 맨든다
     */
    debugger;

    log( obj8.__proto__ === obj.prototype );
    // :: true

    /**
     *  1. obj9.__proto__ 와 obj.prototype 이 같으므로 true 가 출력된다.
     */
    debugger;

    // TypedArray 의 전반적인 개념을 살펴보았다.
}