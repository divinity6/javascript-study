/**
  * 프로그램 설명문서 주석
  * 2021.03 05 수업
  * 
  *           
  *           ===== JSON 오브젝트 개요 =====
  *         
  *           == JSON을 서버에서 받을때는 null등 바뀌기 때문에 중요하게 체크해야한다 ==       
  * 
  *           - JavaScript Object Notation
  *           ----> 빌트인 오브젝트
  *           ----> new 연산자로 인스턴스 생성 불가
  * 
  *           - JSON 주요 기능
  *           ----> 데이터 송수신의 변환 기준
  *           ----> 텍스트이므로 전송 속도가 빠름
  *           ----> 파일 확장자: json, txt도 사용 가능
  * 
  *           - JS 데이터 타입 지원
  *           ----> 다른 언어도 사용하지만,
  *                 완전하게 같지 않을 수도 있음
  * 
  *           ------------------------------------
  * 
  *           - 자바스크립트 오브젝트 노테이션.
  * 
  *             애는 빌트인 오브젝트이고 인스턴스를 생성할 수 없다.
  *             아니, 생성할 인스턴스를 필요가 없다.
  *       
  *           - 함수가 딱 2개이다
  *             그리고 인스턴스의 필요성이 별로 없다.
  * 
  *           - 데이터 송수신의 변환 기준이다
  *             서버로 데이터를 보낼 때 어떻게 변환해야 된다!
  *             서버에서 클라이언트로 보낼때는 어떻게 변환한다!
  *  
  *             라는 기준을 정해 놓은 것.
  *             따라서 양쪽의 기준에 맞춰서 변환시켜 보내주어 맞게하는 것이다.
  * 
  *           - 즉, 한마디로 기준이다.
  * 
  *           - 또한 애는 텍스트라서 전송속도가 빠르다
  * 
  *             파일의 확장자는 json이고 txt도 사용할 수 있다.
  * 
  *           - JSON이 나오기전에는 xml을 사용했다.
  *             그러나 xml은 텍스트가 아니라 오브젝트이다.
  *             따라서, 무겁다.
  * 
  *           - 그래서 최근에는 JSON을 많이 사용한다.
  *             통신이 아무래도 그만큼 빨라지기 때문이다.
  * 
  *           - 또한 자바스크립트 데이터 타입을 지원한다.
  * 
  *             다른 언어 또한 JSON을 사용하지만 완전하게 같지 않을 수가 있다.
  *             예를 들어 어떤언어의 어떤 버전이 일부를 지원 안할 수도 있다.
  * 
  *             그런데 데이터다. 하나라도 틀리면 엄청난 것이기 때문에
  *             사전에 변환하는 기준에 따라서 정확하게 변환이 되었는지 체크할 필요가 있다.
  * 
  *           - 이것은 필수이다 -
  * 
  *           ===== 데이터이기 때문에 완전하면 완전할 수록 좋다 =====
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
            ===== stringify() =====

        - 구분                - 데이터(값)

        - object              - JSON 오브젝트
        - 파라미터             - 변환 대상
                              - 함수 또는 배열 opt
                              - 가독성을 위한 구분자 opt
        - 반환                - 변환 결과
        
        ------------------------------------------------

        - JS 타입을 JSON 타입의 문자열로 변환
        ----> JSON.stringify() 형태로 호출

        - 첫번째 파라미터

        - 두번째 파라미터

        - 세번째 파라미터

        -------------------------------------------------

        stringify()은 함수이다.

        JSON은 문자열로 왔다갔다 한다. ( 일부는 숫자도 있다만. )
        자바스크립트의 어떤 타입을 문자열로 변환하는 것이 stringify의 목적이다.

        시멘틱 그대로다. ( 애는 파라미터가 3개이다. )

        2번재,3번째 파라미터는 옵션이다

        - stringify가 변환 해주기때문에 결과가 맞는지 체크해주면 된다.
  */

  log("큰 따옴표(" + ")안에 작성됨" , "note");

  var value = {
    book: '책',
    title: 123,
  };
  // 1. 변환이란 큰따옴표 안에 작성되도록 만드는 것을 뜻한다

  var result = JSON.stringify( value );
  // 2. 프로퍼티 이름인 book이 "book"으로 변환
  // 3. '책'이 "책"으로 변환
  // 4. 숫자는 변환하지 않는다
  console.log( result );
  // :: {"book":"책","title":123}

  /*
      - JSON은 기본적으로 ""(큰따옴표)안에 작성한다
        숫자는 작성하지 않는다

      - 지금까지 봤던 일반적인 형태.

      - 위의 일반적인형태를 stringify 하면서 오브젝트를 작성하면
        {"book":"책","title":123} 형태로 바꿔서 반환해준다.

      - 우리는 프로퍼티 이름에다 따옴표를 안쓴다. 그러나 원래
        프로퍼티 이름은 string타입이다.

      - 그래서 원래 따옴표를 써야되는데 쓰지않아도 자바스크립트 엔진이
        따옴표를 쓴걸로 간주해서 해석한다.
  */

  debugger;

  log('배열 변환' , 'note');
  var value = [ 'book' , '책' , 123 ];
  var result = JSON.stringify( value );

  console.log( result );
  // :: ["book","책",123]

  /*
    배열안에 작성해도 마찬가지로 큰 따옴표로 바꿔버린다.
  */

  log('특수한 값 변환' , 'note');
  console.log( JSON.stringify([Infinity ,NaN , null]));
  // :: [null,null,null]
  // 1. Infinity , NaN ,null은 null로 변환

  console.log( JSON.stringify([true , false]));
  // :: [true,false]
  // 2. true, false는 변환하지 않는다.

  /*
      === 이부분이 서버언어와 반드시 체크해야할 사항이다. ===

      무한대, 낫어넘버 , 널이 전부 널로 바뀐다.

      서버에서 받을 때 이것이 널로가도 문제가 없는지,
      그렇지 않으면 정확하게 널로 가는지,

      이런것들을 체크해야되고
      (보면 값들이 큰따옴표 안에 작성되지 않았다)

      true,false는 그대로 간다.(애도 큰따옴표에 작성되지 않고)

      그래서 서버언어와 맞는지 반드시 체크를 해야한다.
  */

  log('undefined 변환' , 'note');

  console.log( JSON.stringify(undefined));
  // :: undefined
  console.log( JSON.stringify([undefined]));
  // :: [null]
  console.log( JSON.stringify({value : undefined}));
  // :: {}

  // 1. undefined는 작성한 곳에 따라 다르게 변환된다
  // 2. 값이 하나이면 그대로 변환
  // 3. 배열 안에 있으면 null로 변환
  // 4. 프로퍼티 값이면 프로퍼티를 제외시킨다
  //    ""프로퍼티 이름""도 없어지므로 주의해야 한다

  /*
    === undefined도 어느곳에 작성했느냐에 따라 차이가 있다 ===

    undefined를 오브젝트의 값의 자리에작성하면 빈문자열로 ,
    이름까지도 날려버린다 ( value가 프로퍼티 이름이지 않는가 )

    -- 따라서 서버와의 문제가 없는지 체크해 볼 필요가 있다.
  */

  debugger;

  log('두 번째 파라미터에 함수 작성','note');

  var data = { book : '책' , point : 55 };
  function replace( key , value ){
    // point 값 55를 11로 변경
    return key === "point" ? 11 : value;
    // value로 해두면 원래 값으로 가니깐...ㅋㅋ
  };

  var result = JSON.stringify( data , replace );
  console.log( result );
  // :: {"book":"책","point":11}

  // 1. 함수에서 return한 값을 변환 값으로 사용한다
  // 2. 값을 return하지 않거나 undefined를 return 하면
  //    최종 데이터에서 제외시킨다
  //    즉, 데이터를 걸러 내게 된다.

  /*
    오브젝트 작성 후 replace함수를 작성하면 stringify가 프로퍼티 단위로 읽으면서
    replace를 호출한다.

    그러면 처음에 book이 key에 할당되고 '책'이 value에 할당된다.
    그래서 처음엔 "point"가 아니기 때문에 값을 반환시켜준다

    그렇다고 값만 반환되는 것은 아니고 [[[프로퍼티가 반환]]]된다
    "book":"책" 이것처럼!!!

    그리고 또 다음을 읽는다.

    point와 55가 들어올 것이고 point가 key에 할당되고 55가 value에 할당된다.
    이때, key === "point"이 같기 때문에 11을 반환하면 55가 11로 바뀐다.

    그리고 point : 11이 되는 것이다. (이런식으로 반환된다)
  */

  log('두 번째 파라미터에 배열 작성' , 'note');

  var data = { book : '책' , point : 11 , amount : 90 };
  // 1. 배열에 프로퍼티 이름 작성
  var result = JSON.stringify( data , [ 'book' , 'amount' ]);
  // 2. 이름이 같은 것만 result에 설정된다
  
  console.log( result );
  // :: {"book":"책","amount":90}

  // 3. 그래서 {point:11}이 출력되지 않았다.

  
  /*
      두번째 파라미터에다가 배열로 작성했을때 데이터에서
      [[[프로퍼티 이름이 같은 것만 반환]]] 시켜준다.
      
      즉 위의 식에서 point는 날라간다.
      
      데이터를 걸러내는 역할을 하게 되는 것이다.
  */
 
  debugger;

  log('세 번째 파라미터에 줄 분리 작성' , 'note');
  var data = { sport : 'soccer' , time : 90 };
  var result = JSON.stringify(data , "" , '\n');
  console.log( result );
  /*
      ::
          {

          "sport": "soccer",

          "time": 90
          }
  */

  // 사람이 데이터를 보기 쉽게하기 위한 것으로 줄을 분리하여 표시한다.

  log('들여쓰기 숫자 작성' , 'note');
  
  var data = { sports : 'soccer' , time : 90 };
  var result = JSON.stringify( data , "" , 4 );

  console.log( result );
  /*
      ::
          {
              "sports": "soccer",
              "time": 90
          }
  */

  // 1. 숫자는 들여쓰기 자릿수 이다
  // 2. 숫자만큼 들여쓰기를 한다.

  /*
      4 이니깐 4칸들여쓰기를 한다. 물론 줄 바꿈도 하면서...
  */

  log('문자 앞에 삽입할 문자 작성' , 'note');

  var data = { sports: 'soccer' , time: 90 };
  var result = JSON.stringify( data , "", "##" );
  console.log( result );

  /*
       ::
          {
          ##"sports": "soccer",
          ##"time": 90
          }
  */

  // 1. 문자열(##)을 작성하면 데이터 앞에 ##을 표시한다.

  /*
      3번째 파라미터는 가독성을 위한 것인데 어떤 곳에 사용 할 것인지 생각해볼 수 있다.
  */

 
};
