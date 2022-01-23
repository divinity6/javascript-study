/**
 * 프로그램 설명문서 주석
 * 2022.01 23 수업
 *
 *		- WeakMap 오브젝트와 비슷하다
 *
 *           ===== WeakSet 오브젝트 =====
 *
 *		- Set 오브젝트와 차이
 *		--> 오브젝트만 value 값으로 사용할 수 있다
 *		--> number 등의 프리미티브 타입 사용 불가
 *
 *		- 개념은 WeakMap 오브젝트와 같다
 *		--> value 만 작성하는 것이 다르다
 *		--> value 의 참조가 바뀌면 GC 대상이 된다
 *
 *		- 지원 메소드
 *		--> has(), add(), delete()
 *
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;

/**
 *           ===== new WeakSet() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - new WeakSet()
 *      - 파라미터                - 오브젝트(opt)
 *      - 반환                   - 생성한 WeakSet 인스턴스
 *      -----------------------------------------------------------
 *      - WeakSet 인스턴스 생성, 반환
 *
 *      - 파라미터
 *      --> 대괄호[] 안에 오브젝트 작성
 */
{
	"use strict";
	log('------------ WeakSet() 인스턴스 생성 ---------------');
	const empty = new WeakSet();

	const sports = {};
	const obj = new WeakSet([sports]);
	log(obj);
	// :: WeakSet {{…}}
	debugger;

	// 1. 파라미터를 작성하지 않아도 된다.
	// 2. new 연산자를 사용한다.
}
/**
 *           ===== has() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - WeakSet.prototype.has()
 *      - 파라미터                - 오브젝트
 *      - 반환                   - 존재하면 true, 아니면 false
 *      -----------------------------------------------------------
 *      - WeakSet 인스턴스에서
 *      --> value 의 존재 여부 반환
 *		--> 존재하면 true, 아니면 false 반환
 */
{
	"use strict";
	log('------------ has() ---------------');
	const fn = () => {};
	const obj = new WeakSet([fn]);
	log(obj.has(fn));
	// :: true
	debugger;
}
/**
 *           ===== add() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - WeakSet.prototype.add()
 *      - 파라미터                - value, 오브젝트
 *      - 반환                   - value 가 설정된 인스턴스
 *      -----------------------------------------------------------
 *      - WeakSet 인스턴스에 value 설정
 *      --> 파라미터에 value 로 설정될 오브젝트 작성
 */
{
	"use strict";
	log('------------ add() ---------------');
	const obj = new WeakSet();
	const fn = () => {};
	obj.add(fn);
	log(obj.has(fn));
	// :: true
	debugger;
}
/**
 *           ===== delete() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - WeakSet.prototype.delete()
 *      - 파라미터                - key, 오브젝트
 *      - 반환                   - 삭제 성공 true, 실패 false
 *      -----------------------------------------------------------
 *      - WeakSet 인스턴스에서
 *      --> value 와 일치하는 엘리먼트 삭제
 *      --> 삭제 성공이면 true 반환
 *      --> 삭제를 실패하면 false 반환
 */
{
	"use strict";
	log('------------ delete() ---------------');
	const fn = () => {};
	const obj = new WeakSet([fn]);
	log(obj.delete(fn));
	// :: true
	log(obj.has(fn));
	// :: false
	debugger;
}