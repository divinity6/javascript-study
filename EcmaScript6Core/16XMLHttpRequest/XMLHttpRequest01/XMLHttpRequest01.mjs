/**
 * 프로그람 설명문서 주석
 * 2022.05. 19 수업
 *
 *
 *           ===== XMLHttpRequest =====
 *
 *      - XMLHttpRequest 이름에 XML 이 포함되어 있지만
 *      --> 처음 오브젝트를 맨들때의 이름으로
 *          XML 을 위한 시멘틱으 아니다
 *      --> XHR 을 약칭으로 사용한다
 *
 *      - 스펙의 XHR 정의
 *      --> Object 로 Resource 를 fetch 하기 위한 API
 *      --> XHR 스펙, https://xhr.spec.whatwg.org
 *
 *      ----> Request 는 클라이언트에서 서버로 전송하는 것을 뜻한다
 *      ----> Response 는 서버에서 클라이언트로 전송하는 것을 뜻한다
 *
 *      - SOP( Same Origin Policy ) 제약을 받는다
 *      --> source 가 같은 URL 에만 접근 가능
 *          protocol, port , host
 *      ----> 위 셋 중에 하나라도 다르면 접근할 수 없다.
 *      ------> A 라는 사이트에서 XHR 을 이용해서 B 라는 사이트가 있는,
 *              데이터를 가져올 수 는 없다
 *              ( 이것이 SOP )
 *
 *      --> 단, CORS( Cross-Origin Resource Sharing )는 가능
 *
 *      ----> 통신에서는 SOP 와 CORS 가 필수 개념이다.
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
/**
 *          ===== XMLHttpRequest 플로우 =====
 *
 *      -----> 크게 세가지로 분류할 수 있다
 *
 *      - 브라우저 Request
 *      - 서버 처리
 *      - 브라우저 Response
 */
{
    log('------------ XMLHttpRequest 플로우 ---------------');
    const obj = new XMLHttpRequest();
    obj.onreadystatechange = () => {
        log( obj.readyState );
        // :: 1
        // :: 2
        // :: 3
        // :: 4

        if ( obj.readyState === 4 && obj.status === 200 ){
            log( obj.response );
        }
        else if ( obj.readyState === 4 && obj.status === 404 ){
           log( obj.response );
           debugger;
        }
    }
    debugger;
    /**
     *  - open 메서드는 서버와 연결을 하는 것이다
     *
     *
     *  - 파라미터 :
     *    1 ) 전송방법
     *    2 ) 경로
     *    3 ) 비동기 통신 ( default : true )
     *        - false 를 작성하면 동기 통신이 된다
     */
    obj.open( "GET" , "./file/data.txt" , true );
    /**
     *  - send 메서드는 파라미터에 작성한 데이터를 서버로 전송한다
     */
    obj.send();
    debugger;

    /**
     * - obj.onreadystatechange 는 이벤트 타입이다
     * --> = () => { ... } 는 이벤트 핸들러
     *
     * ----> 서버에서 상태를 전송할때마다 등록한 이벤트가 발생한다
     *       ( onreadystatechange )
     *
     * ----> 상태를 체크하여, 상태에 따른 처리를 하게된다.
     *
     * --> 그러면, 핸들러를 실행하게 되는데 readyState 프로퍼티 값을 찍는다.
     *
     * 1. obj.open( ... )
     *    처음 obj.open( ... ) 을 실행하게 되면 obj.onreadystatechange 이벤트가
     *    발생하게 된다.
     *
     * 2. obj.send()
     *    obj.send()를 실행하게 되면 다시 이벤트가 발생하게 되고,
     *    그때 obj.readyState 값은 2 이다
     *
     * 3. 서버 처리
     *    서버에서 처리하는 동안 obj.readyState 값 3 이 발생하게 된다
     *
     * 4. 서버처리 끝
     *    4 번 이벤트 처리
     *
     * - 성공적으로 끝나면 data 가 obj.response 프로퍼티에 찍힌다
     *
     * =======================================================
     *                - 이것이 전반적인 흐름이다
     * =======================================================
     */
}
/**
 *      - 브라우저 Request
 *      --> XMLHttpRequest 인스턴스 생성
 *      --> 이벤트 핸들러 작성
 *      --> 서버와 연결
 *          전송 방법, URL, 동기/비동기 통신 지정
 *      --> 데이터 전송
 *
 *      - 서버
 *      --> 상태가 바뀔 때마다 상태를 브라우저로 전송
 *      --> 마지막 상태에서 데이터 전송
 *
 *      - 브라우저 Response
 *      --> 서버에서 상태를 전송할 때마다 이벤트 발생
 *      --> 핸들러에서 상태에 따른 처리
 */

