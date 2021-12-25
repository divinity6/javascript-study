/**
  * 프로그램 설명문서 주석
  * 2021.01.24 수업
  * 
  *      ====== 프로퍼티 처리 메소드 ========
  * 
  *           - hasOwnProperty()
  * 
  *     - 구분                    - 데이터(값)
  *   
  *     - object                   - 기준 인스턴스
  *     - 파라미터                - 프로퍼티 이름
  *     - 반환                    - true,false
  * 
  *     ---------------------------------------
  * 
  *     -- 인스턴스에 파라미터 이름이
  *     ---> 존재하면 true 반환
  *     ---> 존재하지 않으면 false 반환
  * 
 */
console.log("=====================================");

window.onload = function() {
  "use strict"
  debugger;

  var obj = {value : 123};

  var own = obj.hasOwnProperty("value");
  // 1. obj 인스턴스에 value 프로퍼티가 존재하며
  // 2. obj를 만들면서 직접 작성했으므로 true 반환
  console.log(own);

  
  debugger;

  console.log('----값은 체크하지 않음----');
  
  obj = {value : undefined};
  // 1. undefined가 값이지만 false로 인식된다
  // (undefined 는 false로 인식된다)
  own = obj.hasOwnProperty("value");
  // 2. 하지만, 값은 체크하지 않고
  console.log(own);
  //    존재 여부만 체크하므로 true 반환
  
  debugger;

  // 상속받은 프로퍼티면 false 반환
  
  console.log('----자신이 만든 것 체크----');
  obj = {};
  // 1. hasOwnProperty()는 자신이 만든 것이 아니라
  //    빌트 인 Object 오브젝트에 있는것
  own = obj.hasOwnProperty("hasOwnProperty");
  // 2. {}를 실행하면 빌트인 Object 오브젝트의
  //    prototpye에 연결된 메소드를 사용하여

  // 3. Object 인스턴스를 만드므로 자신의 것이 아니다.

  /*
    own = obj.hasOwnProperty("hasOwnProperty"); 에서  "hasOwnProperty"은
    프로퍼티 이름이면서 메소드 이름이다

    그런데 {}로 오브젝트를 만들면 빌트인 오브젝트의 프로토타입에 연결되어 있는

    '6개의 메소드로 인스턴스를 만든다.'

    그 6개중의 하나가 hasOwnProperty다.

    따라서 obj.hasOwnProperty로 호출하면 당연히 "hasOwnProperty"이 존재하므로 호출이 된다
    (그렇지 않았으면 에러가 났을 것이다.)

    그런데 "hasOwnProperty"는 내가만든것이 아니라 빌트인 오브젝트에서 만든것이다

    그래서 이것은 false가 반환된다
  */
  console.log(own);

  debugger;

  /*
  
                - propertyIsEnumerable()

        - 구분                      - 데이터(값)

        - object                    - 인스턴스, 오브젝트
        - 파라미터                  - 프로퍼티 이름
        - 반환                      - true, false

        ------------------------------------------------

        -- 오브젝트에서 프로퍼티를

        ----> 열거할 수 있으면 true 반환
        ----> 열거할 수 없으면 false 반환
  */
 console.log('----열거 가능----');
  obj = {sports : "축구"};
  // 1. {sports : "축구"} 형태로 생성한 인스턴스는
  
  console.log(obj.propertyIsEnumerable("sports"));
  // 2. obj의 프로퍼티를 열거할 수 있다

  /*
    파라미터에다가 sport 프로퍼티 이름을 작성했다

    그런데 이형태는 for ~ in 문으로 열거를 할 수 있다

    따라서 이것은 true가 나온다
  */

  debugger;
  
  console.log('----열거 불가----');
  obj = {sports : "축구"};
  
  Object.defineProperty(obj,"sports",{enumerable : false});
  // 1. {enumerable: false}로 열거 불가 설정
  
  console.log(obj.propertyIsEnumerable("sports"));
  
  for(var name in obj) {
  // 2. for-in 문에서 프로퍼티가 열거되지 않는다
    console.log(name);
  }
  // 이것이 콘솔창에 뜨지않는이유는 열거할수 없는상태이기때문에
  // for ~in 문안에 들어가지도 않는다

  // 3. Object(ES5에서 다룬다)

  
  /*
    앞과 같이 sports : "축구"로 obj를 만들었다

    defineProperty는 ES5에서 나온다. 그러나 여기서 먼저 사용한것은

    enumerable: false를 사용하기 위해서다.

    enumerable: false은 열거할 수 없는 상태로 설정하는 것이다

    defineProperty의 첫번째 파라미터에다 obj를 작성하고 두번째 파라미터에다 프로퍼티

    이름을 작성한다. 그리고 중괄호에 enumerable:false를 작성하면 sports 프로퍼티를 열거할

    수 없는 상태로 설정한다.

    즉, for~in문으로 돌려도 나오지 않는다.

    --- 이와같이 ES5에서는 프로퍼티를 열거하거나 삭제하거나 변경하거나 그런 함수들이 추가되었다.
  */
 
 debugger;

}



