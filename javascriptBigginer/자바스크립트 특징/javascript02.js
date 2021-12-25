/**
  * 프로그램 설명문서 주석
  * 2021.02 20 수업
  * 
  *         *** 이것은 몇번 들으면서 이해할 필요가 있다 ***
  * 
  *         ===== JS 객체 형태 =====
  * 
  *     - Object 오브젝트 형태
  *     ----> var book = { read: function(param){코드}};
  *     
  *     ----> 인스턴스를 생성할 수 없음
  * 
  *     - Function 오브젝트 형태
  * 
  *     ----> function readBook(param) {코드};
  *     ----> 객체이지만, OOP의 객체라고 하기에는 부족
  *     ----> 객체에 메소드가 하나 있는 모습
  * 
  *     ------------------------------------------------------
  *     
  *     - Object 오브젝트 형태 : 즉, 중괄호 안에 작성한 name:value
  *       read는 이름이고 function(param){코드}는 값이다
  *       다만, function을 작성한 것 뿐
  * 
  *     ---- 오브젝트 형태는 인스턴스를 생성할 수 없다.
  *       오브젝트에는 prototype과 constructor가 없기때문에
  * 
  * 
  *     - Function 오브젝트 형태
  *       readBook이 function 이름이 되고 function은 빌트인 Function
  *       오브젝트로 function 오브젝트를 만들게 된다.
  *       즉. readBook 오브젝트를 만들게 되는 것이다.
  * 
  *     ---- 그런데 이것도 Object, 객체이지만 OOP의 객체라고 하기에는 좀 부족하다
  * 
  *     ==== 왜냐하면 OOP의 객체는 개념적인 것으로 이것을 가지고 class라고 정의한다고
  *          했었다. 그리고 class안에는 다수, 0개이상의 메소드가 있게된다.
  * 
  *          그런데 readBook 이것은 오직 하나의 메소드다
  * 
  *          그래서 OOP의 객체라고 하기엔 조금작다. 좀 부족하다
 */
console.log("=====================================");

window.onload = function() {
    "use strict"
    // console.log 사용
    var log = function( value , key ){
      if ( key === "note") {
          console.log('--- ' + value +' ---');
      } else { console.log(value); }
  };

  /*
          ===== prototype =====

        - JS의 OOP 구현 방법
        ----> prototype에 메소드 연결
        ----> prototype 형태


        - prototype에 연결하여 작성
        - 다른 언어는 class 안에
        ----> 메소드와 프로퍼티를 작성하지만

        - 자바스크립트는 prototype에
        ----> 메소드를 연결하여 작성한다
        ----> ES6에서 class에 메소드를 작성
        ----> 하지만, 내부에서 prototype에 연결한다

        ----------------------------------------------
  */

    var obj = String;
 
    /*
        1. obj에 String 오브젝트가 할당된다

        2. 오른쪽 Local의 obj를 펼친다
    */
    var proto = obj.prototype;

    /*
        3. prototype을 펼친다

        4. prototype에 많은 프로퍼티가 연결되어 있으며
           - 이것이 객체지향의 메소드이다.
    */

    /*
    
          obj를 전개해보면 prototype이 있다,

          그리고 prototype을 보면 많은 메소드들이 있다.

          다뤘던 match나 slice등.

          여기에 안다뤘던것은 ES6이후에 나온 것들이다.

          -----------------------------------------------------------------

          즉 ,String을 클래스 관점에서 본다면 String이 클래스 이름이되고

          prototype안에 작성된 것들이 메소드가 되는것이고

          arguments 나 caller 같은것들이 프로퍼티가 되는 것이다.

          이런 개념으로 연결시킬 수 있다.


          === 자바스크립트는 이와같이 prototype에다가 객체지향에서 말하는 메소드들을
              거기에 연결한다. 구조자체가 다르다 ===

          그래서 다른언어의 객체지향의 구현방법과 자바스크립트를 비교하는 것은 안된다.

          OOP를 구현하는것자체가 다르기 때문

          ----------------------------------------------------------------------

          -- 함수와 메소드를 구분하자는 이유가 어떤 이런 내용도 바탕에 깔려 있는 것이다.
    
          그러면 우리가 개발하는 것은 그럼 어떻게 할 것인가
    */

    debugger;

    log('prototype에 함수 연결','note');

    var Book = function(){};
    // 1. Book 함수 작성

    Book.prototype.getBook = function(){
      // 2. Book.prototype에 getBook 메소드 연결
      // 3. prototype이 오브젝트 이므로 { 이름 : 메소드 } 형태로 연결할 수 있다.
      return "JS북";
    };

    /*
          ===== prototype에 새로 메소드를 작성할 수 있다. =====

          var Book = function(){} 하면 새로운 function오브젝트가 만들어 질 것이다.

          그리고 function(){}을 만들때 Book.prototype은 자동적으로 만들어 지는 것이다.

          그리고 여기에다가 getBook. 이것은 메소드 이름이 되는 것이고

          function() { return "JS북" } 은 메소드를 나타내는 것이다.

        
          ----------------------------------------------------------------------

          이와 같이 { name : value } 형태로 연결하면 되는 것이다.(심플!)

          다만 우리는 prototype을 작성한다는 것이다.
    
          확인해 보겠다.
    */

    debugger;

    var Coffee = function(){};
    /*
        1. 오른쪽 Local의 Coffee를 펼친다

        2. 이것이 Function 오브젝트의 모습이다

        3. JS 엔진이 function을 만나면 오브젝트를 생성한다
           - name에 "Coffee"이 작성되어 있으며,
           - Function 오브젝트 이름이다.
    */

    proto = Coffee.prototype;

    /*
        4. protoype을 펼친다

        5. Coffee에 연결된 것은 엔진에서 설정한 것이다
    
    */

    /*
        -------------------------------------------------------------
        
        == Coffee의 프로토 타입에보면 constructor와 __proto__ 밖에 없다.
    
        메소드가 존재하지 않는다.

        __proto__에 연결된 것은 hasOwnProperty니 isPrototypeOf이니 이런것들은

        전부 빌트인 오브젝트 오브젝트의 프로토타입에 연결된 것을 인스턴스로 만들어서

        여기에다 붙인 것이다.

        == 이Coffee에 prototype에 연결된 것은 없다.

        --------------------------------------------------------------
    */

    Coffee.prototype.getCoffee = function extendsCoffee(){
      return "JS 북";
      
    }

    /* 
        6. Coffee.prototype에 getCoffee 메소드를 연결한다

        7. Coffee.prototype을 펼친다

        8. Coffee,prototype에 getCoffee가 연결되어 있다.
    */

    /*
        -------------------------------------------------------------

        - getCoffee를 앞서 설명했던 prototype에다 붙여보겠다.

          그러면 prototype안에 getBook이 붙는다. 바로이것이 메소드인 것이다.

          그리고 arguments, caller, length, name은 프로퍼티가 되는 것이다.

          객체지향에서 이야기하는 속성(attribute)이 되는 것이다.
    
        
        ====== 그래서 이와같이 자바스크립트는 prototype에 메소드를 연결해서 
               객체지향에서 이야기하는 형태를 만든다 ======

        -------------------------------------------------------------
    */

    var getCoffee = Coffee.prototype.getCoffee;

    /*
        9. Coffee.prototype.getCoffee를 펼친다

        10. prototype이 있다.

        11. 메소드와 함수에 자동으로 prototype이 설정된다
    
    */

    /*
        -------------------------------------------------------------

        그래서 당연히 getCoffee에 보면 똑같다

        function() 오브젝트를 만들면 기본적으로 여기까지 딱 만들어 진다.

        그럼우리는 prototype에다가 메소드를 더 붙이면 class 개념이 되는것이고

        그냥 constructor와 __proto__만 있고 메소드를 안붙이면 이건그냥

        function 오브젝트가 되는 것이다.


        getCoffee는 혼자서 돌아가는 것이고 Coffee처럼 붙이게되면 이것은 class
        개념으로 돌아가게 된다.


        ====== 이와같이 function 오브젝트를 2개의 형태로 활용 할 수 있다. =====

        예) 혼자쓸거니? 아니야 prototype에다 붙여서 class 개념으로 쓰겠다. 라는 것.

        그 때 어떤식으로 코딩하느냐, 클래스개념으로 쓰겠다고 하면 이렇게 prototype에다
        getCoffee같은 메소드를 쭉 연결하면 되는 것이다.


        -----------------------------------------------------------------------

        === 여기서 개발자들간의 어떤 시멘틱인데 앞의 함수이름이 대문자이면 이것은

        클래스로 쓰겠다는 의도이다. ===

        ===== 즉, 대문자명.prototype에다가 메소드를 연결해서 쓰겠다는 시멘틱이다 =====

        소문자면 단일 function으로...

        예) prototype에다가 메소드를 연결하지 않고 이것은 그냥 하나의 function 오브젝트로

        쓸것인데, 이것이 대문자다! 라고 한다면 거기 prototype에다가 메소드를 연결해 쓰겠다는

        시멘틱이다.
    
    */
    

    debugger;

    log('ES6의 class','note');

    class Book2 {
      constructor(title) {
        this.title = title;
      }
      getBook2() {
        return this.title;
      }
    }
    /*
          ES6에서는 class에 메소드를 작성한다

          일반적인 객체지향 개념이다.

          객체지향언어는 앞에 class라는 단어를 쓴다.


          우리는 아까 prototype.getCoffee이렇게 했지만 여긴그냥
          getBook()이렇게한다

          대신 class라는 키워드를 쓴다.

          ---------------------------------------------------

          그런데 내부적으로는, ES6에서는 우리가 이렇게 작성을 하지만,

          자바스크립트 내부에서 prototype에 연결한다

          즉, 내부적으로

          Book.prototype.getBook = function() {
            return this.title;
          }

          형태로 만든다


          var Book = function(){};
          Book.prototype.getBook = function(){
            return "JS북";
          };
          의 발전된 형태가 아래의 class이다. 그러나 구조적으로는 prototype이라는 것이다
    */

    debugger;

}
