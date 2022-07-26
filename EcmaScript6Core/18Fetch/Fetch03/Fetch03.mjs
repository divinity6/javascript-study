/**
 * 프로그람 설명문서 주석
 * 2022.07.26 수업
 *
 *
 *           ===== Body =====
 *
 *      - Body 는 믹스인( Mixin )
 *      --> 믹스인은 객체지향 용어로
 *          슈퍼 클래스를 지칭한다
 *
 *      --> 단, 단독으로 사용할 수 없고
 *          서브 클래스에서 상속받아 사용한다
 *
 *      --> Request 와 Response 에서 상속받는다
 *      ----> 즉 , Request 할때도 Body 를 사용하고,
 *            Response 할때도 Body 를 사용한다.
 *
 *      - Response 에서 Body 를 상속받는 형태
 *
 *      - Body 스펙
 *
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ Body 상속 ---------------');

    async function getImage( url ){

        const response = await fetch( url );

        const blob = await response.blob();

        const el = document.querySelector( ".img1" );

        el.src = URL.createObjectURL( blob );

        debugger;

    }

    getImage( "./image/rose.png" );

    debugger;

    // 1. const response = await fetch( url );
    //    fetch() 실행이 끝나면
    //    Body 오브젝트를 상속받아
    //    Response 인스턴스를 생성한다
    /**
     *  - 즉, Response 인스턴스에는 Body 오브젝트가 포함되어 있다는 뜻!
     */

    // 2. const blob = await response.blob();
    //    blob()은 Body 오브젝트의 메서드이다
    /**
     *  - 따라서, 상속을 받지 않으면 blob() 메서드를 사용할 수 없는 것이다
     */

    // 3. 상속처리는 내부 처리이므로 외부에서 상속처리를 하지 않는다
}

/**
 *           ===== Body 믹스인 =====
 *
 *     -------------------------------------------------------------------------------
 *     - 메서드                 - 개요
 *
 *     - body                 - ReadableStream 오브젝트로
 *                              데이터 스트림을 포함
 *     - bodyUsed             - body 를 사용한 여부
 *     - arrayBuffer()        - arrayBuffer 인스턴스 반환
 *     - blob()               - Blob 인스턴스 반환
 *     - formData()           - FormData 인스턴스를 반환
 *     - json()               - JSON.parse() 결과 반환
 *     - text()               - Text 를 UTF-8 로 인코딩하여 반환
 *     -------------------------------------------------------------------------------
 *
 *     - Body 믹스인 메서드
 */
{
    log('------------ Body 믹스인 프로퍼티 ---------------');

    async function getData( url ){

        const response = await fetch( url );

        log( "bodyUsed        : " , response.bodyUsed );
        // body 에 있는 데이터 사용( response.json() )
        log( "json            : " , await response.json() );
        log( "body            : " , response.body );
        log( "bodyUsed        : " , response.bodyUsed );

        debugger;

        // :: bodyUsed        : false
        // :: json            : { book: '책', music: '음악' }
        // :: body            : ReadableStream { locked : true }
        // :: bodyUsed        : true
    }

    getData( "./file/jsonData.txt" );

    // 1. response.bodyUsed
    //    body 데이터를 사용한 여부를 반환한다
    //    response.json() 앞에서는 body 데이터를
    //    사용하지 않았으므로 false 를 출력하고
    //    response.json() 뒤에서는 true 가 출력된다

    // 2. true 이면 body 데이터를 사용할 수 없다

    // 3. await response.json();
    //    서버에서 받은 데이터를
    //    JSON.parse()로 파싱한 결과를 반환한다

    // 4. response.body
    //    Request 는 서버로 보낼 데이터를 설정하고
    //    Response 는 서버에서 보낸 데이터가 설정되어 있다
    /**
     *  - 데이터 타입은 서버에서 보낸 데이터 타입에 따라 다르다
     *
     *  --> 데이터 타입에 따라, body 믹스인의 메서드를 호출하여,
     *      타입에 맞는 데이터로 변환하는 작업이 필요하다
     */

}
/**
 *           ===== Headers =====
 *
 *      - Request 와 Response 의 Header 오브젝트
 *
 *      --> [ name : value ] 형태로 사용
 *
 *      --> 속성은 대소문자를 구분하지 않는 것도 있지만
 *          구분하는 것이 있으므로 구분하여 사용한다
 *
 *      --> Headers 오브젝트의 메서드를 사용하여
 *          헤더 속성을 CRUD
 *
 *      --> 안전한 통신을 위해
 *          변경할 수 없는 속성도 있다
 *
 *      - Request 할 때 headers 에 작성
 *
 *      - Headers 는 속성이 많다
 *      --> MDN HTTP headers 참고
 *
 *      - Headers 스펙
 */
{
    log('------------ Headers 오브젝트 ---------------');

    async function getData( url ){

        const response = await fetch( url );

        log( response.headers.get( "Content-Type" ) );

        // :: text/plain; charset=UTF-8

        debugger;

        for ( const [ name , value ] of response.headers ){
            log( `${ name } : ${ value }` )
        }

        /**
         * 결과 :
         * accept-ranges : bytes
         * cache-control : public, max-age=0
         * content-length : 34
         * content-type : text/plain; charset=UTF-8
         * cross-origin-embedder-policy : require-corp
         * cross-origin-opener-policy : same-origin
         * date : Tue, 26 Jul 2022 12:34:53 GMT
         * etag : W/"22-173ff825b80"
         * last-modified : Tue, 18 Aug 2020 03:00:00 GMT
         * x-powered-by : Express
         */

        debugger;

    }

    getData( "./file/jsonData.txt" );

    // 1. response.headers.get( "Content-Type" );
    //    response.headers 에
    //    Headers 오브젝트가 설정된다

    // 2. get()으로 "Content-Type" 값을 구한다

    // 3. for-of 로 헤더 전체를
    //    name : value 로 전개할 수 있다
    /**
     *  - 아무것도 지정하지 않았으므로 디폴트 값이다.
     */
}
{
    log('------------ Headers 에 헤더 작성 ---------------');

    async function postData( url , option ){

        const response = await fetch( url , option );

        log( response.headers.get( "Content-type" ) );

        // :: text/html; charset=utf-8

        debugger;

    }

    // 통신 옵션
    const option = {
        method  : "POST",

        // headers 정보 작성
        headers : { "Content-Type" : "text/plain;charset=utf-8" },
        // 서버로 보낼 데이터 작성
        body    : JSON.stringify( '{"book":"책"}' ),
    }

    postData( "/data" , option );

    // 1. headers : { ... }
    //    headers 에 Request 헤더를 작성한다

    // 2. body : JSON.stringify()
    //    body 에 서버로 전송할 값을 작성한다

    // 3. response.headers.get( "Content-Type" );
    //    Request 가 아닌 Response 의 Content-Type 이다
    /**
     *  - 받는 Content-Type 을 이것으로 보내달라고 요청하는 것!
     */
}

/**
 *           ===== Headers 오브젝트 =====
 *
 *     -------------------------------------------------------------------------------
 *     - 메서드                 - 개요
 *
 *     - append()              - name , value. 새로운 속성을 헤더에 추가
 *     - delete()              - name , 헤더에 속성을 삭제
 *     - get()                 - name , 헤더에 속성값 반환
 *     - has()                 - name , 헤더의 속성값 포함 여부
 *     - set()                 - name , value. 헤더 속성값 변경, 없으면 추가
 *     - for-of()              - 헤더 속성 전체를 name/value 로 전개
 *     -------------------------------------------------------------------------------
 *
 *     - Headers 인스턴스를 생성한 후 메서드를 사용하는 형태
 *     --> Headers 가 이터러블 오브젝트이기 때문에 for-of 문을 사용할 수 있다
 */
{
    log('------------ Headers 인스턴스 ---------------');

    // 파라미터에 속성 작성가능
    const obj = new Headers( { "Content-Type" : "text/plain;charset=utf-8" } );

    debugger;

    // 인스턴스의 속성 설정
    obj.set( "Cache-Control" , "no-cache" );

    async function postData( url , option ){

        const res = await fetch( url , option );

        debugger;
    }

    const option = {
        method  : "POST" ,
        // Headers 인스턴스 설정
        headers : obj    ,
        body    : JSON.stringify( '{"book":"책"}' ),
    }

    postData( "/data" , option );

    debugger;

    // 1. const obj = new Headers( { ... } )
    //    Headers 인스턴스를 생성하고
    //    파라미터에 작성한 값을 설정한다

    // 2. obj.set( "Cache-Control" , "no-cache" );
    //    Headers 인스턴스에 헤더를 설정한다
}