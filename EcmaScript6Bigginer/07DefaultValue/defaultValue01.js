/**
 * 프로그램 설명문서 주석
 * 2021.08 23 수업
 *
 *
 *           ===== default value =====
 *
 *      - 값을 할당하지 않으면 사전에 정의된 값을 할당
 *      --> default value : 사전에 정의된 값
 *
 *      - 할당할 값이 없으면 디폴트 값을 할당
 *
 *      - 할당할 값이 있으면 디폴트 값을 무시
 *
 *      - Object는 프로퍼티 이름으로 체크
 *
 *      - 디폴트 값 적용 순서
 *      --> 왼쪽에서 오른쪽으로 적용
 *
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

{
    "use strict"
    log('------------ default value ---------------');

    const [one, two, five = 50] = [10, 20];
    log(five);
    // :: 50
    debugger;

    // 1. one에 10을 , two에 20을 분할 할당한다.

    // 2. five에는 할당할 값이 없으며
    //    이때, five = 50에서 50을 five에 할당한다.

    // 3. 이것을 default value라고 한다

    // 4. = 을 기준으로 왼쪽에 이름을 작성하고 오른쪽에 값을 작성
}
/**
 *      할당할 값이 있으면 default 값을 할당하지 않는다.
 */
{
    "use strict"
    log('------------ 디폴트 값 무시 ---------------');

    // 왼쪽이 default 값
    // 할당할 것이 있으면 default 값은 무시된다
    const [one, two, five = 50] = [10, 20, 70];
    log(five);
    // :: 70

    debugger;
    // 1. 왼쪽과 오른쪽 모두 값이 3개이다.

    // 2. 값(70)이 있으므로 five에 70을 할당한다.
    //    five = 50에서 50을 할당하지 않는다.
}

{
    "use strict"
    log('------------ Object 디폴트 값 ---------------');
    // 오른쪽에서 one만 할당 중.
    // 프로퍼티 이름으로 왼쪽에서 찾는다
    // 그런데 two가 없기때문에 20을 default 값으로 할당
    const {one, two = 20} = {one: 10};
    log(two);
    // :: 20

    debugger;

    // 1. 오른쪽 one의 값인 10을
    //    왼쪽의 one 프로퍼티 값으로 분할 할당한다.

    // 2. two에 할당할 값이 엾으며
    //    two = 20에서 20을 two에 할당한다.

}


{
    "use strict"
    log('------------ 디폴트 값 적용 순서 ---------------');
    // 오른쪽 값을 왼쪽에 바로바로 분할 할당하면서 찾는구나
    debugger;
    const [one, two = one + 20, five = two + 50] = [10];
    log(two);
    // :: 30
    log(five);
    // :: 80

    debugger;

    // 1. 오른쪽 one의 값인 10을
    //    왼쪽의 one 프로퍼티 값으로 분할 할당한다.

    // 2. 오른쪽에 값이 없으므로 디폴트 값을 할당한다.
    //    왼쪽에서 오른쪽으로 할당한다.

    // 3. two = one + 20
    //    one의 값이 10이므로 30이 two에 설정된다.

    // 4. five = two + 50
    //    two의 값이 30이므로 80이 five에 설정된다.
}
/**
 *      위와같이 왼쪽에서 오른쪽으로 default 값 적용
 */

/**
 *           ===== default value =====
 *
 *      - 함수의 파라미터에 디폴트 값 적용
 *
 *      - 넘겨받은 파라미터 값이 없으면 디폴트 값을 할당
 *
 *      - 넘겨받은 파라미터 값이 있으면 디폴트 값을 무시
 *
 *      - 호출한 함수의 파라미터 값이 undefined 일때
 *
 *
 */

{
    "use strict"
    log('------------ 디폴트 값 할당 ---------------');
    const add = (ten, two = 20) => ten + two;
    const result = add(10);
    log(result);
    // :: 30

    debugger;

    // 1. add(10);
    //    호출하는 함수의 파라미터 수는 하나다.

    // 2. (ten , two = 20)
    //    ten에 넘겨받은 10이 설정되고
    //    two에 디폴트 값인 20이 할당된다.

    // 3. 디폴트 값을 작성하지 않으면
    //    two에 undefined가 설정된다.
}

{
    "use strict"
    log('------------ 디폴트 값 무시 ---------------');
    const add = (ten, two = 20) => ten + two;
    const result = add(10, 50);
    log(result);
    // :: 60

    debugger;

    // 1. add(10, 50);
    //    두 번째 파라미터에 50을 작성했다.

    // 2. 호출하는 함수의 파라미터 수와
    //    호출받는 함수의 파라미터 수가 같으면
    //    디폴트 값을 적용하지 않는다.
}

{
    "use strict"
    log('------------ 파라미터 값이 undefined 일 때 ---------------');
    const point = () => 20;
    // two에는 undefined가 할당되므로
    // default value가 처리를 맡게된다.
    const add = (one, two = point()) => one + two;
    const result = add(10, undefined);
    log(result);
    // :: 30

    debugger;

    // 1. add(10, undefined);
    //    undefined도 값이지만
    //    파라미터 값을 넘겨주지 않은 것과 같다.

    // 2. point() 함수를 호출하고
    //    반환된 값을 디폴트 값으로 사용한다.
}

