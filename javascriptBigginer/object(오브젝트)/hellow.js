/**
  * 프로그램 설명문서 주석
  * 2021.01.02 수업
  * 
  * 오브젝트(Object,대문자) {}
  * 
  * + 데이터를 저장하는 것이 중점
  * 
  *  =====프로퍼티=====
  * 
  * - Property
  * --> {name:value} 형태
  * 
  * - name에 프로퍼티 이름(name)/키(key)를 작성
  * --> 따옴표 작성 생략 
  * ---> {title:"책"}에서 "title" 처럼 따옴표를 사용해야한다
  * ---> 즉, title은 String 타입이다
  * ---> 그런데, 따옴표를 작성하지 않는 것은
  * ---> 따옴표를 작성하지 않아도 문자열로 간주하기 때문!!
  * 
  * - value에 JS에서 지원하는 타입 작성
  * 
  * --> {a: 123, b:"ABC", c:true, d: {},book: function(){코드}}
  * --->  (안의 타입들 number ,string ,boolean ,object ,function)
  * 
  * - 오브젝트(Object)를 객체라고 부르지만
  * --> 뉘앙스가 다르며, 강좌에서는 오브젝트로 표기
  * --> 오브젝트와 객체 구분이 필요할 때, 별도 표기
 */
console.log("=====================================");
var book1 = {
    //프로퍼티 이름 : 값,
    title: "책",
    //키 : 값
    point: 123
}
window.onload = function() {
    var book1 = {title :"책"};
    debugger;
};


console.log("=====================================");
/*
    1.프로퍼티 name(key)에서 key는 유일하지만 
    name은 중복 될수 있다는 뉘앙스를 풍김

    2.ES3에서는 같은 이름이 등록되기도 함.
    3.ES5에서는 key와 name을 구분하지 않아도 되자만
    ES6에서는 구분해야 함.
*/
console.log("--JS 타입 사용--");
var book = {
    title : "책",
    point : {
        ten: 10,
        bonus: 200,
        promotion: function(){}
    }
};
//오브젝트는 이와같이 value에 {}중괄호를 작성하여 property를 확장할수있다





console.log("=====================================");
/*
   =====프로퍼티 추가,변경=====

   존재하면 바뀌고 없으면 프로퍼티가 추가되는 형태

   - 오브젝트에 프로퍼티 추가,변경
   --> var obj ={};
   --> obj.abc = 123;
   --> obj 오브젝트에 프로퍼티 이름으로 abc가 없으면 abc:123이
   --> 추가되고 abc가 있으면 프로퍼티 값이 123으로 변경됨

   - 작성 방법
   --> 점(.)과 프로퍼티 이름 사용
   --> 대괄호 사용:obj["abc"]
   --> abc 변수 이름 작성: obj[abc]
*/
  
console.log("--점(.)과 프로퍼티 이름 사용--");
var coffee = {};
coffee.title = "JS커피";
console.log(coffee);


console.log("--대괄호 사용:obj['abc']--");
var coffee2 = {};
coffee2["title"] = "JS커피";
// 1.coffee2["title"]처럼 대괄호[] 안에
//   문자열로 프로퍼티 이름 작성
// 2.= 오른쪽에 프로퍼티 값을 작성
console.log(coffee2);



console.log("--변수 이름 사용--");
var coffee3 = { title: "JS커피"};
var varName = "title";
coffee3[varName] = "HTML커피"
console.log(coffee3);










console.log("=====================================");
/*
   =====프로퍼티 값 추출=====

   - 오브젝트에서 프로퍼티 값 추출
   --> var obj = {book:"책"}
   --> var value = obj.book;

   - obj 오브젝트에 프로퍼티 이름인
   --> book이 있으면 프로퍼티 값 반환
   --> book이 없으면 undefined 반환
*/

var obj = {book:"책"};
console.log(obj.book);
console.log(obj["sports"]);







console.log("=====================================");
/*
    =====for ~ in=====

    - 오브젝트에서 프로퍼티를 열거(처음부터 끝까지 모두 읽는것)

    - 형태:
          for(변수 in 오브젝트) 문장;
          for(표현식 in 오브젝트) 문장;
    - for (var item in sports) {코드}
    --> 프로퍼티 이름이 item에 설정
    --> sports[item]으로 프로퍼티 값을 구함
    --> ES3까지는 프로퍼티를 작성한 순서대로 읽혀진다는 것을 보장하지 않음
    --> ES5부터는 작성한 순서대로 읽혀짐
*/

var sports = {
    soccer: "축구",
    baseball: "야구"
};

//sports 오브젝트를 읽으면 item에 soccer및 baseball(이름 및 키)이 들어간다
for (var item in sports){
    console.log(item);
    console.log(sports[item]);
}














