/**
  * 프로그램 설명문서 주석
  * 2021.02 22~24 수업
  * 
  *         ***** 지금까지 다루었던 메소드와 함수 형태를 정리한다(쥰내중요 어려움) *****
  * 
  *         ===== 메소드 호출 형태 =====
  * 
  *       - 데이터 형태
  *       ----> 배열 : [ "book" , "책" , 123 ]
  *       ----> OOP의 일반적인 형태
  * 
  *       - 자바스크립트 형태
  *       ----> 데이터로 메소드 호출
  *       ----> 오브젝트의 함수 호출
  *       ----> 인스턴스의 메소드 호출
  * 
  *       - Object 확장
  *       ----> 네임스페이스NameSpace로 활용
  *       ----> Book = {};
  *       ----> Book.javascript = {}; Book.HTML = {};
  * 
  *       ------------------------------------------------------------------
  * 
  *        배열 : [ "book" , "책" , 123 ] 와 같이 배열로 데이터가 만들어져 있다고 할때
  *        OOP의 일반적인 형태 :
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

  log('OOP의 일반적인 방법',"note");
  var data = [ "book" , "책" , 123 ];
  var obj = new Array();
  // 1. new Array()로 인스턴스 생성
  // 2. obj.concat(data);
  //    obj 인스턴스의 concat() 호출
  //    데이터를 파라미터로 넘겨 줌
  var result = obj.concat(data);
  log( data instanceof Array );
  log(result);
  // 3. JS는 일반적으로 이방법을 사용하지 않고 아래의
  //    [코드 2] 방법을 사용

  /*
        이것이 전형적인 객체지향프로그래밍 형태이다
        즉, instance가 있어야되고 .을찍고 concat해서 메소드이름 호출등.

        대부분 전형적인 형태는 인스턴스이다(오브젝트가 될 때도 있지만)

        이때 Array()는 클래스가 된다.

        그런데 자바스크립트는 또다른 방법이 있다
  */

  log('데이터로 메소드 호출',"note");

  var data = [ "book" , "책" , 123 ];
  var result = data.concat();
  // 1. data.concat();
  // 2. 엔진이 data 타입에 따라 오브젝트 결정
  // 3. data가 배열이므로 Array의 concat() 호출
  //    data를 파라미터로 넘겨준다.!
  console.log(result);

  /*

      data.concat(); 이것은 말도안되는것이다. 

      데이타인데 어떻게 concat이 있는가. 그런데 자바스크립트 엔진이

      data의 타입을 보고 아 배열이네 built-in Array prototype에 연결되어있는

      메소드로 인스턴스를 만들어서 그 인스턴스의 concat메소드를 호출하는 것이다.

      이때 data를 내부에서 파라미터로 넘겨준다

      --*** 그래서 메소드는 값을 오브젝트부분(앞)에 작성할 수 있구나 ***
  */

  log('오브젝트의 함수 호출',"note");

  var data = [ "book" , "책" , 123 ];
  var bookObj = {
    concat2: function test(data){
      return data.concat();
    }
    // concat2 프로퍼티이름, function(data) 값, 단지 함수를 작성한 것 뿐.
  };
  console.log(bookObj.concat2(data));
  // 이것은 심플하다. bookObj.concat2 하고부른다(오브젝트.이름), 그리고 ()하면 함수호출
  // ()가 없으면 프로퍼티 값을 구하는 것.
  // 이 때 데이터를 넘겨주면 된다.

  /*
      -----------------------------------------------------------------------

      이 형태는 꽤 많이 쓴다. 일단 이형태는 new 연산자로 인스턴스를 만들 수 없다.

      즉,
      concat2: function test(data){
        return data.concat();
      }
      이부분에 공통적인 내용이 들어간다라는 것이다.

      예) 회사전체에 공통으로 쓰는 기능이 있다. 그런기능들을

      concat2: function test(data){
        return data.concat();
      }

      이런 형식으로 작성해 두면 인스턴스를 만들 필요가없으니깐 심플하게
      console.log(bookObj.concat2(data)); 형식으로 호출할 수 있다.

      -------------------------------------------------------------------------

      예) 원본의 prototype에 메소드가 10개가 연결돼 있다고 하겠다.

      그리고 이것의 인스턴스를 10개를 만들었다.

      그러면 인스턴스마다 이것을 복사하는 것은 아니지 않는가?

      그러면 원본을 읽을 수 있게 호출할 수 있게 어떤 처리를 해줘야한다

      그렇게 되면 그것은 메모리를 먹게된다. 인스턴스를 많이 만들수록 메모리를 더많이

      먹게되는데 이것은 그것이 없다.

      물론 인스턴스는 나름대로 다른목적이 있지만.

      concat2: function test(data){
        return data.concat();
      }   
      애는 심플하게 하나만 만들어 두니깐 메모리에 대한 걱정이 없다.
  */

  log("내가만든 예시,인스턴스마다 메소드와 프로퍼티를 복사해 가지고있는 것","note");

  function Pen() { this._color = 0; };

  Object.defineProperties(Pen.prototype, {
    scolor: {
      get: function() {
        return this._color;
      },
      set: function( value ) {
        this._color = value;
      }
    }
  });

  var pen = new Pen();
  pen.color = ~pen.scolor;
  pen.color +=1;

  console.log(pen.color);
  debugger;
  var Coffee = function(water){
    this.water = water;
  };

  Coffee.prototype.setWater = function() {
    return this.water + "물";
  }

  Coffee.prototype.setNumber;

  var test = Coffee.prototype.setNumber;


  var oneIns = new Coffee(1);
  var twoIns = new Coffee(2);
  var threeIns = new Coffee(3);

  console.log("인스턴스들 :",oneIns.setWater(),twoIns.setWater(),threeIns.setWater());
  var coffee = {
    makeWater: function(water){
      return water + "물";
    }
  }

  var oneObj = coffee.makeWater(1);
  var twoObj = coffee.makeWater(2);
  var threeObj = coffee.makeWater(3);

  console.log( "오브젝트들 :",oneObj,twoObj,threeObj );
  /*
      결과를 보니깐 그냥 오브젝트들은 안에 필요없는거 다빠지고 값만 존재하네 ㅋㅋ

      위에 인스턴스들은 안에 쓸모없는것들까지 프로퍼티랑 메소드들도 다들어와서 
      
      공간겁나차지 ㅋㅋ
  
  */

  debugger;

  log("인스턴스의 메소드 호출","note");

  var data = [ "book" , "책" , 123 ];

  var Book = function(data) {
    this.data = data;
  }

  Book.prototype.getBook = function() {
    return this.data.concat();
  }

  var oneInstance = new Book(data);

  console.log(oneInstance.getBook());
  /*
      앞에서 봤듯이 전형적인 형태와 다른것이 없다.

      자바스크립트는 이와같이 3가지 형태로 메소드와 함수를 호출 할 수있다.
  */

  debugger;
  /*
      추가 :: Object 확장
      -- 네임스페이스(NmaeSpace)라고 하는 것

      -- Book = {};
      ----> Book 자체는 Object 이다. 

      -- Book.Javascript = {};
      ----> 그런데 여기다가 .찍고 Javascript 하게되면
      ----> Javascript가 오브젝트가 되고 Book이 네임스페이스가 된다.
      (즉, Object에다가 .을 찍고 연결하게되면 네임스페이스가 되는 것이네)

      예) Book을 관리하는 것이 있고 Point를 관리하는 것이 있고 회원을

      관리하는 것이 있다. 그러면 각각 메소드가 안에 다 있다. 그런데

      이것을 하나로 통합해버리면 메소드이름을 그안에서 중복해서 사용할

      수가 없다. 그 때, 이것을 업무별이든 어떤 구분을 줘서 그루핑을하는 것

      그래서 오브젝트를 만들어서 쓰게 되는 것

      --> 이것을 가르켜 네임 스페이스라고한다.

      만약 Javascript.abc 가 있다면 Javascript가 네임스페이스가 
      
      되고 abc가 오브젝트가 된다
  
  */

  debugger;

  /*
            ===== 메소드 사용 팁 =====

        -- 메소드를 알 수 없을 때

        ----> MDN 활용
        ----> MDN에서 "오브젝트 이름"으로 검색
        ----> 왼쪽의 리스트에서 메소드 이름을 찾는다
        ----> 메소드 이름이 시멘틱을 갖고 있으므로
              메소드 이름으로 기능 예측 가능

        -- 메소드를 알고 있을 때

        ----> 기능을 정확하게 사용하기 위해 사용

        ---------------------------------------------

        - MDN에서 찾을 때

        --> 메소드들은 전부 시멘틱을 가지고 있다. 처음에는 
           이게 안보인다. (이해를 못함)

        --> 이때 들어가서 보면된다.(친하게 지내야함)

        --> 계속 들어가서 읽어보면서 감을 잡으면 된다.
        (이것이 지름길이다. 왕도가 없다. 감을 잡는게 중요하다)

        --> 그럼 내용이 유추가 된다.
  */

}
