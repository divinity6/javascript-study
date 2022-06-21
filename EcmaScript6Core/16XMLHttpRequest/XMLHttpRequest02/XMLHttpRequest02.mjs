/**
 * 프로그람 설명문서 주석
 * 2022.05. 22 수업
 *
 *
 *           ===== onreadystatechange =====
 *
 *     -----------------------------------------------------------
 *      - readyState        - 값      - 개요
 *
 *      - UNSENT            - 0       - XHR 인스턴스 생성
 *      - OPENED            - 1       - open() 성공
 *      - HEADERS_RECEIVED  - 2       - send() 실행
 *                                    - Header 와 status 를 받은 상태
 *      - LOADING           - 3       - 다운로드 중인 상태
 *      - DONE              - 4       - 통신을 완료한 상태
 *      -----------------------------------------------------------
 *
 *      - 상태를 나타내는 readyState 값이 바뀔 때마다
 *      --> onreadystatechange 이벤트가 발생하며
 *          핸들러 함수가 실행된다
 *
 *      - 동기 통신에서는 사용할 수 없다
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ onreadystatechange ---------------');
    const obj = new XMLHttpRequest();
    obj.onreadystatechange = () => {
        log( obj.readyState );
        // :: 1
        // :: 2
        // :: 3
        // :: 4
        if ( obj.readyState === 4 ){
            if ( obj.status === 404 ){
                log( obj.response );
            }
            else if ( obj.status === 200 ){
                log( obj.response );
                // error
            }
            debugger;
        }
    };

    obj.open( "GET" , '../file/data.txt' );
    obj.send();
    debugger;

    // 1. obj.readyState :
    //    XHR 인스턴스를 생성할 때 값이 0 이다
    //    통신과 관계가 없으므로 사용하지 않는다
    //    5 단계이지만 사용 기준으로 보면 4단계이다
    /**
     *  -  const obj = new XMLHttpRequest(); 로
     *     인스턴스를 생성하면
     *     obj.readyState 에 값이 0 이 설정되지만,
     *     실질적으로 통신을 할때는 1부터 시작하니 사용기준을 보면
     *     4 단계이다.
     */

    // 2. if ( obj.readyState === 4 &&
    //    통신이 끝난 것을 체크한다
    //    4 는, 단지 통신이 끝난 것으로
    //    통신의 성공, 실패를 구분하지 않는다

    // 3. obj.readyState === XMLHttpRequest.DONE 처럼
    //    텍스트로 비교할 수도 있다.

    // 4. obj.status === 200
    //    200 은 통신 성공을 뜻한다
    //    404 처럼 3 자리로 status 를 나타낸다

    /**
     *  - 이것은 OLD 버전이고, 최신버전에서는 이형태를 사용하지 않는다
     */
}

/**
 *           ===== 이벤트 타입 =====
 *
 *     --> 위의 onreadystatechange 이벤트( 0~5 상태에 따른 호출 )를 쓰지 않고,
 *         아래의 이벤트를 사용한다
 *
 *     -----------------------------------------------------------
 *      - 이벤트 타입          - 개요
 *
 *      - onabort           - Request 가 중지되었을 때 발생
 *      - onerror           - Request 가 실패했을 때 발생
 *      - onload            - Request 가 성공했을 때 발생( Response 는 체크하지 않음 )
 *      - onloadstart       - Request 를 시작한 시점에 발생
 *      - onloadend         - Request 의 성공, 실패에 관계없이
 *                            Request 가 종료했을 때 발생
 *      - onprogress        - 데이터를 수신하는 동안 발생
 *      - ontimeout         - 지정한 타임 아웃 시간을 경과한 시점에 발생
 *      -----------------------------------------------------------
 *      - 상태에 따라 이벤트가 발생한다
 *      --> 이벤트 핸들러를 작성하면 호출된다
 *      --> 오래된 브라우저는 지원하지 않는다
 *          ( onreadystatechange 이벤트 사용 )
 *
 *      - 이벤트 타입 사용 형태
 */
{
    log('------------ 이벤트 타입, 핸들러 함수 ---------------');
    const obj = new XMLHttpRequest();
    let seq = 0;
    const show = ( event ) => {
        log( `${ event.type } : ${ ++seq }` );
        // :: loadstart : 1
        // :: progress  : 2
        // :: load      : 3
        // :: loadend   : 4
        debugger;
    }
    /**
     * - 발생하는 이벤트 타입을 알아보기 위해 모든 ventListener 작성
     */
    const types = [ 'load' , 'loadstart' , 'loadend' , 'progress' , 'timeout' , 'abort' , 'error' ];
    types.forEach( type => obj.addEventListener( type , show , false ) );
    debugger;
    obj.open( "GET" , '../file/data.txt' );
    obj.send();
    debugger;

    // 1. 발생하는 이벤트 타입을 알아보기 위해
    //    XHR 의 모든 이벤트 타입에 이벤트를 설정했다

    // 2. [ 실행 결과 ]는 성공적으로 통신이 완료되었을 때
    //    이벤트가 발생한 순서와 타입이다

    /**
     *  - 여기서 순서를 생각해볼 필요가 있다.
     *  --> load 가 loadend 보다 먼저 발생
     *      성공/실패 했을 때( 확실한 상태 ) 발생하는 이벤트가 먼저 발생하고,
     *
     *      성공, 실패에 관계없는 이벤트가 그다음에 발생한다
     *
     *  ----> 이 순서는 의미가 있다
     *
     *  - onload 이벤트를 설정하면 onloadend 이벤트를 체크할 필요가 없다
     *  --> 그런데, onloadend 이벤트를 설정하면, onload 이벤트를 다시 설정해야 한다.
     *      왜냐하면 onloadend 는 성공, 실패를 구분할 수 없기 때문
     *
     *  - onload 이벤트는 파일이 제대로 수신되었는지 확인하거나 체크하지 않는다
     *  --> 단지 통신이 성공했을때 발생한다
     *  --> 따라서, 구체적으로 status 코드를 작성해 확인해야 한다
     */

}
{
    log('------------ 이벤트 타입을 사용한 형태 ---------------');
    const obj = new XMLHttpRequest();
    obj.onload = () => {
        log( obj.response );
        debugger;
    };
    obj.open( "GET" , '../file/data.txt' );
    obj.send();

    // obj.onreadystatechange = () => {
    //     if ( obj.readyState === 4 && obj.status === 404 ){
    //
    //     }
    // };
    debugger;

    // 1. obj.onload = () => { ... }
    //    Request 가 성공했을 때 발생하며
    //    이벤트 핸들러를 실행한다

    // 2. 주석으로 처리한 코드와 기능이 같다

    // 3. 주석 형태는 XHR 에서 이벤트 타입을
    //    지원하지 않은 초창기의 형태이다
    //    최신 브라우저는 이벤트 타입을 지원하므로
    //    이벤트 타입을 사용하여 이벤트를 설정한다
}