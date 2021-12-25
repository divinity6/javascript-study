/**
  * 프로그램 설명문서 주석
  * 2021.02.06 테스트
  * 
  *    - 요구사항
  * 
  *     <ul>
  *         <li id="id1">id1</li>
  *         <li id="id1">id2</li>
  *     </ul>
  * 
  *     - JS로 <li>를 10개 만들어
  *       웹페이지에 표시할 것
  * 
  *     - #id1에서 1은 일련번호로
  *       1에서 10까지 사용해라
  * 
  *     - 조건
  *     --> for() 사용
  *     --> push(),join() 사용
  *     --> 즉, 문자열을 배열 끝에 첨부한 후
  *         엘리먼트를 문자열로 결합
  * 
  *     - 힌트
  *     --> document.body.innerHTML = 결합한 문자열;
  *     --> 결합한 문자열을 <body>의 차일드로 첨부하게 되며, 리스트가 표시된다
  * 
 */

console.log("=====================================");

window.onload = function() {
 "use strict"

  //console.log(window);
  // console.log( document.body.innerHTML = new madeList("응 아니야",10) );
  var menu = document.getElementById("menu")
  menu.innerHTML =  madeList("천재영보",10);
  console.log(typeof madeList("1",10));
  menu.setAttribute("data-size2","die");
}


var madeList = function( id, length ){
  var listValue = [];
  var parsingList;
  
  // concat은 새로 배열을 만들어 리턴하고 push는 뒤에 집어넣기만하네 ㅋㅋㅋ
  var newList = listValue.concat( "<ul>" );

  for( var i = 0; i < length; i++ ){
    var lengthValue = i + 1;
    newList.push( "<li id=" + id + lengthValue + ">" + id + lengthValue + "</li>" );
  }

  newList.push("</ul>");

  parsingList = newList.join("");

  return parsingList;
}


/*

var listLength = { value: 10 };
  var listValue = [];
  var parsingList;
  var menu = document.getElementById("menu");

  listValue.push( "<ul>" );

  for( var i = 0; i < listLength.value; i++ ) {
    var listIndex = i + 1; 
    // html 상에는 'id' 이거나 id 이거나 같게 표시되네 ㅋㅋㅋㅋ
    // listValue.push( "<li id=" + "'id" + listIndex + "'>" + "id" + listIndex + "</li>" );
    listValue.push( "<li id=" + "id" + listIndex + ">" + "id" + listIndex + "</li>" );
    // parsingList = listValue.join( "<li id="+"'id"+ listIndex + "'>" + "id" );
    // parsingList = listValue.join( "id" ); + listIndex + "</li>"
    // debugger;

  }

  listValue.push( "</ul>" );

  //debugger;


  //console.log( 'parsingList :', parsingList );
  console.log( 'listValue :', listValue );
  parsingList = listValue.join( "" );

  menu.innerHTML = parsingList;
  */
