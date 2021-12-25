/**
  * 프로그램 설명문서 주석
  * 2021.01.24 수업
  * 
  *      ====== 빌트인 Object와 prototype ========
  * 
  *           - 빌트인 Object 특징
  * 
  *     - 인스턴스를 만들 수 있는 모든 빌트인 오브젝트의 __proto__에
  *       Object.prototype의 6개 메소드가 설정된다
  *       (모두 설정된다. 이것이 빌트인 오브젝트의 특징이다)
  * 
  *     - 따라서 빌트인 오브젝트로 만든 인스턴스에도 설정된다
  *       (빌트인 오브젝트로 만든 인스턴스에는 위 6개의 오브젝트가 존재한다)
  * 
  *     - Object.prototype
  * 
 */
console.log("=====================================");

window.onload = function() {
  "use strict"
  debugger;
  
  var numberInstance = new Number(123);

  // new 연산자로 빌트인 Number 생성자 함수를 호출하여
  // 인스턴스를 생성하고 이것을 numberInstance에 할당한다.

  /*
      1. 오른쪽 local의 numberInstance를 펼치면 __proto__가 표시되며

      2. [[PrimitiveValue]]: 123가 있으며
      -   new Number(123)에서 123이 설정된 것이다
  */

  debugger;

  var numberProto = numberInstance.__proto__;
  // numberInstance를 전개해보면 빌트인 넘버 오브젝트의 prototype에 연결되어있는
  // 메소드들이 설정된다

  // *이것은 인스턴스를 만드는 기준들이다*
  
  /*
      3. __proto__를 펼치면 6개의 메소드가 표시된다
      -  이것은 Number.prototype에 연결된 메소드이다
  
      4. new 연산자를 Number 인스턴스를 생성하면
      -  Number.protoype에 연결된 메소드를
      - __proto__에 연결하기 때문에 표시된 것이다.
  */

  debugger;

  var objectProto = numberProto.__proto__;
  // 그리고 다시 __proto__를 전개 해보겠다
  // 그런데 이것은 다시 object이다

  // 즉, 빌트인 오브젝트의 프로토타입에 연결되어있는 6개의 메소드가 여기에 설정된다는 것이다

  // * 이것은, 규칙이다 *

  // 모~든 인스턴스에 해당된다

  // 인스턴스를 만들면, 예를 든다면 Number인스턴스를 만들면 Number를 첫번째 __proto__에

  // 설정하고 그리고 다시 __proto__를 만들고 거기에다가 빌트인 object의 prototype에

  // 연결되어 있는 6개의 메소드를 설정한다

  /*
      5. __proto__ : Object를 펼치면
      - Object.prototype에 연결된 메소드가 첨부되어 있다.

      6. Number 인스턴스를 생성할 때, 기본적으로
      - Object.protoype에 연결된 메소드가 첨부된다

      7. Object의 함수는 첨부되지 않는다.
  */

  debugger;

  /*
              - isPrototypeOf()

      - 구분                      - 데이터(값)
  
      - object                    - 검색할 오브젝트.prototype
      - 파라미터                  - 검색 대상 오브젝트
      - 반환                      - true, false

      ---------------------------------------------------

      - 파라미터에 작성한 오브젝트에
      --> object 위치에 작성한 prototype이
      --> 존재하면 true 반환
      --> 존재하지 않으면 false 반환
  
  */

  var numObj = new Number(123);
  // 1. Object.prototype 처럼
  //    오브젝트의 prototpye을 작성한다

  console.log(Object.prototype.isPrototypeOf(numObj));
  // 2. numObj에 Object.prototpy의 존재를 체크한다
  //    존재하므로 true 반환

  /*
      처음 numObj의 __proto__에는 빌트인 Number의 prototype에있는 6개의 메소드들이
      설정된다. 그리고 __proto__를 만들고 그 안의 빌트인 Object의 prototype에 있는 6개의
      메소드가 설정된다.
      따라서 Object.prototype이 존재하기 true를 반환한다
  */

  debugger;

  /*
                  - toString()

        - 구분                - 데이터(값)

        - object              - object 인스턴스
        - 파라미터             - 사용 불가
        - 반환                - 변환한 값

        -----------------------------------------

        -- 인스턴스 '타입'을 "문자열로 '표시'"

        -- 오브젝트에 toString()이 있으면
        ----> toString()이 호출되고
        ----> 없으면 Object의 toString()이 호출된다
  */

  var point = {book : "책"};
  console.log(point.toString());
  // 1. toString() 앞에 Object 인스턴스를 작성했으며
  // 2. toString()을 실행하면 [실행 결과] 처럼
  //    [object Object]를 표시
  
  // 3. 앞의 소문자 object는 [인스턴스]를 나타내고
  //    뒤의 대문자 Object는 [빌트인 Object]를 나타낸다.
  
  var obj = new Number(123);
  
  // 이렇게하면
  // Object.prototype에 있는 것들을 인스턴스의 __proto__에 박아넣는데
  // 그 인스턴스의 this를 obj로 사용하겠다는건가? ==> 정답
  console.log(Object.prototype.toString.call(obj));
  // :: [object Number]
  /*
    call도 메소드이다.

    prototype에 연결되어 있는 메소드를 '직접' 이와같이 
    인스턴스를 만들지 않고 호출할때는 call, apply 메소드를 사용한다.

    이에대해서는 뒤에서 다룰 것이다.
    지금은 이렇게 부를 수 있다. 정도만 알아도 된다

    그리고 파라미터에다 생성한 obj 인스턴스를 작성했다.

    그러면 [object Number]가 나온다

    여기서 Number는 타입이다. 인스턴스를 만든 타입!
    즉, 오브젝트의 이름이다
  */

  debugger;

  /*
              - toLocaleString()


      - 구분                    - 데이터(값)
      
      - data                    - 변환 대상
      - 파라미터                 - 사용하지 않음
      - 반환                    - 반환한 값

      ------------------------------------------

      -- 지역화 문자 변환 메소드를 대체하여 호출.

      ---> Array, Number, Date 오브젝트의
      ---> toLocaleString() 메소드가 먼저 호출된다.
      -----> 그리고 이것이 아닐때는 빌트인 오브젝트의 toLocaleString()이 호출된다.
  */

  console.log(1234.56.toLocaleString());
  // 1. 1234.56에 콤마(,)를 삽입하여
  //    1,234,56으로 출력.
  // 2. 이때에는 Number.prototpye.toLocalString() 메소드가 호출된다.

  console.log("4567.89".toLocaleString());
  // 3. "4567.89"는 String 타입이며
  // 4. String.prototype.toLocaleString()이 없으므로
  // 5. Object.prototype.toLocaleString() 메소드가 호출된다
  // 6. Object의 toLocaleString()이 없으면 에러 발생.
  //    즉, 에러 발생을 방지학 위한 것이다.

  /* 이것은 단지, 있는 것을 그대로 출력하는 용도에 지나지 않는다 */

  debugger;
}



