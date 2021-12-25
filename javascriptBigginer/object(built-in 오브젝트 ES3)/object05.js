/**
  * 프로그램 설명문서 주석
  * 2021.01.22 수업
  * 
  * ====== 함수와 메소드 ========
  * 
  *     - 함수
  * 
  *     -- 오브젝트에 연결
  *     -- Object.create()
  *     ----> Obejct.하고 함수이름을 작성한다
  * 
  *     - 메소드
  * 
  *     -- 오브젝트의 prototype에 연결
  *     -- Object.prototype.toString()
  *     ----> prototype.찍고 함수이름을 작성하는데 이때 함수는 메소드가 된다
  * 
  *     ES5 Spec에 작성된 형태들))
  *     Object.create(O[,Properties])
  *     ---> The create function creates a new object with a specified prototype
  * 
  *     Object.prototpye.toString()
  *     ---> When the toString method is called, the following steps are taken:
  * 
  * 
  *     - ES6에서는 static 메소드가 등장했다.
  * 
  *     - 따라서 함수. static 메소드, 메소드 형태로 구분된다
  * 
  *     - 그러나 ES5에서는 함수와 메소드 형태로 구분한다.
  * 
  *     --> 그렇다면 함수와 메소드를 구분해야 하는 이유는 무엇인가
  * 
 */
console.log("=====================================");

/*
                  - 함수, 메소드 호출

      - 함수 호출 방법
      --> Object.create();
      ----> 함수를 호출하는 방법은 Object.함수이름() 형태;


      - 메소드 호출방법
      --> Object.prototype.toString();
      ----> 메소드를 호출하는 방법은 prototype에다가 toString이름을 작성하고 ()를 작성한다
      --> 또는 인스턴스를 생성하여 호출

      - 함수와 메소드를 구분해야 하는 이유
      --> JS 코드 작성 방법이 다르기 때문
      --> 함수는 파라미터에 값을 작성하고
          메소드는 메소드 앞에 값을 작성
*/
window.onload = function() {
  "use strict"
  debugger;

  var func = Object.create;
  var meth = Object;
  // 뒤에 Object()하면 함수가 되기 때문에 prototpye이없네?
  

  // create 함수의 존재여부를 체크하는 것이다

  console.log('함수 호출');
  console.log(Object.create);
  // 1. Object에 create가 존재하므로 함수 출력
  console.log(Object.prototype.create);
  // 2. Object.prototype에 create가
  //    존재하지 않으므로 undefined 출력
  
  
  debugger;
  
  console.log('메소드 호출');
  console.log(Object.prototype.toString);
  // 1. Object.prototype에 toString이 존재하므로 함수 출력

  
  var obj = {};
  // 사실 이것은 Object라고 하지만 인스턴스인 것이다.
  console.log(obj.toString);
  // 2. 인스턴스를 사용하여 메소드를 호출할 때는 prototype을 작성하지 않는다
  // 3. prototype에 연결된 메소드로 인스턴스를 생성하기 때문

  // 즉, toString 함수는 두가지 방법으로 호출할 수 있다.

  debugger;
  
  console.log('함수의 파라미터에 값 작성');
  
  
  console.log(String.fromCharCode(49,65));
  // 1. 함수 앞에 배열로 값을 작성하면
  //    Array 오브젝트의 함수가 호출되므로
  // 2. String 오브젝트의 함수를 호출하면서
  //    파라미터에 값을 작성해야 한다

  /*
      매개변수의 값을 함수앞에 작성하지 못했던 것은 여러개를 작성하지 못했기 때문에 그랬었다.

      함수앞에 여러개로 작성하려면 배열로 작성해야한다.

      그러면 자바스크립트는 함수앞에작성한 데이터 타입에 따라서 빌트인 오브젝트로 인스턴스를 
      
      만들고 거기에 있는 메소드를 호출하게 된다.

      그러면 이것은 String오브젝트가 아니고 배열이된다.

      그럼 배열에는 fromCharCode가 없을것이다. 따라서 에러가 나게된다

      그래서 파라미터에 다수를 작성하기 위해서 함수로 호출하고 함수앞에는 빌트인 스트링 
      
      오브젝트를 작성했던 것이다

      마찬가지이다. 함수는 함수앞에 빌트인 오브젝트 이름을 작성하고

      메소드는 Object.prototype.toString()으로 호출할수도 있고 인스턴스를 생성하여 
      
      호출 할 수도있다.

      또한 지금까지 우리가 일반적으로 했던 함수앞에 데이터를 작성하는 것도 있다.

      그래서 데이터 타입에 따라서 자바스크립트 엔진이 인스턴스를 만들어서 거기에 있는 메소드를

      호출하게 한것이다

      지금까지 강좌에서는 함수와 메소드를 구분하지 않았다.

      그러나 지금부터는 함수와 메소드를 구분한다

      함수와 메소드를 구분하는 기준은 "프로토타입"이다

      *************************

      -- 프로토 타입에 연결되어 있으면 그것은 메소드고 프로토타입에 연결되지 않고

      -- 오브젝트에 바로 연결되어 있으면 그것은 함수이다

      *************************

      그런데 함수는 함수앞에 데이터를 작성할 수 없고 파라미터에 데이터를 작성해야 한다.

      하지만 메소드는 메소드 이름앞에 데이터를 작성할 수 있다.
  
    */

  
  
  debugger;

  /*
                    - 메소드와 메서드

        - 메서드(method)

        - 국립국어원 표준국어 대사전
        --> 메소드는 검색되고 메서드는 검색되지 않음
        --> 프로그램과 관련지어 설명하고 있음
        --> 강좌에서는 메소드로 표기
  */

}



