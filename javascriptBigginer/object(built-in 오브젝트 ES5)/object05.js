/**
  * 프로그램 설명문서 주석
  * 2021.03 03 수업
  * 
  *           
  *           ===== getPrototypeOf() =====
  * 
  *       - 구분                    - 데이터(값)
  * 
  *       - object                  - Object 오브젝트
  *       - 파라미터                 - 대상 인스턴스
  *       - 반환                     - 프로퍼티
  * 
  *       --------------------------------------------
  * 
  *       - 파라미터의 prototype에 연결된 프로퍼티 반환
  * 
  *       - 참고
  *       --> setPrototypeOf()가 ES5 스펙에 없고 ES6에 있음
  * 
  *       -----------------------------------------------
  * 
  *       파라미터에 있는 인스턴스의 prototype에 있는 프로퍼티를 반환한다.
  * 
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

  log('prototype에 연결된 프로퍼티','note');

  function Book(point){
    this.point = point;
  };
  // 2. 인스턴스를 생성한 function 오브젝트의
  //    prototype에 연결된 프로퍼티를 반환

  // 4. this.point는 prototype에 연결되어 있지 않으므로
  //    반환되지 않는다

  Book.prototype.getPoint = function(){};
  Book.prototype.setPoint = function(){};

  var obj = new Book(100);

  var result = Object.getPrototypeOf(obj);
  // 1. 파라미터에 인스턴스를 작성한다

  // 3. 생성자 함수인 Book을 작성하거나 Book.prototype을 작성하면 반환하지 않는다
  for (var key in result) {
    console.log( key + ":" + result[key] );
  };

  /*
      Object.getPrototypeOf(obj) 여기에 생성한 인스턴스를 작성한다

      그러면 prototype에 연결되어 있는 getPoint와 setPoint가 반환된다.

      -----------------------------------------------------------------

      - get이 있으면 set이 있어야 한다. ( 설정도 하지않고 불러오는것은 말이 안된다. )
        그리고 set이 있으면 get이 있어야 한다.
        set이 있는데 get이 없다. 그러면 뭐하러 set하는 것인가.

        따라서 get과 set은 하나의 짝이다.

        get이 있으면 set이 있어야하고 set이 있으면 get이 있어야 한다.

        물론 get이 2개 3개가 있을 수도 있고 set이 하나가 있을 수도 있다.

        또한 set이 다수이고 get이 다수일 수도 있다.
        ( 이것은 상황에 따라 다르다. )

        set을 2개로 분할해서 한다음 하나의 get으로 불러낼 수도 있는 것.

        === 그런데 ES5스펙에 setPrototypeOf()가 없다. ===

      - 일반적인 통념이다. get이 있으면 set이 있어야하고 set이 있으면 get이 있어야 한다.
        그런데 setPrototypeOf()가 없는 것이다.

      -----------------------------------------------------------------------

      - setPrototypeOf() == setPrototypeOf() 이지만 설정하는것은 
        인스턴스.__proto__에 설정하는 것이다.

      - get은 prototype에 있는 것을 가져오는데 set은 프로토 타입이 아니라
        ( 인스턴스.__proto__ )에 설정한다.

      - 그런데 왜 그러면 여기서 ES5에서 할수 없었는가?

        여기에 포인트가 있다.

        __proto__는 ES5에서는 표준이 아니다. 
        물론 브라우저에서는 지원을 했지만 ES5에 선언이 안되어 있다. 
        (정의가 안되어 있는 것이다.)

        그런데 ES6에 정의가 되어있다.

        ES5에서 setPrototypeOf를 쓴다는 애기는 __proto__에다가 설정한다는 이야기다.
        이것은 스펙에 없는데? 그래서 표준이 없기 때문에 setPrototypeOf을 ES5에서
        사용할 수 없었다! 라는 것.

        이런 어떤 측면.
  */

  debugger;

  /*
            ===== getOwnPropertyNames() =====
  
        - 구분                      - 데이터(값)

        - object                    - Object 오브젝트
        - 파라미터                   - 대상 오브젝트
        - 반환                      - [ 프로퍼티 이름 ]

        -----------------------------------------------

        - 오브젝트의 프로퍼티 이름을 배열로 반환

        - 열거 가능 여부를 체크하지 않음

        - 자신이 만든 프로퍼티가 대상
        --> 다른 오브젝트에서 받은 프로퍼티는 제외

        -----------------------------------------------

        - 파라미터에 오브젝트를 작성하고, getOwnPropertyNames()이런것들은
          전부 함수다 보니깐 파라미터에다가 오브젝트니 그런것들을 전부 작성하게 된다.

        - 오브젝트의 [[프로퍼티 이름]]이다

        - 그런데 열거가능 여부를 체크하지 않는 것이 포인트이다.
          ( enumerable : false,true와 상관 없음 )
          그런데 이것은 이것을 체크하지 않겠다라는 것.

        - 또한 다른 오브젝트에서 받은 프로퍼티는 제외된다.
  */
  log('프로퍼티 이름 반환' , 'note');

  obj = {};
  Object.defineProperties( obj , {
    book : { value : "책" },
    point : { value : 123 },
  });
  // defineProperty,defineProperties는 enumerable을 작성하지 않으면 기본값이 false이다.
  // 즉, 열거할 수 없는 것이다.

  // 그런데 열거할 수있는 이유는
  // getOwnPropertyNames는 열거가능 여부를 체크하지 않는다 라는 것을 알수있다.

  var names = Object.getOwnPropertyNames( obj );
  for ( var k = 0; k < names.length; k++ ){
    console.log( names[k] );
  }

  debugger;

  /*
            ===== keys() =====
  
      - 구분              - 데이터(값)

      - object            - Object 오브젝트
      - 파라미터           - 대상 오브젝트
      - 반환              - 프로퍼티 이름

      --------------------------------------------

      - 열거 가능 프로퍼티 이름 반환
      ----> ( 즉, enumerable: true 인 경우만 )
  */
  log('열거 가능 프로퍼티 이름' , 'note');

  var obj = {};
  Object.defineProperties( obj , {
    book : {
      value: "책",
      enumerable: true,
    },
    point: { value : 123 },
    // 1. point는 enumerable : false 이므로 반환되지 않는다.
  });

  var names = Object.keys( obj );
  for (var k = 0; k < names.length; k++){
    console.log( names[k] );
  };

  /*
    앞의 getOwnPropertyNames()와의 차이는 :: 
    getOwnPropertyNames()애는 열거가능여부를
    체크하지 않는거고 keys()애는 열거 가능 여부를 체크한다.
  */

  
};
