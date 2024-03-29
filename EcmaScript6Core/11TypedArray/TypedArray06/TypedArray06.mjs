/**
 * 프로그람 설명문서 주석
 * 2022.04. 28 수업
 *
 *
 *           ===== set() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - Array 또는 TypedArray
 *                             - offset, 떨어진 위치
 *
 *      - 반환                  - 값을 설정한 9 개 타입의 인스턴스
 *      -----------------------------------------------------------
 *
 *      - TypedArray 인스턴스에
 *      --> 첫 번째 파라미터 값을 설정한다
 *      --> TypedArray.prototype.set()
 *          ( 이것은 prototype 에 연결되어 있으므로
 *            인스턴스를 생성해서 set() 메소드를 호출해야 한다 )
 *
 *      - 파라미터
 *      --> 첫 번째에 Array 작성한 형태
 *      --> 첫 번째에 TypedArray 작성한 형태
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ Array 작성 ---------------');
    const buffer = new ArrayBuffer( 3 );
    const obj = new Int8Array( buffer );
    /**
     *  - 아, 두번째 파라미터가 얼마나 떨어져서부터 설정할건지구나!!
     *    index!!
     */
    obj.set( [ 10 , 20 ] , 1 );
    log( obj );
    // :: { 0 : 0 , 1 : 10 , 2 : 20 }
    debugger;

    // 1. const buffer = new ArrayBuffer( 3 );
    //    3 바이트의 인스턴스를 생성한다

    // 2. const obj = new Int8Array( buffer );
    //    Int8 타입이므로 3개의 엘리먼트를 맨든다

    // 3. obj.set( [ 10 , 20 ] , 1 );
    //    첫 번째 파라미터에 배열을 작성했으며
    //    두 번째 파라미터는 오프셋이다

    // 4. obj 인스턴스의 1번 인덱스부터
    //    배열의 엘리먼트 값을 순서대로 설정한다
}
{
    log('------------ TypedArray 작성 ---------------');
    const buffer = new ArrayBuffer( 3 );
    const one = new Int8Array( buffer );
    one.set( [ 10 , 20 , 30 ] );
    // :: { 0 : 10 , 1 : 20 , 2 : 30 }

    const buffer4 = new ArrayBuffer( 4 );
    const two = new Int8Array( buffer4 );
    /**
     *  - Int8Array 를 파라미터로 넘겨줌
     */
    two.set( one , 1 );
    log( two );
    // :: { 0 : 0 , 1 : 10 , 2 : 20 , 3 : 30 }
    debugger;

    // 1. one.set( [ 10 , 20 , 30 ] );
    //    여기까지는 앞의 처리와 같으며
    //    { 0 : 10 , 1 : 20 , 2 : 30 } 형태가 된다

    // 2. const buffer4 = new ArrayBuffer( 4 );
    //    4 바이트의 인스턴스를 생성한다

    // 3. const two = new Int8Array( buffer4 );
    //    인스턴스에 4개의 엘리먼트를 맨든다

    // 4. two.set( one , 1 );
    //    1 은 two 의 오프셋이며 two 의 1번 인덱스부터
    //    one 전체 { 0 : 10 , 1 : 20 , 2 : 30 }를 설정한다

    // 5. one 이 3바이트이고 two 의 오프셋이 1이므로
    //    two 의 ArrayBuffer 는 4 바이트 이상이어야 한다
    //    그렇지 않으면 에러가 발생한다
}
/**
 *
 *           ===== subarray() =====
 *
 *      --> sub 라는 시멘틱이 복사개념도 가지구잇나보네...?
 *          아, 아니면 이전에 subarray 메소드가 있어서 그거랑 같이 묶어서 지은건가?
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - begin, 복사 시작 인덱스
 *                             - end, 복사 끝 인덱스
 *
 *      - 반환                  - 생성한 9 개 타입의 인스턴스
 *      -----------------------------------------------------------
 *
 *      - ArrayBuffer 데이터를 복사하여 반환한다
 *      --> 메소드 앞에 작성한 TypedArray 와
 *          같은 타입의 인스턴스를 생성하고
 *          여기에 값을 복사하여 반환한다
 *
 *      --> TypedArray.prototype.subarray()
 *
 *      - 파라미터
 *      --> 첫 번째 파라미터의 인덱스부터
 *          두 번째 파라미터의 인덱스 직전까지 복사
 *
 *      --> 파라미터를 작성하지 않으면 전체를 복사
 */
{
    log('------------ 파라미터 범위의 값을 설정 ---------------');
    const buffer = new ArrayBuffer( 4 );
    const obj = new Int8Array( buffer );
    obj.set( [ 10 , 20 , 30 ] );
    log( obj );
    // :: { 0 : 10 , 1 : 20 , 2 : 30 , 3 : 0 }

    /**
     * - 1 번 index 부터 3 번 index 직전까지 복사!
     */
    const subarrayObj = obj.subarray( 1 , 3 );
    log( subarrayObj );
    // :: { 0 : 20 , 1 : 30 }
    debugger;

    // 1. const subarrayObj = obj.subarray( 1 , 3 );
    //    obj 인스턴스의 1번 인덱스부터
    //    3번 인덱스 직전까지 값을 복사한다
    //    즉, 2번 인덱스까지 값을 복사한다

    // 2. 같은 타입의 인스턴스를 생성하고
    //    여기에 복사한 값을 설정하여 반환한다

    // 3. log( subarray );
    //    [ 실행 결과 ]처럼 20 , 30 을 복사한다
}
/**
 *           ===== copyWithin() =====

 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 복사한 값을 할당할 인덱스
 *                             - start, 복사 시작 인덱스
 *                             - end , 복사 끝 인덱스
 *
 *      - 반환                  - 생성한 9 개 타입의 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 첫 번째 파라미터의 오브젝트 데이터를 복사하여
 *      --> 첫 번째 파라미터의 오브젝트에 설정한다
 *      --> 복사 방법은 Array 의 copyWithin() 과 같다.
 *
 *      - 파라미터
 *      --> 두 번째의 인덱스부터
 *          세 번째의 인덱스 직전까지 복사하여
 *          첫 번째의 인덱스 부터 설정한다
 */
{
    log('------------ 파라미터 범위의 값을 복사, 설정 ---------------');
    const buffer = new ArrayBuffer( 4 );
    const obj = new Int8Array( buffer );
    obj.set( [ 10 , 20 , 30 , 40 ] );
    log( obj );
    // :: { 0 : 10 , 1 : 20 , 2 : 30 , 3 : 40 }

    obj.copyWithin( 0 , 2 , 4 );
    log( obj );
    // :: { 0 : 30 , 1 : 40 , 2 : 30 , 4 : 40 }
    debugger;

    // 1. obj.copyWithin( 0 , 2 , 4 );
    //    obj 인스턴스의 2번 인덱스부터
    //    4번 인덱스 직전까지 값을 복사한다
    //    즉, 2번과 3번 인덱스 값을 복사한다

    // 2. 복사한 값을 obj 의 0번 인덱스부터 설정한다

    // 3. 복사한 엘리먼트수가 받을 엘리먼트 수보다 클 때
    //    넘치는 엘리먼트는 설정하지 않는다
    //    에러가 발생하지 않는다
}