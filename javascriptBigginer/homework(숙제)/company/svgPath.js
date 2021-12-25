/**
  * 프로그램 설명문서 주석
  * 2021.02.25 테스트
  * 
  * 
  *   svg 패스를 이용해 만들기
  * 
  * 
 */

console.log("=====================================");

window.onload = function() {
 "use strict"


 //요소 집어넣기
 var setHighChart = function( lineHd , ctrCircle ){
   var joinLineList = null;
   var joinCircleList = null;
 
   var imgSrc = "#"
 
   // -- 들어갈 배경
   var hcBg = "<div class='high-chart-bg'></div>";
   // -- 들어갈 이미지 or 박스
   var hcImg = "<img src=" + imgSrc + "alt='응아니야' />";
 
   // -- 원을 감쌀 div
   var ctrCircleHd = "<div><svg class='circle-container'>";
 
   // 패스 + 원
   var ctrCir;
   // ----
   var ctrCircleFt = "</svg></div>"

  // 원(circle) 리스트
  var ctrCircleList = [ ctrCircleHd , ctrCircle , ctrCircleFt ];
 
   // -- 긴 (축)선을 감쌀 div
   var ctrLineHd = "<div class='line-container'><svg>"
   // 긴 (축)선
   var ctrLine;
   // ----
   var ctrLineFt = "<svg></div>"
 
   // 긴 축(중앙선) 리스트
   var ctrLineList = [ ctrLineHd , lineHd , ctrLineFt ];
 
  
 
   joinLineList = ctrLineList.join("");
   joinCircleList = ctrCircleList.join("");
 
   return joinLineList, joinCircleList;
 
 }
 var parentNode = document.getElementsByClassName('container');
 // 이걸 뒤에 붙이는걸로 바꾸면 될듯
 parentNode[0].innerHTML = setHighChart( "<g class='line'></g>" , "<g class='circle'></g>" );
 
 


}


// 자식요소 찾기 
// var parentNode = document.getElementsByClassName('container');
// var obj = null;

// if(parentNode[0].hasChildNodes()){
//   var nodeChildren = parentNode[0].childNodes;
//   for ( var i = 0; i < nodeChildren.length; i++ ){
//     console.log("자식 노드 : " + nodeChildren[i]);
//     if (nodeChildren[i].className == "svg-path"){
//       obj = nodeChildren[i].className;
//       console.log(obj);
//       break;
//     }
//   }

// } else {
//   console.log('DOM내에 해당 요소가 없습니다');
  
// }

