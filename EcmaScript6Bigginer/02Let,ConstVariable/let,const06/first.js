/**
 * 프로그램 설명문서 주석
 * 2021.07 26 수업
 *
 *
 *           ===== 다수의 js 파일 사용 =====
 *
 *      - 모든 js 파일에서
 *      --> 글로벌 오브젝트에 작성한
 *          var 변수와 let 변수를 공유.
 *
 *      - 블록 안에 작성하면 공유하지 않는다.
 *
 */
console.log("=====================================");
"use strict";
// console.log 사용
const log = function (value) {
    console.log('--- ' + value + ' ---');
};

log('글로벌 오브젝트');

/**
 *      1. 현재 위치는 글로벌 오브젝트 이다.
 *
 *      2. html 파일에 2개의 js 파일을 작성했다
 *         <script src="./first.js" defer></script>
 *         <script src="./second.js" defer></script>
 *
 *      3. 현재 first.js를 실행하고 있다.
 */
debugger;

// 글로벌(window) 오브젝트에 설정된다
var globalVar = "var 변수";

/**
 *  1. 글로벌(window) 오브젝트에 설정되지 않고
 *   - 오른쪽의 Script에 설정된다.
 *
 *  2. Script는 스펙에 정의된 이름이다.
 *  - 스펙에 global오브젝트에 작성한 let 변수는
 *    Script라는 블럭에 작성하라고 되어있음
 */
let globalLet = "let 변수";
{
    // 오른쪽의 Script에 설정되지 않고
    // 오른쪽의 Block에 설정된다.
    // 따라서 구분이 된다
    let globalBlock = "block의 let 변수";
    debugger;
}



