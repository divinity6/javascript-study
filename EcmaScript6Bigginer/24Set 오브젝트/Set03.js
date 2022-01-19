/**
 * 프로그램 설명문서 주석
 * 2022.01 19 수업
 *
 *
 *           ===== entries() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Set.prototype.entries()
 *      - 파라미터                - 파라미터 없음
 *      - 반환                   - 생성한 이터레이터 오브젝트 생성
 *      -----------------------------------------------------------
 *      - Set 인스턴스로 이터레이터 오브젝트 생성, 반환
 *      --> Set 인스턴스에 설정된 순서로 반환
 *      --> next() 로 [value, value] 반환
 *          ( value 가 2개 씩 나온다!! )
 *
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;

{
	"use strict";
	log( '------------ entries() ---------------' );
	const obj = new Set( [
		"one", () => {
		}
	] );
	
	// 이터레이터 오브젝트 반환
	const iterObj = obj.entries();
	/**
	 * - value 가 두번 출력된 것은
	 * --> Set 오브젝트는 Map 오브젝트와 같은 모듈을 사용하므로 형태를 맞추기 위함
	 *     ( 앞의 value 가 key 의 역할 )
	 */
	console.log( iterObj.next() );
	// :: {value : ['one', 'one'], done: false}
	console.log( iterObj.next() );
	// :: {value : [ƒ, ƒ], done: false}
	console.log( iterObj.next() );
	// :: {value : undefined, done: true}
	
	debugger;
	
	// 1. value 만 작성했는데
	//    [value, value] 가 반환되는 것은
	//    Map 오브젝트와 같은 모듈을 사용하므로
	//    형태를맞추기 위한 것으로
	//    [key, value] 에서 value 를 key 로 반환한다.
	
}
/**
 *           ===== keys() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Set.prototype.keys()
 *      - 파라미터                - 파라미터 없음
 *      - 반환                   - 생성한 이터레이터 오브젝트 생성
 *      -----------------------------------------------------------
 *      - value 가 key 가 되므로
 *      --> keys() 는 의미가 없다
 *      --> Map 오브젝트와 맞추기 위한 것
 *
 *      - Set 인스턴스의 value 를 key 로 사용하여
 *        이터레이터 오브젝트 생성, 반환
 *      --> Set 인스턴스에 설정된 순서로 반환
 *
 *      - next() 로 value 를 key 로 반환
 */
{
	"use strict";
	log( '------------ keys() ---------------' );
	const obj = new Set( [
		"one", () => {
		}
	] );
	
	// 이터레이터 오브젝트 반환
	const iterObj = obj.keys();
	
	console.log( iterObj.next() );
	// :: {value : 'one', done: false}
	console.log( iterObj.next() );
	// :: {value : ƒ, done: false}
	console.log( iterObj.next() );
	// :: {value : undefined, done: true}
	debugger;
	
	/**
	 *  - Set 오브젝트는 key 를 작성하지 않는데
	 *    key 가 반환된 것은 value 를 key 로 반환하기 때문.
	 *
	 *  ===== 이것은 Map 오브젝트와 맞추기 위한 것으로 쓸 일이 없다 =====
	 */
}
/**
 *           ===== values() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Set.prototype.values()
 *      - 파라미터                - 파라미터 없음
 *      - 반환                   - 생성한 이터레이터 오브젝트 생성
 *      -----------------------------------------------------------
 *      - Set 인스턴스의 value 로 이터레이터 오브젝트 생성, 반환
 *      --> Set 인스턴스에 설정된 순서로 반환
 *
 *      - next() 로 value 만 반환
 */
{
	"use strict";
	log( '------------ values() ---------------' );
	const obj = new Set( [
		"one", () => {
		}
	] );
	
	// 이터레이터 오브젝트 반환
	const iterObj = obj.values();
	console.log( iterObj.next() );
	// :: {value : 'one', done: false}
	console.log( iterObj.next() );
	// :: {value : ƒ, done: false}
	console.log( iterObj.next() );
	// :: {value : undefined, done: true}
	debugger;
}

/**
 *           ===== Symbol.iterator() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Set.prototype[Symbol.iterator]
 *      - 파라미터                - 파라미터 없음
 *      - 반환                   - {done: true/false, value : 값}
 *      -----------------------------------------------------------
 *      - Set 인스턴스의 value 로 이터레이터 오브젝트 생성, 반환
 *      --> Set.prototype.values() 와 같다
 *      ----> 참고로 Map.prototype[Symbol.iterator] 는 Map.prototype.entries() 와 같다
 *            ( Map 은 key, value 로 반환하기 때문에 그렇다 )
 *      --> next() 로 value 만 반환
 */
{
	"use strict";
	log( '------------ Symbol.iterator ---------------' );
	const obj = new Set( [
		"one", () => {
		}
	] );
	
	// 이터레이터 오브젝트 반환
	const iter = obj[ Symbol.iterator ]();
	console.log( iter.next() );
	// :: {value : 'one', done: false}
	console.log( iter.next() );
	// :: {value : ƒ, done: false}
	console.log( iter.next() );
	// :: {value : undefined, done: true}
	debugger;
}