/**
  * 프로그램 설명문서 주석
  * 2021.01.09 ~ 12 수업
  * 
  *     ====== 함수 호출 구조 ========
  * 
  *      - toString()
  *     
  *      - 구분               - 데이터 (값)
  *      - data               - 문자열, String 인스턴스
  *      - 파라미터            - 사용하지 않음
  *      - 반환               - 변환한 값
  *      ------------------------------------------
  *      - data 위치의 값을 String 타입으로 변환
 */

console.log("=====================================");
window.onload = function() {
   "use strict"
   debugger;
   
   var value = 123;
   var result = value.toString();
   console.log(typeof result);

   /*
         - toString()

         -- "123".toString();
         ---> String 타입을 String 타입으로 변환
         ---> 의미가 없다?

         - toString() 함수가 필요한 이유

         -- __proto__;
            toString();
            __proto__
            toString();

         -- 그래서 대부분의 빌트인 오브젝트에 toString()과 
            valueOf()가 있다.(없는 것도 있다)
   */

   debugger;

   var obj = String;
   var instance = new String('123');

   /*
      1. 오른쪽 local의 obj를 펼친다
      2. 그런데, toString()이 없다
   */

   var oneProto = instance.__proto__;
   // 인스턴스의 __proto__를 전개하면 또 __proto__가있다,
   var oneString = oneProto.toString; // 문자열을 toString으로 변환하는것
   /*
      1. 여기서 instance.__proto__를 펼친다
      2. 여기에 toString()이 있다.
   */

   var twoProto = instance.__proto__.__proto__;
   // oneProto를 전개하면 instance의 __proto__가 두개있는모습
   // 즉, 위와같은 모습이다
   // 그런데 애는 보면 모습이 built-in object이다
   // 위의 것은 built-in string이다


   var twoString = twoProto.toString; // 프로퍼티를 toString으로 변환하는것
   /*
      1. twoProto 에도 toString()이 있다
      2. 구조적으로 toString()이 두개가 있는 모습이다
   */

  
  /*
      1. String 오브젝트에 toString()이 없으면
      2. Object 오브젝트의 toString()이 호출된다
      
      3."123"을 Object 타입으로 인식하여 변환하기 때문에
      - String 오브젝트에 toString()이 있는 것이다.
      */
     
     // __proto__안에있는 __proto__를 까보면 object 형태로 되어있다.
     
     // bulit-in objcet 오브젝트는 key:value 형태로 작성한다.

     // bulit-in string 오브젝트는 단일값만 작성한다
     
     // 따라서 toString 함수도 key:value형태에 맞춰서 문자로 바꾸는 코드로 만들어져 있기 때문에
     
     // 앞에서작성한것은 key:value 형태가 아니라서 이상하게 되어버렸다.
     
     // 바로 이것때문에 toString함수를 잘라주는것이다.(계층적으로 위에서부터 실행될수있도록.)
     
     // 즉, 더하위로 내려가면 object toString()을 불러오기때문에 그것을 방지하기위해서 위에서 잘라주는것
     
     // __proto__ == 구조



   debugger;

     /*
         - JS 함수 호출 구조

         -- 우선,데이터 타입으로
         ---> 오브젝트를 결정하고
         ---> 오브젝트의 함수를 호출한다


         - toString(123)
         ---> 123을 파라미터에 작성
     
     */
    var value2 = 123;
    value2.toString();
    // 1. value2.toString()은
    // 2.built-in Number 오브젝트의 toString()함수가 호출된다


    "123".toString();
    // 3. "123".toString()은
    // 4. bulit-in String 오브젝트의 toString()을 호출한다
    debugger;
    var result2 = toString(123);
    console.log(result2);
    // 1. bulit-in Object 오브젝트의 toString()이 호출된다
    // 2. 123을 오브젝트로 간주하여 Object 형태를 문자열로 변환한다

    // object가 앞에 없다.
};



