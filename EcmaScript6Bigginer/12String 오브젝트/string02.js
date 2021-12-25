/**
 * 프로그램 설명문서 주석
 * 2021.09 07 수업
 *
 *           ===== fromCodePoint() =====
 *      -----------------------------------------------------------
 *
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - String.fromCodePoint()
 *      - 파라미터                 - 코드 포인트, num1[,...[, numN]]
 *      - 반환                     - 코드 포인트에 해당하는 문자로 변환
 *
 *      -----------------------------------------------------------
 *
 *      - 유니코드의 코드 포인트에 해당하는 문자 반환
 *
 *      - 파라미터에 다수의 코드 포인트 작성 가능
 *      --> 문자를 연결하여 반환
 *
 *      - ES5의 fromCharCode() 사용
 *      --> Surrogate pair로 작성
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ fromCodePoint() ---------------');
    const point = String.fromCodePoint;
    log(point(49, 50, 51));
    // :: 123
    log(point(44032, 44033));
    // :: 가각

    log(point(0x31, 0x32, 0x33));
    // :: 123
    log(point(0x1F418));
    // ::  🐘

    debugger;

    // 1. 49, 50, 51
    //    코드 포인트를 10진수로 작성한 형태

    // 2. 0x31, 0x32, 0x33 
    //    코드 포인트를 16진수로 작성한 형태
}
{
    "use strict"
    log('------------ ES5의 fromCharChode() ---------------');

    // fromCharCode는 이와같이 5자리로 표현할 수 없다.
    // 아래와같이 깨져서 나온다
    // 왜냐하면 ES5는 5자리를 지원하지 않기 때문이다
    log(String.fromCharCode(0x1f418));
    // :: 

    // 이때는 이와같이 서로게이트 페어로 작성한다.
    log(String.fromCharCode(0xD83D, 0xDC18));
    // :: 🐘
    debugger;

    // 1. fromCharCode()에서는
    //    Ox1f418 형태를 지원하지 않으므로

    // 2. fromCharCode(0xD83D, 0xDC18)처럼
    //    Surrogate pair로 작성한다.

}

/**
 *           ===== codePointAt() =====
 *      -----------------------------------------------------------
 *      - 구분                - 데이터(값)
 *
 *      - 형태                - String.prototype.codePointAt()
 *      - 파라미터             - 유니코드로 변환할 문자열의 인덱스
 *      - 반환                - 코드 포인트 값
 *
 *      -----------------------------------------------------------
 *
 *      - 대상 문자열에서
 *      --> 파라미터에 작성한 인덱스 번째 문자를
 *      --> 유니코드 코드 포인트로 변환하여 반환
 *      --> 코드 포인트는 UTF-16으로 인코딩된 값
 *
 */

{
    "use strict"
    log('------------ codePointAt() ---------------');

    // 유니코드의 코드포인트 값으로 변환
    const result = "가나다".codePointAt(2);
    log(result);
    // :: 45796

    // 타입은 number네
    log(typeof result);
    // :: number

    log("가나다".codePointAt(3));
    // :: undefined

    // 코드포인트를 문자로 변환
    log(String.fromCodePoint(result));
    // :: 다

    debugger;
}

/**
 *           ===== 정리시간 =====
 *
 *      - 요구사항
 *      --> String.fromCodePoint(49, 50)과
 *      --> "123".codePointAt(1)은 형태가 다르다.
 *      --> 형태를 다르게 한 것은 무엇 때문일까?
 *      -----> 왜 codePointAt()은 prototype에 넣어두었을까?
 *
 *      - JavaScript 설계 관점에서
 *      --> 정리해 보아야 한다
 *
 *      ----> String.fromCodePoint(49,50)
 *      ------> 직접 호출하는 함수 형태
 *      ------> 파라미터에 다수 작성
 *
 *      ----> "123".codePointAt(1)
 *      -------> String.prototype.codePointAt() 호출
 *      -------> prototype을 사용한 메소드 형태
 *      -------> 파라미터에 인덱스 하나만 작성
 *
 *      ----> [1, 2, 3]으로 작성하면 어떻게 되는가?
 *      -------> codePointAt()은 값을 구하는 대상이 있지만
 *      ---------> fromCodePoint()는 대상이 없음
 *
 *      - 다양한 생각의 접근을 위해
 *      --> 강좌에서 정리를 제공하지 않는다.
 */

/**
 *           ===== 정리 답변 =====
 *
 *      1) String.fromCodePoint(49,50)과 "123".codePointAt(1)의 형태가 다른 이유는
 *
 *       > FCP(fromCodePoint)는 String 자체가 가지고있는 함수다.
 *         반대로, CPA(codePointAt)은 String.prototype에 연결되어 있는 메소드 형태이다.
 *
 *       > 따라서, FCP는 String으로 호출해야하며, CPA는 인스턴스에서 호출해야한다.
 *       > 그런데 왜, 둘다 인스턴스에 넣지않고 자기자신이 가지고있는 걸까
 *
 *       > 생각해보니 FCP는 파라미터로 넘겨주는 값들이 Number 타입이다.
 *         그렇다면 Number.formCodePoint를 하려하지만 애네들값이 여러개,즉 배열이므로
 *         Array.formCodePoint를 하게된다. 그런데 Array에 fromCodePoint가 존재하게 되면,
 *         코드포인트는 String이므로, 목적에 맞지 않는다.
 *
 *       2) 그렇다고 그럼 FCP들앞의 타입들을 String타입으로 작성하게되면, "49,50,51" 이런형식으로
 *          작성하게 되는데
 *
 *        > 그렇다면 잘라야하는 기준이 생긴다. ,을기준으로 잘라야하는건지 기준이 애매모호해질 수 있다?
 *
 *        3) [1 , 2 , 3] 형태로 작성하면 Array.prototype.codePointAt(1)이 존재하지 않기때문에 에러가 발생한다.
 */

{
    "use strict"
    log('------------ 에러 확인 ---------------');
    try {
        [1, 2, 3].codePointAt(1);
    } catch (e) {
        log('codePointAt(1)은 String 타입입니다.')
    }
    debugger;
}

/**
 *           ===== normalize() =====
 *      -----------------------------------------------------------
 *      - 구분                - 데이터(값)
 *
 *      - 형태                - String.prototype.normalize()
 *      - 파라미터             - 정규화 형식. 디폴트: NFC
 *      - 반환                - 변환된 문자열
 *
 *      -----------------------------------------------------------
 *
 *      - 대상 문자열을 파라미터에 지정한
 *      --> 유니코드 정규화 형식으로 변환하여 반환
 *
 *      - 유니코드 정규화 형식은 아래같이 4가지가 있다
 *      --> NFC, NFD, NFKC, NFKD
 *      --> http: //www.unicode.org/reports/tr15/
 *
 */

{
    "use strict"
    log('------------ 코드 포인트 ---------------');
    
    // 16진수로 변경
    // (몇 진수로 할것인지)
    log("ㄱ".codePointAt(0).toString(16));
    // :: 3131

    log("ㅏ".codePointAt(0).toString(16));
    // :: 314f

    log("\u{3131}\u{314F}");
    // :: ㄱㅏ

    debugger

    // 1. ㄱ과 ㅏ의 코드 포인트를 16진수로 구한다.

    // 2. ㄱ과 ㅏ의 코드 포인트를 연결하여 작성
    // 3. "가"로 표시되지만 어색하다.
}

{
    "use strict"
    log('------------ normalize() ---------------');
    const point = "\u{3131}\u{314F}";
    log(point.normalize("NFC"));
    // :: ㄱㅏ
    log(point.normalize("NFD"));
    // :: ㄱㅏ

    log(point.normalize("NFKD"));
    // :: 가
    log(point.normalize("NFKC"));
    // :: 가

    debugger;

    // 1. NFC와 NFD는 단지 연결하여 어색하지만
    // 2. NFKD와 NFKC는 모아 쓴 형태로 표시된다.

    /**
     *  - 그렇기 때문에 normalize는 NFKD나 NFKC로 하는것이 맞다.
     *    두개의 유니코드를 연결하여 문자를 표시할때, 위와같이 normalize를 하는 것이다.
     */
}