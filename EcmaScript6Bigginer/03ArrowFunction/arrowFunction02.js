/**
 * 프로그램 설명문서 주석
 * 2021.08 02 수업
 *
 *
 *           ===== 화살표 함수 구조 =====
 *
 *      - function을 =>로 표기하는 것이 전부가 아님
 *
 *      - 화살표 함수는 일반 함수와 구조가 다름
 *      --> 화살표 함수 나름의 특징이 있음
 */
console.log("=====================================");
"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};
{
    debugger;

    const book = function () {
        return 100;
    };
    /**
     *  1. 오른쪽의 book을 전개하면
     *  - prototype과 constructor가 있다.
     *
     */

    debugger;

    const point = () => 100;
    /**
     *  1. 오른쪽의 point를 전개하면
     *  - prototype과 constructor가 없다.
     *  --> __proto__[[prototype]]은 함수이기 때문에 당연히 가지고 있는 것.
     *
     *  2. prototype에 메소드를 연결하여 확장할 수 없다.
     *  - 즉 point 함수를 생성자 함수로 사용할 수 없는 것.
     *  --> 단독으로 사용하라는 의미.
     *
     *  3. prototype이 없으므로 그만큼 가볍다.
     *
     *  4. new 연산자로 인스턴스를 생성할 수 없다.
     *  - constructor가 없기 때문이다.
     *
     *  5. 이것이 화살표 함수의 특징이며 용도이다.
     *  - 가볍게 쓰자! 함수 기능만 가지고 사용하자는 뜻.
     *  - prototype을 사용하지도 않는데 끌고다닐 이유가 없는 것.
     */

    debugger;

}

/**
 *           ===== arguments 사용 불가 =====
 *
 *      - arguments 사용할 수 없음
 *      --> arguments는 파라미터가 유동적일 때 사용하는 건데 사용할 수 없음
 *
 *      - arguments 대신에 rest 파라미터 사용
 *        (뒤에서 다룬다.)
 *      --> 이것은 arguments와 같으면서 기능이 추가된 형태.
 *
 */

{
    "use strict"
    debugger;

    const point = () => {
        try {
            const args = arguments;
        } catch (e) {
            console.log("arguments 사용 불가");
        }
    }
    point(10, 20);
    /**
     *  1. point(10,20) 형태로 호출하면
     *  - 일반 함수에서는 arguments에 10, 20이 설정되지만
     *  --> array-like 형태
     *
     *  2. 그런데 화살표 함수에서 ReferenceError가 발생한다.
     *  - 즉, arguments를 사용할 수 없다.
     *  --> 단지, 일반함수와 구조를 맞추기 위한 것.
     *
     *  3. 오른쪽의 point 함수 구조를 전개하면
     *  - arguments가 표시는 된다.
     *
     */
    debugger;
}

