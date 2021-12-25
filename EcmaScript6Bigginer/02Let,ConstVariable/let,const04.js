/**
 * 프로그램 설명문서 주석
 * 2021.07 25 수업
 *
 *
 *           ===== let 변수와 var 변수 차이 =====
 *
 *      - for() 문에서 반복할 때마다
 *      --> var 변수는 스코프를 갖지 않음
 *      --> let 변수는 스코프를 가짐
 *
 *
 */
console.log("=====================================");
"use strict";
// console.log 사용
const log = function (value) {
    console.log('--- ' + value + ' ---');
};

/**
 *           ===== var 변수와 스코프 =====
 *
 *      - 선택, 클릭
 *      --> 축구
 *      --> 농구
 *      --> 야구
 *
 *      ** html 파일 **
 *      <ul class="sports">
 *          <li>축구</li>
 *          <li>농구</li>
 *          <li>야구</li>
 *      </ul>
 */

log('var 변수와 스코프');
var node = document.querySelector(".sports");
for (var k = 0; k < node.children.length; k++) {
    // console.log(k);
    node.children[k].onclick = function (event) {
        event.target.style.backgroundColor = "yellow";
        console.log(k);
        debugger;
    };
}
;

// 1. 어떤 것을 클릭하더라도
//    항상 for()문이 끝났을 때의 값인 3을 출력한다.
// 2. var k = 0;에서 k 변수의 스코프는 함수이다.

/**
 *      - document.querySelector(".sports");를 하게되면
 *      --> ul이 var node에 할당된다.
 *      --> 그럴때 node의 childeren.length만큼 돌게 되면 3개를 하나씩돔
 *      --> 그리고 거기에 onclick 이벤트를 설정
 *      --> 그럼 이벤트가 발생하게 되면 event.target에 style에다가
 *          backgroundColor를 "yellow"로 바꾸고 그 값을 찍음
 *
 *      - k가 마지막에 3이되면 fasle가 되어 for문을 빠져나가게 된다.
 *      --> 즉 k의 최종값은 3인 것이다.
 *
 *      - variable 변수는 전체가 하나의 스코프이다.
 *      --> 따라서 for문마다 스코프를 가지는게아니라 전체를 스코프로 가지게되고
 *          var k = 0는 전체에서 하나의 값으로 할당되게 되는 것이다
 *
 *     ----> 즉, 반복문을 돌때마다 k에 값이 재할당되게 된다(전체가 스코프이기 때문 )
 *
 *     ===== 이런측면이 있기에 let변수와 비교해보아야 한다 =====
 */

/**
 *           ===== let 변수와 스코프 =====
 *
 *      - 선택, 클릭
 *      --> 가요
 *      --> 찬송가
 *      --> 불경
 *
 *      ** html 파일 **
 *      <ul class="music">
 *          <li>가요</li>
 *          <li>찬송가</li>
 *          <li>불경</li>
 *      </ul>
 */

log('let 변수와 스코프');
var node2 = document.querySelector('.music');
for (let k = 0; k < node2.children.length; k++) {
    node2.children[k].onclick = function (event) {
        event.target.style.backgroundColor = "yellow";
        console.log(k);
        debugger;
    };
}
;
// 1. var k = 0;을 let k = 0;으로 바꾸었다
// 2. 이벤트를 설정할 때의 k값을 출력한다.

/**
 *      - 가요를 클릭하게 되면 k가 0일때 설정한 이벤트로 인해 값이나오고
 *        찬송가를 클릭하면 k가1일때 설정한 값이나오듯 각각 나온다.
 *
 *      --> let은 이와같이 block 스코프이다.
 *          따라서 block단위로 k값을 스코프를 가져간다.
 *          (즉, var와는 다르게 3개의 블럭에 각각의 k가 3개가 존재)
 *
 *      ----> k값이 유지가 되는 형태.
 *
 *      - let변수와 앞의 var 변수의 값이 나오는 것이 어떤것이 좋은것인지에대해서는
 *        생각 해볼 필요가 있다.
 *
 *      --> var 변수는 전체에서 하나다. 그런데 let변수는 블럭 단위로 가져간다는 것.
 *
 *      ----> 그러면 block 단위로 가져갈 필요가 있을 때는 이렇게 해야하는데,
 *            var과 같이 마지막값을 구한다면, let으로 해야할 필요성은 그다지 없는 것.
 *
 *      ----> 왜냐하면 block을 가져간다는 이야기는 내부에서 뭔가 block단위로
 *            관리를 하고있다는 이야기다. 그러면 이것의 양이 많아진다면 부담될수도 있다는 뜻.
 *
 *      --> 반드시 let변수를 써야하는 이유만 있는 것은 아니다.
 *          (상황에 따라서, 경우에 따라서는 var 변수가 더 효율적일 수도 있다.)
 *
 *      ----> 그러나 뭔가 block단위의 처리를 해야한다고 한다면,
 *            예를 들어 블럭안에서 k값에다 무언가를 곱하고 k값으로 처리하게 된다면,
 *            반드시 let 변수를 써야한다.
 *            (그래서 장단점이 있기 때문에 이와같은 점을 고려해서 개발 해야한다.)
 *

 */


/**
 *      
 *           ===== 위의 let으로 설정한 for문을 푼 형태 =====
 */
{
    let k = 0;
    node.children[k].onclick = function (event) {
        event.target.style.backgroundColor = "yellow";
        console.log(k);
    }
}

{
    let k = 1;
    node.children[k].onclick = function (event) {
        event.target.style.backgroundColor = "yellow";
        console.log(k);
    }
}

{
    let k = 2;
    node.children[k].onclick = function (event) {
        event.target.style.backgroundColor = "yellow";
        console.log(k);
    }
}