/**
  * 프로그램 설명문서 주석
  * 2021.03 23 수업
  * 
  * 
  *               단계적으로 접근하기 
  *           때문에 정리하는 차원에서 접근
  * 
  *           ===== function 형태 =====
  * 
  *       - 빌트인(Built-in) Function 오브젝트
  *       ----> Function.prototype.call()
  * 
  *       - function 오브젝트
  *       ----> function book(){...}
  *       ----> var book = function(){...}
  *       ----> 인스턴스이지만, new 연산자로
  *             생성한 인스턴스와 구분하기 위해
  *             강좌에서는 function 오브젝트로 표기
  * 
  *       - function 인스턴스
  *       ----> new Book() 처럼 new 연산자를 사용하여
  *       ----> Book.prototype에 연결된 메소드로 생성
  * 
  *       ----------------------------------------------------------
  * 
  *       - function 형태는 빌트인 Function 오브젝트가 있다
  *         Function.prototype.call(), 이 형태로 만들어져 있는 것.
  *         빌트인 오브젝트의 프로토타입의 메소드가 연결되어 있는 형태
  * 
  *       - function 오브젝트.
  *       ----> function 키워드를 사용해서 함수를 선언.
  *       ----> 또는, function 키워드를 사용해서 function() 오브젝트를 만들어서
  *             변수에 할당하는 형태.
  *       ----> 물론, 이것도 인스턴스 이지만, new 연산자로 생성한 인스턴스와 구분
  *             하기 위해 function object로 표기.
  *       ----> 일반적으로 함수, 메소드라고 하는 것은 이 function() 오브젝트가 되겠다.
  * 
  *       - function 인스턴스는
  *       ----> new Book() 처럼 new 연산자를 사용하여
  *       ----> Book.prototype에 연결된 메소드로 생성한 인스턴스를 뜻한다.
  *             강좌에서 인스턴스는 new 연산자를 사용하여 생성한 인스턴스를 뜻한다.
  * 
  *       =======================================================================
  *       =======================================================================
  *       
  *           ===== function 오브젝트 생성 =====
  * 
  *       - var book = function(){...};
  * 
  *       - 엔진이 function 키워드를 만나면
  *       ----> 빌트인 Function 오브젝트의
  *       ----> prototype에 연결된 메소드로
  *       ----> function 오브젝트 생성
  * 
  *       - 생성한 오브젝트를 book 변수에 할당
  * 
  *       - book() 형태로 호출
  *       ----> function 오브젝트이므로 호출할 수 있음.
  * 
  *       ----------------------------------------------------------------------
  * 
  *       - var book = function(){...}; 와같이 
  *         function 키워드를 사용하여 function을 선언.
  * 
  *       - 엔진이 function 키워드를 만나면
  *       ----> 빌트인 Function 오브젝트의
  *       ----> prototype에 연결된 메소드로
  *       ----> function 오브젝트 생성
  *       ( 이것의 성격은 인스턴스 이지만 앞에서 말했던 new 연산자로 사용한 인스턴스와
  *         구분하기 위해 function 오브젝트로 표기 )
  * 
  *       - book() 형태로 호출.
  *         이때 소스코드에 작성된 var book = function(){...}; 이 형태는 단지 텍스트다.
  *       
  *       - function 키워드를 만나서 엔진이 function 오브젝트(인스턴스)를 만들었기
  *         때문에 호출을 할 수 있는 것이다.
  * 
  *       - 즉, function 오브젝트이기 때문에 호출 할 수 있는 것이다.
  * 
  *       =======================================================================
  *       =======================================================================
  * 
  *           ===== 오브젝트 저장 =====
  * 
  *       - 함수를 호출하려면
  *       ----> 생성한 function 오브젝트를 저장해야
  * 
  *       - function 오브젝트 저장 형태
  *       ----> { name : value} 형태로 저장
  *       ----> { book : 생성한 function 오브젝트 } 형태
  * 
  *       - 함수를 호출하면
  *       ----> 1. 저장된 오브젝트에서 함수 이름(book)으로 검색
  *       ----> 2. value 값을 구하고
  *       ----> 3. value가 function 오브젝트이면 호출
  * 
  *       ----------------------------------------------------------------------
  * 
  *       - 함수를 호출하려면, 즉 function 오브젝트를 호출하려면 
  *         생성한 function 오브젝트를 저장해야 한다.
  * 
  *         바로 호출한다면 문제가 없겠지만, 생성한 후에 호출하려면 어찌되었든
  *         현재 호출한 function 오브젝트를 저장해야 한다.
  * 
  *       - 이때 function 오브젝트를 저장하는 형태는
  *       ----> { name : value } 형태로 저장
  *       ----> 예) { book : 생성한 function 오브젝트 } 형태에서 book이 name
  *             생성한 function 오브젝트 가 value가 된다.
  * 
  *       - 함수를 호출하면
  *        ----> 1. 저장된 오브젝트에서 함수 이름(book)으로 검색(즉, 식별자 해결)
  *        ----> 2. 그래서 value 값을 구하고
  *        ----> 3. 이것이 function 오브젝트이면 호출하고, 이것이 숫자이면 더하거나
  *               뭐 할 수 있는 거고 string 이면 문자열 처리를 할 수 있는 것.
  * 
  *       --> 자바스크립트는 이와 같은 구조이다.
  * 
  *       =======================================================================
  *       =======================================================================
  * 
  *             ===== 생각의 전환 =====
  * 
  *       - 함수가 호출되면 엔진은
  *       ----> 함수의 변수와 함수를 { name : value }
  *             형태로 실행 환경을 설정하고 함수 코드를 실행
  * 
  *       - { name : value } 형태로 생각을 전환해야
  *       ----> JS의 아키텍처와 매커니즘을 쉽게 이해할 수 있다.
  * 
  *       - function(){} 코드를 보면
  *       ----> 함수의 변수와 함수가 { name : value } 형태로 연상되어야 한다.
  * 
  *       ----------------------------------------------------------------------
  * 
  *       - 여기서 생각을 전환해야할 포인트가 하나 있다.
  * 
  *       - 함수가 호출되면 엔진은 함수의 변수와 함수를 { name : value },
  *         즉, 프로퍼티 형태로 실행 환경을 설정하고 함수코드를 실행한다.
  * 
  *       ----> 함수 안에 있는 것을 전부 프로퍼티 형태로 만들어서 실행환경을 설정한다.
  *       ----> 그리고 함수 코드를 실행하는 것이다.
  * 
  *       - 그래서 { name : value } 와 같이 프로퍼티 형태로 생각을 전환해야
  *         자바스크립트의 아키텍처와 매커니즘을 쉽게 이해할 수 있다.
  * 
  *       - 즉, function(){}을 보면 함수의 변수와 함수가  { name : value } 형태(프로퍼티)로
  *         저장되므로 이 형태로 연상해야 한다.
  * 
  *       = 이것은 엔진 관점에서의 접근이다.
  *         개발자의 입장에서 본다면 함수안에 처리를 위한 코드가 작성되어 있는 것이지만,
  *         엔진 관점에서 본다면 name : value, key : value 형태의 프로퍼티 리스트라는 것이다.
  * 
  *       - 그렇다면 우리도 이관점에서 접근 한다면 
  *         엔진 관점에서 좀 더 가깝게 접근할 수 있다는 것
  * 
  *       - 그럼으로써 아키텍처와 메커니즘을 좀 더 쉽게 이해할 수 있는 것이다.
  *       ----> 함수안의 코드를 처리를 위한 코드가 아니라 key : value 관점에서 보는 것이다.
  *             name : value 관점에서. 함수가 있으면, 함수 이름은 key이고, value는
  *             function 오브젝트고, 변수에다 값을 할당하면 변수이름이 name이고, key고
  *             값은 value인 것이다.
  * 
  *       ----> 이런관점에서, 프로퍼티 관점에서 접근할 필요가 있다.
  *             내가마치 엔진이 된 개념으로, 코드를 보는 생각을 가진 접근.
  */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};


window.onload = function() {

};
