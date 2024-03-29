/**
  * 프로그램 설명문서 주석
  * 2021.02 01 수업
  * 
  *     --> 비기너과정의 마지막과정
  *     --> ES3가 기본을 다진다고하면 ES5는 활용하는 측면이 강하다
  * 
  *      ====== Array 오브젝트 개요 ========
  * 
  *     - 빌트인 오브젝트
  * 
  * 
  *     - Array(배열) 형태
  * 
  *     --> [123,"ABC","가나다"]
  *     --> 대괄호 안에 콤마로 구분하여 값 작성
  * 
  * 
  *     - 배열 엘리먼트(Element)
  * 
  *     --> [123,"ABC"]에서 123,"ABC"
  *         각각을 엘리먼트 또는 요소라고 부름
  * 
  *     --> 강좌에서는 엘리먼트로 표기
  * 
  *     --> 2의 32승(4,294,967,296) -1개
  * 
  * 
  * 
  *     - 인덱스(Index)
  * 
  *     --> 엘리먼트 위치를 인덱스라고 부름
  * 
  *     --> 왼쪽부터 0번 인덱스, 1번 인덱스
  * 
  * 
  *     - 배열 특징
  * 
  *     --> 엘리먼트 작성이 순서를 갖고 있음
  * 
  *     --> 배열 전체를 작성한 순서로 읽거나
  *  
  *     --> 인덱스로 값을 추출할 수 있음
  * 
  *     ---------------------------------------------
  * 
  *     -- 배열안에 있는 각각을 엘리먼트 또는 요소라고부름
  *        그러나 약간의 뉘양스 차이가 있어서 강좌에서는 엘리먼트로 표기
  * 
  *     -- 배열안에 작성할 수 있는 엘리먼트의 수는
  *        2의 32승(4,294,967,296) -1개
  * 
  *     -- 엘리먼트 작성이 순서를 갖는다(이부분은 의미가 굉장히 크다)
  *        값이 나열되어 있어도 순서를 가짐 
  * 
  *     -- 이순서를 액세스하는것이 인덱스다
 */
console.log("=====================================");

window.onload = function() {
  /*
          ===== 배열 생성 방법 =====
  
      - new Array()로 생성
      --> var book = new Array();

      - Array()로 생성
      --> var book = Array();

      - 대괄호로 생성
      --> var book = [];
      --> 일반적으로 이 형태를 사용

      --------------------------------------

      -- new Array로 인스턴스를 만들수 있고

      -- Array()함수를 통해 만들 수 있다.
         그런데 이것도 인스턴스를 만든다. 다만, new 연산자를 사용하지 않은것 뿐

      -- []로 인스턴스를 만들수있다. 어레이 리터럴이라고도 한다
         중괄호로 오브젝트를 만들었던 개념과 같다
         일반적으로 이형태를 사용

      -----------------------------------------

          ===== 엘리먼트 작성 방법 =====

      - var book = ["책1",'책2'];
      - 대괄호 안에 콤마로 구분하여 다수 작성 가능
      - String 타입은 큰 따옴표, 작은 따옴표 모두 가능
      - JS의 모든 타입의 값, 오브젝트 사용 가능(인스턴스도 사용가능)
      - 값을 작성하지 않고 콤마만 작성하면 undefined가 설정됨

      ----------------------------------------------

          ===== 배열 차원 =====

      - 1차원 배열
      --> 대괄호 하나에 엘리먼트 작성
      --> [12,34,56] 형태

      - 2차원 배열
      --> 배열 안에 1차원 배열을 작성
      --> [[12,34,56]]

      - 3차원 배열
      --> 배열 안에 2차원 배열을 작성
      -->[[[12,34,56]]]

  */

  "use strict"
  debugger;

  var list = [12,34,56];
  // []안에 엘리먼트를 작성. 그러면 array 인스턴스를 만들어서 list에 할당한다
  // 그런데 new연산자를 사용하지 않았으므로 object라고 부르겠다 라는뜻
  // 즉, 배열 오브젝트인 것이다.
  for (var k = 0; k < list.length;k++) {
    console.log(list[k]);
  };
  // length 배열의 엘리먼트 수
  // 배열은 인덱스 개념으로 값을 추출하게되고 변경가능등
  
  
  console.log('--- 2차원 배열 ---');

  list = [[12,34,56]];

  for (var k = 0; k<list.length; k++){
    var one = list[k];
    for (var m = 0; m < one.length; m++){
      console.log(one[m]);
    }
  }

  console.log('--- 3차원 배열 ---');
  list = [[[12,34,56]]];

  for (var k = 0; k < list.length; k++){
    var one = list[k];
    for (var m = 0; m < one.length; m++){
      var two = one[m];
      for (var p = 0; p < two.length; p++) {
        console.log(two[p]);
      }
    }
  }

  // 이것은 그렇게 좋은모습은 아니다 3단계는 가독성이 많이 떨어진다
  // 그래서 보통 3차원까지 넘어가면 함수로 만들어서 파라미터에 넘겨준다

}



