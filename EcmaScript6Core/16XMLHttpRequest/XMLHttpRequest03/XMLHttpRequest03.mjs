/**
 * 프로그람 설명문서 주석
 * 2022.06. 14 수업
 *
 *
 *           ===== Request =====
 *
 *     - 통신은 크게 Request 와 Response 로 나눌 수 있다
 *
 *     -------------------------------------------------------------------------------
 *      - 메소드/프로퍼티         - 구분    - 개요
 *
 *      - open()             - 파라미터  - method , GET , POST 등
 *                                     - url, Request 를 보낼 URL
 *                                     - async. true : 비동기, false 동기, 디폴트 : true
 *                                     - user name. 인증 목적, 디폴트 : 빈 문자열
 *                                     - password. 인증 목적, 디폴트 : 빈 문자열
 *
 *      - send()             - 파라미터  - 서버로 보낼 데이터
 *
 *      - setRequestHeader() - 2       - name
 *                                     - value
 *
 *      - abort()            - 없음     - Request 취소
 *
 *      - upload             - 프로퍼티  - 이벤트를 설정하여 파일 업로드 처리 추적
 *
 *      - timeout            - 프로퍼티  - 타임아웃 , 밀리초로 작성
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
 *           ===== open() =====
 *
 *     -----------------------------------------------------------
 *      - 구분            - 개요
 *
 *      - 파라미터         - method. GET, POST, HEAD 등
 *                       - url, Request 를 보낼 URL
 *                       - async. true : 비동기, false 동기
 *                       - user name. 인증 목적, 디폴트 : null
 *                       - password. 인증 목적, 디폴트 : null
 *      -----------------------------------------------------------
 *
 *      - Request 의 초기화
 *
 *      - method 파라미터
 *      --> HTTP Request Method 리스트
 *
 *      - url 파라미터
 *      --> Request 를 전송할 URL 을 작성
 *
 *      - async 파라미터
 *      --> 비동기 : true , 동기 : false , 디폴트 : true
 */

/**
 *           ===== HTTP Request Method =====
 *      -----------------------------------------------------------
 *      - Method         - 개요
 *
 *      - GET            - URL 에 해당하는 리소스 전송 요청
 *      - POST           - 클라이언트의 데이터를 서버로 전송
 *      - PUT            - 클라이언트에서 보낸 데이터를 저장
 *      - DELETE         - 지정한 리소스를 삭제
 *      - CONNECT        - TCP 터널에 접속. 암호화 메시지 전송에 사용
 *      - HEAD           - 서버에서 클라이언트로 HTTP 헤더만 전송
 *      - OPTIONS        - 서버를 조사. 예 : 서버가 지원하는 HTTP 버전
 *      - TRACE          - 서버까지의 네트워크 경로를 체크
 *      -----------------------------------------------------------
 *
 *      --> 위와같이 8개의 메서드가 존재
 *
 *      - HTTP/1.1 기준
 *      - 처음 버전에서 method 이름을 대문자로 사용했으나
 *        최근 버전에서는 소문자를 사용해도 된다
 *      - XHR 에서는 CONNECT , TRACE , TRACK 사용 불가
 *
 *      --> 일반적으로 개발을 할때는 POST , PUT , DELETE 를 구분하지 않는다
 *      ----> POST , PUT , DELETE 를 통합해서 사용하고, 이에대한 처리는
 *            서버에 일임을해 서버에서 처리하도록 하는 것이다.
 *
 *      --> HEAD 는 서버로 HTTP 헤더만 전송한다
 *      ----> HTTP 는 크게 헤더와 바디로 나눌 수 있다
 *            헤더는, 통신 전체의 공통사항이 들어가 있다
 *            ( 헤더의 속성을 변경하는 메서드가 있다 )
 *
 *            하지만, BODY 는 메서드가 없다
 */
{
    log('------------ open() ---------------');
    const obj = new XMLHttpRequest();
    obj.onload = () => {
        log( '실행 성공' )
    }

    obj.open( "POST" , "./file/data.txt" , true );
    obj.send();
    debugger;
}
/**
 *           ===== send() =====
 *
 *      - send() 메서드
 *      --> 서버로 Request 를 전송한다
 *
 *      - send() 파라미터
 *      --> open() 메서드의 첫번째 파라미터인
 *          method 가 GET , HEAD 이면
 *          파라미터 값이 무시되며
 *          POST 일 때 작성한다
 *
 *      - 문자열, Document , Blob 등을 작성
 *
 *      - UTF-8 로 인코딩하여 작성
 */
{
    log('------------ send() ---------------');

    const obj = new XMLHttpRequest();
    obj.onload = () => {
        log( "실행 성공" );
    }

    obj.open( "POST" , "./file/data.txt" );
    obj.setRequestHeader( "Content-Type" , "application/json:charset=UTF-8" );
    obj.send( JSON.stringify( { sports : "농구" } ) );
    debugger;

    // 1. obj.setRequestHeader( ... )
    //    통신 Header 의 속성 값을 설정한다
    //    속성이 다양하며 관련 자료를 참고하면 된다

    // 2. obj.send( ... )
    //    서버로 파라미터 값을 전송한다

    // 3. JSON.stringify( { sports : "농구" )
    //    { key : value } 형태에 큰 따옴표를 추가한다
    /**
     *  - 통신 규약을 맞추기 위한 것
     */
}
/**
 *           ===== timeout =====
 *
 *      - timeout 프로퍼티
 *
 *      - 서버에서 데이터 수신 시간이
 *      --> 작성한 타임아웃을 초과하면
 *      --> ontimeout 이벤트가 발생하며
 *      --> Request 가 취소된다
 *      --> 타임아웃 시간을 밀리초로 작성한다
 *
 *      - 비동기 통신 Request 에서 사용한다
 */
{
    log('------------ timeout ---------------');

    const obj = new XMLHttpRequest();
    obj.onload = () => { log( obj.response ) };
    obj.ontimeout = () => {
        log( "timeout 발생" );
    }

    obj.timeout = 2000;
    obj.open( "POST" , "../file/timeout_data.txt" );
    obj.send();
    debugger;

    // 1. Node.js 를 시작한 main.js 에
    //    5초 후에 timeout_data.txt 를 전송되도록
    //    코드가 작성되어 있다

    // 2. obj.timeout = 2000;
    //    2초 동안 timeout_data.txt 를 수신하지 못하면
    //    ontimeout 이벤트가 발생하며 핸들러를 실행한다

    // 3. 2초 후에 Request 가 취소되므로
    //    onload 이벤트가 발생하지 않는다

    /**
     *  - onload 이벤트가 발생하지 않고,
     *    이벤트가 취소된 후
     *    ontimeout 이벤트가 발생된다
     */
}

/**
 *           ===== abort() =====
 *
 *      - abort() 메소드
 *      --> Request 를 취소한다
 */
{
    log('------------ timeout ---------------');

    const obj = new XMLHttpRequest();
    obj.onload = () => { log( obj.response ) };
    obj.onabort = () => {
        log( "abort 발생" );
    }

    obj.open( "POST" , "../file/timeout_data.txt" );
    obj.send();
    setTimeout( () => { obj.abort() } , 2000 );
    debugger;

    // 1. Node.js 를 시작한 main.js 에
    //    5초 후에 timeout_data.txt 를 전송되도록
    //    코드가 작성되어 있다

    // 2. setTimeout( ()=> { obj.abort() } , 2000 );
    //    2 초 후에 abort()를 호출한다
    //    onabort 이벤트가 발생하며 핸들러를 실행한다

    // 3. Request 를 취소하므로
    //    5 초 후에 onload 이벤트가 발생하지 않는다

    /**
     *  - timeout 과 같이 이벤트를 취소하지만,
     *  --> onabort 이벤트가 실행된다
     */
}