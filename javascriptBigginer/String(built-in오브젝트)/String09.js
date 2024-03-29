/**
  * 프로그램 설명문서 주석
  * 2021.01.16 수업
  * 
  *     ======== match() ========
  * 
  *     - 구분                  - 데이터(값)
  * 
  *     - data                  - 매치 대상
  * 
  *     - 파라미터              - 정규표현식, 문자열
  * 
  *     - 반환                  - 매치 결과
  * 
  *     ---------------------------------------
  *     -- 매치 결과를 배열로 반환
  * 
  *     ---> 매치 대상에 정규 표현식의 패턴을 적용하여
  *          매치하고 매치 결과를 반환
  * 
  *     ---> 문자열 작성 가능,
  *          엔진이 정규 표현식으로 변환하여 매치
  * 
  * 
  *     -- 정규 표현식 (문자열이 대상이다)
  * 
  *     
  *     ---> 문자열을 패턴으로 매치
  * 
  *     ---> 패턴(pattern) 형태: ^,$,*,+ 등(기호마다 기능을 가지고 있다)         
  *     
  * 
  *     ------> ^(캐럿 = 첫문자에 매치), $(끝문자에 매치) 이러한기능을 문자열에 매치
  * 
  *     ------> 각각의 패턴에 일치하는 문자가 추출된다
  * 
  *     ----------> 일치가 하나의개념이라면 매치는 다수의 개념이다.
  * 
  *     ----------> 따라서 배열로 반환한다
 */

console.log("=====================================");
window.onload = function() {
  "use strict"
  debugger;
  
  var value = "Sports";
  console.log(value.match(/s/));
  // 1. 매치는 정규 표현식 용어

  // --------------> 정규표현식은 /와/ 사이에 작성한다
  // 현재 s는 문자이다

  // 2. match(/s/)에서
  //    /s/는 정규 표현식으로 소문자 s를 매치

  // 3. "Sports" 끝에 s가 있으므로 매치되며
  //    매치된 문자를 배열로 반환(하나이더라도)

  console.log(value.match("spo"));
  // 이것은 문자열로 작성한것이다(문자열로도 작성가능)

  //  4. match("spo")에서 spo가 있으나
  //     대문자 s이므로 null 반환

  // 일반적으로 존재하지 않으면 undefined를반환한다. 
  // 그러나 null을 반환했다,
  // 그뜻은 무언가 프로세스를 했다는 뜻이다.( 무언가 처리를 했는데 없다라는 뉘앙스)


  
  /*
      string 오브젝트에는 정규표현식을 처리할 수 있는 기능이 없다

      그래서 정규표현식 오브젝트를 호출한다.

      그리고 파라미터 값("spo")을 넘겨준다.

      그러면 정규표현식 오브젝트에서 정규표현식형태로변환한다. 즉, /spo/ 형태

      그래서 이렇게 변환하여 매치를 하게된다.
  */

  debugger;


  /*
                      - replace()

  
        - 구분                        - 데이터(값)

        - data                        - 치환대상

        - 파라미터                     - 정규표현식, 문자열
                                      - 대체할 값, 함수

        - 반환                        - 치환 결과
  
        --------------------------------------------------

        --  매치 결과를
            파라미터에 작성한 값으로 대체하여 반환한다

        --  두 번째 파라미터에 함수를 작성하면
            먼저 함수를 실행하고
            함수에서 반환한 값으로 대체

        
  */

  var value2 = "abcabc";
  console.log(value2.replace("a", "바꿈"));
  console.log(value2.replace(/a/, "바꿈"));
  // 1. /a/는 처음 하나만 바꿈

  // -- 처음에 한번 매치되면 매치되는 시점에서 끝난다

  // 정규표현식에서는 /a/뒤에다가 g를 작성할수있다(g = global의 약칭)

  // 그것은 전체에서 a를 전부바꾸는뜻
  
  function change(){
    return "함수";
  }
  console.log(value2.replace(/a/, change()));
  // 2. 함수를 실행하고 반환된 값으로 바꿈
  


  debugger;



  /*
                - search()


      - 구분                          - 데이터(값)

      - data                          - 검색 대상
      - 파라미터                      - 정규 표현식, 문자열
      - 반환                          - 매치된 인덱스

      --------------------------------------------------

      -- 검색된 첫 번째 인덱스 반환

      ----> 매치되지 않으면 -1 반환


      --------> indexOf()와 비슷하다
      ----------> indexOf()는 하나밖에 안된다. 그러나 정규표현식은 다양한 조건을 작성할 수 있다.
  */
  var value3 ="cbacba";

  console.log(value3.search(/a/));
  // 1. 매치된 첫 번째 인덱스 반환



  // - 정규표현식은 복잡하게 처리할때 사용 할 수 있다.

  // 예)정규표현식에서는 다양한 조건들 즉 a이면서 다음에오는것이 c이면서 그리고 또 다음에 오는것이
  
  // 아무문자가 오거나 그다음에는 또 a가온다.

  // -- 이런식으로 복합적으로 조건을 작성할수 있다/(이안의 패턴에다)/

  
  console.log(value3.search("K"));
  // 2. K가 없으므로 매치되지 않음
  //    매치되지 않으면 -1 반환

  debugger;


  /*
                - split()
        -------> 분리대상을 분리시키는것

      - 구분                      - 데이터(값)

      - data                      - 분리 대상

      - 파라미터                   - 분리자(separator):정규 표현식, 문자열
                                  - 반환 수

      - 반환                       - 결과    

      ------------------------------------------------------

      -- 분리 대상을 분리자로 분리하여 배열로 반환

      -- 분리자를 작성하지 않은 경우

      -- 두 번째 파라미터에 반환 수를 작성
  */

  console.log("12_34_56".split("_"));

  // 1. "_"를 분리자로 사용

  // 2. "12_34_56"을 "_"로 분리

  // ---> 이때 분리자는 반환되지 않는다


  console.log('----------분리자를 작성하지 않은 경우-----');

  var value4 = "123"

  console.log(value4.split(""));
  // 1. 분리자에 빈 문자열을 작성하면
  //    문자를 하나씩 분리하여 반환

  console.log(value4.split());
  // 2. 분리자를 작성하지 않으면
  //    분리 대상 전체를 하나의 배열로 반환


  debugger;


  console.log('----------두 번째에 숫자 작성-----');

  var value5 = "12_34_56_78"

  console.log(value5.split("_",3));
  // 1. 두 번째 파라미터에 숫자를 작성하면
  //    앞에서부터 수만큼만 반환

  value5 = "123"
  console.log(value5.split("A"));
  // 2. 분리자가 분리 대상에 없으면 
  //    분리 대상 전체를 하나의 배열로 반환









  debugger;

};



