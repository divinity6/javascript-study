/**
  * 프로그램 설명문서 주석
  * 2021.01.28 수업
  * 
  *      ====== call() 메소드 ========
  * 
  *      ----> call() 메소드 앞에 호출 할 함수를 작성한다
  *      ----> 그리고 첫번째 파라미터에 호출될 함수에서 this로 참조할 오브젝트를 작성한다
  *      ----> 그리고 두번째이후의 파라미터에 ,로 구분하여 호출될 함수로 넘겨줄 파라미터를 작성한다
  *      ----> 물론 이것은 선택이다
  * 
  *      - 구분                  - 데이터(값)
  * 
  *      - object                - 호출할 함수 이름
  *      - 파라미터               - this로 참조할 오브젝트
  *                              - 호출된 함수로 넘겨줄 파라미터 opt
  * 
  *      - 반환                  - 호출된 함수에서 반환한 값
  * 
  *      -----------------------------------------------------
  * 
  *      -- getTotal.call(this,10,20);
  * 
  *      -- 첫 번째 파라미터
  *      ----> 호출된 함수에서 this로 참조할 오브젝트
  *      ----> 일반적으로 this 사용
  *            다른 오브젝트 작성 가능
 */
console.log("=====================================");

window.onload = function() {
  "use strict"
  debugger;
  
   function getTotal(one, two) {
     return one + two;
   };

   var result = getTotal.call(this,10,20);
   // 1. getTotal.call(this, 10, 20) 형태로 호출
   // 2. 1번째 파라미터 this가
   //    파라미터 값으로 넘어가지 않는다

   // 3. 2번째 파라미터가 첫번째 파라미터로 넘어가고
   //    3번째 파라미터가 두번째 파라미터로 넘어간다

   // 4. one에 10이, two에 20이 설정된다
   // 5. call()은 파라미터 수가 고정일 때 사용한다.

   /*
         여기서 첫번째 파라미터인 this는 getTotal의 파라미터 값으로 넘어가지 않는다

         이것이 call의 특징이다.

         일반적으로 첫번째 파라미터에 this를 사용한다. 물론, 다른오브젝트도 작성할 수

         있다.
   */
   console.log(result);
   
   debugger;

   var value = { one:10, two :20};

   console.log(value);
   console.log(value.toString());

   function getTotal2() {
      return this.one + this.two;
   }
   
   result = getTotal2.call(value);
   // 1. getTotal2.call(value)의
   //    파라미터에 value 오브젝트 작성
   
   // 2. getTotal2()에서 this가 value 오브젝트 참조
   //    this.one으로 프로퍼티 값을 구할 수 있다.
   console.log(result);

   /*
      { one:10, two :20}; 오브젝트를 생성해서 value 변수에 할당했다.

      getTotal를 호출하면서 call메소드를 작성했다

      함수를 호출하면 함수안의 this는 첫번째파라미터로 넘겨준 value,즉 value를 참조하게 된다
   
      따라서 value.one 형태가되고 value.two 형태가 된다

      --- 이처럼 call메소드의 첫번째 파라미터는 호출된 함수에서 this 키워드를 사용해서
          참조한다.   
   */


   debugger;

   /*
                  - apply()

            ----> apply는 call과 같다. 단지 다른것이 있다면 
                  두번째 파라미터를 배열로 작성하는것
            ----> 배열이니깐[]이안에 엘리먼트 수는 관계가 없다
                  5개가들어오든,10개가 들어오든 관계가 없다


      - 구분                              - 데이터(값)

      - object                            - 호출할 함수 이름
      - 파라미터                           - this로 참조할 오브젝트
                                          - [호출된 함수로 넘겨줄 파라미터opt]
      - 반환                                호출된 함수에서 반환한 값

      ------------------------------------------------------------------

      -- getTotal.apply(this,[10,20]);

      -- 파라미터 수가 유동적일 때 사용
         두번째 파라미터에 배열 사용

      -- call(), apply() 부가적인 목적
      ----> 첫 번째 파라미터에 호출된 함수에서
            this로 참조할 오브젝트 사용
      
      ----> 논리 전개는 단계적 설명이 필요하므로 중고급과정에서 다룬다
   */

   function getTotal3(one,two) {
      return one + two;
   }

   var result = getTotal3.apply(this, [10,20]);
   
   // 1. 파라미터 수가 유동적이므로 배열을 사용한다.

   // 2. getTotal() 파라미터 one에 10이 two에 20이 설정된다.
   console.log(result);

   /*
         getTotal3함수를 선언했고 getTotal3를 호출하면서 apply메소드를 작성했다.

         첫번째 파라미터는 this 이다. 그리고 두번째 파라미터에 10과 20을 작성했다.

         앞의 call은 파라미터 수가 고정되어 있을 때 사용한다.

         apply는 이것이 유동적일 때 사용한다


         예를 들면 html에 좋아하는 스포츠를 선택하도록 표시했다.

         그런데 여기에서 다수를 선택할 수도, 하나를 선택할 수도 있다.

         그러면 선택하는게 유동적이다. 이럴때에는 apply를 사용해서 배열로 넘겨주면 된다.


         한편 좋아하는 스포츠를 radio버튼으로 표시했다. radio버튼은 하나만 선택할 수 있으니

         그때에는 call 메소드를 사용한다

   
         call(), apply() 부가적인 목적은 첫 번째 파라미터에 호출된 함수에서 this로 참조할 
         
         오브젝트를 사용하는 것이다

         즉, 호출된 함수에서 오브젝트를 바꿔서 사용하는것

         현 시점에서는 호출된 함수에서 this로 참조할 오브젝트를 작성할 수 있다라는것

         그리고 일반적으로 this를 사용한다는 것정도만 알아두면된다.

   */
   debugger;

   /*
                        - toString()

         - 구분                           - 데이터(값)

         - object                         - function
         - 파라미터                        - 사용하지 않음
         - 반환                           - 변환한 값

         ----------------------------------------------

         -- 모든(거의 대부분, 모든은아니다) 빌트인 오브젝트에
         ----> toString()이 있지만
         ----> 오브젝트마다 반환되는 형태가 다름

         -- function 오브젝트의 toString()은
            함수 코드를 문자열로 반환한다
   */

   var getBook4 = function(){
      return 100 + 23;
   };
   // 이것은??? 함수 표현식이다

   // getBook4 함수를 선언했고

   result = getBook4.toString();
   // getBook4의 toString 메소드를 호출한다
   // 그러면 함수코드를 출력한다
   console.log(result);

   debugger;
}



