/**
 * 프로그람 설명문서 주석
 * 2022.07.06 수업
 *
 *
 *           ===== 함수로 분리 =====
 *
 *      - 비동기 통신, 실행을 함수로 분리
 *      --> 다음 코드에서 함수를 사용하기 위해
 *      --> create.js 파일에 작성되어 있다
 *
 *      - 함수로 분리하면
 *      --> 공용 함수로 사용할 수 있으며
 *      --> 코드 중복 방지 등의 장점이 있다
 *
 *      - 코드는 기본 흐름을 제시하기 위한 것으로
 *      --> 필요한 옵션을 추가한다
 *      --> Class 또는 Module 형태로 맨드는 것도
 *          생각해 볼 수 있다
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ XHR 비동기 통신 ---------------');

    const option = { url : './file/data.txt' };

    create( option ).then( res => {
        log( res );
        // :: 서버 데이터
        debugger;
    } )

    debugger;
}
/**
 *           ===== 다수 파일 수신 =====
 *
 *      - 서버에서 다수의 파일을 수신한다
 *
 *      - Promise.all() 사용
 *      --> 파일 수신이 모두 끝나야 then() 실행
 *      --> 하나라도 에러가 발생하면 다른 것을 처리하지 않는다
 *
 *      - 앞 처리에서 받은 데이터를
 *      --> 다음 처리 여부의 기준으로 사용하려면
 *      --> 하나씩 실행 순서로 데이터를 받아야 한다
 *      --> 이런 경우, Promise.all()은 비효율적
 *
 *      - 하나씩 순서대로 처리가 필요할 때
 *      --> async/await 를 사용한다
 */
{
    log('------------ Promise.all() ---------------');

    const opt = [
        { url : './file/data1.txt'},
        { url : './file/data2.txt'},
    ];

    Promise.all( [ create( opt[ 0 ] ) , create( opt[ 1 ] ) ] ).then( res => {
        log( res[ 0 ] + res[ 1 ] );
        // :: "서버 데이터-1""서버 데이터-2"
        debugger;
    } )
    /**
     *  - Promise.all() 은 파라미터에 있는 모든 Promise 객체의 비동기 처리가 완료되었을 때,
     *    then()을 호출한다
     *
     *  --> all() 은 파라미터 Promise 인스턴스가 하나라도 에러가나면 처리하지 않는다
     */

    // 1. Promise.all() 은 모든 처리가 끝나야
    //    then()을 실행한다
    //    처리 결과를 배열로 반환한다
}
{
    log('------------ 에러 발생 ---------------');

    const opt = [
        { url : './file/data.txt' },
        { url : './file/파일없음.txt' },
    ];

    Promise.all( [ create( opt[ 0 ] ) , create( opt[ 1 ] ) ] )
        .then( res => {
            log( res );
            debugger;
        } ).catch( xhr => {
            log( xhr.status );
            // :: 404
            debugger;
    } )

    // 1. "./file/파일없음.txt" 가 서버에 없으므로 에러 발생

    // 2. reject( this )가 실행되며, catch()가 실행된다

    // 3. reject( this )에서 this 가 XHR 인스턴스이며
    //    catch( xhr => log( xhr.status ) 의
    //    xhr 파라미터에 설정된다
    //    [ 실행 결과 ]에 404가 출력된다

    // 4. 한편 "./file/data.txt"는 서버에 있으므로
    //    정상으로 처리되지만
    //    then()의 파라미터 함수가 실행되지 않는ㄴ다

    // 5. 이것은 Promise.all()은 하나라도 에러가 발생하면
    //    다른 것을 처리하지 않기 때문이다
    /**
     *  - step by step 으로 하나씩 처리하려면
     *    async/await 를 사용한다
     */
}