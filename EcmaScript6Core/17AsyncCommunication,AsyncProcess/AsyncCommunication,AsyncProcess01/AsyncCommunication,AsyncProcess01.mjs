/**
 * 프로그람 설명문서 주석
 * 2022.07.04 수업
 *
 *
 *           ===== 주제, 방법 =====
 *
 *      - 비동기 통신과 비동기 프로세스의 전반적인 흐름을
 *
 *      - 단계별로 분리하여 진행한다
 *
 *      - 프레임워크를 개발하는 형태로 접근한다
 */

/**
 *           ===== 비동기 통신, 프로세스 =====
 *
 *      - 비동기 통신
 *      --> XMLHttpRequest
 *      --> fetch
 *
 *      - 비동기 프로세스
 *      --> Promise
 *      --> async, await
 *      --> for-await-of
 *      --> WebWorkers 등
 */

/**
 *           ===== XHR 비동기 통신 =====
 *
 *      - XHR 비동기 통신 기본 형태
 *
 *      - XHR 은 실행 순서를 보장하지 않는다
 *      --> 다수의 XHR 을 짧은 간격으로 실행했을 때
 *      --> 실행한 순서대로 끝나지 않을 수 있다
 *
 *      - 반드시 실행한 순서로 끝나야 한다면
 *      --> XHR 자체로는 해결할 수 없으며
 *      --> 별도의 처리가 필요하다
 *      ----> queue 에 넣고 실행하면되지!!
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ XHR 비동기 통신 ---------------');

    const obj = new XMLHttpRequest();
    obj.onload = function(){
        if ( this.status === 200 ){
            log( this.response );
            // :: "서버 데이터"
            debugger;
        }
    }

    obj.open( "GET" , "./file/data.txt" );

    obj.send();
    debugger;

    // 1. if ( this.status === 200 ) { ... }
    //    핸들러 함수에서 this 로 XHR 인스턴스를 참조하려면

    // 2. obj.onload = function(){ ... } 처럼
    //    function 키워드를 사용해야 한다
    //    화살표 함수 => 를 사용하면
    //    this 가 window 오브젝트를 참조하기 때문이다
}
/**
 *           ===== Promise 로 비동기 실행 =====
 *
 *      - Promise 비동기 실행 형태
 *
 *      - new Promise()로 인스턴스를 생성할 때
 *      --> resolve()를 실행하지 않는다
 *
 *      - 마지막 코드까지 실행한 후
 *      --> 환경이 되었을 때 resolve()를 실행한다
 *      --> resolve()가 실행되면
 *          then()의 첫 번째 파라미터 함수가 호출된다
 */
{
    log('------------ Promise 로 비동기 실행 ---------------');

    const obj = new Promise( ( resolve , reject ) => {
        // 아 여기필드는 바로 실행되는구나...
        resolve( "성공" );
        log( "1. resolve" );
        debugger;
    } );

    obj.then( value => {
        log( "3. " , value );
        debugger;
    } , reason => log( reason ) );

    log( "2. 마지막" );
    debugger;
    // :: 1. resolve
    // :: 2. 마지막
    // :: 3. 성공
}

/**
 *           ===== 비동기 통신 + 비동기 실행 =====
 *
 *      - Promise 로 비동기 실행을 하면서
 *      --> XHR 로 비동기 통신
 *
 *      - new Promise()로 비동기 실행 환경 설정
 *      --> XHR 인스턴스 생성
 *      --> 통신 성공 이벤트 설정
 *      --> open() , send()
 *
 *      - onload 이벤트 발생
 *      --> 파일 수신 체크
 *      --> 성공이면 resolve( this.response ) 실행
 *      --> then()의 첫 번째 파라미터 함수 실행
 */
{
    log('------------ 비동기 통신 + 비동기 실행 ---------------');
    const promise = new Promise( ( resolve , reject ) => {
        log( "1. XHR 생성" );
        const obj = new XMLHttpRequest();
        obj.onload = function(){
            if ( this.status === 200 ){
                resolve( this.response );
            }
        }

        obj.open( "GET" , './file/data.txt' );
        obj.send();
        debugger;
    } );

    promise.then( res => {
        log( res );
        debugger;
    } );

    log( "2. 마지막" );

    debugger;

    // :: 1. XHR 생성
    // :: 2. 마지막
    // :: 서버 데이터
}