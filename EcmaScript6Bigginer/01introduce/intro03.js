/**
 * 프로그램 설명문서 주석
 * 2021.07 22 수업
 *
 *
 *           ===== 오브젝트, 인스턴스 =====
 *
 *      - Built-in 오브젝트
 *      --> Function, Object, Array 등
 *          (빌트-인된 오브젝트들을 뜻함)
 *      
 *      - 오브젝트(objcet)
 *      --> Built-in 오브젝트로 생성한 오브젝트
 *      --> function book(){코드}
 *      --> [1,2], {key:value}
 *
 *      - 인스턴스(Instance)
 *      --> new 연산자로 생성한 오브젝트
 *      --> new Book();
 *
 *
 */
console.log("=====================================");

window.onload = function () {
    "use strict"
    // console.log 사용
    var log = function (value) {
        console.log('--- ' + value + ' ---');
    };
};


/**
 *
 *           ===== 프로퍼티, 함수 =====
 *
 *      - property key와 name 차이
 *        (ES5 까지는 구분할 필요가 없지만 ES6부터는 구분할 필요가 있다)
 *      --> property name: String
 *      ----> property name은 type이 String.
 *
 *      --> property key : String과 Symbol
 *      ----> property key는 String에 Symbol 추가.
 *            이것을 구분해야 하는이유: property name이나 property key라고 이야기하면
 *            이 기준에 따라 저프로퍼티에는 Symbol을 사용한다, 안한다의 뉘앙스 차이
 *
 *      --> ES6 스펙, 6.1.7 The Object Type
 *
 *      - 함수, 메소드
 *      --> ES5 : function, method
 *
 *      --> ES6 : function, method, static method
 *      ----> static method는 class에서 사용한다
 *
 *      --> Array.isArray()
 *          (함수는 'Object.함수이름' 형태, 그리고 대상값을 파라미터에 작성 )
 *      --> Array.prototype.forEach()
 *          (한편 메서드는 prototype에 연결한 형태, 그리고 대상값은 메서드앞에 작성)
 */

/**
 *
 *           ===== 뉘앙스 고려 ======
 *
 *      - ES6+에 새로운 용어가 많다
 *      --> 직역에 따른 뉘앙스 차이를 피하기 위해
 *      --> 되도록 영어 발음으로 표기
 *      
 *      - 용어이므로 개념 중심으로 접근 필요
 *        (직역을 하게되면 직역한 뉘앙스로 받아들인다)
 */