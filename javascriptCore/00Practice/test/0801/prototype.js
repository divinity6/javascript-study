/**
 * 프로그램 설명문서 주석
 * 2021.08 01 연습
 *
 *
 *           ===== 프로토타입 =====
 */
console.log("=====================================");
"use strict"

let f = function () {
    this.a = 1;
    this.b = 2;
}

// o 라는 객체, 속성은 'a'와 'b'
let o = new f();

// f 함수의 prototype 속성 값 추가
f.prototype.b = 3;
f.prototype.c = 4;
// f.prototype = {b: 3, c: 4}; 라고 하지 마라, 
// 해당 코드는 prototype chain 을 망가뜨림

// o.[[Prototype]]은 속성'b'와 'c'를 가지고 있다
// o.[[Prototype]].[[Prototype]]은 Object.prototype이다

// 마지막으로 o.[[Prototype]].[[Prototype]].[[Prototype]]은 null 이다.
// null은 프로토타입의 종단을 말하며 정의에 의해 추가 [[Prototype]]은 없다.
// { a: 1 , b: 2} ---> { b: 3, c: 4} ---> Object.prototype ---> null

// o는 'a'라는 속성을 가지는가? 그렇다. 속성의 값은 1이다.
console.log(o.a);

// o는 'b'라는 속성을 가지는가? 그렇다. 속성의 값은 2이다.
// 프로토타입 역시 'b'라는 속성을 가지지만
// 이 값은 쓰이지 않는다. 이것을 "속성의 가려짐(property shadowing)" 이라고 부른다.
console.log(o.b);

// o는 'c'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'c'라는 속성을 가지는가? 가지고 값은 4이다.
console.log(o.c);

// o는 'd'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'd'라는 속성을 가지는가? 아니다. 다시 프로토타입을 확인해보자.
// o.[[Prototype]].[[Prototype]]은 null이다. 찾는 것을 그만두자.
// 속성이 발견되지 않았기 때문에 undefined를 반환한다.
console.log(o.d);

console.log('------------------------------------------------------------------');
var obj = {
    a: 2,
    m: function (b) {
        return this.a + 1;
    }
};

// obj.m을 호출하면 'this' 는 obj를 가리킨다.
console.log(obj.m());

// p 는 프로토타입을 obj로 가지는 오브젝트이다.
var p = Object.create(obj);
debugger;
console.log('------------------------------------------------------------------');

// p 에 'a'라는 새로운 속성을 만들었다.
p.a = 12;

// p.m이 호출 될 때 'this' 는 'p'를 가리킨다.
// 따라서 o의 함수 m을 상속 받으며,
// 'this.a'는 p.a를 나타내며 p의 개인 속성 'a'가 된다.
console.log(p.m());

function doSomething() {
};

// It does not matter how you declare the function, a
//  function in JavaScript will always have a default
//  prototype property.
console.log(doSomething.prototype);
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);

var doSomeInstancing = new doSomething();

doSomeInstancing.prop = "some value";
console.log(doSomeInstancing);

// 기본적으로, 어떠한 함수던지 그 함수의
// prototype 속성의 __proto__는 window.Object.prototype

// doSomeInstancing의 __proto__의 __proto__의 __proto__는 존재할 수 없다
// (window.Object.prototype의 __proto__는 null

console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
// :: some value
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
// :: bar
console.log("doSomething.prop:           " + doSomething.prop);
// :: undefined
console.log("doSomething.foo:            " + doSomething.foo);
// :: undefined
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
// :: undefined
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
// :: bar

// prototype에 들어있는 것은 자기자신에서 호출하려면 prototype 명시

console.log('------------------------------------------------------------------');


// o 객체는 프로토타입으로 Object.prototype 을 가진다.
// 이로 인해 o.hasOwnProperty('a') 같은 코드를 사용할 수 있다.
// hasOwnProperty 라는 속성은 Object.prototype 의 속성이다.
// Object.prototype 의 프로토타입은 null 이다.
// o ---> Object.prototype ---> null

var obj2 = {a: 1};

// Array.prototype을 상속받은 배열도 마찬가지다.
// (이번에는 indexOf, forEach 등의 메소드를 가진다)
// 프로토타입 체인은 다음과 같다.
// a ---> Array.prototype ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];


// 함수는 Function.prototype 을 상속받는다.
// (이 프로토타입은 call, bind 같은 메소드를 가진다)
// f ---> Function.prototype ---> Object.prototype ---> null
function fn() {
    return 2;
}

debugger;

console.log('------------------------------------------------------------------');

function Graph() {
    this.vertexes = [];
    this.edges = [];
}

Graph.prototype = {
    addVertex: function (v) {
        this.vertexes.push(v);
    }
};

// g 'vertexes' 와 'edges'를 속성으로 가지는 객체이다.
// 생성시 g.[[Prototype]]은 Graph.prototype의 값과 같은 값을 가진다.
var g = new Graph();

debugger;

console.log('------------------------------------------------------------------');
var a2 = { a: 1};

// b ---> a ---> Object.prototype ---> null
var b2 = Object.create(a2);
console.log(b2.a); // 1 (상속됨)


// c ---> b ---> a ---> Object.prototype ---> null
var c2 = Object.create(b2);

// d ---> null
// undefined이다. 왜냐하면 d는 Object.prototype을 상속받지 않기 때문이다
var d2 = Object.create(null);
console.log(d2.hasOwnProperty);
debugger;


// 프로토타입 체인에 걸친 속성 검색으로 성능에 나쁜 영향을 줄 수 있으며,
// 때때로 치명적일 수 있다. 또한 존재하지도 않는 속성에 접근하려는 시도는
// 항상 모든 프로토타입 체인인 전체를 탐색해서 확인하게 만든다.

// hasOwnProperty 메소드만이 속성을 확인하고 프로토타입 체인 전체를 훑지 않게 할 수 있다.