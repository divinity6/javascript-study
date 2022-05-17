/**
 * 프로그람 설명문서 주석
 * 2022.05. 16 수업
 *
 *
 *           ===== Atomics 오브젝트 =====
 *
 *      - SharedArrayBuffer 공유에 따른
 *      --> 문제를 해결하기 위한 오브젝트
 *
 *      - Atomics 오퍼레이션으로 해결한다
 *        ( 오퍼레이션 :: 오퍼레이션은 요청 시 오브젝트가 수행할 수 있는 서비스 )
 *
 *      --> 현재의 오퍼레이션이 실행하는 동안
 *          다른 스레드의 오퍼레이션이
 *          실행되지 않도록 한다
 *
 *      --> 동기로 오퍼레이션을 실행한다
 *
 *      - Atomics 오브젝트는 생성자가 없으며
 *      --> Atomics.store() 형태로 작성한다
 *
 *      - Global 오브젝트가 스코프이다
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ store() ---------------');
    const sab = new SharedArrayBuffer( 10 );
    const obj = new Int16Array( sab );
    /**
     *  - 첫 번째 파라미터에 TypedArray 인스턴스
     *
     *  - 두 번째 파라미터에 index
     *
     *  - 세 번째 파라미터에 값을 설정
     *
     *  - 결국, 값을 반환
     */
    log( Atomics.store( obj , 0 , 100 ) );
    // :: 100
    debugger;

    // 1. Atomics.store( obj , 0 , 100 )
    //    obj 의 0번 인덱스에 100을 설정하며
    //    설정한 값을 반환한다
}

/**
 *
 *           ===== Atomics 오브젝트 =====
 *
 *      -----------------------------------------------------------
 *      - 함수 이름               - 개요
 *
 *      - load()                - 지정한 인덱스의 값을 반환
 *
 *      - store()               - 지정한 인덱스의 값을 설정하고 설정한 값을 반환
 *
 *      - exchange()            - 지정한 인덱스에 값을 설정하고 변경전 값을 반환
 *
 *      - compareExchange()     - 지정한 값과 인덱스의 값을 비교하여 같을때만 설정
 *
 *      - add()                 - 지정한 인덱스에 값을 더하고, 더하기 전의 값을 반환
 *
 *      - sub()                 - 지정한 인덱스에서 값을 빼고, 빼기 전의 값을 반환
 *
 *      - and()                 - 비트 AND 연산
 *
 *      - or()                  - 비트 OR 연산
 *
 *      - xor()                 - 비트 XOR 연산
 *
 *      - notify()              - 대기 중인 Agent( main , Worker )에 알림을 보냄
 *                              --> 여기서 Agent 는 main , Worker 를 뜻한다
 *
 *      - isLockFree()          - Lock 또는 Atomics 오프레이션 사용을 결정
 *
 *      - wait()                - 인덱스의 값이 지정한 값과 같을 때까지 지정한
 *                                시간만큼 대기
 *      -----------------------------------------------------------
 */

/**
 *           ===== store() , exchange() , load() =====
 *
 *     -------------------------------------------------------------------
 *      - 이름         - 구분                  - 개요
 *
 *      - store()     - 파라미터               - index 위치에 값을 설정
 *                                           - index
 *                                           - value
 *                    - 반환                  - 변경한 값
 *
 *      - exchange()  - 파라미터               - index 위치에 값을 설정
 *                                           - index
 *                                           - value
 *                    - 반환                  - 변경전 index 의 값
 *
 *      - load()      - 파라미터               - index 위치의 값을 반환
 *                                           - index
 *                    - 반환                  - index 위치의 값
 *     -------------------------------------------------------------------
 *
 *     - store(), exchange(), load()
 *     --> 다른 함수들은 설명 생략
 */

{
    log('------------ store(), load(), exchange() ---------------');

    const sab = new SharedArrayBuffer( 10 );
    const obj = new Int16Array( sab );
    log( Atomics.store( obj , 0 , 100 ) );
    // :: 100
    log( Atomics.exchange( obj , 0 , 200 ) );
    // :: 100
    log( Atomics.load( obj , 0 ) );
    // :: 200
    debugger;

    // 1. Atomics.store( obj , 0 , 100 );
    //    obj 의 0번 인덱스에 100을 설정하며
    //    설정한 값을 반환한다

    // 2. Atomics.exchange( obj , 0 , 200 );
    //    obj 의 0번 인덱스에 200을 설정하며
    //    설정하기 전의 값을 반환한다

    // 3. Atomics.load( obj , 0 );
    //    obj 의 0번 인덱스 값을 반환한다
}
/**
 *  - 아, 그니깐 결론적으로 값을 설정하거나 변경하는동안
 *    다른 스레드에서 변경하거나 실행되지 못하게하고,
 *    동기식으로 처리 하는 객체라는거구만
 */
