/**
 * 프로그램 설명문서 주석
 * 2022.01 19 수업
 *
 *           ===== add() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *      - 형태                   - Set.prototype.add()
 *      - 파라미터                - value
 *      - 반환                   - value 가 설정된 인스턴스
 *      -----------------------------------------------------------
 *      - Set 인스턴스 끝에 value 추가
 *
 *      - 사용 형태
 *      --> 함수를 생성하여 value 로 사용
 *      --> value 에 생성한 함수 이름 작성
 *      --> Object 를 value 로 사용
 *
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;

{
	"use strict";
	log( '------------ add() ---------------' );
	let obj = new Set();
	obj.add( "축구" ).add( "농구" );
	// 이미 값이 존재하기 때문에 값이 등록되지 않음
	obj.add( "축구" );
	for ( let value of obj ) {
		log( value );
		// :: 축구
		// :: 농구
	}
	debugger;
	
	// 1. obj.add("축구").add("농구");
	
	// 2. add()를 실행한 후 인스턴스를 반환하므로
	//    method chain 형태로 add()를 작성할 수 있다
	
	// 3. 세 번째의 add() 에서
	//    "축구" 가 있으므로 첨부되지 않는다.
	/**
	 *  - 여기서 Map 오브젝트는 set 메소드로 key 와 value 를 등록한다
	 *  --> Set 메소드는 key 가 존재하면 value 를 변경한다는 뉘앙스
	 *
	 *  - 반면, Set 오브젝트는 add 메소드로 value 를 등록한다.
	 *  --> add 메소드는 추가한다는 뉘앙스를 풍김
	 */
}
{
	"use strict";
	log( '------------ 함수를 생성하여 value 로 사용 ---------------' );
	
	let obj = new Set();
	/**
	 *  - Set 에 저장할때 sports 오브젝트 이름으로 저장하는 것이아니라
	 *    function sports 오브젝트가 저장된 메모리 주소를 값으로 사용해서 등록함.
	 *
	 *  --> 따라서 sports 는 함수이름은 같지만 Set 오브젝트 관점에서 보면 다른 것이다.
	 */
	obj.add( function sports() {
		return 100;
	} );
	obj.add( function sports() {
		return 200;
	} );
	console.log( obj );
	// :: Set(2) {ƒ, ƒ}
	
	for ( let value of obj ) {
		log( value() );
		// :: 100
		// :: 200
	}
	
	debugger;
	
	// 1. 같은 이름의 function 을 작성한 형태
	
	// 2. Function 오브젝트의 메모리 주소가 다르므로
	//    이름이 같더라도 설정된다
	
	// 3. for-of 로 전개된 value 에
	//    함수가 설정되므로 호출할 수 있다
	//    출력된 값은 함수에서 return 한 값이다.
}

{
	"use strict";
	log( '------------ value 에 생성한 함수 이름 작성 ---------------' );
	const sports = () => {
		return 100
	};
	
	let obj = new Set();
	/**
	 *  이것은 같은 메모리주소를 바라보잔하!!
	 */
	obj.add( sports );
	// 추가되지 않는다.(같은 메모리 주소)
	obj.add( sports );
	for ( let value of obj ) {
		console.log( value() );
		// :: 100
	}
	debugger;
	
	// 1. Function 오브젝트를 생성한 후
	//    함수 이름으로 등록하면 하나만 설정된다
	
	// 2. 이것은 함수 이름으로 참조하는
	//    Function 오브젝트의 메모리 주소가 같기 때문이다.
}
{
	"use strict";
	log( '------------ Object 를 value 로 사용 ---------------' );
	
	const sports = { "축구" : 11, "야구" : 9 };
	let obj = new Set();
	obj.add( sports );
	// 등록된 오브젝트가 출력
	for ( let value of obj ) {
		log( value );
		// :: { "축구" : 11, "야구" : 9 }
	}
	debugger;
}
/**
 *           ===== has() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *      - 형태                   - Set.prototype.has()
 *      - 파라미터                - key 값
 *      - 반환                   - key 가 존재하면 true, 아니면 false
 *      -----------------------------------------------------------
 *      - Set 인스턴스에서 값의 존재 여부를 반환
 *      --> 존재하면 true, 아니면 false 반환
 *
 *      - get() 메소드가 없으므로
 *      --> has() 로 값의 존재여부를 체크한 후 존재하면 체크한 값을 값으로 사용
 */
{
	"use strict";
	log( '------------ has() ---------------' );
	const sports = () => {
	};
	const obj = new Set( [ sports ] );
	console.log( obj.has( sports ) );
	// :: true
	console.log( obj.has( "book" ) );
	// :: false
	debugger;
}
/**
 *  ===== Set 오브젝트는 인스턴스를 만들 때 파라미터에다가 배열처럼 작성한다 =====
 *
 *  - 배열과 다른점은 값이 중복되는 것을 허용하지 않는다.
 */