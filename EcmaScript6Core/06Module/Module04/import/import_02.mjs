/**
 * 프로그람 설명문서 주석
 * 2022.03. 15 수업
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
console.log('------------ Class export/import ---------------');
debugger;

import { Book } from '../export/export_02.mjs';
const obj = new Book();

obj.setPoint( 700 );
console.log( obj.point );
// :: 700
debugger;