/**
  * 프로그램 설명문서 주석
  * 2021.03 01 수업
  * 
  *           
  *           ===== 프로퍼티 디스크립터 =====
  * 
  *    - 타입     - 속성 이름   - 속성 값               - 디폴트 값    - 개요
  * 
  *    - 데이터   - value      - JS 지원 데이터 타입    - undefined    - 프로퍼티 값
  *                                                                       으로 사용
  *   
  *               - writable   - true, false           - false        - false: value
  *                                                                       값 변경 불가
  * 
  *    - 악세스   - get        - Function Object,      - undefined    - 프로퍼티 함수
  *                              undefined
  * 
  *               - set        - Function Object,      - undefined   - 프로퍼티 함수
  *                              undefinde
  * 
  *    - 공용     - enumerable  - true, false          - false       - false: for-in
  *                                                                      으로 열거 불가
  * 
  *              - configurable - true, false          - false      - false:
  *                                                                   프로퍼티 삭제 불가
  * 
  *     --------------------------------------------------------------------------------
  * 
  *     -- 프로퍼티 디스크립터(Descriptor)
  *     ----> 프로퍼티의 속성 이름과 속성 값을 정의
  * 
  *     -- 디스크립터 타입 분류
  *     ----> 데이터 프로퍼티 디스크립터
  *     ----> 악세스(Access) 프로퍼티 디스크립터
  *     ----> 공용 프로퍼티 디스크립터
  *     ----> 디스크립터 타입에 속한 속성만 같이 사용할 수 있음
  * 
  *     -------------------------------------------------------------------------------
  * 
  *     - 디스크립터는 속성 이름과 속성 값을 정의
  * 
  *     - 디폴트 값은 전부 부정이다.
  * 
  *     - "디스크립터 타입에 속한 속성만 같이 사용할 수 있다"
  *     ---> 즉, 타입이 데이터라면 value와 writable을 같이 쓸수 있지만
  *          악세스 속성인 get과 set을 같이 사용할 수 없다.
  *     ---> 마찬가지로 writable과 get,set을 같이 사용할 수 없다.
  * 
  *     ---> 공용은 같이작성할 수 있다. 즉, value와 enumerable을 같이 작성할 수 있다.
  *     ---> 마찬가지로 get을 작성하고 enumerable을 작성할 수 있다.
  * 
  *     따라서 위와같이 3개의 타입으로 나눌 수 있다.
  * 
  *     ==== 데이터와 악세스는 같이 작성할 수 없는것이 특징이다 ====
  * 
  * 
  *     ------------------------------------------------------------------------------
  * 
  *               ===== 디스크립터 타입 인식 기준 =====
  * 
  *     - 타입     - 속성 이름                  -- 먼저 value 또는 writable 작성 체크
  *                                            
  *     - 데이터   - value                     -- 작성되어 있으면
  *               - writable                 --> 데이터 프로퍼티 디스크립터 타입으로 인식
  * 
  *     - 악세스   - get                       -- 작성되어 있지 않으면
  *                - set                     --> 악세스 프로퍼티 디스크립터 타입으로 인식
  *     
  *     - 공용     - enumerable                 -- 데이터와 악세스 프로퍼티 디스크립터를
  *                - configurable                  함께 작성할 수 없으므로 구분 가능
  * 
  *     ------------------------------------------------------------------------------
  * 
  *     -- 현재 디스크립터 타입을 어딘가에 정의한 것이 없다. 그럼 어떻게 되어 있는가
  * 
  *        먼저 value 또는 writable로 작성되어 있는지 체크한다. 데이터 타입과 악세스
  *        타입은 같이 작성할 수없으니깐 value나 writable이 작성되어 있으면 데이터 프로퍼티다.
  * 
  *        그리고 작성되어 있지않으면 악세스 프로퍼티.
  * 
  *     ------------------------------------------------------------------------------
  * 
  *               ===== value 속성 =====
  * 
  *     -- 프로퍼티 값을
  *     ----> { value: "JS북" } 형태로 작성
  *     ----> for~in에서 "JS북"이 프로퍼티 값이 됨
  * 
  *     -- value 속성을 get/set 속성과 같이 작성 불가
  * 
  *     -----------------------------------------------------------------------------
  *     { value: "JS북" } 에서 사실은 value는 그냥 속성이고 "JS북"이것이 값이 되는 것.
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

  log('value 속성','note');

  var obj = {};
  Object.defineProperty( obj , "book" , {
    value: "JS북",
    enumerable: true,
  });

  for (var name in obj) {
    console.log(name);
    console.log(obj[name]);
  }


  log('value,get/set 작성 불가' , 'note');

  obj = {};
  Object.defineProperty( obj , "book" , {
    value: "JS북",
    // get: function(){},
  });
  // value 속성을 getter와 setter와 같이 작성 불가

  debugger;

  /*
            ===== writable 속성 =====
  
        - 프로퍼티 값 변경 가능, 불가

        - writable: true
        --> 프로퍼티 변경 가능

        - writeable: false
        --> 디폴트 값: false
        --> 프로퍼티 변경 불가
            에러가 발생하지 않지만,
            값이 변경되지 않음.
  */

  log('writable: true, 변경 가능' , 'note');
  obj = {};

  Object.defineProperty( obj , "book" , {
    value: "JS책",
    // 변경 가능
    writable: true,
  });

  obj.book = "변경 가능";
  console.log( obj );


  log('writable: false, 변경 불가' , 'note');

  var obj = {};

  Object.defineProperty( obj , "book" , {
    value: "JS책",
    // 변경 불가 - 읽기 전용(디폴트 값)
    writable: false,
  });

  //obj.book = "변경 불가";
  // 에러가 발생하지 않는다고했는데... 에러가발생하네
  console.log( obj.book );

  /*
    writable: 이것이 true로 되어있는지 false로 되어있는지
    정확하게 확인 해야 한다.
  */

  debugger;

  /*
      ===== enumerable 속성 =====

      - for ~ in 으로 열거 가능 여부

      - enumerable: true
      ----> 프로퍼티 열거 가능

      - enumerable: false
      ----> 프로퍼티 열거 불가
  */
  log( 'for~in으로 열거 가능' , 'note' );

  var obj = [];
  
  Object.defineProperty( obj , "book" , {
    value: "JS 북",
    // 열거 가능
    enumerable: true,
  });

  for ( var name in obj ){
    console.log(name + ":" + obj[name]);
  };

  log( 'for~in으로 열거 불가' , 'note' );

  var obj = [];
  
  Object.defineProperty( obj , "book" , {
    value: "JS 북",
    // 열거 불가(디폴트 값이다)
    enumerable: false,
  });

  for ( var name in obj ){
    console.log(name + ":" + obj[name]);
  };

  /*
      이런 것들이 전부 데이터 보호 차원이다.
  */

  debugger;

  /*
            ===== configurable 속성 ======

      - 프로퍼티 삭제 가능, 불가

      - configurable: true
      --> 프로퍼티 삭제 가능
      --> value 이외 속성 변경 가능

      - configurable: false
      --> 디폴트 값: false
      --> 프로퍼티 삭제 불가
      --> value 이외 속성 변경 불가
  */

 log( 'configurable: true, 삭제 가능' , 'note' );

 var obj = [];
 
 Object.defineProperty( obj , "book" , {
   value: "JS 북",
   // 삭제 가능
   configurable: true,
 });

 delete obj.book;
 console.log(obj.book);


 log( 'configurable: false, 삭제 불가' , 'note' );

 var obj = [];
 
 Object.defineProperty( obj , "book" , {
   value: "JS 북",
   // 삭제 불가(디폹트 값)
   configurable: false,
 });

 delete obj.book;
 // 여기서 에러가 나네(강의에선 안난다고 했는데 나는 나는디?ㅋㅋ)
 console.log(obj.book);


};
