/**
 * 프로그램 설명문서 주석
 * 2021.07 26 수업
 *
 *
 *           ===== 다수의 js 파일 사용 =====
 *
 */
console.log("=====================================");
"use strict";

debugger;
// first 파일에 이어서 실행된 것이다

console.log(globalVar);

/**
 *      1. var globalVar = "var 변수";
 *
 *      2. 글로벌 오브젝트에서
 *      - var 키워드를 사용해서 선언한 변수는
 *      - window 오브젝트에 설정되며
 *      - 모든 js 파일에서 변수를 공유한다
 *
 *      3. console에 "var 변수"가 출력된다.
 */
debugger;

console.log(globalLet);
/**
 *      1. let globalLet = "Let 변수";
 *
 *      2. 글로벌 오브젝트에서
 *      - let 키워드를 사용해서 선언한 변수는
 *      - 오른쪽의 Script에 설정되며
 *      - 모든 js 파일에서 변수를 공유한다
 *      --> var 변수와 let 변수는 공유하는 측면에서 본다면 똑같다
 *          즉, var 변수를 사용하지 않고 let 변수를 사용해도 된다.
 *
 *      --> global 오브젝트라는 개념은 있었지만 실체가 없었다.
 *          그런데 Script라는 것을 global 오브젝트로 볼 수 있다.
 *
 *      --> 구조적으로 완전히 바뀐 것이라고 볼 수 있다.
 *      ----> ES5에서는 window 오브젝트에 설정되었었다.
 *      ----> window 오브젝트는 자바스크립트 관점에서는 오너가 아니다.
 *            내가 만든 것이 아니고, 다른 오브젝트에다가 내 변수를 설정하는 개념.
 *
 *      ----> 좋은 모습이아니다
 *
 *      --> 그런데 Script라는 블럭개념의 오브젝트를 만들어서 거기에다가 설정한다는 것.
 *      ----> 그리고 중요한 것은 Script라는 블럭은 자바스크립트가 만든다는 것.(오너)
 *
 *      3. 따라서 console에 "Let 변수"가 출력된다.
 */
debugger;

try {
    console.log(globalBlock);
} catch (e) {
    console.log("globalBlock은 공유되지 않는다");
}

/**
 *  {
 *      let globalBlock = "block의 let변수";
 *  };
 *
 *  1. 글로벌 오브젝트에 작성했지만
 *  - 블록 안에 작성한 변수다.
 *
 *  2. 이렇게 블록 안에 작성한 변수는 공유되지 않아
 *  -  에러가 발생한다.
 *  --> 즉, 이것은 global오브젝트의 local변수, 지역변수가 되는 것이다.
 *  --> 글로벌 오브젝트 자체를 위한 변수로 사용하겠다! 하지만 block 밖에 작성한
 *      것은 다른파일에서도 사용하겠다는 의미
 *
 *  --> {}안에 작성한것은 지역 변수가 되는 것이고, 밖에 작성한것은 global 변수가 되는 것이다.
 */

/**
 *      ES5에서는 global 오브젝트가 window 오브젝트에 들어가기 때문에
 *      global 오브젝트를 위한 지역변수, local변수는 없었다는 것.
 *
 *      - 그러나 이제 {}을 사용함으로써 global 오브젝트를 위한 local 변수를
 *        사용할 수 있다
 *
 */
{
    let blockLet = "globalBlock";
    debugger;
}

/**
 *
 *           ===== 함수 형태 =====
 *
 *      1. 함수는 var과 let변수가 오른쪽 Local에 보인다.
 *      -  그렇다고 해서 undefined상태의 let변수를 사용할 수 있는 것은 아니다
 *         (var 변수는 사용가능)
 */


// ----------------------------------------------
function showLocal() {
    // 함수가 스코프이며 var, let 변수 모드
    // 오른쪽 local에 표시된다.
    debugger;
    var localVar = "var";
    let localLet = "let";
    {
        // 오른쪽 Block에 표시된다
        let blockLet = "block";
        debugger;
    }
}

showLocal();

/**
 *
 *           ===== 함수 형태 =====
 *
 *      - 지금까지의 형태를 보면 Block과 Local과 Script 이렇게 세가지의
 *        블럭 형태를 가져가는 것이다.
 *      --> ES5에서는 이런 개념이 없었었다.
 *          ( window 오브젝트에 들어가기 때문에 더이상 구분할것이 없었지만 이와같이
 *             1. Block,
 *             2. Local,
 *             3. Script,
 *             4. Global
 *             이렇게 4가지 형태로 변수가 정의된다. )
 *
 *       --> 이것에 따라 또 각각의 특징이 있다.
 *           (개념적으로 구조적으로 정리할 필요성이 있다)
 *
 */

/**
 *
 *           ===== 다수의 js 파일 사용 정리 =====
 *
 *      - 글로벌 오브젝트에 작성
 *      --> var 변수: window에 설정, 공유
 *      --> let 변수: Script에 설정, 공유
 *      ----> window.sports = {}처럼
 *            의도적으로 작성하지 않아도 된다.
 *
 *      --> { let 변수 }: Block에 설정, 공유하지 않음
 *      ----> 글로벌 오브젝트에서만 사용하는 로컬 변수로 사용
 *
 *      - 함수에 작성
 *      --> var 변수, let 변수 : Local
 *      --> { let 변수 }: Block;
 *
 */
log('글로벌 오브젝트에 작성');
var globalVar2 = "var 변수";
let globalLet2 = "let 변수";
{
    let globalBlock = "block 변수";
    debugger;
}
debugger;
log('함수에 작성');

function showLocal2() {
    var localVar = "var 변수";
    let localLet = "let 변수";
    {
        let blockLet = "block 변수";
        debugger;
    }
}

/**
 *      - 이렇게 만듬으로써 변수의 접근권한,
 *      --> 예를들어 블럭밖에서 안의 변수를 악세스할순 없지만,
 *          안에서는 밖의 것을 악세스 할 수 있다
 *      --> 즉, 이런어떤 권한적인 측면.
 *
 *      - ES6에서부터는 scope를 세부적으로 관리하게 된다.
 *      --> 정리를 할 필요가 있다(코딩 스타일이 바뀌게 된다)
 */