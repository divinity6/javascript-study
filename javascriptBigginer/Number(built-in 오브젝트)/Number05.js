/**
  * 프로그램 설명문서 주석
  * 2021.01.04 수업
  * 
  * ====== 프리미티브 값 ========
  *  
  * - Primitive Value
  * 
  * --> 언어에 있어 가장 낮은 단계의 값
  * 
  * --> var book = "책";
  * --> "책"은 더 이상 분해,전개 불가
  * 
  * 
  * - 프리미티브 타입
  * 
  * --> Number,String,Boolean: 인스턴스 생성 가능
  * 
  * --> Null, Undefined: 인스턴스 생성 불가
  * 
  * --> Object(일반 오브젝트)는 프리미티브 값을 제공하지 않음
 */


console.log("=====================================");
window.onload = function() {
   "use strict"
   debugger;

   var book = "책";
   var point = 123;

/*
   1. 오른쪽 local의 book을 보면
   - 값으로 단지 "책"만 갖고 있다.

   2. point도 마찬가지다

   3.이것이 프리미티브 값이다
   -- 오른쪽을 보면 더이상 전개하거나 아무것도없다

*/

   var obj = {book : "책"};
   // 오른쪽에 아래에 뭔가가 있다 
   // 즉,이런형태는 프리미티브 값을 제공하지않는 형태이다
   
   var instance = new Number(456);
   /*
    5. 인스턴스의 프리미티브 값 형태

      - 이것도 펼쳐보면 아래에 뭔가가 있다.
      - 그래서 프리미티브 값을 제공하지 않는형태가 된다
      - 그런데 시멘틱적으로 PrimitiveValue 라는 느낌이나는것,바로이것
      - 파라미터에 456을 작성. 그런데 이것은 값.

      -- 자바스크립트는 이름과 값 형태로 저장하게 된다
      ---> 그런데 이름을 작성하지 않았으니깐 자바스크립트 엔진이 이름을 작성해서 넣었다
      [[PrimitiveValue]]
      ------>[[]] 대괄호 두개는 자바스크립트 엔진이 만들었다는 의미

   >>> 인스턴스를 만들면 파라메타에 저장된 값을 값으로 사용하고 PrimitiveValue 라는 이름으로 저장한다
   
   */
   
   debugger;


/*
    === 인스턴스의 프리미티브 값 ===

    - var obj = new Number(123);
    --> 인스턴스를 생성하면 파라미터 값을
    --> 인스턴스의 프리미티브 값으로 설정

    - 프리미티브 값을 갖는 오브젝트
    --> Boolean, Date, Number, String
*/

   var obj2 = new Number(123);
   console.log(obj2 + 200);
   /*
      1.new Number(123)로 인스턴스를 생성하여 obj에 할당한 후
      obj에 값을 더하면 값이 더해진다.

      2. obj가 인스턴스이므로 값을 더할 수 없는데 값이 더해지는 것은

      3. 123을 인스턴스의 프리미티브 값으로 설정하기 때문

      프리미티브 값을 갖는 인스턴스에 숫자값을 
      연산하면 인스턴스의 [[]]안의 
      PrimitiveValue라고 작성된 것을 이름으로 하여 값을 구한다
   
   */

   var obj3 = {value: 21};
   console.log(obj3['value'] + 300);

   debugger;



   /*
      === valueOf() ===
      
      - 구분            - 데이터(값)

      - data            - Number 인스턴스, 숫자
      - 파라미터        - 사용하지 않음
      - 반환            - 프리미티브 값

      -------------------------

      - Number 인스턴스의 프리미티브 값 반환
      -->[[PrimitiveValue]] 바로이것
   */

   var obj4 = new Number('123');
   console.log(obj4.valueOf());
   console.log(obj4);

   debugger;
}



