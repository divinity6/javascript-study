/**
 * 프로그람 설명문서 주석
 * 2022.03. 15 수업
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
console.log('------------ 변수, 함수 export/import ---------------');
debugger;

import { point , getPoint } from '../export/export_01.mjs';
console.log( point );
// :: 123
console.log( getPoint( "code" ));
// :: code123
debugger;

// 1. import { point , getPoint } from "../export/export_01.mjs";
//    "../export/export_01.mjs"; 를 module specifier 또는
//    import specifier 라고 부른다
/**
 *  - from 뒤 경로를 모듈 스펙시파이어, 임포트 스펙시파이어라고 부른다
 */