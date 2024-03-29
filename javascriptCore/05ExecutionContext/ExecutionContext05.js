/**
  * 프로그램 설명문서 주석
  * 2021.05 03 수업
  * 
  *           ===== this 바인딩 컴포넌트 =====
  *   
  *   - 목적
  *   ----> this로, 함수를 호출한 오브젝트의 프로퍼티에 악세스
  *   ----> 예) this.propertyName
  * 
  *   - 악세스 메커니즘
  *   ----> obj.book() 형태에서
  *   ----> this로 obj를 참조할 수 있도록
  *   ----> this 바인딩 컴포넌트에 obj 참조를 설정
  * 
  *   - obj의 프로퍼티가 변경되면 동적으로 참조
  *   ----> 설정이 아닌 참조이기 때문이다
  * 
  *   ------------------------------------------------------------
  * 
  *   - 목적은 this로, 함수를 호출한 오브젝트의 프로퍼티에 악세스하는 것
  *   ----> 예) this.propertyName
  *   ----> this로 악세스할 오브젝트를 바인딩 시켜놓는 것.
  * 
  *   - 이러한 악세스 메커니즘은
  *   ----> obj.book()형태에서 this로 obj를 참조할 수 있도록
  *         this 바인딩 컴포넌트에 obj참조를 설정한다.
  * 
  *   - 따라서 obj의 프로퍼티가 변경되면 동적으로 참조한다
  *   ----> 이것은 설정, 할당이 아닌 참조이기 때문에 그렇다.(referance)
  *   ----> obj는 현재 실행중인 함수의 소유가 아니다. 즉, 함수안에 작성된
  *         코드가 아니다.
  *   ----> 따라서 함수가 실행되는 도중에 obj의 프로퍼티가 삭제되거나
  *         값이 변경될 수 있다.
  * 
  *   - 그런데 그것을 설정 개념으로 묶어놔버리면 동적으로 반영되지 않는다.
  *     따라서 this로 참조할 수 있는 오브젝트를 바인딩만 시켜놓는 것이다.
  * 
  *   ----> 묶어놓는 것이다. 그안의 프로퍼티는 묶지않고.
  *         obj 자체만 묶어놓는 것.
  * 
  *   ----> 그럼으로써 현재 실행중인 함수에서 사용하는 시점에 최종적으로 
  *         반영된 값을 사용할 수 있게 되는 것이다.
  * 
  *   == 이것이 바인딩 이다 ==
  * 
  */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};

log("this 바인딩");

var obj = { point: 100 };
obj.getPoint = function(){
  return this.point;
};
// 여기서 point와 getPoint 모두 프로퍼티 이름이고
// 값은 각각100, function 오브젝트.

obj.getPoint();

/**
 *          ===== this 바인딩 컴포넌트 =====
 * 
 *      ===============================
 *    
 *      실행 콘텍스트: {
 *        렉시컬 환경 컴포넌트 = {
 *          환경 레코드(ER): {
 *            선언적 환경 레코드(DER): {},
 *            오브젝트 환경 레코드(OER): {}
 *          },
 *          외부 렉시컬 환경 참조: {}
 *        },
 *        변수 환경 컴포넌트: {},
 *        This 바인딩 컴포넌트(TBC): {
 *          point: 100,
 *          getPoint: function(){},
 *        }
 *      }
 * 
 *      ===============================
 * 
 *  - getPoint() 함수에서
 *    100이 반환되는 과정을 살펴본다
 * 
 *   -----------------------
 *         준비 단계
 *   -----------------------
 * 
 *  1. 마지막 줄에서 obj.getPoint() 함수 호출
 *  2. 실행 콘텍스트 생성
 *  3. 3개의 컴포넌트 생성
 *  ----> 렉시컬/변수 환경 컴포넌트,
 *        this 바인딩 컴포넌트
 * 
 *  4. this 바인딩 컴포넌트에
 *  ----> getPoint()에서 this로 obj의 프로퍼티를
 *  ----> 사용할 수 있도록 바인딩 시켜놓는다
 *        (함수를 호출하는 시점에 묶어놓는다.)
 * 
 *  ----> 그럼으로써 안에서 바로 obj를 참조할 수 있게 되는 것이다.
 * 
 *   -----------------------
 *         초기화 단계
 *   -----------------------
 * 
 *  5. 파라미터, 함수 선언문, 변수 선언 없음
 * 
 *   -----------------------
 *         실행 단계
 *   -----------------------
 * 
 *  6. return this.point; 실행
 * 
 *  7. this 바인딩 컴포넌트에서 point 검색
 *  ----> getPoint() 함수를 호출한 오브젝트가
 *  ----> this 바인딩 컴포넌트에 설정(참조)된 상태
 * 
 *  ----> obj.getPoint를 호출할 때 묶어놨기 때문에 호출할 수있다.
 *        ( 다만 오브젝트를 묶어둔 거지 그안의 프로퍼티를 묶어둔것은 아니다 )
 * 
 *  8. this 바인딩 컴포넌트에
 *  ----> point 프로퍼티가 있으므로 100을 반환
 * 
 *   -----------------------
 *         추가 설명
 *   -----------------------
 * 
 *  9. obj.getPoint()에서 obj의 프로퍼티가
 *  ----> this 바인딩 컴포넌트에 바인딩되도록
 *  ----> 의도적으로 설계해야 한다.
 * 
 *  --------------------------------------------------------------------------
 * 
 *  - 그런데 여기서 
 *      ==
 *        렉시컬 환경 컴포넌트 = {
 *          환경 레코드(ER): {
 *            선언적 환경 레코드(DER): {},
 *            오브젝트 환경 레코드(OER): {}
 *          },
 *          외부 렉시컬 환경 참조: {}
 *        },
 *        변수 환경 컴포넌트: {},
 *        This 바인딩 컴포넌트(TBC): {
 *          point: 100,
 *          getPoint: function(){},
 *        }
 *      ==
 * 
 *    지금 이것이 하나의 콘텍스트다.
 * 
 *  - 그리고 함수안에서 사용할 수 있는 것들,
 *  ----> 변수는, 선언적 또는 오브젝트 환경 레코드 안에 들어가 있다.
 *  ----> 함수 밖에 있는 것들은 외부 렉시컬 환경 참조에 들어가 있다.
 * 
 *  - 즉, 함수안에서 값을 구할 수 있는 것은 렉시컬 환경 컴포넌트 
 *    안에서 구했다라는 것이다.
 * 
 *  - 남아있는 것은 this로 참조해서 property값을 구하거나, 
 *    this에 있는 메소드를 호출하는 것.
 * 
 *  ----> 그것을 this 바인딩 컴포넌트에 묶어 두었다.
 * 
 *  - 그렇다면  obj.getPoint()에서 obj의 프로퍼티가 this 바인딩 
 *    컴포넌트에 바인딩되도록 의도적으로 설계해야 한다.
 * 
 *  - 규모가 커지면 앞에 몇단계의 오브젝트를 작성한다.
 * 
 *  ----> 이때, getPoint함수에서 this가 참조하는 것은 getPoint함수를 호출할때
 *        바로 앞에 작성한 오브젝트를 참조한다.
 * 
 *  ----> 그전의 오브젝트들은 경로일 뿐이다.
 * 
 *  ===== 설계를 할때 이것을 염두해두고 설계를 해야한다. =====
 *  ( 엔진이 이렇게 처리를 하기때문에 이것을 알고 설계를 해야한다. )
 * 
 */