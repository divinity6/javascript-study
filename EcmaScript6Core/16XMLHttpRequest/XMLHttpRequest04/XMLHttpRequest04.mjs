/**
 * 프로그람 설명문서 주석
 * 2022.06. 21 수업
 *
 *
 *           ===== Response =====
 *
 *     - 통신은 크게 Request 와 Response 로 나눌 수 있다
 *
 *     -------------------------------------------------------------------------------
 *      - 메소드/프로퍼티             - 구분    - 개요
 *
 *      - status                  -        - HTTP Response 상태 코드. 200 , 404 등
 *
 *      - statusText              -        - HTTP Response 상태 메시지. OK, Not Found
 *
 *      - response                -        - responseType 에 따른 Response body
 *
 *      - responseURL             -        - Request 에 대한 최종 Response URL
 *
 *      - responseType            -        - Response 데이터 타입
 *                                           ( 서버에서 Response 데이터 타입에 맞는 데이터 타입을 보냄 )
 *
 *      - responseText            -        - 텍스트 형태 데이터
 *
 *      - responseXML             -        - XML( DOM Document ) 형태의 데이터
 *
 *      - withCredentials         -        - Request 에서 cookie 등의 인증정보 사용 여부
 *
 *      - getResponseHeader()     - 파라미터  - Header name
 *                                - 반환     - 파라미터에 지정한 Header name 의 값
 *
 *      - getAllResponseHeaders() - 파라미터  - 파라미터 없음
 *                                - 반환     - Response Header 의 모든 속성 반환
 *
 *      - overrideMimeType()      - 파라미터  - MIME 타입 변경
 *                                - 반환     - 반환 없음
 *     -------------------------------------------------------------------------------
 *
 *     - 개념 중심으로 코드를 다룬다
 *     --> XHR 버전에 따라 다를 수 있다
 *     --> 자세한 것은 MDN 또는 https://xhr.spec.whatwg.org 스펙 참조
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
/**
 *           ===== status =====
 *
 *      - status , status Text
 *      --> status : Response 상태 코드
 *      --> statusText : Response 상태 텍스트
 *
 *      - HTTP Request 상태 코드
 *      --> 101 ~ 199 : 정보
 *      --> 200 ~ 299 : 성공
 *      --> 300 ~ 305 : 리다이렉션
 *      --> 400 ~ 499 : Request 에러
 *      --> 500 ~ 599 : 서버 응답 에러
 */
{
    log('------------ status , statusText , 200 ---------------');
    const obj = new XMLHttpRequest();
    obj.onload = () => {
        // 실제는 404
        log( obj.status );
        // :: 200

        // 실제는 Not Found
        log( obj.statusText );
        // :: OK
    }

    obj.open( "GET" , "./file/data.txt" );
    obj.send();
    debugger;

    // 1. obj.status
    //    [ 실행 결과 ]에 200이 출력되었으며
    //    서버에서 파일 수신의 성공을 뜻한다

    // 2. obj.statusText
    //    status 200 에 대한 텍스트이다
}

{
    log('------------ status 404 ---------------');
    const obj = new XMLHttpRequest();
    obj.onload = () => {
        log( obj.status );
        // :: 404
        log( obj.statusText );
        // :: Not Found
        if ( obj.status === 200 ){
            log( "파일 수신" );
        }
        debugger;
    }

    obj.open( "GET" , "../file/없는 파일.txt" );
    obj.send();

    debugger;

    // 1. open( "GET" , "../file/없는 파일.txt" );
    //    서버에 "없는 파일.txt" 파일이 없다

    // 2. 파일이 없어도 onload 이벤트가 발생한다
    //    이때, status 코드는 404 이다
    /**
     *  - onload 핸들러 함수는 파일이 없어도 실행한다
     */

    // 3. if ( obj.status === 200 ){ ... }
    //    구체적으로 성공을 체크해야 한다

    // 4. onload 이벤트는 통신을 성공했을 때 발생한다
    /**
     *  - 따라서, onload 이벤트 안에서 파일이 수신된 것을 체크해야 한다
     *    ( 구체적으로 200 ~ 299 를 체크해야 한다 )
     */

    // 5. 지금까지 강좌에서 통신에 성공하면
    //    onload 이벤트가 발생한다고 하였으나
    //    상태 코드 체크를 제외한 포괄적인 표현이다
    //    ( 이전 강좌 기준 상태 코드를 다루지 않았기 때문... )
    /**
     *  - onload 이벤트는 파일이 제대로 수신되었는지 확인하거나 체크하지 않는다
     *  --> 단지 통신이 성공했을때 발생한다
     *  --> 따라서, 구체적으로 status 코드를 작성해 확인해야 한다
     */
}

/**
 *           ===== responseType =====
 *
 *      -----------------------------------------------------------
 *      - 타입            - 개요
 *
 *      - 미작성           - 디폴트 값이며 텍스트로 반환
 *
 *      - blob           - BLOB 형태
 *
 *      - arraybuffer    - 자바스크립트의 ArrayBuffer 형태
 *
 *      - document       - DOM Document( XML , HTML ) 형태
 *
 *      - json           - JSON 텍스트를 오브젝트로 반환
 *
 *      - text           - 텍스트 형태
 *      -----------------------------------------------------------
 *
 *      - response
 *      --> 서버에서 보낸 데이터가 설정된다
 *
 *      - responseType
 *      --> response 에 설정될 데이터 타입을
 *          문자열로 작성한다
 *
 *      --> 서버는 이 타입의 데이터를 전송한다
 *
 *      ----> response 라는 시멘틱을 보면 응답 형태가 되지만,
 *            request 할때, 서버로 전송되어야 한다
 *
 *      ----> responseType 을 작성하지 않으면, 기본타입인
 *            텍스트 형태로 반환한다
 */
{
    log('------------ responseType , response ---------------');
    const obj = new XMLHttpRequest();

    // response 에 설정될 데이터 타입은 blob
    obj.responseType = "blob";
    obj.onload = () => {
        debugger;
        // BLOB 오브젝트에서 BLOB URL 을 생성한다
        const url = window.URL.createObjectURL( obj.response );

        const el = document.createElement( "img" );

        el.onload = () => {
            debugger;
            // 이미지 로드 후 , BLOB 오브젝트에서 URL 을 해제
            window.URL.revokeObjectURL( url );
        }

        el.src = url;
        document.getElementById( "show" ).appendChild( el );
        debugger;
    }

    obj.open( "GET" , "./image/rainbow.png" );
    obj.send();

    debugger;

    // 1. BLOB( Binary Large Object )은
    //    이미지 , 동영상 드으이 바이너리 파일을 뜻한다
}