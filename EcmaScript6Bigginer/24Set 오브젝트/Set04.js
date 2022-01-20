/**
 * 프로그램 설명문서 주석
 * 2022.01 20 수업
 *
 *
 *           ===== forEach() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Set.prototype.forEach()
 *      - 파라미터                - callback 함수
 *      						- this 로 참조할 object(opt)
 *      - 반환                   - undefined
 *      -----------------------------------------------------------
 *      - Set 인스턴스를 반복하면서 callback 함수 호출
 *      --> map(), filter() 등의 callback 함수가 동반되는 메소드 사용 불가
 *      	( 오직 forEach 메소드만 사용 가능 )
 *
 *      - callback 함수에 넘겨주는 파라미터
 *      --> value, key(value), Set 인스턴스
 *      --> 콜백 함수에서 this 사용
 *
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;

{
	"use strict";
	log( '------------ forEach() ---------------' );
	const obj = new Set([
		"one" , ()=> {}
	]);
	// set 에선 key 도 value
	function callback(value, key , set){
		log(value);
		// :: one
		// :: ()=>{}
		debugger;
	}
	obj.forEach(callback);
}

{
	"use strict";
	log( '------------ 일반 함수로 콜백 함수 작성 ---------------' );
	const obj = new Set([
		"one" , ()=> {}
	]);
	function callback(value, key, set) {
		log(`${value} , ${this.check}`);
		// :: one ,ABC
		// :: ()=>{} , ABC
		debugger;
	};
	obj.forEach(callback, {check : "ABC"});

	// 1. 콜백 함수에서 this 가
	//	  forEach() 의 두 번째 파라미터에 작성한
	//	  오브젝트를 참조하게 하려면
	//	  일반 함수로 작성해야 한다.
}
/**
 *           ===== delete() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Set.prototype.delete()
 *      - 파라미터                - key 값
 *      - 반환                   - 삭제 성공: true, 실패 : false
 *      -----------------------------------------------------------
 *      - Set 인스턴스에서 파라미터 값과 같은 엘리먼트 삭제
 *
 *      - 같은 value 가 있어서 삭제에 성공하면 true 반환
 *      --> 삭제에 실패하면 false 반환
 */
{
	"use strict";
	log( '------------ delete() ---------------' );
	const obj = new Set([
		"one" , "two"
	]);
	console.log(obj.delete('one'));
	// :: true
	console.log(obj.delete('one'));
	// :: false
	debugger;
}
/**
 *           ===== clear() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Set.prototype.clear()
 *      - 파라미터                - 파라미터 없음
 *      - 반환                   - 없음
 *      -----------------------------------------------------------
 *      - Set 인스턴스의 모든 엘리먼트를 지움
 *      --> Set 인스턴스를 삭제하는 것은 아니다
 *      --> 따라서 value 를 추가할 수 있다.
 */
{
	"use strict";
	log( '------------ clear() ---------------' );
	const obj = new Set([
		"one" , "two"
	]);
	console.log(obj.size);
	// :: 2
	obj.clear();
	console.log(obj.size);
	// :: 0
	obj.add("one");
	console.log(obj.size);
	// :: 1
	debugger;
}
/**
 *  - Map 과 Set 의 가장 큰 차이점은 Map 은 key,value 가 있고,
 *	  Set 은 value 만 존재한다라는 것.
 */