/**
 * 프로그람 설명문서 주석
 * 2022.07.26~ 수업
 *
 *
 *           ===== Fetch 프로세스 =====
 *
 *      - Fetch 의 주요 프로세스 코드를 살펴본다
 *
 *      - JSON 데이터를 가져오는 코드
 *      --> fetchData 는 fetch.js 파일에 있다
 *
 *      - Blob 을 가져오는 코드
 *
 *      - 서버가 다운되었을 때
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{

    log('------------ JSON 데이터 가져오기, fetch.js ---------------');

    const fetchData = fetchDataFactory();

    const point = {

        value : 100,

        async getData( url , option ){

            const data = await fetchData.main( url , option );

            log( data );
            // :: { sports: 100 , music: 200}

            log( this.value + ( data.bonus || 0 ) );
            // :: 100

            debugger;


        }
    }

    const option = { type : "json" };

    point.getData("./file/pointData.txt" , option );

    debugger;

    // 1. const data = await fetchData.main( url , option );
    //    pointData.txt 파일을 가져와 data 에 할당한다
    //    data 는 JSON.parse() 를 실행한 상태이다

    // 2. log( this.value + data.bonus );
    //    this 가 getData()를 호출한 오브젝트를 참조한다
}

{
    log('------------ Blob 가져오기, fetch.js ---------------');

    const fetchData = fetchDataFactory();

    const point = {
        async getData( url , option ){

            const el = document.querySelector( ".img1" );

            el.src = await fetchData.main( url , option );

            debugger;
        }
    }

    const option = { type : 'blob' };

    point.getData( "./image/rose.png" , option );

    debugger;

    // 1. 앞의 JSON 데이터 가져오기와 차이는
    //    const option = { type : "blob" } 과
    //    URL 이 반환되는 것이다

    // 2. fetchData 오브젝트 코드는 같다

}

{
    log('------------ 서버가 다운되었을 때, fetch.js ---------------');

    const fetchData = fetchDataFactory();

    const point = {
        async getData( url , option ){
            const data = await fetchData.main( url , option );

            log( data );

            if ( data.errorCode === "NetWork" ){
                log( "네트워크 에러" );

                debugger;
            }
        }
    }

    const option = { type : "json" };

    point.getData( "./file/pointData.txt" , option );

    /**
     *  - 서버를 강제로 죽이고 실행하면 data 에 정상적인 값이 출력되지 않는다
     *  --> data 에 fetchData 에서 보낸 object 가 설정된다.
     */
}