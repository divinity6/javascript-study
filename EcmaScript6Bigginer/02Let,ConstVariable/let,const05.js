/**
 * 프로그램 설명문서 주석
 * 2021.07 25 수업
 *
 *      ----- 조금 더 구체적으로 들어간다 -----
 *
 *           ===== let 변수와 this =====
 *      
 *      - 글로벌 오브젝트에서
 *      --> let 변수를 this로 참조 불가
 *      ----> 참조할 수 없다는 것이 중요한 것이다
 *            이럼으로써 let 변수가 가지고있는 구조도 생각해 볼 필요가 있다.
 *      
 *      - 글로벌 오브젝트에서
 *      --> var과 let 변수가 설정되는 위치 구조
 *
 */
console.log("=====================================");
"use strict";
// console.log 사용
const log = function (value) {
    console.log('--- ' + value + ' ---');
};

log('let과 this');

var music = "음악";
let sports = "축구";
console.log(this.music , this.sports);
debugger;
// :: 음악 undefined

// 1. 현재 위치는 글로벌 오브젝트

// 2. var music = "음악";
//    window 오브젝트에 설정된다.

// 3. let sports = "축구";
//    window 오브젝트에 설정되지 않는다.
//    (굉장히 중요한 구조)

// 4. this.music에서
//    this가 window 오브젝트를 참조하며
//    music이 window 오브젝트에 설정되어 있으므로
//    음악이 출력된다.

// 5. this.sports에서
//    sports가 window에 설정되지 않으므로
//    sports 변수를 찾을 수 없어서 undefined가 출력된다.

// 현재 위치는 글로벌 오브젝트이다.
var globalVar = "글로벌";

// 글로벌(window) 오브젝트에 설정된다
let globalLet = "블록";

/**
 *      1. 글로벌(window) 오브젝트에 설정되지 않는다.
 *
 *      2. let 변수를 블록 안에 작성해야 하지만
 *      -> 블록이 없으므로 엔진이 블록을 만들고
 *      -> 이를 스코프로 사용하여 설정하는 개념이다.
 *         ( let 변수는 블록 스코프이기 때문이다.
 *           글로벌오브젝트에서는 내부적으로 스코프를
 *           만들고 거기에 설정하는 개념이다. )
 *
 *      3. 오른쪽 Script는 하나의 블록 개념으로
 *      -> <script>에 작성한 모든 파일에서 공유한다.
 *      -> 이에 대해서는 다음 절에서 다룬다
 * 
 */

console.log(this.globalVar);

/**
 *      1. this가 window 오브젝트를 참조하며
 *      -> globalVar이 window 오브젝트에 설정되므로
 *      -> globalVar 값인 글로벌이 출력된다
 *
 */
debugger;

console.log(this.globalLet);
/**
 *      1. globalLet은 window 오브젝트에 설정되지 않으므로
 *      -> undefined가 출력된다
 *
 *      2. 글로벌 오브젝트의 var 변수와 let 변수의 차이이다.
 */

/**
 *      - 함수안에 작성하면 이럴일이 없다
 *        왜냐하면 함수가 스코프이기 때문.
 *
 *      - 그러나 글로벌 오브젝트에 작성하면
 *        var와 let변수는 이렇게 크게 차이가 난다.
 *        (저장되는 영역이 다른 것이다)
 *
 *      - Script라는 어떤 블럭개념에다가 let은 저장을 한다.
 *
 *      -- 다음절에서 이에대해 좀 더 구조적으로 살펴본다 --
 *
 */
debugger;











