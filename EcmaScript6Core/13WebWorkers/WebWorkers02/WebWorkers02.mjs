/**
 * 프로그람 설명문서 주석
 * 2022.05. 08 수업
 *
 *
 *           ===== 전용 Worker =====
 *
 *
 *      -------------------------------------------------------------------
 *      - 이름            - 구분        - 개요
 *
 *      - new Worker()   - 파라미터     - URL
 *                                    - ( 선택 ) options
 *                       - 반환        - 생성한 전용 Worker
 *
 *      - postMessage()  - 파라미터     - message
 *                                    - ( 선택 ) 추가로 보낼 options/transfer
 *                       - 반환        - 없음
 *
 *      - terminate()    - 없음        - Worker 종료
 *                       - 반환        - 없음
 *
 *      - onmessage      - 이벤트       - postMessage()로 보낸 메시지를 수신
 *                                      했을때 발생
 *
 *      - onerror        - 이벤트       - 에러가 발생했을 때 이벤트 발생
 *      -------------------------------------------------------------------
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

/**
 *           ===== new Worker() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - source 파일 URL
 *                             - ( 선택 ) options
 *
 *      - 반환                  - 생성한 전용 Workers
 *      -----------------------------------------------------------
 *
 *      - 전용 Worker 를 생성하여 반환한다
 *
 *      - 첫 번째 파라미터
 *      --> Worker 에서 실행될 코드가 작성된
 *          자바스크립트 파일의 URL 을 작성
 *
 *      - 두 번째 파라미터
 *      --> 추가 옵션을 작성할 수 있음
 *      --> new Worker( 'worker.js' , { type : 'module' } );
 */
{
    log('------------ 전용 Worker 인스턴스 생성 ---------------');
    // worker.js
    // self.onmessage = ( event ) => {
    //     const data = event.data;
    //     console.log( data );
    //     debugger;
    // };

    const main = new Worker( 'worker.js' );
    debugger;

    // 1. const main = new Worker( 'worker.js' );
    //    Worker 인스턴스를 생성하여 반환한다

    // 2. Worker 에서 실행될 코드를
    //    worker.js 파일에 작성하며
    //    파라미터에 파일의 URL 을 작성한다

    // 3. 'worker.js' 파일을 가져오며
    //    파일에 작성된 코드를 자동으로 실행한다
    //    Origin 이 같아야 한다
    /**
     *  - 자동 실행!!
     *  --> 개 신기한점 : console 에 Threads 가 여러 종류가 있음
     *  --> 그리고 그 Threads 에 따라 실행되는 환경이 다름!!
     *  ----> 그래서 self 자체가 글로벌 오브젝트안에있는 프로퍼티엿던것임
     *        ( 이때의 환경은 window 가 아니네!! )
     */

    // 4. Worker 를 다수 사용할 수 있다
    //    즉, 스레드를 다수 맨들 수 있다
}

/**
 *           ===== WorkerGlobalScope =====
 *
 *      - WorkerGlobalScope 오브젝트
 *      --> Worker 의 글로벌 오브젝트
 *      --> Event 오브젝트를 상속받는다
 *
 *      - self 프로퍼티
 *      --> WorkerGlobalScope 를 참조한다
 *
 *      - self.importScripts() 메소드
 *      --> 1개 이상의 자바스크립트 파일을
 *          동기 방법으로 Worker 오브젝트에 설정
 *
 *      ----> 동기방법이다!! 잊지마셈
 *
 *      - WorkerGlobalScope 오브젝트가 스코프이므로
 *      --> 메소드 앞에 self 를 작성하지 않아도 되지만
 *          일반적으로 작성한다
 */
{
    log('------------ 전용 Worker 인스턴스 생성 ---------------');
    /**
     * - importScripts 로 임포트한 환경도 결국,
     *   WorkerGlobalScope 환경임
     */
    // add.js
    // const BASE = 100;
    // function add( param ){
    //     return BASE + param;
    // }

    /**
     *  - importScripts 를 하면
     *
     *  - 동기 방법으로
     *    add.js 가 Worker 오브젝트에 설정됨
     */
    // global.js
    // importScripts( 'add.js' );
    // onmessage = ( event ) => {
    //     const sum = add( event.data );
    //     postMessage( sum );
    // }

    // main.js
    const main = new Worker( './workerGlobalScope/global.js');
    main.postMessage( 500 );
    main.onmessage = ( event ) => {
        log( '계산 결과 : ' , event.data );
        // :: 600
        debugger;
    };
    debugger;

    /**
     *  - 아, 그런데 importScripts 로 가져온 js 파일은
     *    결국 global.js 쓰레드안에서 돌아가네
     *    ( 별도의 쓰레드가 없다는 뜻 )
     *
     *  --> 당연한건가? 왜냐믄, 동기방식으로 add.js 가 설정되니깐...
     *
     *
     *  - 아무튼, worker 파일에서 importScripts 메소드로
     *     JS 파일을 임포트 시킬 수가 있다.
     *
     *  - 또한 글로벌 오브젝트가 window 가아니므로
     *    self 를 생략할 수 있다
     *    ( 여기서 self 가 window 처럼 생략 가능함 )
     *  --> 그러나 일반적으로 작성함.
     */
};
/**
 *           ===== postMessage() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - message
 *                             - ( 선택 ) option / transfer
 *
 *      - 반환                  - 없음
 *      -----------------------------------------------------------
 *
 *      - main.postMessage()
 *      --> Main 에서 Worker 로 메시지를 보낸다
 *
 *      - self.postMessage()
 *      --> Worker 에서 Main 으로 메시지를 보낸다
 *
 *      ----> 다음장에서 transfer 개념에 살펴본다
 */