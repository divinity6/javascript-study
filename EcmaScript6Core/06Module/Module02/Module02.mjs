/**
 * 프로그람 설명문서 주석
 * 2022.03. 13 수업
 *
 *     - 코드 실행 방법 : node main
 *
 *
 *           ===== Module 접근 바탕 =====
 *
 *     - 일반적으로 하나의 js 파일에
 *     --> 다수의 함수, 오브젝트를 작성한다
 *
 *     - 한편, 하나의 파일에 작성하면
 *     --> 사용하지 않는 것도 해석(Compile) 해야 하며
 *     --> 메모리를 차지하므로 비효율적이다
 *     --> 예 : 회원 가입
 *     ----> 이런 코드는 회원가입을 할때만 작성하게 된다.
 *           그런데, 하나의 파일에 작성하게 되면, 해석하게
 *           된다.( 실행은 하지 않더라도 컴파일을 하게된다 )
 *
 *     - Module 은 파일을 분리하여
 *     --> 필요한 시점에 필요한 것을
 *     --> 가볍게 사용하려는 접근이며 바탕이다
 *     ----> 회원가입 버튼을 눌렀을때, 그때 파일을 가져와서
 *           함수, 오브젝트를 해석하면 된다.
 *
 *     ----> 회원가입 버튼을 누르지 않았다면, 해석하지 않아도 되고
 *           메모리를 차지하지 않으니깐 괜찮은 것이다
 *           ( 이런 개념에서 접근하는 것이 모듈이다 )
 *
 *     - Module 을 파일이라고 할 수는 없지만
 *     --> 구조 측면에서 보면
 *         하나의 파일이 Module 이다
 *
 *     --> 파일 확장자로 mjs 를 권장한다
 *         https://v8.dev/features/modules#mjs
 *
 *     - Module 파일 기본
 *     --> 함수, 오브젝트를 분리하는 것이 바탕이므로
 *         Module 파일은 되도록 작아야 한다
 *     ----> 회원 가입 버튼을 누른 시점에 Module 파일을 가져오게 된다.
 *           그런데 파일이 크다면, 가져오는 시간도 걸리고 그렇게 때문에
 *           되도록이면 작게 가자는 것이 근본적인 접근이다.
 *
 *     - <script type="module"></script> 형태로 적어줘야한다
 *
 */
console.log("=====================================");
/**
 *           ===== Module 코드 형태 =====
 *
 *      - Module 코드 형태
 *
 *      - export 키워드
 *      --> 외부로 보내 줄 함수, 오브젝트를 선언한다
 *      --> <script> 에 mjs 파일을 작성하여
 *          렌더링하지 않는다
 *
 *      - import 키워드
 *      --> export 로 선언된 mjs 파일을 가져와서
 *      --> 오브젝트, 함수를 사용한다
 */
"use strict"
// console.log 사용
const { log } = window.console;
// type="module" 을 선언해 줘야 가져올 수 있음
import { getPoint } from "./export/export.mjs";
{
    "use strict"
    log('------------ export , import ---------------');
    log( getPoint('code') );
    // :: code100
    debugger;

    // 1. export.mjs 파일이 보내 줄 module 파일이다
    //    보내 줄 함수, 오브젝트 앞에 export 를 작성한다
    //    export function getPoint( id ){ ... }

    // 2. import.mjs 가 가져오는 module 파일이다
    //    코드처럼 import 키워드를 사용한다

    // 3. import { getPoint } from "./export.mjs";
    //    export.mjs 파일의 getPoint() 함수를
    //    { getPoint } 에 설정한다

    // 4. getPoint( "code" );
    //    getPoint() 함수를 호출하면
    //    [ 실행 결과 ] 처럼 code100 을 반환한다.
    /**
     *  - <script></script> 에서 렌더링하지않고
     *    import 키워드를 사용할 때 파일을 가져 오게 된다
     *    ( 즉, script 엘리먼트에다 export.mjs 파일을 작성하지 않는 것 )
     */

    /**
     *  - 이와같이 Module 은 export 와 import 로 구분한다.
     *  --> import 파일은 script 에 작성하여 렌더링한다
     *  --> export 파일은 import 후 from 다음에 이름을 작성해서 가져오게 된다
     *
     *  - 따라서, 위 코드를 실행하지 않으면, export.mjs 파일은 가져오지 않게되고,
     *    메모리에 올라가지 않게된다.
     *    ( 그런측면에서 보면 효율적이다 )
     */
}

/**
 *           ===== html 파일 작성 방법 =====
 *
 *      - html 파일에 module 파일을 작성하는 방법
 *      --> <script type=module src="./import.mjs>
 *      ----> type=module 을 작성하는 것만으로
 *            import.mjs 는 module 파일이된다
 *
 *      --> 상대 경로, 절대 경로로 작성한다
 *      --> 상대 경로는 /, ./ , ../ 로 시작해야 한다
 *      --> "import.mjs" 처럼 경로없이 작성 불가
 *          추후 가능할 것으로 생각한다
 *      --> defer 가 디폴트 이므로 defer 를 작성하지 않는다
 *      ----> 즉, html 에 작성한 element 를 전부 렌더링 한 후에
 *            import.mjs 가 실행된다는 뜻.
 *
 *      - html 파일에 module 파일 작성
 */
{
    "use strict"
    log('------------ html 파일에 module 파일 작성 형태 ---------------');

    document.getElementById('result').innerHTML = getPoint('code');
    // code 를 반환하여 설정
    debugger;
}

/**
 *      ====================================================
 *          - 결론적으로, module 의 접근은 작게 가자는 것이다
 *            파일을 분리하는 목적이 작게 나누는 것이기 때문!
 *      ====================================================
 */