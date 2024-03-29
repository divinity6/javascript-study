/**
  * 프로그램 설명문서 주석
  * 2021.05 05 수업
  * 
  *           ===== 함수 호출 =====
  * 
  *   - 함수가 호출되면 3개의 파라미터 값을
  *     실행 콘텍스트로 넘겨 준다
  * 
  *   ----> 함수를 호출한 오브젝트
  *   ----> 함수 코드
  *   ----> 호출한 함수의 파라미터 값
  * 
  *   - 함수를 호출한 오브젝트를
  *   ----> this 바인딩 컴포넌트에 설정하여 this로 참조한다.
  * 
  *   - 함수 코드
  *   ----> function 오브젝트의 [[Code]]에 설정되어 있다.
  * 
  *   - 호출한 함수의 파라미터 값
  *   ----> 호출된 함수의 Argument 오브젝트에 설정한다.
  * 
  *   ---------------------------------------------------------------------
  * 
  *   - 함수가 호출되면 3개의 파라미터 값을 실행콘텍스트로 넘겨준다.
  *   ----> 함수를 호출한 오브젝트
  *   ----> 함수 코드
  *   ----> 호출한 함수의 파라미터 값
  * 
  *   - 함수를 호출한 오브젝트를
  *   ----> this 바인딩 컴포넌트에 설정하여 this로 참조한다.
  *         ( 함수를 호출한 오브젝트, 즉, 함수앞에 작성한 오브젝트. )
  *   ----> 함수앞에 작성한 오브젝트를 함수에서는 알수 없기 때문에 실행
  *         콘텍스트로 넘겨줘야한다.
  * 
  *   ----> 그러면 그것을 받아서 this 바인딩 컴포넌트에다 바인딩을 시키게
  *         되는 것이다.
  * 
  *   - 그리고 함수 코드.
  *   ----> function 오브젝트의 내부프로퍼티인 [[Code]]에 설정된 것을
  *         넘겨준다.
  * 
  *   ----> 이것은 function 키워드를 만나서 function 오브젝트를 만들때,
  *         함수 안에 작성된 코드를 [[Code]]에 설정 해놓은 것.
  *         (그것을 넘겨주는 것)
  * 
  *   - 또한 호출한 함수의 파라미터 값을 넘겨주게 된다.
  *   ----> 이것은 호출된 함수의 Argument 오브젝트에 설정되게 되며,
  *         선언적 환경 레코드에 바인딩 되서 들어가게 된다.
  * 
  * 
  *   = 그런데 호출된 함수의 파라미터 이름은 이미 function 오브젝트에 작성되어 있다.
  *   ----> 그런데 여기는 "호출한" 이다.
  *   ----> 외부에서 호출할때 파라미터 값은 넘겨주지 않으면 모르기 때문이다.
  *         (따라서 위와같이 파라미터 값을 넘겨주게 된다.)
  * 
  *   === 이렇게 3개의 파라미터 값을 실행 콘텍스트에다가 넘겨주게 된다. ===
  * 
  *   
  *   ==================================================================================
  *   ==================================================================================
  * 
  *           ===== 파라미터 값 매핑 =====
  * 
  *   - 파라미터 값 매핑이란?
  *   ----> 호출한 함수에서 넘겨 준 파라미터 값을
  *   ----> 호출된 함수의 파라미터 작성 순서에 맞추어
  *         값을 매핑하는 것
  * 
  *   - 엔진 처리 관점
  *   ----> 실행 콘텍스트로 넘겨 준 파라미터 값과
  *   ----> function 오브젝트의 [[FormalParameters]]에
  *         작성된 이름에 값을 매핑하고
  *   ----> 결과를 선언적 환경 레코드에 설정하는 것이다.
  * 
  *   ---------------------------------------------------------------------
  *   
  *   - 파라미터 값 매핑이란?
  *   ----> 호출한 함수에서 넘겨 준 파라미터 값을
  *   ----> 호출된 함수의 파라미터 ((작성 순서))에 맞추어
  *         값을 매핑하는 것
  *   ----> 여기서 작성 순서가 중요하다.
  * 
  *   - 엔진 처리 관점에서 본다면
  *   ----> 실행 콘텍스트의 파라미터로 넘겨준 값!과
  *   ----> function 오브젝트의 [[FormalParameters]]에
  *         작성된 이름에 값을 매핑한다.
  * 
  *   ----> 여기서 [[FormalParameters]]란 "호출된" 함수의 파라미터에 작성된
  *         이름이 여기에 들어가 있다.
  * 
  *   ------> 이것은 function 키워드를 만나서 function 오브젝트를 만들 때,
  *           설정 하는 것이다.
  *   ------> 왜냐하면, 이때 설정하지않고 내려가면 파라미터 이름을 알 수 없기 때문이다.
  * 
  *   ----> 그러니까 그때, [[FormalParameters]]에다 작성하고, 함수를 호출할 때,
  *         실행콘텍스트에 넘겨준 파라미터 값과 [[FormalParameters]]의이름을 매핑하는 것이다
  * 
  *   - 이때!! 순서대로 매핑한다.
  * 
  *   ----> 그리고 그결과를 선언적 환경 레코드에 설정하여 식별자 해결을 할 수 있게 만드는
  *         것이다.
  * 
  */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};

// 빈오브젝트 생성
var obj = {};

// 빈오브젝트에 getTotal 함수를 선언.
// 여기서 one, two는 이미 function 오브젝트를 만들 때 설정되어 있다.
// 그리고 이 name들은 배열생성되어 [ "one" , "two" ] 형태이다.
obj.getTotal = function(one, two){
  return one + two;
};
console.log(obj.getTotal(11,22,77));

/**
 *          ===== 파라미터 이름에 값 매핑 방법 =====
 * 
 *  1. 실행 콘텍스트로 넘겨준 파라미터 값을
 *  ----> 설명 편의를 위해 param이라고 한다.
 * 
 *  2. getTotal 오브젝트의 [[FormalPrameters]]에서
 *  ----> 호출된 함수의 파라미터 이름을 구한다
 *  ----> 설명 편의를 위해 name이라고 한다.
 *  ----> name은 ["one", "two"] 형태이다.
 *  ----> [[FormalPrameters]]는 function 오브젝트를 생성할 때 설정한다.
 * 
 *  3. name 배열을 하나씩 읽는다.
 *  4. param에서 index 번째의 값을 구한다.
 *  ----> 인덱스에 값이 없으면 undefined를 반환한다.
 *        ( 에러가 나는 것은 아니다. )
 * 
 *  5. name의 파라미터 이름과 4번에서 구한 값을
 *  ----> 선언적 환경 레코드에
 *  ----> { one: 11 , two: 22 } 형태로 설정한다
 *  ----> ""같은 이름이 있으면 값이 대체된다.""
 * 
 *  6. name을 전부 읽을 때까지 3번에서 5번까지 반복한다.
 * 
 *  - 그런데 위의 77은 매핑되는 변수가 없다.
 *    이에대한 기준은 무엇인가?
 *  ----> 기준은 파라미터의 이름을 기준으로 해서 넘겨준 파라미터 값을 매핑한다라는 것.
 * 
 *  - 그러나 애는 함수안에 작성하는 arguments 오브젝트에는 들어가게 된다.
 * 
 *  = 이것이 파라미터 이름에 값을 매핑하는 방법이다 =
 *    
 * 
 * 
 */