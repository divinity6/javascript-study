/**
  * 프로그램 설명문서 주석
  * 2021.02 20 수업
  * 
  *     -- 비기너 과정의 정상 --
  * 
  *     ===== Boolean 오브젝트 =====
  * 
  *     - 빌트인 오브젝트
  *     --> true와 false 처리
  * 
  *     - 값이 있으면 true로 인식
  *     --> false 인식 기준
  *     ----> undefined, null ,NaN
  *     ----> 빈 문자열, 숫자 타입의 0
  * 
  *     - 숫자 값 변환 기준
  *     --> true를 1로, false를 0으로 변환
  * 
 */
console.log("=====================================");

window.onload = function() {
    /*
            ===== 프로퍼티 리스트 =====

        - 이름                      - 개요

        - new Boolean()             - 인스턴스 생성
        - Boolean 함수
        - Boolean()                 - Boolean 타입으로 변환
        - Boolean.prototype
        - constructor               - 생성자
        - toString                  - true/false를 문자열로 반환
        - valueOf                   - 프리미티브 값 반환
    */

    "use strict"
    // console.log 사용
    var log = function( value , key ){
        if ( key ) {
            console.log('--- ' + value +' ---');
        } else { console.log(value); }
    };
    /*
            ===== new Boolean() =====

        - 구분                      - 데이터(값)

        - 파라미터                  - 값
        - 반환                      - 생성한 Boolean 인스턴스

        -----------------------------------------------------

        - Boolean 인스턴스 생성

        - 파라미터 값을 true 또는 false로 변환하여 프리미티브에 설정

        - 문자열이면서 값이 있으면 true로 변환
    */
    
    log( 'false로 변환' , 1 );

    var value = [ undefined , null , NaN , 0 , '' ];

    for ( var k = 0; k < value.length; k++ ){
        var obj = new Boolean(value[k]);
        log( obj + 1 );
    }
    // 1. value의 모든 값이 false로 변환되며
    // 2. 생성한 Boolean 인스턴스의 프리미티브 값으로 설정
    // 3. false를 값으로 변환하면 0이 되며 1을 더하면 1이 된다


    debugger;

    log('true로 변환' , 1 );

    value = [ 12 , '1' , '0' , 'false' ];

    for (var k = 0; k < value.length; k++ ){
        var obj = new Boolean(value[k]);
        log(obj + 1);
    }
    // 1. value의 모든 값이 true로 변환되며
    // 2. 생헝한 Boolean 인스턴스의 프리미티브 값으로 설정
    // 3. true를 값으로 변환하면 1이 되며 1을 더하면 2가 된다

    debugger;

    /*
                ===== Boolean() =====

            - 구분                  - 데이터(값)

            - 파라미터              - 값
            - 반환                  - 변환한 값

            ------------------------------------

            - Boolean 값으로 변환

            - 인스턴스를 생성하지 않고 true 또는 false로 변환
    */
    log('true, false로 변환' , 1 );

    value = [ 12 , '1' , '0' , 'false' ];

    for (var k = 0; k < value.length; k++) {
        log(Boolean(value[k]) + 1);
    }
    // 1. value의 모든 값이 true로 변환되고
    //    true를 값으로 변환하면 1이 된다
    // 2. 1을 더하면 2가 된다.

    debugger;

    /*
            ===== toString() =====
            
        - 구분                  - 데이터(값)

        - data                  - 변환 대상
        - 파라미터               - 사용하지 않음
        - 반환                  - 문자열로 변환한 값

        --------------------------------------------

        - data 위치의 true, false를 문자열로 변환
        ----> 즉, "true", "false"로 변환
    */

    var result = true.toString();
    log(result);
    log(typeof result);
    // 1. true를 문자열로 변환

    debugger;

    /*
    
            ===== valueOf() =====
    
        - 구분                  - 데이터(값)

        - object               - Boolean 인스턴스
        - 파라미터              - 사용하지 않음
        - 반환                  - true, false

        -------------------------------------------

        - Boolean 인스턴스의 프리미티브 값 반환
        --> 즉, true 또는 false 반환
    */
    log('프리미티브 값 반환', 1);

    var obj = new Boolean(3);
    log(obj.valueOf());

    debugger;


}