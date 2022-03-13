/**
 * 프로그람 설명문서 주석
 * 2022.03. 13 수업
 *
 *           ===== Module 스코프 =====
 *
 *     - Module 코드는 "use strict" 환경 에서 실행된다
 *     - 다른 파일에서 모듈의 변수/함수 사용 불가
 *     --> 이것은 모듈단위로 별도의 스코프를 갖기 때문이다
 *     --> <script type="module"></script> 에
 *         type="module" 을 작성하면
 *         별도의 스코프를 갖는다
 *
 *     - Window 를 사용하여 공유할 수 있지만
 *     --> 이름이 같으면 대체될 수 있다
 *     --> 상황에 따라 어쩔 수 없이 사용할 때는
 *         이름이 중복되지 않도록 해야 한다
 */
console.log("=====================================");
"use strict"
// console.log 사용
const { log } = window.console;
{
    /**
     *  - <script type="module" src="./Module03.mjs"></script>
     *    export function point(){};
     *
     *  - export 모듈 파일을 <script> 에 작성하지 않지만
     *    악세스 불가를 설명하기 위해 작성했다
     */
    log('------------ 별도의 스코프를 갖는다 ---------------');

    let result;
    try {
        // point 는 access_export 내부에서만 사용하는 함수!
        // 악세스 불가! 따라서 error 발생
        result = point;
    } catch {
        result = "모듈에서 사용 불가";
    };
    document.getElementById('result').innerHTML = result
    debugger;
    // 모듈에서 point 를 사용할 수 없다
}
{
    log('------------ 이름이 같으면 대체될 수 있다 ---------------');

    debugger;
    document.getElementById('result').innerHTML = window.one;
    // :: window 에 변수 정의
    debugger;
    // 1. window 에 변수를 정의하면( 모듈이든 어디든 )
    //    다른파일에서도 사용할 수 있다

    // 2. 이러한 측면때문에 window 에 값을 할당할때는 조심해야 한다.
}

/**
 *           ===== export 값 유지 =====
 *
 *      - import 한 Module 을
 *      --> 다시 import 하더라도 값이 대체되지 않고
 *      --> 이전에 import 한 값이 유지된다
 *
 *      - 브라우저에서 실행되는 형태
 */
import { title } from './export/access_export.mjs';
{
    log('------------ 값 유지 ---------------');
    document.getElementById('two').innerHTML = '2.' + title.value;
    // 2.값 변경
    debugger;

    // 1. 다시 access_export.mjs 있는 title 을 import 하게되면,
    //    다시 title.value 가 설정되지 않고,

    // 2. 다른파일에서 설정한 title 값이 유지된다!!

    /**
     *  - 이와같이 한번 import 시키고, 다시 import 시키더라도,
     *    값이 변경되지 않는다라는 것.
     *    ( 변경된 값이 유지된다라는 것 )
     */
}
/**
 *           ===== this 참조 =====
 *
 *      - 글로벌 오브젝트에서 this 는
 *      --> window 오브젝트를 참조한다
 *
 *      - <script type="module">로
 *      --> 작성된 파일에서
 *          this 값은 undefined 이다.
 *
 *      - Module 과 Global 에서 this
 */
// access_js.js 로 이동
{

    log('------------ Module 과 Global 에서 this 참조 ---------------');
    document.getElementById('one').innerHTML = this;
    debugger;

    // js 파일에서 this 는 window 를 참조했지만 ,
    // Module 파일에서 this 는 undefined 이다!

    /**
     *  - 다음에는 import 와 export 를 하는 형태를 알아 볼 것이다!!
     */
}