/**
  * 프로그램 설명문서 주석
  * 2021.01.28 수업
  * 
  *      ====== 함수 형태 ========
  *   
  *      ----> 함수 형태는 함수 선언문과 표현식으로 구분할 수 있다.
  *      
  * 
  *      - 함수 선언문                 
  *      --> Function Declaration
  *      --> function getBook(book) {코드}
  * 
  *      ----> 함수 선언문은 function 다음에 함수이름과 파라미터와 함수 코드를 작성한다
  * 
  * 
  *      - 함수 표현식 
  *      --> Function Expression
  *      --> var getBook = function(book) {코드}
  * 
  *      ----> 반면 함수 표현식은 할당 연산자를 기준으로 오른쪽에 함수를 작성하고 왼쪽에
  *            함수 이름을 작성한다
  * 
  *      -------> 자바스크립트 엔진이 function 키워드를 만나면 function 오브젝트를 만들고
  *               이것을 getBook에 할당하게 된다
  * 
  *      -------> 따라서 getBook은 '함수 이름'이면서 'function오브젝트'이다
  *      -------> 함수 표현식의 기본적인 개념은 할당연산자 오른쪽에 1 + 2를 작성해서
  *      -------> 3을 getBook에 할당하는 개념이다
 */
console.log("=====================================");

window.onload = function() {

   /*
                  ===== 함수 선언문 =====

         - 구분                        - 데이터(값)

         - function                    - function 키워드
         - 식별자                      - 함수 이름
         - 파라미터                     - 파라미터 리스트 opt
         - 함수 블록                    - {실행 가능한 코드 opt}
         - 반환                         - 생성한 function 오브젝트

         -------------------------------------------------------

         -- function getBook(title) {함수 코드} 형태

         ----> function 키워드, 함수 이름, 블록{}은 작성 필수
         ----> 파라미터, 함수 코드는 선택

         -- 함수 이름을 생성한 function 오브젝트의 이름으로 사용
   */
  "use strict"
  debugger;
  
   function getBook(title) {
     return title;
   };
   // 파라미터와 함수코드는 선택이다. (fuction과 함수이름과 {}은 필수이다)
   // 즉, 작성하지않아도된다

   // 이렇게 작성한 후
   
   var result = getBook("JS책");
   // getBook으로 함수를 호출하면 함수가 실행된다
   console.log(result);
   var ins = new getBook('title');
   
   debugger;

   /*
                     ===== 함수 표현식 =====

         - 구분                        - 데이터(값)

         - function                    - function 키워드
         - 식별자                      - 함수이름opt
         - 파라미터                     - 파라미터 리스트 opt
         - 함수블록                    - {실행 가능한 코드 opt}
         - 반환                        - 생성한 function 오브젝트

         ---------------------------------------------------

         -- var getBook = function(title) {코드}
         ----> function 오브젝트를 생성하여 변수에 할당
         ----> 변수 이름이 function 오브젝트 이름이됨.

         -- 식별자 위치의 함수 이름은 생략 가능
         ----> var name = function abc(){}에서
               abc가 식별자 위치의 함수 이름
   */

   var getBook2 = function(title) {
      return title;
   }
   // 함수 표현식은 일단 할당 연산자가 있어야한다
   // 오른쪽에 함수를 작성하고 그러면 자바스크립트엔진이 function 오브젝트를 만들어서
   // getBook2에다 할당한다
   
   // 한편 함수 표현식은 또다른 형태로 함수를 선언할 수있다.
   // var name = function abc(){} 이형식이다.
   // 왼쪽에도 name이 있고 오른쪽에도 abc(name)이 있다.

   // 여기서 abc를 식별자 위치의 함수 이름이라고 한다

   result = getBook2("JS책");
   console.log(result);

   debugger;

   var getBook3 = function inside(value){
      if(value == 102) {
         return value;
      };
      console.log(value);
      return inside(value + 1);
   }
   // 1. inside 이름으로 function 오브젝트를 생성하여
   //    getBook 변수에 할당한다.

   // 2. 함수 외부에서 inside()를 호출할 수 없으며
   //    getBook3()을 호출하여 함수 안으로 이동한 후
   //    inside()를 호출할 수 있다.
   
   // 3. 함수 안에서 inside()를 호출하는 것은
   //    자신을 호출하는 것이므로
   //    무한으로 반복하여 호출하게 된다

   // 4. 함수가 종료도되도록 조치를 취해야 한다



   /*
      function 키워드를 작성하고 inside라고 이름을 주었다

      var getBook3를 제외하고 위에 까지만 보면 이것은 함수 선언문이다. 
      
      따라서 function 오브젝트를 만들게 되며

      그것을 getBook3에다 할당하게 된다.

      '그런데' 이 inside는 함수밖에서는 호출할 수 없고 함수 안에서만 호출할 수 있다.
   */
  

   console.log(getBook3(100));
   /*
      실행하면 getBook3으로 함수를 호출하며 100을 넘겨준다. 그러면 value는 100

      조건에 맞지않으니 log로 변수 100을 출력

      그리고 리턴문을 만나게되면 표현식을 평가하게되는데 이때 inside로 함수를 호출하면서

      101을 넘겨준다. 즉, 함수안에서 자기를 부른것

      *** 여기서 이처럼 함수 안에서 자기 자신을 부르는 것을 재귀 함수라고 한다***

      따라서 재귀함수는 이처럼 함수를 빠져나가는 코드를 작성해야 한다.

      그렇지 않으면 계속 호출하게 되니 무한 반복하게된다.

      그리고 최후(근?)에는 inside대신에 getBook을 호출한다


      '그런데 왜 함수를 두가지 형태로 선언하는가'

      함수 선언문과 함수 표현식, 둘 중 하나만 사용하면 안되냐는것, 왜 복잡하게 두가지 형태가

      있냐라는 것. 이유가 있다

      좀더 깊게 들어가기 위해서는 사전 지식도 필요하고 논리적인 접근도 필요하다

      그래서 중고급과정에서 다루지만 우선 간단하게 하나만 말하면 
      
      함수 선언문이 먼저 function 오브젝트를 만들고 그다음에 함수 표현식으로 function

      오브젝트를 만든다. 크게 차이가 있다

      순서가 다르다. 이에 따라서 동반되는 처리도 다르다
   */

   debugger;


}



