/**
 * 프로그람 설명문서 주석
 * 2022.07.16 수업
 *
 *
 *           ===== 비동기 통신 + async/await =====
 *
 *      - Promise + XHR 환경에서
 *
 *      --> async/await 로
 *          3개의 파일을 순서대로 가져온다
 *
 *      --> for-of 문으로 반복할 때마다
 *          await 로 인해 Promise 의 resolve()에서
 *          값을 반환할 때까지 기다린다
 *
 *      --> 따라서 실행 순서대로 처리할 수 있다
 *
 *      - 서버에 파일이 없으면
 *
 *      --> reject()가 실행된다
 *
 *      --> catch()에서 받으며 XHR 인스턴스가
 *          catch()의 파라미터에 설정된다
 *
 *      --> 처리를 중단하지 않고 다음을 실행한다
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ Promise + XHR, async/await ---------------');

    async function getData( option ){

        for ( let url of option ){
            const res = await create( url );
            log( JSON.parse( res ) );
            // :: 서버 데이터-1
            // :: 서버 데이터-2
            // :: 서버 데이터-3
        }
        debugger;
    }

    const option = [
        { url : './file/data1.txt' },
        { url : './file/data2.txt' },
        { url : './file/data3.txt' },
    ];

    console.log( getData( option ) );
    debugger;
    /**
     *  - 실행 순서를 보장하려면 async/await 를 사용하면 된다
     */
}
{
    log('------------ 에러 발생 ---------------');

    async function getData( option ){
        for ( let url of option ){
            try{
                const res = await create( url );
                log( JSON.parse( res ) );

            }
            catch( xhr ){
                log( xhr.status );
                debugger;
            }
        }
        debugger;
        // :: 서버 데이터-1
        // :: 404
        // :: 서버 데이터-3
    }

    const option = [
        { url : './file/data1.txt' },
        { url : './file/파일없음.txt' },
        { url : './file/data3.txt' },
    ];

    console.log( getData( option ) );
    debugger;
    /**
     *  - 처리를 중단하지 않고 다음처리를 이어서 처리한다
     *
     *  --> axios 도 그냥 호출하지말고, 한번 async await 로 묶으면 편하겠네
     */
}