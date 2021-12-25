/**
  * 프로그램 설명문서 주석
  * 2021.03 02 수업
  * 
  *           
  *           ===== get 속성 =====
  * 
  *       - getter
  *       --> OOP 용어
  *       
  *       - var result = obj.book; 코드를 만나면
  *       --> obj.book의 get함수가 호출회며
  *       --> get 함수에서 "JS책"을 반환
  *       --> 반환된 "JS책"을 result 변수에 할당
  *       
  *       - obj.book.get()처럼 함수로 호출하면 에러 발생
  *       (아래 구문에서 여기에 대해서 다룬다)
  * 
  *       ----------------------------------------------
  * 
  *       - getter는 OOP용어다. 즉, 객체지향 프로그래밍을 지원하는
  * 
  *         언어에서 사용 할 수 있다.
  * 
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

  log('getter 정의','note');

  var obj = {};

  Object.defineProperty( obj , "book" , {
    get : function(){
      return "JS책";
    }
    // get 속성을 작성했는데 값이 함수이다
  });

  var result = obj.book;
  // obj.book으로 값을 구했다. 그런데 defineProperty로 하면 값은
  // value 속성에 작성하게 된다. 그런데 value 속성이 없다!
  // 이때, get을 호출하게 된다.

  // 즉, property로 값을 구할 때 value 속성이 없으면 get을 호출하게 되는데 
  // 이것이 바로 getter이다.

  // 그럼 함수를 호출하게 되니깐 함수에서 "JS책"을 반환하게 된다.
  console.log(result);

  debugger;

  /*
            ===== set 속성 =====

      - setter
      --> OOP 용어

      - obj.book = "JS책"; 코드를 만나면
      --> obj.book의 set 함수를 호출하면서
      --> "JS책"을 파라미터 값으로 넘겨준다
      --> data의 title 프로퍼티에 "JS책"을 설정한다.

      - obj.book; 코드를 만나면
      --> obj.book의 get 함수가 호출되며
      --> get 함수에서 data.title 값을 반환
      --> setter에서 설정한 "JS책"이 반환된다.
      (아래 구문에서 여기에 대해서 다룸)

      ------------------------------------------------
  */
  
  
 // obj.book에 값을 설정하면 data.title에도 같은값이 설정되게끔!
 log('setter 정의','note');
  
  var obj = {}, data = {};

  Object.defineProperty( obj , "book", {
    set : function( param ) {
      data.title = param;
    },
    get : function(){
      return data.title;
    },
  });

  obj.book = "JS책";
  console.log( obj.book );
  console.log( data.title );
  debugger;

  /*
      - defineProperty로 "book"를 정의한다.

        이때 value속성을 작성하자 않고 set과 get작성.

       여기서 obj.book = "JS책";으로 """JS책을 !!할당할 때"""

        value 속성이 없으니깐 set을 호출하게 된다.

        ===== 이것이 setter이다. =====

        그러면 set을호출하게되고 data.title에 "JS책"이 설정되게 된다.

        그리고 obj.book을 하게되면 마찬가지로 value 속성이 없으니깐

       """ get을 호출하게 된다!!"""

       호출되는 시점을 잘 봐두고 알아야 한다.

       --------------------------------------------------------

      --- 여기서

          set : function( param ) {
            data.title = param;
          },
          get : function(){
            return data.title;
          },

          이스타일은 ES5 스타일이다

      --- ES6에 이것보다 더 코딩이 편하고 확장성 있는 형태가 나왔다.

          따라서 ES5환경에서 개발하려면 이형태를 쓰면 되지만,
          
          ES6에서 개발하려면 ES6의 getter와 setter를 쓰는 것이 더 효율적이다.
  */

};
