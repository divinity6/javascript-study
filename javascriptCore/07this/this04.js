/**
 * 프로그램 설명문서 주석
 * 2021.06 29 수업
 *
 *
 *           ===== this와 call() =====
 *
 *
 *  -------------------------------------------------------------------
 *          구분          타입              데이터(값)
 *  -------------------------------------------------------------------
 *          object      Function        호출할 함수 이름
 *
 *          파라미터      object         this로 참조할 오브젝트
 *                       Any           파라미터opt, 콤마로 구분, 다수 작성가능
 *
 *          반환          Any           호출된 함수에서 반환한 값
 *  -------------------------------------------------------------------
 *
 *      - getTotal.call(this, 10, 20)
 *      --> 10과 20을 파라미터 값으로 넘겨준다.
 *      --> 첫 번째는 파라미터 값으로 넘어가지 않고 두번째부터 넘어간다
 *
 *      - 첫 번째 파라미터에
 *      --> 호출된 함수에서 this로 참조할 오브젝트 작성
 *      --> this 이외에 다른 오브젝트 사용 가능
 *
 *      ==============================================================
 *
 *      1. call() 메소드는 getTotal.call 처럼 함수.call()메소드 형태로 작성
 *      - 첫번째 파라미터는 값으로 넘어가지 않고 두번째부터 넘어간다
 *        (즉 , getTotal 함수에 10,20이 파라미터 값으로 넘어감)
 *
 *      2. 첫 번째 파라미터에
 *      - 호출된 함수에서 this로 참조할 오브젝트를 작성한다.
 *        (일반적으로 this를 작성하긴하지만 this 이외에 다른 오브젝트 사용 가능)
 *        --> 그러면 호출된 함수에서 this로 그 오브젝트를 참조한다는 뜻.
 *
 *      - 즉, this 바인딩 컴포넌트에 첫번째 파라미터에 작성한, object가
 *        바인딩 된다는 뜻이다.
 */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

/**
 *           ===== this 사용 =====
 *
 *  - window.onload = function(){
 *      // onload 밖에 코드 작성
 *      // 즉, 글로벌 오브젝트에서 실행
 *  };
 *
 *  1. get.call(this, 20)
 *  - 첫 번째 파라미터에 this 작성
 *
 *  2. return param + this.value;
 *  - this가 글로벌 오브젝트를 참조하므로
 *  - (var value = 100)을 사용한다
 *
 *  ----- call()을 사용하지 않고 -----
 *  3. return param + this.value;
 *  - get(20)으로 호출하면
 *  - this가 undefined를 참조하므로
 *    에러가 발생한다.
 *
 */

log('this와 call()');
"use strict";
var value = 100;

function get(param) {
    "use strict";
    console.log(this === window);
    return param + this.value;
};
var result = get.call(this, 20);
console.log(result);
// var result2 = get(20);
// console.log(result2);

/**
 *           ===== this 사용(정리) =====
 *
 *  1. get 함수를 호출하면서 call사용.
 *     get함수안의 this가 call(this,20)의 this를 참조한다.
 *     - call(this,20)의 this는 글로벌 오브젝트
 *     - 글로벌 변수인 value를 참조.
 *
 *  2. 그러나 call메소드를 사용하지않고 get을 호출하면서 20을넘겨주면
 *     get앞에 오브젝트를 작성하지않았고, "use strict"모드이기 때문에
 *     이것은 undefined를 참조하게 된다.
 *     (따라서 이코드는 에러가 나게된다)
 *
 *  3. 이와같이 첫번째 파라미터에 작성된 오브젝트를 호출된 함수에서
 *     this로 참조할때 call 메소드를 사용한다.
 *
 */

debugger;

/**
 *           ===== Object 사용 =====
 *
 *  1. var result2 = get2.call(value2, 50);
 *  - call()의 첫 번째에 Object 작성
 *  - 50은 파라미터 값
 *
 *  2. return this.base * this.rate + value;
 *  - this가 { base: 20 , rate : 30 }을 참조
 *  - 20 * 30 + 50
 *
 *  3. this로 참조할 오브젝트를
 *  - 변경할 수 있는 것이 call()의 특징이다.
 *
 */
log('오브젝트 사용');
var get2 = function (value) {
    // 여기의 this는 value2오브젝트를 참조하게 된다.
    console.log(this);
    return this.base * this.rate + value;
};
var value2 = {base: 20, rate: 30};
var result2 = get2.call(value2, 50);
console.log(result2);

// 이와같이 호출된 함수에서 this로 참조할오브젝트를 변경할때 call 메소드를 사용한다
// 일반적으로 이와같은 경우에는 window.get() 하면된다.

// 그런데 call메소드를 사용한 것은 이렇게 this로 참조할 오브젝트를 변경하겠다는 의도가 크다
// 그러므로 get함수안의 코드는 바꿀필요가 없다.
// 호출할 때마다 오브젝트만 바꿔주면된다.
// (그러면 데이터 중심의 접근을 할 수 있는 것이다)

// get 함수안에서는 코드가 바뀌지 않아도 된다라는 것.
// (다만 this로 참조하는 오브젝트만 바뀔 뿐이라는 것)

debugger;

/**
 *           ===== 숫자 작성 =====
 *
 *  1. var result = get.call(123);
 *  - this가 오브젝트를 참조하므로
 *  - 숫자(123)를 작성하면 에러가 발생하지만
 *    (왜냐면 이것은 데이터이기 때문, 오브젝트가 아님)
 *
 *  2. 값(123) 타입에 해당하는
 *  - Number 인스턴스를 생성하고
 *  - 123을 프리미티브 값으로 설정한다.
 *  - this가 Number 인스턴스를 참조한다.
 *
 */
function get3() {
    console.log(this);

    // 123이 Number의 인스턴스이기 때문에
    // Number인스턴스를 this가 참조하게 되고,
    // valueOf로 프리미티브 값을 구하게 된다.
    // ( 설명을 위한것으로 그렇게 사용하는 방법은 아니다. )
    return this.valueOf();
};
var result3 = get3.call(123);
console.log(result3);


/**
 *      ----------- 굉장히 유용함 -----------
 *           ===== this 참조 변경 =====
 *
 *  1. book.point.get.call(book);
 *  - book.point의 get() 호출
 *  - get()에서 this로 book 오브젝트 참조
 *  - this.value가 book.value이므로 123 출력
 *
 *  2. book.point.get.call(book.point);
 *  - book.point의 get()호출
 *  - get()에서 this로 book.point 오브젝트 참조
 *  - this.value가 book.point.value 이므로 456 출력
 *
 *
 */
log('this 참조 변경');
var book = {
    value: 123,
    point: {
        value: 456,
        get: function () {
            console.log(this);
            console.log(this.value);
        }
    }
};

// 누구를 참조하는가를 생각해야함
book.point.get.call(book);
book.point.get.call(book.point);

/**
 *           ===== 정리 =====
 *
 *  - 이와같이 호출된 함수에서 this로 참조할 오브젝트를
 *    함수를 호출하면서 바꾸는 것.
 *    ( 이것이 call메소드의 큰 목적이라고 할 수 있다. )
 *
 *  - 그러면 안의 코드는 바뀌지않음 ( 이것이 목적 )
 *
 *  - 한편, 오브젝트에다 프로퍼티와 함수를 작성.
 *    이렇게 오브젝트 안에다 함수를 작성하는 것도
 *    좋은 방법
 *
 *  - book 안에, book과 관련된 함수가 있다는 시멘틱을 확보할 수 있다.
 *
 */
