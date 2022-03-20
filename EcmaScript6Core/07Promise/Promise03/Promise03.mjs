/**
 * 프로그람 설명문서 주석
 * 2022.03. 20 수업
 *
 *           ===== then() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - resolve , 성공 처리 핸들러 함수
 *                             - reject , 실패 처리 핸들러 함수
 *      - 반환                  - Promise 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 성공과 실패 핸들러 함수를 작성한다.
 *      --> Promise 인스턴스를 반환한다
 *      ----> 매우 중요한 것이다.
 *            ( 값을 반환하지 않고 Promise 인스턴스를 반환한다 )
 *
 *      - 파라미터
 *      --> 첫 번째 : 성공일 때 실행될 핸들러 함수
 *      --> 두 번째 : 실패일 때 실행될 핸들러 함수
 *
 *      - 실행자의 resolve(), reject()에
 *      --> 파라미터 값을 다수 작성하더라도
 *          핸들러 함수는 처음 하나만 사용한다
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ 파라미터 작성 방법 ---------------');
    const obj = new Promise( ( resolve , reject ) => {
       resolve(  1 , 2 , 3 );
    });
    // promise 함수를 반환하네
    /**
     *  - 그치 지금 then 내부 함수는 실행을 기다리는 상태이니깐
     *    [[PromiseStatus]]가 pending 상태이구만...
     */
    const promise = obj.then( value => {
        log( value );
        // :: 1
    } , reason => {
       log( reason );
    });

    debugger;
    // 1. resolve( 1 , 2 , 3 );
    //    파라미터에 값을 3개 작성했다

    // 2. 실패( reject )가 발생하지 않으면
    //    reject() 를 작성하지 않아도 된다

    // 3. obj.then(( value ) => { .1. } , ( reason ) => { .2. });
    //    then() 설명을 위해
    //    resolve 와 reject 핸들러 함수를 모두 작성했지만
    //    실행자에 resolve()만 있으므로
    //    첫 번째 함수만 작성해도 된다
    /**
     *  - 실패할 상황이 발생하지 않으면 reject 핸들러 함수는 작성하지 않아도 된다는 것.
     */

    // 4. 실행자에서 resolve()가 실행되면
    //    then()의 첫 번째 파라미터 함수가 실행된다
    //    이때 resolve( 1 , 2 , 3 )에서 1 , 2 , 3 을
    //    파라미터로 넘겨주지만

    // 5. then(( value )=> { log( value ) }의 value 에
    //    첫 번째 값인 1만 설정된다
    //    그래서 [ 실행 결과 ]에 1이 출력되었다

    // 6. 다수의 파라미터 값을 넘겨주려면
    //    배열, Object 등을 사용해야 한다
}
/**
 *           ===== then()의 return =====
 *
 *      - then() 에서 Promise 인스턴스를 반환한다
 *      --> return 값을 반환하지 않는다
 *      ----> 값을 return 하더라도 Promise 인스턴스를 반환한다
 *
 *      --> method chain 에서
 *          this 를 return 하는 것과 같은 개념이다
 *
 *      --> 따라서 then().then() 형태처럼
 *          then()을 연속해서 호출할 수 있다.
 *
 *      - return 값을 [[PromiseResult]] 에 설정하고
 *      --> [[PromiseResult]] 값을 다음 then()의
 *          파라미터 값으로 넘겨준다
 *      ----> 즉 return 값이 다음 then()의 파라미터 값이 된다.
 */
{
    log('------------ then()의 return ---------------');

    const obj = new Promise(( resolve , reject )=> {
        resolve( 100 );
        debugger;
    });
    obj.then( value => {
        debugger;
        return value + 50;
    })
    /**
     *  - 개신기한거!!
     *    다른 Promise 의 첫번째 then 들이 끝나고
     *    두번째 then or catch 들이 순서대로 실행되네!!
     */
    .then( param => {
        log( param );
        // :: 150
        debugger;
    } );

    // 1. obj.then( value => { ... } )
    //    value 파라미터에 100이 설정된다

    // 2. return value + 50;
    //    150을 반환하지 않고 인스턴스를 반환한다
    //    150은 [[PromiseResult]] 에 설정한다

    // 3. return 을 작성하지 않으면
    //    undefined 를 [[PromiseResult]] 에 설정한다

    // 4. then( param => { log( param ) };
    //    param 에 [[PromiseResult]] 값인 150이 설정된다
    //    [ 실행 결과 ]에 150이 출력된다
}
/**
 *           ===== catch() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - reject, 실패 처리 핸들러 함수
 *      - 반환                  - Promise 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 실패( reject )의 핸들러 함수를 작성한다
 *      --> then()의 두 번째 파라미터를 작성하지 않고
 *      --> 대신에 catch( param )를 작성한다
 *      ----> 즉, then() 의 첫번째 파라미터에는
 *            성공했다는 핸들러 함수만 작성하고,
 *
 *      ----> 두 번째 파라미터에 작성하는 reject 에 대한
 *            핸들러 함수를 별도로 catch() 를 사용해서
 *            선언한다는 것!!
 *
 *      --> return 문의 표현식과 평가 결과를
 *          [[PromiseResult]]에 설정한다
 *
 *      - Promise 인스턴스를 반환하므로
 *      --> catch().then() 처럼
 *          이어서 then()을 호출할 수 있다
 *      --> [[PromiseResult]] 값을
 *          then()의 파라미터 값으로 넘겨준다
 */
{
    log('------------ catch( param ) 작성 ---------------');
    const check = false;
    const obj = new Promise(( resolve , reject )=> {
        debugger;
        check ? resolve( check ) : reject( 1 , 2 , 3);
    });
    // 아 catch 는 then 의 두번째 파라미터를 분리해서 작성한다고 생각하면 되겠구만...

    /**
     * - 지금 then() 은 실행대기( pending ) 상태이지!!
     */
    const promise = obj.then( value => {
        log( value )
        debugger;
    }).catch( value => {
        /**
         *  - 만약 then 의 두 번째 파라미터를 작성하면
         *    catch 를 타는게 아니라 두 번째 파라미터를 타네!!
         *
         *  --> 그리고 다른 Promise 객체들의 첫 번째 then or catch
         *      등이 호출된 후 호출되네!!
         */
        log( value );
        // :: 1
        debugger;
    })
    debugger;

    // 1. check ? resolve( check ) : reject([ 1 , 2 , 3 ]);
    //    check 값이 false 이므로 reject()를 호출하게 되며
    //    파라미터 값으로 1 , 2 , 3 을 넘겨 준다

    // 2. catch( value => { log( value ) })
    //    then()의 두 번째 파라미터에 함수를 작성하지 않고
    //    별도로 catch()를 작성했다

    // 3. reject()가 호출되면 catch( value )가 실행된다
    //    1 , 2 , 3 을 파라미터 값으로 넘겨주지만
    //    value 에 첫 번째 값인 1만 설정된다.
}
{
    log('------------ catch().then() 형태 ---------------');

    const obj = new Promise( ( resolve , reject )=> {
       resolve( 100 );
       debugger;
    });

    obj.then( value => {
        debugger;
        throw '에러';
        /**
         *  - catch 파라미터에 throw 로 던진 '에러'
         *    값이 매핑됨!!
         *    [[PromiseResult]] 에 매핑된다
         */
    }).catch( ( catch1 )=> {
        log( "catch1 : " + catch1 );
        // :: catch1 : 에러
        debugger;
        return "정상";
    }).then( param => {
        log( "then : " + param );
        // :: then : 정상
        debugger;
    }).catch( catch2 => {
        log("catch2 : " + catch2 );
        debugger;
    });

    /**
     *  - 아 then 의 2 번째 파라미터에 작성한 것과
     *    catch 에 작성한 것은 실행되는 순서 차이가 있네...
     *
     *  --> 예를 들어 obj Promise 객체에서 rejected 가 나면
     *      obj 에 첫번째로 작성한 애중에 rejected 처리 메소드를
     *      타고 없으면 두번째로 넘어가는 식이구나...
     *
     *  --> 그래서 어느 시점에 rejected 가 나는가에 따라서
     *      catch 나 reason( then 의 2번째 파라미터 )
     *      를 작성해야 겠군!!
     */

    // 1. obj.then(( value ) => { ... })
    //    실행자에서 resolve( 100 )이 실행되므로
    //    then()의 첫 번째 파라미터 함수가 호출된다

    // 2. throw "에러"
    //    throw 문으로 에러를 발생시킨다
    //    바로 아래의 catch( ( catch1 ) => { ... } );에서 받는다
    //    이때, "에러"를 [[PromiseResult]] 에 설정한다.

    // 3. catch( ( catch1 ) => { ... } )
    //    [[PromiseResult]]의 "에러"가 catch1에 설정된다
    /**
     *  - 즉, 앞단계에서 throw 를 던지면 뒤의 catch 에서
     *    [[PromiseResult]]로 받는다는 것!!
     */

    // 4. return "정상"
    //    에러가 발생하여 catch()를 실행했지만
    //    catch()에서 에러가 발생하지 않으면
    //    바로 아래의 then()을 실행한다
    //    "정상"을 [[PromiseResult]]에 설정한다

    // 5. then( param => { ... } );
    //    여기서 에러가 발생하지 않으므로
    //    아래의 catch()를 호출하지 않는다
    //    Promise 처리가 끝난다

    // 6. catch( catch2 => { ... } );
    //    실행하지 않는 것을 설명하기 위해 작성.
}
/**
 *           ===== finally() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - 핸들러 함수
 *      - 반환                  - Promise 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 성공, 실패에 관계없이
 *      --> 파라미터의 핸들러 함수가 실행된다
 *      --> 핸들러 함수에 파라미터가 없다
 *      --> ES2018 부터 지원한다
 *
 *      - 활용 측면이지만 then(), catch()의
 *      --> 같은 코드를 finally()에 작성하면
 *          코드 중복을 피할 수 있다.
 */
{
    log('------------ finally() ---------------');
    const obj = new Promise( ( resolve , reject )=> {
        resolve( 100 );
        debugger;
    });

    obj.then( value => {
        log( value );
        // :: 100
        debugger;
        return 200;
    }).catch( reason => {
        log( reason );
        debugger;
    })
    /**
     *  - finally 는 파라미터가 없다
     */
    .finally( param => {
        log( "finally : " + param );
        // :: finally : undefined
        debugger;
    } );
    debugger;

    // 1. resolve( 100 );
    //    then()의 핸들러 함수가 호출된다

    // 2. obj.then( value => { return 200 } )
    //    200을 [[PromiseResult]]에 설정한다
    //    catch()를 실행하지 않고 finally()를 실행한다

    // 3. finally( param => { ... })
    //    문법적으로 param 파라미터를 사용하지 않으며
    //    설명을 위해 작성한 것이다
    //    then()에서 200을 return 하지만
    //    [[PromiseResult]] 값이 param 에 설정되지 않았다

    // 4. 파라미터를 작성하더라도 에러가 나지 않지만
    //    undefined 가 설정되므로 의미가 없다
    //    [ 실행 결과 ] 에 undefined 가 출력된다

    /**
     *  - 아, 즉 finally() 에는 파라미터로 받을 것이 없고,
     *    catch() 나 then() 둘다에 실행되어야 할 코드를
     *    작성해주면 되겠네!!
     */
}