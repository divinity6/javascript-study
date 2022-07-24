/**
 * 프로그람 설명문서 주석
 * 2022.07.24 수업
 *
 *
 *           ===== Request =====
 *
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - url, Request URL
 *                             - option, Request 옵션
 *      - 반환                  - 생성한 Request 인스턴스
 *      -----------------------------------------------------------
 *
 *      - Request 인스턴스를 생성, 반환한다
 *      --> option 은 다음 페이지에서 다룬다
 *      --> Request 스펙
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ Request 인스턴스 생성 ---------------');

    async function getImage( url ){
        const obj = new Request( url , { method : "GET" } );

        log( "url : " , obj.url );

        log( "method : " , obj.method );

        const response = await fetch( obj );

        debugger;

        return response.blob();
    }

    const url = "./image/rose.png";

    getImage( url ).then( blob => {

        const el = document.querySelector( ".img1" );

        el.src = URL.createObjectURL( blob );

        debugger;

    } )

    debugger;

    // 1. const obj = new Request( url , { method : "GET" } );
    //    Request 인스턴스를 생성하여 반환한다

    // 2. 첫 번째 파라미터에 URL 을 작성하고
    //    두 번째 파라미터에 Request 옵션을 작성한다
    //    작성하지 않으면 디폴트 값이 적용된다

    // 3. const response = await fetch( obj );
    //    fetch( url , option )형태로 작성하지 않고
    //    파라미터에 Request 인스턴스를 작성할 수 있다
}

/**
 *           ===== Request 오브젝트 =====
 *
 *      -------------------------------------------------------------------------------
 *      - R/W    - 프로퍼티               - 개요
 *
 *      - W      - body                 - 문자열, FormData , Blob 등의 전송 데이터
 *      - W      - cache                - Request 의 cache 모드
 *      - W      - credentials          - Request 의 인증 정보, 쿠키 사용 관련
 *      - R      - destination          - Request 의 리소스 타입. image , worker
 *      - W      - headers              - Request Headers 오브젝트
 *      - W      - integrity            - 서브 리소스 정합성( SRI )값
 *                                      - 브라우저가 체크하는 보안 기능
 *      - R      - isReloadNavigation   - 리로드 네비게이션 Request 여부
 *      - R      - isHistoryNavigation   - 히스토리 네비게이션 Request 여부
 *     -------------------------------------------------------------------------------
 *
 *     - Request 오브젝트 프로퍼티
 *
 *     --> R/W 는 Read/Write 를 뜻한다
 *
 *     --> Write 만 new Request()의 두 번째 파라미터에
 *         프로퍼티를 작성할 수 있다
 *
 *     - 프로퍼티 설명은 생략한다
 *
 *     --> 통신 개념의 이해가 선행되어야 하기 때문이다
 */
{
    log('------------ Request 오브젝트 프로퍼티 ---------------');

    const url = "./image/rose.jpg";

    const obj = new Request( url );

    log( "body : " , obj.body );
    log( "cache : " , obj.cache );
    log( "credentials : " , obj.credentials );
    log( "destination : " , obj.destination );
    log( "headers : " , obj.headers );
    log( "integrity : " , obj.integrity );
    log( "isReloadNavigation : " , obj.isReloadNavigation );
    log( "isHistoryNavigation : " , obj.isHistoryNavigation );

    debugger;

    // :: body : undefined
    // :: cache : default
    // :: credentials : same-origin
    // :: destination : ""
    // :: headers : {}
    // :: integrity : ""
    // :: isReloadNavigation : undefined
    // :: isHistoryNavigation : false

    /**
     *  - 출력된 위 값들이 모두 기본 값이다
     */

}

/**
 *           ===== Request 오브젝트 =====
 *
 *      -------------------------------------------------------------------------------
 *      - R/W    - 프로퍼티               - 개요
 *
 *      - W      - method               - Request method. GET, POST
 *      - W      - keepalive            - 웹 페이지보다 Request 가 더 길게 존속
 *      - W      - mode                 - Request 모드. same-origin, cors
 *      - W      - redirect             - Redirect 취급 방법
 *      - W      - referrer             - 현재 페이지를 링크한 이전 address
 *      - W      - referrerPolicy       - Request 에 referrer 정보 포함 기준
 *      - W      - signal               - AboutSignal 오브젝트 , Abort 제어
 *      -        - clone()              - 현재 Request 를 복사하는 메서드
 *     -------------------------------------------------------------------------------
 *
 *     - Request 오브젝트 프로퍼티
 *     --> 앞에서 연속된 것으로
 *         한 페이지에 작성할 수 없어 페이지를 나누었다.
 */
{
    log('------------ Request 오브젝트 프로퍼티 ---------------');

    const url ="./image/rose.jpg";

    const obj = new Request( url );

    log( "method          : " , obj.method );
    log( "keepalive       : " , obj.keepalive );
    log( "mode            : " , obj.mode );
    log( "redirect        : " , obj.redirect );
    log( "referrer        : " , obj.referrer );
    log( "referrerPolicy  : " , obj.referrerPolicy );
    log( "signal          : " , obj.signal );


    debugger;

    // :: method          : GET
    // :: keepalive       : false
    // :: mode            : cors
    // :: redirect        : follow
    // :: referrer        : about:client
    // :: referrerPolicy  : ""
    // :: signal          : { aborted : false , reason : undefined , onabort : null }

    /**
     *  - 위 값들이 모두 기본 값이다
     */

}

/**
 *           ===== Response =====
 *
 *      - Request 에 대한 Response( 응답 ) 오브젝트
 *      --> new Response()로 만들 수도 있지만
 *      --> fetch()가 끝나면
 *          Response 인스턴스를 반환한다
 *
 *      - Response 스펙
 */
{
    log('------------ Response 인스턴스 반환 ---------------');

    async function getImage( url ){

        // Response 인스턴스는 fetch 에서 반환하는 객체 그자체이다.
        const response = await fetch( url );

        if ( response.status === 200 ){

            const blob = await response.blob();

            const el = document.querySelector( ".img2" );

            el.src = URL.createObjectURL( blob );

            debugger;
        }
    }

    getImage( "./image/rose.png" );

    // 1. const response = await fetch( url );
    //    실행이 끝나면 Response 인스턴스를 생성하고
    //    프로퍼티에 값을 설정하여 반환한다

    // 2. if ( response.status === 200 ) { ... }
    //    파일 수신 성공을 체크할 수 있다

    // 3. const blob = await response.blob()
    //    blob()이 Promise 에서 실행되므로 await 를 사용한다

}

/**
 *           ===== Response 오브젝트 =====
 *     -------------------------------------------------------------------------------
 *     - 프로퍼티               - 개요
 *
 *     - error                - 통신 에러 오브젝트
 *     - headers              - Response Headers 오브젝트
 *     - ok                   - Response 성공. 200 에서 299 일시 true
 *     - redirect             - Response 의 리다이렉트 여부
 *     - redirected           - 리다이렉트 URL 의 다수 여부
 *     - status               - HTTP status 코드. 200 ,404
 *     - statusText           - HTTP status 코드의 텍스트
 *     - type                 - Response 타입. basic , cors
 *     - url                  - Response URL
 *     - clone()              - Response 를 복사하는 메서드
 *     -------------------------------------------------------------------------------
 *
 *     - Response 오브젝트 프로퍼티
 */
{
    log('------------ Response 오브젝트 프로퍼티 ---------------');

    async function getImage( url ){

        const res = await fetch( url );

        log( "error          : " , res.error );
        log( "headers        : " , res.headers );
        log( "ok             : " , res.ok );
        log( "redirect       : " , res.redirect );
        log( "redirected     : " , res.redirected );
        log( "status         : " , res.status );
        log( "statusText     : " , res.statusText );
        log( "type           : " , res.type );
        log( "url            : " , res.url );

        debugger;

    }

    getImage( "./image/rose.png");

    debugger;

    // :: error          : undefined
    // :: headers        : {}
    // :: ok             : true
    // :: redirect       : undefined
    // :: redirected     : false
    // :: status         : 200
    // :: statusText     : OK
    // :: type           : basic
    // :: url            : http://localhost:3000/Fetch02/image/rose.png

    /**
     *  - 통신은 개념이해가 필요해서 필요할때, 찾아서 사용하면 된다
     */

}