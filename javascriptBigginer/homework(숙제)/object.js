/**
  * 프로그램 설명문서 주석
  * 2021.01.31 테스트
  * 
  *                   - toString()

        - 구분                - 데이터(값)

        - object              - object 인스턴스
        - 파라미터             - 사용 불가
        - 반환                - 변환한 값

        -----------------------------------------

        -- 인스턴스 '타입'을 "문자열로 '표시'"

        -- 오브젝트에 toString()이 있으면
        ----> toString()이 호출되고
        ----> 없으면 Object의 toString()이 호출된다



          *      ====== call() 메소드 ========
  * 
  *      ----> call() 메소드 앞에 호출 할 함수를 작성한다
  *      ----> 그리고 첫번째 파라미터에 호출될 함수에서 this로 참조할 오브젝트를 작성한다
  *      ----> 그리고 두번째이후의 파라미터에 ,로 구분하여 호출될 함수로 넘겨줄 파라미터를 작성한다
  *      ----> 물론 이것은 선택이다
  * 
  *      - 구분                  - 데이터(값)
  * 
  *      - object                - 호출할 함수 이름
  *      - 파라미터               - this로 참조할 오브젝트
  *                              - 호출된 함수로 넘겨줄 파라미터 opt
  * 
  *      - 반환                  - 호출된 함수에서 반환한 값
  * 
  *      -----------------------------------------------------
  * 
  *      -- getTotal.call(this,10,20);
  * 
  *      -- 첫 번째 파라미터
  *      ----> 호출된 함수에서 this로 참조할 오브젝트
  *      ----> 일반적으로 this 사용
  *            다른 오브젝트 작성 가능
  */

  /**
 *  Object는
  *      
  *      -- 파라미터의 데이터 타입에 따라 생성할 인스턴스가 결정된다
 */

console.log("=====================================");

window.onload = function() {
 "use strict"

console.log(window);

// var numIns = new Number(123);

// console.log(typeof numIns);

// debugger;

// var objType = Object.prototype.toString(numIns);
// var numType = Object.prototype.toString.call(numIns);
// console.log(objType);
// console.log(numType);

// debugger;



/* 질문글 */

var f1 = function(){};
// function 표현식. function 오브젝트를 f1에할당
// ( 빌트인 Function 오브젝트로 만든 인스턴스인 function 오브젝트 )

debugger;
console.log(Object.prototype.toString.call(f1));
// Global오브젝트가 호스트한 Window오브젝트안에 있는 Object.prototype.toString에 연결.
// 그후 call메소드로 Object.prototype.toString에 f1을 넘겨줌

// toString은 인스턴스'타입'을 '문자열'로 "표시"하므로
// [object Function] 반환

var f2 = new f1;
// f1 function 오브젝트(인스턴스)에서 f1.prototype안에있는 내용을
// constructor를 이용하여 인스턴스를 생성해 f2.__proto__에 할당
debugger;


console.log(Object.prototype.toString.call(f2));
// 위와 마찬가지로 진행.하지만 f2는 f1의 인스턴스
// f2.__proto__의 타입은 Object이므로
// ( 강좌에서 설명해주신대로 빌트인 오브젝트안을까보면 거의 Object형태의
//  __proto__가 들어있으므로... 안들어가있는 것도 있다 )
// [object Object] 반환

var s1 = String;
// String 오브젝트를 s1에 할당
debugger;
var s2 = new s1;
// s1 인스턴스를 생성하여 s2에 할당
debugger;
console.log(Object.prototype.toString.call(s1));
// 위와 마찬가지로 진행. s1은 function 타입 이므로
// 즉, [object Function] 반환

console.log(Object.prototype.toString.call(s2));
// 위와 마찬가지로 진행. s1에서 String인스턴스를 생성하여 s2에 할당
// 즉, [object String] 반환

// 만약 여기서 한번더 들어가고 싶다면 어쩔수 없지만
// 애는 생성자를 만드는 프로토 타입을 가지고 있지 않다

// var s3 = new s2.__proto__;
// console.log(Object.prototype.toString.call(s3));


debugger;
}



