/**
 * 프로그램 설명문서 주석
 * 2021.07 06 수업
 *
 *
 *           ===== bind()활용, 이벤트 처리 =====
 *
 *     - 시나리오
 *     - "값 출력"버튼을 클릭하면 값을 표시한다.
 *
 *     - HTML 형태:
 *       <script src="point.js"defer></script>
 *       <button id=point>값 출력 </button>
 *
 *     - 이벤트 처리의 어려움은
 *     --> 이벤트를 설정할 때의 오브젝트를
 *     --> 핸들러함수에서 this로 참조할 수 없다는 것이다.
 *
 *     ----> addEventListener나 onClick으로 설정하면,
 *           핸들러 함수에서 this로 오브젝트를 참조할 수 없다.
 *           (오브젝트를 분실한다)
 *
 *     ----> (이런형태로 코딩을 추천한다)
 *           이런 형태란 ? 오브젝트 안에다가 event를 설정하는 것과
 *           핸들러함수를 같이사용한다.
 *
 *           그러면 이벤트 설정과 핸들러를 한눈에 볼 수 있다.
 *           (물론, 코드가 길어지면 좀더 세분화해서 구분)
 *
 *           --> 때로는 핸들러 함수만 별도로 모아놓는 경우도 있음
 *               (시스템 환경에 따라 다르기도함)
 *
 *     ----> 이것이 필요한 이유 : 핸들러 함수에서 this를 사용할수 있어야함.
 *           왜냐하면 this를 사용하지 않으면 값을 악세스하는 방법이 하나가 사라지기 때문
 *
 *          --> 함수안에서 값을 처리하는 4가지형태중...
 *              (파라미터로 받는것, 변수로 선언하는것, 다른함수 호출하는 것 ,this로 악세스하는 것)
 *
 *          --> this가 사라진다는 것은 매우 곤란하다.
 *
 *     ----> 또한 show 안의 this 는 book 오브젝트 전체를 참조하기 때문에
 *           안의 프로퍼티값을 공유하거나, 다양한 형태로 사용할 수 있는데 그것이 안된다는 것.
 *
 *     - 그러나 bind()로 해결할 수 있게되었다.(신의 한수)
 *
 *     - document.getElementById("point");
 *     --> button#point로 엘리먼트 오브젝트 생성
 *
 *     - node.onclick= this.show.bind(book, node);
 *
 *     --> show()는 onclick 이벤트의 핸들러
 *     ----> element 오브젝트를 사용해서 onclick 이벤트를 설정
 *
 *     --> show()에서 this로 book 오브젝트를 참조하기 위해 바인드
 *
 *     ----> 여기서 this는 book을참조, 그리고 핸들러 함수(show)를 설정하는 것.
 *          그런데 이것을 bind메소드로 묶었다.
 *
 *          --> 무엇을 묶었는가? : 핸들러 함수에서 this로 참조할 수 있는 오브젝트(book).
 *                              이벤트를 설정했던 element object(node).
 *                              ( 물론, 다른 파라미터도 여기에 묶을 수 있다. 필요에 따라... )
 *
 *     --> show() 파라미터 값으로 node를 넘겨준다
 *
 *     - show:function(node,event){}
 *     --> button#point를 클릭했을 때 호출된다.
 *     --> node: 이벤트를 설정한 엘리먼트
 *
 *     ----> 파라미터로 넘겨준 node 정보( bind 메소드의 특징 )
 *     ----> 그럼으로써 이벤트를 설정했던 element 오브젝트의 정보를 얻을 수 있다.
 *           --> 물론 event 오브젝트에도 이러한 정보가 있다.
 *               (그러나 가독성이 높다)
 *
 *     --> event: Event 오브젝트
 *         --> 이안에는 많은 프로퍼티가 존재
 *
 *
 *     - console.log(this.myPoint);
 *      --> bind() 첫 번째 파라미터에 book 오브젝트를 작성했으며
 *      --> 이를 this로 참조하므로 123이 표시된다.
 *
 *
 *      ===== 이벤트 처리에는 거의 대부분 bind 메소드 사용 =====
 *
 *      - 심플하게 처리가능
 *      (그리고 핸들러 함수를 바로 작성할 수도 있긴하지만,
 *       핸들러 함수를 따로 빼면 핸들러 함수가 독립적으로 사용될 수 있기 때문이다)
 *
 *     - 필요하다면 핸들러 함수를 공유할 수도 있다. (때에 따라서 )
 *     --> 이와같이 bind 메소드를 통해서 이벤트를 묶을 수 있다.
 *         ( 핸들러 함수도 묶을 수 있다. -- [[TargetFunction]] :: show가 설정)
 *
 *     --> 그리고, 핸들러 함수에서 this로 참조할 object도 묶을 수 있고,
 *         필요하다면 파라미터를 넘겨줄 수 있다라는 것
 *
 *     - 앞의 예제와 다른것.
 *       bind 메소드로 function 오브젝트를 만들었다.
 *       그리고 그것을 호출. 그러나 호출하는 역할을 event(click)가 해주는 것
 *
 *     ===== 이와같이 event처리시 bind 메소드를 사용하면 매우 심플하게
 *           다양한 값들을 핸들러 함수에서 사용할 수 있다. =====
 *           (event 처리에 있어서는 신의 한수)
 *
 */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

log('point.js 파일의 코드')

const scope = '호출된 시점의 show의 외부 렉시컬 참조는 여기';
var book = {
    myPoint: 100,
    createNode: function () {
        var btnNode = document.createElement("button");
        btnNode.id = 'point';
        btnNode.textContent = "값 출력";
        document.body.append(btnNode)
    },
    setEvent: function () {
        this.createNode();
        // button element 오브젝트를 생성
        var node = document.getElementById('point');
        debugger;

        // node element를 사용해서 onClick 이벤트 설정
        node.onclick = this.show.bind(book, node);
        debugger;
    },
    // 스코프는 함수가 호출될때 바인딩 :: 여기서 호출은 event(click)가 해주는 것
    // 그런데 bind 함수로 바인딩시켜버렸음
    show: function (node, event) {
        console.log(scope);
        console.log(node.textContent);
        console.log(this.myPoint);
        debugger;
    }
}
book.setEvent();
