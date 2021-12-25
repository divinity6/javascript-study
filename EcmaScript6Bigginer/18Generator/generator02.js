/**
 * 프로그램 설명문서 주석
 * 2021.12.06 수업
 *
 *           ===== GeneratorFunction =====
 *
 *      - GeneratorFunction이 오브젝트 이름
 *      --> GeneratorFunction뜻이 generatorFunction안의
 *          오브젝트라는 뜻이 아니라, GeneratorFunction 오브젝트가
 *          따로 있다는 뜻
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - new GeneratorFunction()
 *     - 파라미터             - [param[, paramN]], functionBody(opt)
 *     - 반환                - Generator 오브젝트
 *     -----------------------------------------------------------
 *
 *     - GeneratorFunction.constructor를 사용하여
 *     --> 제너레이터 함수를 생성(제너레이터 오브젝트가 아니다.)
 *     --> 파라미터를 문자열로 작성
 *     --> 마지막 파라미터가 함수 코드가 되고
 *         앞은 파라미터 이름이 된다
 *
 *     - 제너레이터 함수 구조
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ GeneratorFunction ---------------');

    /**
     * - new 연산자로 일반함수를 호출
     * --> 마지막 파라미터가 함수코드( 그 앞 파라미터들은 전부 이름이됨)
     */
    const fn = new Function("one" , "return one");
    log(fn(100));
    // :: 100
    debugger;

    /**
     *
     * - 위와 generatorFunction도 같은 개념이다.
     * --> 그런데 generator 함수에는 생성자가 없다.
     * --> 따라서, constructor를 구하는 사전 처리를 먼저 해야한다.
     *    (개발자 도구에서는 constructor가 보이지만 에러나네 ㅋㅋ)
     * ----> 아 노노 개발자도구에도 없음 [[prototype]]안에 한번 더 감싸져 있네 ㅋㅋ
     *
     * - gen is not constructor
     */

    const gen = function*(one){
        yield one;
    };

    const genObj = gen(10);
    log(genObj.next());
    // :: {value: 10, done: false}

    // 여기서 generatorFunction 오브젝트로 generator 생성자 함수 생성
    // constructor 를 create 변수에 할당
    // 그러면 create 변수는 생성자 함수가 된다.
    const create = Object.getPrototypeOf(function*(){}).constructor;

    // 그리고 여기서 생성자함수를 이용하여 generator 함수를 생성
    // 이때서야 이녀석이 function*(){}이 된다.
    const sports = new create("one" , "yield one");

    // obj에 generator 오브젝트를 할당하네
    // generator object 생성
    const obj = sports(100);

    // obj는 이터레이터 오브젝트이기 때문에 이터레이터 오브젝트의
    // next 메소드 호출 (yield one 실행)
    log(obj.next());
    // :: {value : 100 , done : false};
    debugger;
}
/**
 *  - 그렇다면 왜 위와같은 형태가 필요한가?
 *  아래의 코드에서 설명
 */
{
    "use strict"
    log('------------ Generator 함수 구조 ---------------');

    debugger;

    const gen = function*(){};

    /**
     *  1. 오른쪽의 gen을 펼치면 prototype이 있다
     *  -  이것을 펼치면 constructor가 있어야 하는데 없다
     *  -  또한 메소드도 없다
     *
     *  2. __proto__[[prototype]]가 있으며 이것을 펼치면 constructor가 있다
     *  -  __proto__에 다른 오브젝트의 prototype에 연결된 프로퍼티를
     *  -  인스턴스 개념으로 생성하여 첨부한 것이 표시된다
     *
     *  3. 즉, GeneratorFunction의 constructor가 첨부된 것이다.
     */
    debugger;

    /**
     *  - generator는 prototype에 아무것도 없기 때문에 깡통함수다.
     *  --> 껍데기만 있는 개념이다!!!
     *  --> 그런데 거기에 알맹이를 채워주는게 generatorFunction 오브젝트라는 것이다.
     *  --> 그알맹이들을 전부 generator에서 받아서 사용하는 개념이구만
     *
     *  ===== prototype 에 아무것도 없으면 감싸는 함수구나(wrapper)!! =====
     *
     *  - 구조적으로 generatorFunction 오브젝트를 받아와서 거기에 있는
     *  --> next, return , throw 프로퍼티를 사용하는 것.
     */
}

{
    "use strict"
    log('------------ GeneratorFunction ---------------');
    const create = Object.getPrototypeOf(function*(){}).constructor;
    log(create);
    // :: ƒ GeneratorFunction() { [native code] }
    // 이 오브젝트의 이름이 generatorFunction 이다.
    debugger;

    const sports = new create("one" , "yield one;");
    log(typeof sports);
    // :: function
    debugger;

    const obj = sports(100);
    log(obj.next());
    // :: {value: 100, done: false}
    debugger;

    // 1. create = (function*(){}).constructor;
    // -  제너레이터 함수를 생성하는
    // -  constructor(생성자)를 할당한다

    // 2. constructor가 할당되므로
    // -  new 연산자로 생성자 함수를 호출할 수 있다.

    // 3. log(create);
    // -  function GeneratorFunction(){} 출력
    // -  function 오브젝트 형태이다.

    // 4. sports = new create(param)
    // -  GeneratorFunction 을 사용하여
    // -  제너레이터 함수를 생성하고
    // -  sports 변수에 할당한다.
    // -  param에 파라미터와 함수 코드를 작성
    //    one : 파라미터 이름
    //    yield one : 함수 코드

    // 5. log(typeof sports)
    // -  new 연산자를 사용했는데
    // -  sports가 object가 아니라 function이다.

    // 6. function 이라는 것은
    // -  function* sports()로
    // -  제너레이터 함수를 선언한 것을 뜻한다.

    // -  즉, 지금까지 제너레이터 함수를 선언하는 처리를 한것.

    // 7. const obj = sports(100);
    // -  제너레이터 함수를 호출한다
    // -  제너레이터 오브젝트 생성, 반환
    // -  함수 코드를 실행하지 않는다
    // -  100이 one에 매핑된다

    // 8. obj.next()
    // -  제너레이터 오브젝트는 이터레이터 오브젝트이며
    // -  obj에 이터레이터 오브젝트가 할당되어 있으므로
    // -  next()를 호출할 수 있다
    // -  {value: 100 , done: false} 출력

    /**
     *  즉, 이런절차를 거쳐 generator 함수를 생성할 수있다는 것을 보여주는 것
     *  (물론 function* 해도 바로 생성된다)
     */
}