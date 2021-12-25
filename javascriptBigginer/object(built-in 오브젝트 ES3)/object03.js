/**
  * 프로그램 설명문서 주석
  * 2021.01.20 수업
  * 
  * ====== Object 인스턴스 생성 ========
  * 
  *      - new Object()
  * 
  *      --> 애는 built-in object다 built-in String이나 Number가 아니다
  *     
  * 
  *      - 구분                  - 데이터(값)
  * 
  *      - 파라미터              - 값 opt
  *      - 반환                  - 생성한 인스턴스
  * 
  *      -----------------------------------------
  *      ---> new 연산자로 Object 생성자 함수를 호출
  * 
  *      -- 그러면 인스턴스를 생성하여 반환
  * 
  *      ---> 그런데 new Number는 number 타입의 인스턴스를 생성한다.
  *      ---> 또한 new String은 String 타입의 인스턴스를 생선한다.
  * 
  *      ---> 그런데 Object는
  *      
  *      -- 파라미터의 데이터 타입에 따라 생성할 인스턴스가 결정된다
  * 
  *      -- 파라미터 값이 undefined, null이면 빈 Object 인스턴스 반환
  * 
 */
console.log("=====================================");
window.onload = function() {
   "use strict"
   debugger;

   var newNum = new Number(123);
   // 1. new Number(123)으로 생성한
   console.log(typeof newNum);
   //    인스턴스 타입은 object이며
   //    프리미티브 값은 123
   console.log(newNum + 100);
   
   debugger;
   
   var newObj = new Object(123);
   // 1. new Object(123)로 생성한
   //    인스턴스의 타입도 object이고
   //    프리미티브 값은 123
   console.log(typeof newObj);
   // 2. 2개 인스턴스 모두 100을 더할 수 있으며
   //    값이 더해진다는 것은 Number 타입이라는 것
   console.log(newObj + 100);
   /*
   원래 오브젝트는 {key:value} 형태이기 때문에 값을 더하면 좀이상한데
   보이는 바와같이 값이 출력된것은 newObj의 프리미티브 값으로 123이 설정되었으며
   타입은 Number 라는뜻이다
   
   즉, newObj는 Number 인스턴스인것이다.
   
   new Object는 파라미터 값에 따라서 인스턴스 타입이 결정된다.
   */
  
  // 3. new Object()는 파라미터 값 타입이
  //    Number 타입이면 Number 인스턴스를 생성하고
  //    String 타입이면 String 인스턴스를 생성
  
  debugger;
  console.log('파라미터를 작성하지 않으면?');
  var newObj2 = new Object();
  
  console.log(newObj2);
  // 1. new Object()처럼 파라미터를 작성하지 않으면
  //     undefined를 작성한 것과 같으며
  //     값을 갖지 않은 Object 인스턴스 생성
  
  //     즉, {}가 출력된 이유는 object의 프리미티브 값의 디폴트 값은 {}이다
  
  

   /*
                  - Object()
            --> 이또한 Objcet인스턴스를 생성한다
            --> 다만, new 연산자를 사용하지 않은것 뿐이다
               


         - 구분                                 - 데이터(값)

         - 파라미터                              - 값opt
         - 반환                                 - 생성한 인스턴스
         -------------------------------------------------------
         
         -- Object 인스턴스 생성
         ---> 파라미터는 {name:value} 형태
   */
   
  debugger;
  console.log('--------------------------');
  var obj2 = Object({name:'JS책'});
  console.log(obj2);
  // obj2를 출력하면 인스턴스이기 때문에 프리미티브 값이 출력된다.
  //  즉, 파라미터에 할당된 값이 인스턴스의 프리미티브 값으로 설정된것
  
  var emptyObj = Object();
  // 1. 파라미터를 작성하지 않으면 new Object()와 같음
  console.log(emptyObj);

  /*
      즉, Object() 함수를 호출하나 new 연산자로 Object()생성자 함수를 호출하나 같다는 뜻
  */
  

  /*
                  - Object 생성 방법

         - var abc = {};
         ----> var abc = Object()와 같다
         ----> 즉, var abc = {}를 실행하면
         ----> Object 인스턴스가 생성됨

         - {} 표기를
         ----> 오브젝트 리터럴 이라고 부름
  */

 debugger;
 console.log('--------------------------');
 var obj3 = Object({name:"value"});
 console.log(obj3);
 console.log(obj3 instanceof Object);
 // 1. true 가 출력된 것은
 //    Object로 생성한 인스턴스를 뜻한다

 debugger;

 console.log('---------{} Object 리터럴 사용--------');
 var obj4 = Object({name:"value"});
 console.log(obj4);
 console.log(obj4 instanceof Object);
 // 1. true가 출력된 것은
 //    Object로 생성한 인스턴스를 뜻한다

 // 2. Object()와 Object 리터럴{} 모두
 //    Object 인스턴스를 생성한다

 // 3. 그래서 Object()를 사용하지 않고
 //    간단하게 {}를 사용한다
 

 debugger;

 /*
               - valueOf()

      - 구분                           - 데이터(값)

      - data                           - Object 인스턴스,숫자
      - 파라미터                        - 사용하지 않음
      - 반환                           - 프리미티브 값

      -----------------------------------------------------

      -- data 위치에 작성한
         Object 인스턴스의 프리미티브 값
 */

 var obj5 = {key:"value"};
 console.log(obj5.valueOf());
 // 1. obj에 프리미티브 값으로 설정된 값 반환

   console.log('-------이해과정(값보면이해됨) new 가없어서 노인스턴스생성(마지막 object는 자체로 인스턴스생성이니 예외)---------')
   var value = Number('123');
   console.log(typeof value);
   
   value = String(123);
   console.log(typeof value);
   
   value = Object(123);
   console.log(typeof value);
   
   console.log('-------new를 쓰면 젠부 오브젝트(인스턴스생성)---------')
   
   value = new Number('123');
   console.log(typeof value);

   value = new String(123);
   console.log(typeof value);

   value = new Object(123);
   console.log(typeof value);
}



