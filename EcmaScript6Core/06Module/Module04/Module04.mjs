/**
 * 프로그람 설명문서 주석
 * 2022.03. 15 수업
 *
 *           ===== export, import 형태 =====
 *
 *     - export 대상에 export 키워드 작성
 *     --> export function name(){...}
 *         변수, function, Class, Object
 *
 *     - 중괄호{}에 import 이름 작성
 *     --> import { name,,, nameN } from "./export.mjs";
 *
 *     - 한번에 export 선언
 *     --> export { name1 , ... , nameN };
 *     ----> 한번에 export 가능
 *
 *     - export , import 이름 변경
 *     --> export { fromName as toName };
 *     --> import { toName as name } from "./export.mjs";
 *     ----> export 와 import 이름 변경 가능
 *     ----> export { fromName : 현재이름 as toName : export 할 이름 }
 *     ----> import { toName : export 에서 받을 이름 as toName : 바꿀이름 }
 *
 *     - export default
 *     --> export default function name() { ... }
 *     --> import name from "./export.mjs";
 *
 *     - 전체 import
 *     --> import * as name from "./export.mjs";
 */
console.log("=====================================");
"use strict"
// console.log 사용
const { log } = window.console;
{

    log('------------ noData ---------------');
    debugger;
}