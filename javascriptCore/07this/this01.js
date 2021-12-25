
/**
 * 프로그램 설명문서 주석
 * 2021.06 18 수업
 *
 *
 *           ===== this 개요 =====
 *
 *      - 키워드
 *      - obj.name() 형태로 호출한
 *      --> 함수(메소드)에서 this로
 *      --> 인스턴스(오브젝트)를 참조
 *      
 *      - 실행 콘텍스트의
 *        this 바인딩 컴포넌트에 바인딩
 *
 *      ----------------------------------------------------
 *      
 *           ===== this와 글로벌 오브젝트 =====
 *      
 *      - 글로벌 오브젝트에서 this는
 *      --> 글로벌 오브젝트 참조
 *          (글로벌 함수를 호출할때는 함수앞에다 글로벌 오브젝트를
 *           작성할 수 없다. 그런데 그것은 묵시적인 것으로써
 *           함수앞에는 글로벌 오브젝트가 존재하는 것으로 간주된다)
 *      
 *      - this와 window 오브젝트
 *      --> window는
 *      --> JS에서 만든것이 아니며
 *      --> 글로벌 오브젝트의 스코프도 아님
 *      --> 그런데 window와 글로벌 오브젝트를
 *          같은 선상에서 사용
 *          
 *      - Host 오브젝트 개념 적용하기 때문에 그렇다
 *
 *
 *      ----------------------------------------------------
 *
 *           ===== this와 글로벌 오브젝트 =====
 *
 *      - 글로벌 오브젝트에 코드 작성
 *        window.onload = function(){
 *            // 안이 아니라 밖에 코드 작성
 *        };
 *      
 *      - this가 window 참조
 *      - this로 글로벌 변수 사용
 *      - window로 글로벌 변수 사용
 *      - this.value = 100; 형태로 값 할당
 *
 */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

log('this와 window');
// this가 window를 참조하는 경우
console.log(this === window);
// :: true
// 1. true가 출력된 것은 값과 타입이 같다는 것


log('this로 글로벌 변수 악세스');
// this로 글로벌 변수 사용
var value = 100;
console.log(this.value);
// :: 100
// 1. var value = 100;
//    value는 글로벌 변수

// 2. this.value;
//    this가 글로벌 오브젝트를 참조하므로
//    this.value 형태로 글로벌 변수 사용 가능

log('window로 글로벌 변수 악세스');
// window로 글로벌변수 사용
var value2 = 100;
console.log(window.value);
// :: 100
// 1. window.value

// 2. window가 글로벌 오브젝트를 참조하므로
//    window.value 형태로 글로벌 변수 사용 가능

/**
 *  위의 식으로 보아 window === global이라고 보아도 되지만,
 *  실체는 다르다라는 것.
 */

log('this로 값 할당');
this.value = 100;
console.log(window.value);
// :: 100
// 1. this.value = 100;

// 2. this가 글로벌 오브젝트를 참조하므로
//    글로벌 오브젝트에 설정된다.

// 3. window가 글로벌 오브젝트를 참조하므로
//    value를 사용할 수 있다.

// 4. window 오브젝트와 같이 다른 오브젝트를
//    마치 내것 처럼 사용하는 개념을
//    Host 오브젝트라고 한다
//    DOM 오브젝트도 Host 오브젝트이다.

/**
 *  자바스크립트안에서 다른 오브젝트를 마치 내것처럼
 *  사용하는 개념을 Host 오브젝트라고 한다.
 *
 *  DOM 오브젝트도 Host 오브젝트이다.
 *  이런 논리로 인해서 this와 window가,
 *  즉, 글로벌 오브젝트와 window가 같은 선상에서 사용되는 것이다.
 */

debugger;

/**
 *           ===== this와 window 오브젝트 =====
 *
 *      - window.onload = function(){
 *          // 여기에 코드 작성
 *      }
 *
 *      --> onload는 이벤트 핸들함수이다.
 *          즉, onload이벤트가 발생되면
 *          function 안에 작성한 코드가 실행되게 되는 것이다.
 *
 *      1. this가 window를 참조하는 경우
 *      2. this로 로컬(지역) 변수 사용
 *      3. this.value = 100; 형태로 값 할당
 *
 */

window.onload = function() {
    
    log('this와 window');
    console.log( this === window);
    // :: true
    // 1. true가 출력된 것은 값과 타입이 같다라는 것

    // 2. this가 window를 참조하는 것은
    //  - window.onload = function(){...}에서
    //  - onload()가 window의 핸들러 함수이기 때문에 그렇다
    // ----> 노놉, onload 앞에 window가 있자네, 그렇니깐 window를 참조하지...ㅋㅋㅋ

    /**
     *  true가 출력된 것은 onload도 어쨌든, function 오브젝트이다.
     *  비록, event를 처리하는 함수이긴 하지만, 어쨌든 함수이다.
     *  onload앞에 작성한 window를 함수안에서 this로 참조하기 때문에 그렇다
     *  
     *  -- onload이벤트가 발생되면,
     *     실행콘텍스트를 생성하게 되고, onload앞에 작성한
     *     window오브젝트를 this바인딩컴포넌트에 바인딩시켜놓는다.
     *
     *    - 그리고 함수안에서 this로 그것을 참조하게 되니깐,
     *      당연히 window와 this는 같다.
     */

    log('this로 지역 변수 악세스');
    var value3 = 100;
    console.log(this.value3);
    // :: undefined
    
    // 1. var value3 = 100;
    //    value3는 핸들러 함수의 지역 변수

    // 2. this.value;
    //  - this가 window 오브젝트를 참조하므로
    //  - this.value로 지역 변수에 악세스할 수 없다.
    // this를 사용하면 this 바인딩 컴포넌트에가서 찾는데
    // 당연히 this가 없으니 안나온다.
    
    log('this로 값 할당');
    this.value4 = 100;
    console.log(window.value4);
    // :: 100

    // 1. this.value = 100;

    // 2. this가 window 오브젝트를 참조하므로
    //    window 오브젝트에 설정된다.

    // window오브젝트의 value 프로퍼티에 100을 할당한 것.
}

/**
 *          ===== 정리 =====
 *
 *      - 함수가 되든 이벤트 핸들러 함수가 되든,
 *        함수 앞에 작성한 오브젝트를, 함수에서 this로 참조한다라는 것.
 *
 *      - 그것이 글로벌 오브젝트가 되든, 일반 오브젝트가 되든 같다.
 */
debugger;























