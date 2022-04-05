/**
 * 프로그람 설명문서 주석
 * 2022.04. 04 수업
 *
 *           ===== all() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 형태                  - Iterable
 *      - 반환                  - Promise 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 파라미터의 모든 Promise 처리를 완료했을 때
 *      --> then()의 핸들러 함수를 실행한다
 *      --> Promise.all() 형태로 작성한다
 *
 *      - 파라미터를 이터러블로 작성한다
 *      --> 작성한 순서로 Promise 인스턴스 생성
 *          그리고 한만에 .then()을 호출하며
 *          resolve 의 파라미터에 설정한 값이
 *          파라미터로 매핑된다.
 *
 *      - 실행자에서 실패가 발생했을 때
 *      --> reject()가 발생한 시점에 then()을 실행
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ all() ---------------');

    function order( delay ){
        /**
         *  - 아 setTimeout 때문에 Promise 다음에
         *    바로 .then()이 실행되는 것처럼 보이는 구먼...
         *  --> 실상은 then()은 Promise 처리가 끝나고
         *      나오는데...ㅋㅋ
         *
         *  ----> 진리 -- Promise 바디의 처리가 끝나야
         *               [[ PromiseStatus ]] 상태값이 설정됨!
         */
        return new Promise( resolve => {
            // 이게 실행되는 시점은 setTimeout 이므로 delay 의 속도에 따름
            // 100 , 300 , 500 순이네 말그대로 시간초순...
            setTimeout( ()=> {
               log( ' 실행자 : ' , delay );
               resolve( delay );
               debugger;
           } , delay);
        });
    };

    // 이터러블로 작성
    const obj = Promise.all( [ order( 500 ) , order( 300 ) , order( 100 ) ])
    debugger;
    /**
     *  - Promise 필드 안을 읽어야지만 pending 상태가 풀리네...
     *  --> all 로 promise 객체를 호출했으니깐 then 이 대기상태에 들어가나...?( 뇌피셜 )
     *  --> param 안에 젠부 all 안에 작성한 값들이 배열로 매핑되는구만
     */
    obj.then( param => {
        /**
         *  - Promise.all() 의 파라미터에 작성한 순서대로 매핑됨!
         */
        log( " then : " + param );
        log( param );
        debugger;
    } );

    // :: 실행자 : 100
    // :: 실행자 : 300
    // :: 실행자 : 500
    // :: then : 500 , 300 , 100
    debugger;

    // 1. Promise.all( [ order( 500 ), order( 300 ) , order( 100 ) ] );
    //    all()의 파라미터를 이터러블로 작성했다
    //    파라미터에 작성한 순서로 order() 함수를 호출하며
    //    Promise 인스턴스를 생성하여 반환한다

    // 2. setTimeout(()=> { ... } , delay )
    //    setTimeout()의 두 번째 파라미터 delay 는
    //    지연 시간으로 값의 단위는 밀리초이다

    // 3. 따라서 setTimeout()의 지연 시간이 짧은 순서인
    //    100 , 300 , 500 순서로 resolve( delay )를 실행하지만
    //    실행할 때마다 아래의 then()을 호출하지 않고
    //    3개를 모두 실행한 후에 then()을 한번만 호출한다.
    /**
     *  - 정리하면 order 함수를 모두 호출하면
     *    ( order( 500 )  , order( 300 ), order( 100 ) )
     *    500 , 300 , 100 밀리초 후에 resolve 함수가 실행될 것이다.
     *
     *  - 그러면 처음에 100, 300 , 500 이 실행될 것이다.
     *  --> 그런데, resolve 를 호출할때마다 then()을 계속 호출하지 않고,
     *      all 의 파라미터 Promise 객체가 모두 종료된 다음에
     *      then() 을 한번만 호출한다는 것이다.
     *
     *  --> 따라서, log() 는 한번만 출력된다
     */

    // 4. 이것이 all() 함수의 특징이다

    // 5. then( param => log(" then : " + param ));
    //    [ 실행 결과 ]의 "then"처럼
    //    resolve( delay )의 파라미터 값을 배열로 만들어
    //    param 파라미터에 설정한다

    // 6. 이때, resolve( delay )가 실행된 순서가 아니라
    //    all()의 파라미터에 작성한 순서로 값을 설정한다

    // 7. resolve() 실행 순서는 100 , 300 , 500 이지만
    //    [ 실행 결과 ]에 [ 500 , 300 , 100 ]이 출력되었다.
    /**
     *  - 즉, .then()에 매핑되는 순서는 파라미터에 작성한 순서대로 매핑됨!
     */
}
{
    log('------------ 실행자에서 실패가 발생했을 때 ---------------');
    function order( delay ){
        return new Promise( ( resolve , reject ) => {
            setTimeout(()=> {
                log( delay );
                delay === 300 ? reject( delay ) : resolve( delay );
                debugger;
            } , delay );
        });
    };

    /**
     *  - all 의 파라미터 값이 전부 resolve 라면 all 의 Promise 객체를 전부 처리한 후
     *    .then()을 실행했지만, reject()가 발생하면,
     *    그 시점에 then()의 두번째 파라미터 함수를 실행한다
     *  --> 이전에 order( 100 )의 함수는 실행되지 않는 것이다.
     *      ( 이러한 특징 )
     */
    Promise.all( [ order( 500 ) , order( 300 ) , order( 100 )])
        .then( param => {
            log(' 성공 : ' + param );
            debugger;
            /**
             *  - reject 가 발생한 시점에 then 을 실행해버리네
             */
        } , param => {
            log(' 실패 : ' + param );
            debugger;
        }).then( param => {
            log( '후속 : ' + param );
            debugger;
    });

    // :: 100
    // :: 300
    // :: 실패 : 300
    // :: 후속 : undefined
    // :: 500
    debugger;

    // 1. 앞 코드와 같지만
    //    reject()가 있으며
    //    reject()가 발생하면 처리가 앞 코드와 다르다

    // 2. delay === 300 ? reject( delay ) : resolve( delay );
    //    설명을 위해 order( 300 )일 때
    //    reject( delay )가 실행되도록 했다

    // 3. 처음 resolve( 100 )이 실행되며 100이 출력된다

    // 4. 이어서 reject( 300 )이 실행되며 300이 출력된다

    // 5. 또한 then()의 두 번째 파라미터 함수가 호출되어
    //    "실패 : 300"이 출력되었다
    //    reject()가 발행했을 때 전체가 끝나지는 않았다

    // 6. resolve( 500 )이 실행되며 500이 출력된다

    // 7. 앞 코드에서는 3개 모두가 끝나면
    //    all() 파라미터에 작성한 순서로 값을 출력했는데
    //    여기서는 출력하지 않았다

    // 8. all()은 이렇게 하나라도 reject()가 발생하면
    //    then()의 첫 번째 파라미터 함수를 실행하지 않는다
    /**
     *  - reject 가 발생하는 즉시, .then()의 두번째 함수를 실행하며
     *    다른 all 파라미터의 Promise 객체들은 .then() 함수는 무시된다
     *
     *  --> 그러나 Promise 내부 필드는 실행된다
     *      ( 그즉시 중단되는 건 아니고 , then() 만 실행되지 않는다 )
     *
     */

    // 9. 이것이 all()의 또 하나의 특징이다.
}
/**
 *           ===== race() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 형태                  - Iterable
 *      - 반환                  - Promise 인스턴스
 *      -----------------------------------------------------------
 *
 *      - resolve(), reject()에 관계없이
 *      --> 처음 한번만 then()을 실행하고
 *      --> 더 이상 실행하지 않는다.
 *      ----> 예) 10번을 Promise 인스턴스 생성,
 *               그안에서 resolve() or reject() 호출
 *               그러면 처음 한번만 실행하고 나머지 9 번은 then()을 실행하지 않음.
*/
{
    log('------------ race() ---------------');
    function order( delay ){
        return new Promise( ( resolve , reject ) => {
            setTimeout(()=> {
                log( delay );
                resolve( delay );
                debugger;
            } , delay );
        });
    };
    Promise.race( [ order( 500 ) , order( 300 ) , order( 100 )] )
        .then( ( param ) => {
            log( ' then : ' + param );
           debugger;
        });

    // :: 100
    // :: then : 100
    // :: 300
    // :: 500
    debugger;

    // 1. Promise.race( [ order( 500 ), order( 300 ), order( 100 ) ] );
    //    race()의 파라미터 순서로 order()를 호출한다

    // 2. 그러면 [ 실행 결과 ] 처럼 100 , 300 , 500 순서로
    //    resolve( delay )가 실행된다

    // 3. 그런데, order( 100 )일 때,
    //    처음 한 번만 then()의 핸들러 함수를 실행하고
    //    다음은 실행하지 않는다
    //    그래서 "then : 100"만 출력되었다

    /**
     *  - 다른 파라미터 3개 의 Promise 객체가 있더라도,
     *    무시하고, 처음 resolve(), reject() 를 만났을 때,
     *    then()을 실행하게 된다라는 것.
     *
     *  - 이후의 300, 500 에 대해서는 Promise 내부 필드는 탄다.
     *  --> 그러나 then()은 호출되지 않는다라는 것.
     *      ( 위의 Promise.all()의 reject() 발생과 같다 )
     */

    // 4. 이것이 race()의 특징이다
    /**
     *  - 처음 한번만 then()을 호출한다는 것!
     */

}