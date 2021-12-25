/**
  * 프로그램 설명문서 주석
  * 2021.01.29 수업
  * 
  *      ====== @Argumnet 오브젝트 ========
  *      ----> Argument 오브젝트가 function 오브젝트에 속하진 않지만
  *      ----> 함수를 호출하면 그때 Argument 오브젝트를 생성하므로
  *      ----> 여기서 같이 다룬다
  * 
  * 
  * 
  *      ==== Argument 오브젝트 ====
  * 
  *      -- 함수가 호출되어 함수 안으로 이동했을때
  *          arguments 이름으로 생성되는 오브젝트
  * 
  *      ----> 함수가 호출되어 자바스크립트 엔진이 함수안으로 이동 했을때, 
  *            그때, arguments 라는 이름으로 생성되는 오브젝트(bulit-in 오브젝트이다)
  * 
  *      -- 함수를 호출한 곳에서 넘겨 준 값을 순서대로저장
  * 
  *      -- 호출된 함수에 파라미터를 작성한 경우
  *      ----> 호출된 함수의 파라미터에도 값을 설정하고
  *            아규먼트 오브젝트에도 저장
  *      ----> apply()와 아규먼트 오브젝트
  * 
  *      -- 파라미터라고 부른 것은 아규먼트 오브젝트와 구분하기 위한 것
  * 
 */
console.log("=====================================");

window.onload = function() {
   "use strict"
   debugger;
  var test1 ={};
  // argument는 함수안에만있네...ㅋㅋㅋ
   function getTotal(one) {
     return one + arguments[1] + arguments[2];
   };
   // 1. getTotal()을 호출한다
   //    10, 20, 30을 파라미터 값으로 넘겨 준다

   // 2. 함수가 호출을 받게 되면
   //    함수 안에 arguments 이름을 가진 오브젝트를 생성한다

   // 3. 10, 20, 30이 arguments에 순서대로 설정된다
   //    arguments[0]처럼 인덱스를 사용하여 값을 사용한다

   // 4. getTotal()의 one 파라미터에 10이 설정된다


   /*
      함수가 호출을 받게되면 우선 argument오브젝트를 만들어서
      arguments라는 프로퍼티에 할당한다 .
      그리고 파라미터로 넘겨준값을 전부 순서대로 설정한다

      예) 10이 one에 설정되고 다시 10이 arguments[0]에 설정된다
      그리고 20이 arguments[1]에 설정되고 30이 arguments[2]에 설정된다

      이처럼 파라미터 값이 모두설정되므로 arguments를 이용해 값을 구할 수 있다.
   */
   
   var result = getTotal(10,20,30);
   console.log(result);
   
   debugger;
   /*
      apply()메소드와 아규먼트 오브젝트를 조합하면 꽤나 멋진 코드가 나온다
   */

  // 이부분은 테스트용 코드이다
  // 질문올려보자
  console.log('----코딩테스트~~----');
   var testAg = function inside(number){
      var plus = 0;
      for(var i = 0; i < arguments.length;i++) {
         console.log('arguments :',arguments[i]);
         plus = plus + arguments[i];
         console.log('type :',typeof arguments[i]);
         
         console.log('plus :' ,plus);
      }
      return plus;

   };

   console.log(testAg.apply(this,[100,200,300,400]));
   
   debugger;

   console.log('----apply()와 아규먼트 오브젝트----');
   function getTotal2(one) {
      return one + arguments[1] + arguments[2];
   }

   result = getTotal.apply(this, [10,20,30]);
   // 1. apply()의 두번째 파라미터가 배열이며
   //    파라미터 값이 유동적이다

   // 2. 이때 arguments를 사용하여
   //    유동적인 파라미터 수에 대응할 수 있다

   // 3. 사용 사례
   // - 웹페이지에서 "좋아하는 음악"을
   // - checkbox로 선택받으면 선택한 수가 유동적이다
   // - apply()와 아규먼트 오브젝트로 대응할 수있다.
   console.log(result);
   /*
      배열이라는 것은 유동적인 것이다
      apply의 [10,20,30]이있는데 이값을 getTotal2에 넘겼을때 arguments가 효율적으로
      작동된다. 10개를 넘기든 5개를 넘기든 모두 arguments 오브젝트에 저장된다

      따라서 arguments를 for문으로 반복하면 10개가 들어오든 5개가 들어오든 모두 값을 구할
      수있다.

      여기서 [1]은 프로퍼티를 뜻한다
      arguments 오브젝트도 오브젝트이니까 그안에는 key:value, name:value 형태로 저장이된다

      0:10, 1:20,2:30 이런형태로 저장이 될것이다

      따라서 1을 콕찝어오면 20이나오고, 2를 프로퍼티 이름으로 사용하여 값을구하면30이 반환된다
   

      ** apply메소드와 argumnets 메소드를 이용하면 매우 유용하게 데이터를 처리할 수 있다 **



      ------ 그리고 함수가 실행된 후에 함수를 빠져 나오면 그때 arguments오브젝트도 
      ------ 자동으로 삭제한다. 따라서 함수 밖에서 arguments오브젝트를 액세스 할 수 없다.

      ------ 한편 아규먼트라고 하지않고 파라미터라고 부른것은 바로 여기 아규먼트와 구분하기
             위한 점도 있다
   */
   
   debugger;


}



