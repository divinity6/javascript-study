/**
 * 프로그람 설명문서 주석
 * 2022.07.21 수업
 *
 *
 *           ===== Fetch =====
 *
 *      - Fetch API
 *
 *      --> 비동기 환경에서 비동기로 통신한다
 *
 *      --> XMLHttpRequest 와 비슷하지만
 *          CORS , HTTP 관련을 망라하여 지원한다
 *
 *      --> 통신에 성공하면 Promise 인스턴스 반환
 *
 *      - fetch()가 비동기 환경에서 실행하므로
 *      --> async/await 를 사용할 수 있다
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ 파일 가져오기 ---------------');

    const url = "./image/code.png";

    fetch( url )
        .then( response => {

            debugger;

            return response.blob();

        } )
        .then( blob => {

            const el = document.querySelector( ".img1" );

            el.src = URL.createObjectURL( blob );

            debugger;
        } )

    // Fetch 는 API 로 ECMAScript 스펙에 없다
    // API 는 일반적으로 new 로 인스턴스를 생성하지만
    // fetch() 형태로 호출한다

    // 1. fetch( url ).then( response => { ... } );
    //    fetch( url )의 파라미터에 작성한 URL 의
    //    code.png 파일 정보를 비동기로 가져온다

    // 2. 파일 정보 수신이 성공적으로 끝나면
    //    then()의 첫 번째 파라미터 함수가 실행되며
    //    파일 정보가 response 파라미터에 설전된다

    // 3. then() 사용은 Promise 처리를 뜻한다
    //    즉, 비동기 환경에서 비동기로 통신한다

    // 4. return response.blob();
    //    blob()은 response 에서 Blob 오브젝트를 구한다
    //    구한 오브젝트를 반환하지 않고 Promise 를 반환한다

    // 5. then( blob => { ... } )
    //    앞에서 구한 Blob 오브젝트가 blob 에 설정된다

    // 6. el.src = URL.createObjectURL( blob );
    //    blob 오브젝트의 이미지 URL 을 문자열로 반환한다

    // 7. < img >의 src 에 URL 을 할당하면 이미지가 표시된다
}

{
    log('------------ 파일 가져오기 ---------------');
    const url = "./image/code.png";

    const updateImage = async ( url ) => {

      // then 대신 await 사용
       const res = await fetch( url );

       const blob = await res.blob();

        const el = document.querySelector( ".img2" );

        debugger;
        el.src = URL.createObjectURL( blob );
    }

    updateImage( url );

    // 1. async 함수에 await fetch( url )를 작성했다

    // 2. await 로 인해
    //    파라미터 url 의 이미지 정보를 받을 때까지
    //    아래 코드를 실행하지 않는다
    //    즉, 동기로 실행된다

    // 3. return response.blob()
    //    response 에서 Blob 오브젝트를 구하고
    //    Promise 를 반환한다

    // 4. then( blob => { ... } );
    //    앞에서 구한 Blob 오브젝트가 blob 에 설정된다

    // 5. 앞 코드에서는 then()을 두 번 사용했으나
    //    여기서는 한 번  사용했다
    //    await 에 then() 처리가 포함된 것이다

    /**
     *  - then()은 비동기 환경에서 비동기로 처리하지만,
     *
     *  - await 는 비동기 환경에서 동기로 처리한다!!
     */
}

/**
 *           ===== Fetch API 구성 =====
 *
 *      - Fetch API 구성
 *      --> HTTP Request, Response , Headers, Body
 *      --> Fetch API 스펙
 *
 *      - Fetch API 사용
 *      --> fetch( url , option )형태
 *      --> Window 와 WorkerGlobalScope 에서
 *          인스턴스를 생성하지 않고 직접 호출
 *      --> Service Worker 와 같은 API 에서 사용 가능
 */