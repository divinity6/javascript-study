/**
 * 프로그램 설명문서 주석
 * 2021.06 21 수업
 *
 *
 *           ===== this와 strict 모드 =====
 *
 *      - 오브젝트 함수이름() 형태로 함수 호출
 *      --> 글로벌 오브젝트는 오브젝트 이름이 없으므로
 *      --> 함수 이름만 작성하여 호출
 *
 *      - strict 모드에서는
 *      --> window.book()처럼 book()앞에
 *      --> window를 글로벌 오브젝트로 작성해야 한다
 *
 *      - 함수 앞에 오브젝트를 작성하지 않으면
 *      --> this 바인딩 컴포넌트에 undefined가 설정되므로
 *      --> this로 window(글로벌 오브젝트)를 참조할 수 없음
 *
 *      ---------------------------------------------------------------
 *
 *      "use strict"를 작성하는 것은 필수아닌 필수라고 할 수 있다.
 *
 */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

log('오브젝트 작성하지 않음');

function book() {
    "use strict";
    return this;
};

var result = book();
console.log(result);
// :: undefined

// 1. 호출하는 book() 함수 앞에
//    오브젝트를 작성하지 않으면

// 2. return this에서 undefined 반환
// 3. this 바인딩 컴포넌트에 undefined가 설정된다는 뜻
debugger;

log('window 오브젝트 작성');

function book2() {
    "use strict";
    return this;
};

var obj = window.book2();
console.log(obj === window);
// :: true

// 1. 호출하는 book2() 함수 앞에
//    window 오브젝트 작성

// 2. book2() 함수가 글로벌 함수이므로 호출되며
//    retrun this에서 window 오브젝트 반환
debugger;

/**
 *           ===== this 참조 오브젝트 =====
 *
 *      - this가 참조하는 오브젝트
 *
 *      - 마지막 줄에서 book3.member.get() 호출
 *      --> this가 member 오브젝트 참조
 *      --> book3은 get()을 호출하는 경로 역할
 *
 *      - console.log( this === book3.member);
 *      --> [ 실행 결과 ]에 true가 출력되며
 *      --> this가 book3.member를 참조기 때문이다.
 *
 *      --> 즉, this 바인딩 컴포넌트에
 *          book3.member 오브젝트가 설정된다
 *
 *      - console.log(this.point);
 *      --> this가 book3.member를 참조하므로
 *      --> book3.point 값인 100을 출력하지 않고
 *          book3.member의 200을 출력한다.
 *
 *      ---------------------------------------------
 *      함수는 자신을 호출한 바로앞에 작성한 Object를 함수안에서
 *      this로 참조한다
 *
 */

log('this 참조 오브젝트');
var book3 = {
    point: 100,
    member: {
        point: 200,
        get: function () {
            // get함수에서 member를 this로 참조
            console.log(this === book3.member);
            console.log(this.point);
        }
    }
};
book3.member.get();
// :: true
// :: 200
debugger;

/**
 *           ===== 정리 시간 =====
 *
 *      - 마지막 줄에서 fn()을 호출하면
 *      --> book.get() 함수가 호출된다
 *      
 *      - console.log(this === window)에서
 *      --> true가 출력되는 논리를 제시해라
 *      
 *      - console.log(this.value)에서
 *      --> undefined가 출력되는 논리를 제시하라
 *
 */

log('정리 시간');

var book4 = {
    value : 123,
    get : function() {
        var value = 456;
        console.log( this === window);
        console.log(this.value);
        debugger;
    }
};

var fn = book4.get;
fn();
// :: true
// :: undefined

// fn의 this 는 window!!

/**
 *           ===== 정리 논리 전개 =====
 *
 *      1. 초기화 단계에서 엔진컨트롤이 book4를 만나면 book4에다 undefined를 설정해둔다
 *
 *      2. 그리고 실행단계에서 book4 = {...} 형태로 할당한다
 *      
 *      3. fn = boo4.get을 만나면 book4의 안에있는 get(){}을 fn(){}에 할당한다
 *
 *      4. 그 후 fn()을 만나면 먼저 실행 콘텍스트를 만들고 fn()의 주변환경을 외부 렉시컬 참조에
 *         설정하며, 앞에 아무것도 없기 때문에 window를 this 바인딩 컴포넌트에 설정한다
 *         
 *      5. 엔진컨트롤이 안으로 이동하여 선언적환경 레코드에 value :456을 바인딩함
 *         get안으로 들어가게 되면 this는 window를 참조하게 되므로
 *          console.log( this === window)는 true가 출력된다
 *          
 *      6. 또한 window에는 value 프로퍼티가 없으므로
 *         console.log(this.value);는 undefined가 출력된다
 *
 * 
 */
debugger;
/**
 *           ===== 정리 시간2 =====
 *      - 마지막 줄에서 book()을 호출한다
 *
 *      - [실행 결과] 값이 출력된 논리를 제시하라
 *      --> this.getTitle();
 *      --> getTitle();
 *
 */

log('정리 시간2');
function getTitle(){
    console.log('HTML책');
};

var book5 = function(){
    function getTitle(){
        console.log('JS책');
    };
    this.getTitle();
    getTitle();
};
book5();
// :: 'HTML책'
// :: 'JS책'

/**
 *           ===== 정리 논리 전개2 =====
 *
 *      1. 초기화 단계에서 엔진컨트롤이 book5를 만나면 book5에다 undefined를 설정해둔다
 *
 *      2. 그리고 실행단계에서 window에 getTitle을 바인딩하고, 
 *         book5 = function(){} 형태로 할당하며 주변환경을 [[Scope]]에다가 바인딩한다.
 *
 *      3. 그 후 book5를 만나면 실행콘텍스트를 생성하고, 외부 렉시컬 참조에 [[Scope]]에 있는
 *         프로퍼티들을 할당하며, this 바인딩 컴포넌트에 window를 할당한다
 *
 *      4. 엔진컨트롤이 book5안으로 이동하면 먼저 모든 함수와 변수등을 초기화시킨다
 *         그리고 선언적 환경 레코드에 getTitle을 바인딩시킨다.
 *         그러나 getTitle은 함수 선언문이므로 undefined가 할당되지 않고
 *         getTitle : function(){}을 할당한다.
 *      
 *      5. this는 window를 가르키기 때문에 window의 프로퍼티인된 getTitle을 호출한다.
 *
 *      6. getTitle은 이때 우선적으로 book5함수의 선언적 환경레코드에서 getTitle()을 찾아 실행한다.
 *
 *
 *
 *
 */
debugger;









