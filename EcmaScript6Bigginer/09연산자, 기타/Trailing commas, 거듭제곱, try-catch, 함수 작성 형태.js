/**
 * 프로그램 설명문서 주석
 * 2021.08 25 수업
 *
 *           ===== Trailing commas =====
 *
 *      - Object 끝에 콤마 사용
 *      --> } 앞에 콤마 사용 가능
 *
 *      - 배열 끝에 콤마 사용
 *      --> ] 앞에 콤마 사용 가능
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

{
    "use strict"
    log('------------ Trailing commas ---------------');

    // 닫는 중,대괄호 앞에 , 작성 ===> ES5에서는 에러
    const obj = {
        book: 100,
        point: 200,
    }

    const list = [100, 200,];
}
/**
 *           ===== 거듭 제곱 =====
 *
 *      - 거듭 제곱
 *
 *      - 좌결합성
 *      --> 왼쪽에서 오른쪽으로 계산
 *      --> 1 + 2 + 3은 (1 + 2) + 3으로 계산
 *
 *      - 우결합성
 *      --> 오른쪽에서 왼쪽으로 계산
 *      --> A ** B ** C 에서 A ** (B ** C)로 계산
 *
 */

{
    "use strict"
    log('------------ 거듭 제곱 ---------------');

    // 거듭제곱은 우결합성
    log(2 ** 3);
    // :: 8
    log(3 ** 2);
    // :: 9

    log(2 ** 3 ** 2);
    // :: 512
    log(2 ** (3 ** 2));
    // :: 512

    // 먼저 ()괄호를 통해 좌결합성처럼 계산가능
    log((2 ** 3) ** 2);
    // :: 64
    debugger;

    // 1. 2 ** 3 ** 2
    //    2의 3승의 2승이 아니라

    // 2. 먼저 3의 2승을 구하며 값은 9다
    //    2의 9승이므로 512가 된다.
    /**
     *  대부분의 식이 좌결합성이지만 거듭제곱은 우결합성을 한다
     */
}
/**
 *           ===== try-catch =====
 *
 *      - try-catch의 catch(error)에서
 *      --> catch 처럼(error)를 생략 가능
 *      --> ES2019
 *
 *      - (error)에서 메시지를 받아
 *        사용하지 않을때 편리하다
 *
 *      - 타이핑 실수를 방지할 수 있다.
 *
 */
{
    "use strict"
    log('------------ try-catch ---------------');
    const sports = "스포츠";

    try {
        sports = "축구";
    } catch (error) {
        log(error, "(error) 작성");
        debugger;
    }

    // catch만 작성
    // error.message를 작성하지 않을때는 생략 가능
    try {
        sports = "축구";
    } catch {
        log("(errer) 생략");
    }
}
/**
 *           ===== 함수 작성 형태 =====
 *
 *      - Object에 함수를 작성할 때
 *      --> function 키워드를 작성하지 않음
 *          (이거 매우 편리하다)
 *
 *      - 참고: Object에 함수를 작성하는 이유
 *      --> 함수에서 this로 Object 전체 참조
 *
 *      --> new 연산자로 인스턴스를 생성하지 않음
 *          메소드가 아닌 함수로 접근
 *
 *      --> Object 전체가 하나의 묶음
 *          접근성, 가독성이 좋음
 *
 *      --> sports에 시멘틱을 부여할 수 있으며
 *          다른 오브젝트와 이름과
 *          프로퍼티 이름이 충돌되지 않음
 *
 */

{
    "use strict"
    log('------------ function을 작성하지 않음 ---------------');
    
    // 여기에는 할당된 함수가없구만
    const getTest = function () {
        debugger;
    }

    debugger;

    const sports = {
        point: 100,

        // ES5 형태
        // 함수선언문을 우선으로 적용해서 사용하네
        // 애를 다시담으면 안되는구만
        getValue: function () {
            debugger;

            // getValue = function () {
            //     debugger;
                return this.point;
            // }

            // return getValue.call(this);
        },

        // ES6 형태
        // 다른 오브젝트의 함수 이름과 충돌이 나지 않는다.
        // 애는 함수 표현식 + 선언문이구나(프로퍼티 이름임)
        // 애도 prototype이 없네 - 생성자를 만들지 못함
        getPoint() {
            // getPoint = function () {
            //     debugger;
                return this.point;
            // }

            // return getPoint.call(this);
        },
    };

    log(sports.getPoint());
    log(sports.getValue());
    debugger;

    // 1. getPoint(){} 처럼
    //    function 키워드를 사용하지 않는다.
}






