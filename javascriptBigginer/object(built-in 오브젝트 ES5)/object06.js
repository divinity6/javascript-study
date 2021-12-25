/**
  * 프로그램 설명문서 주석
  * 2021.03 04 수업
  * 
  *           
  *           ===== getOwnPropertyDescriptor() =====
  * 
  *       - 구분                          - 데이터(값)
  *       - object                        - Object 오브젝트
  *       - 파라미터                      - 대상 오브젝트
  *                                       - 프로퍼티 이름
  *       - 반환                           - 디스크립터
  * 
  *       -------------------------------------------------
  * 
  *       - 프로퍼티 디스크립터의 속성 이름, 값 반환
  *       - 다른 오브젝트에서 받은 프로퍼티는 제외
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

  log('디스크립터 속성 반환','note');

  var obj = {};
  Object.defineProperty( obj , "book", {
    value : "책",
    writable: true, 
    enumerable: true,
  });

  var desc = Object.getOwnPropertyDescriptor( obj , "book" );

  for ( var name in desc ) {
    console.log( name + ":" + desc[name] );
    // value:책
    // writable:true
    // enumerable:true
    // configurable:false
  }

  debugger;

  /*
            ===== preventExtensions() =====
  
      - 구분                      - 데이터(값)

      - object                    - Object 오브젝트
      - 파라미터                  - 대상 오브젝트
      - 반환                      - 대상 오브젝트

      ---------------------------------------------

      - 오브젝트에 프로퍼티 추가 금지 설정

      - 프로퍼티 삭제,변경은 가능

      - 추가 금지를 설정한 후에는 추가 가능으로 변경 불가
  */

  log('프로퍼티 추가 금지 설정' , 'note');

  var obj = {};
  Object.preventExtensions( obj );
  try {
    Object.defineProperty( obj , "book" , {
      value: "책",
    });
    // preventExtensions 때문에 추가가 안되고 에러가 난다
    // 따라서 try catch문을 작성 했다.
  } catch (e) {
    console.log( "추가 불가" );
  };

  // 1. 추가 금지 상태에서 프로퍼티를 추가하면 에러 발생

  /*
        이와 같이 오브젝트 자체에 추가를 할 수 없게 막아두면
        데이터를 보호할 수 있다.
        이러한 관점에서 접근하면 된다.
  */

  debugger;

  /*
            ===== isExtensible() =====

      - 구분                - 데이터(값)

      - object             - Object 오브젝트
      - 파라미터            - 대상 오브젝트
      - 반환               - true/false

      ----------------------------------------------

      -- 오브젝트에 프로퍼티 추가 금지 여부 반환
      ----> true: 추가 가능, false: 추가 불가
  */

  log('프로퍼티 추가 금지 여부','note');

  var obj = {};

  Object.defineProperty( obj , "book" , {
    value: "책",
    writable: false,
  });
  console.log(Object.isExtensible( obj ));
  // 위에까지 디파인한 상태에서는 true가 반환
  Object.preventExtensions( obj );
  console.log(Object.isExtensible( obj ));

  debugger;

  /*
            ===== seal() =====
  
      - 구분                - 데이터(값)

      - object              - Object 오브젝트
      - 파라미터             - 대상 오브젝트
      - 반환                - 대상 오브젝트

      ---------------------------------------

      - 오브젝트에 프로퍼티 추가, 삭제 금지 설정

      - ""추가 금지는 오브젝트 단위로 설정""하고
        ""삭제 금지는 프로퍼티 단위로 설정""

      - 추가 금지를 하더라도 변경은 가능
  */

  log( '프로퍼티 추가, 삭제 금지 설정' , 'note');

  var obj = {};

  Object.defineProperty( obj , "book" , {
    value : '책',
    writeable : true,
  });

  Object.seal( obj );
  try {
    Object.defineProperty( obj , "sports" , {
      value : "스포츠",
    });
    // 오브젝트 단위로 추가 금지이기 때문에 에러가 난다
  } catch(e) {
    console.log( '추가 불가' );
  };

  debugger;

  /*
            ===== isSealed() =====
  
      - 구분                 - 데이터(값)

      - object               - Object 오브젝트
      - 파라미터              - 대상 오브젝트
      - 반환                 - true / false

      ----------------------------------------

      - 오브젝트에 프로퍼티 추가, 삭제 금지 여부 반환
      ----> true : 불가 , false : 가능
  */

  log('프로퍼티 추가, 삭제 금지 여부','note');

  var obj = {};
  Object.defineProperty( obj , "book" , {
    value: '책',
    writable: true,
  });
  console.log(Object.isSealed( obj ));
  
  Object.seal( obj );
  console.log(Object.isSealed( obj ));

  debugger;

  /*
            ===== freeze() =====
  
      - 구분                - 데이터(값)

      - object              - Object 오브젝트
      - 파라미터             - 대상 오브젝트
      - 반환                 - 대상 오브젝트

      ----------------------------------------

      -- 오브젝트에 프로퍼티 추가 , 삭제 , 변경 금지 설정
      (말 그대로 꼼짝 못하게 하는 것)

  */

 log('프로퍼티 추가, 삭제, 변경 금지 설정','note');

 var obj = {};
 Object.defineProperty( obj , "book" , {
   value: '책',
   writable: true,
   configurable: true,
 });
 console.log(Object.freeze( obj ));
 
 try{
   Object.defineProperty( obj , "book" , {
     value: "포인트",
    });
  } catch(e) {
    console.log('프로퍼티 변경 불가');
    // writable: true, 즉 변경불가임에도 불구하고 변경할 수 없다 
 }

 debugger;

 /*
          ===== isFrozen() =====
 
    - 구분              - 데이터(값)

    - object            - Object 오브젝트
    - 파라미터          - 대상 오브젝트
    - 반환              - true/false

    -------------------------------------

    - 오브젝트에 프로퍼티 추가, 삭제 금지 여부 반환
    ----> true: 불가 , false: 가능
 
 */


 log('프로퍼티 추가, 삭제, 변경 금지 여부','note');

 var obj = {};
 Object.defineProperty( obj , "book" , {
   value: '책',
   writable: true,
   configurable: true,
 });
 console.log(Object.isFrozen( obj ));
 Object.freeze( obj );
 console.log(Object.isFrozen( obj ));



};
