/**
 * 프로그램 설명문서 주석
 * 2021.07 01 수업
 *
 *
 *           ===== this와 콜백 함수 =====
 *
 *           1. ES5의 map(),forEach()처럼
 *           - 콜백 함수가 있는 메소드는
 *           - 두 번째 파라미터에
 *           - this로 참조할 오브젝트를 작성(option)
 *
 *           2. function callback(element, index , data) {
 *               return element + this.value;
 *           };
 *           - map()에서 호출하는 콜백 함수
 *
 *           3. return data.map(callback, obj);
 *           - map()의 두 번째 파라미터에 obj를 작성
 *           - callback()에서 obj를 this로 참조
 *
 *           4. map()의 코드는 바꾸지 않고
 *           - obj 값과 data 파라미터 값만 바꾸면 된다.
 *
 */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

log('콜백 함수에서 this 사용');
var obj = {value: 100};
var data = [5, 6, 7];

var obj2 = {
    data: [5, 6, 7],
    get: function (data) {
        debugger;
        return data.map(callback);
    }

}

function callback(element, index, data) {
    console.log(this);
    // map의 두번째 파라미터에 this를 작성하지않으면 window를 바라보네
    console.log(this === window);
    debugger;
    return element + this.value;
};

function get(data) {
    // return obj2.data.map(callback);
    return data.map(callback, obj);
}


var test = obj2.get(obj2.data);
var result = get(data);
console.log(result);

/**
 *           =====ES5에서는 콜백함수를 가진 메소드가 7개가 있다. =====
 *
 *  - 위에서 메소드 기능이 아닌 다른 관점에서 접근 해보겠다.
 *
 *  --> get함수를 호출하면서 data를 넘겨줬다.
 *      (data가 배열이니깐 map메소드 사용 가능.)
 *
 *  --> 그런데 콜백 함수는 독립적인 것이다.
 *      map메소드는 콜백함수에서 무엇을 하는지 알 필요가 없는 것이다.
 *
 *  - map 메소드의 기능은, 본분은 callback함수를 호출하면서 두번째 파라미터에
 *    obj가 작성되어있으면 이것을 this로 넘겨주는 것.
 *    (바로 이것이 독립성)
 *    (너는너대로 나는나대로 데이터에 따라 호출해주기만할게!)
 *
 *  - 메소드에서 무엇을하든 이전메소드나 다른메소드에 영향을 끼치지 않고 실행될수잇는것!!
 *
 *  - 그렇다면 여기서 기능이하나 분리될 수 있다.
 *  --> map메소드는 데이터를 넘겨주는 게 목적이다
 *      ( 나머지는 callback함수에서 처리. )
 *
 *  --> 그런데 콜백함수에서 처리할 수 있는 element, index,data등은 전체데이터로 넘겨준다
 *      남은것이 this. 그것을 map에서 넘겨주는것
 *      (데이터 중심의 처리)
 *
 *  - 데이터만 넘겨주면 하나가 부족함. 그것이 this.
 *    this까지도 넘겨주겠다라는 것( 그럼으로써완전하게 데이터를 넘겨주는 형태 )
 *
 *  - 이것이 바로 데이터 처리 중심으로 접근한 것.
 *    (map 메소드는 이러한 것을 바탕으로 하고있다)
 *
 *   === 따라서 콜백함수를 가진 7개의 메소드를 정확하게 파악할 필요가 있다 ===
 */

/**
 *           ===== 또 다른 관점의 접근 =====
 *
 *  1. 앞에서 call, apply 메소드를  다루었다.
 *  - this를 넘겨줌으로써 호출되는 함수에서 완전하게 처리가능.
 *
 *  2. map이나 forEach메소드는 배열을 반복하는 것.
 *    (반복이 늘어났다.)
 *  - 이것 또한 this로 참조할 수 있는 메소드를 넘겨준다.
 *    (그런데 이러한 것은 대부분 함수 처리다)
 *
 *  3. 한편 묶음 단위로 처리할 수 있는게 바로 클래스며 인스턴스다.
 *  - 여기의 공통분모도 this이다.
 *    (이렇게 this를 활용한 시스템을 구성하면 한단계높은 활용성을 확보할 수 있다)
 *
 *      call, apply, callback 함수를 가진 method, class, instance
 *      개념으로 하나의 묶음으로 가져간다면 [[this를 굉장히 파워풀]]하게 사용할 수 있다.
 *      (확장성이 있다)
 *
 *   - 이런것의 가장 밑바탕이 되는것이 [[데이터 중심의 처리,접근]]
 *     (함수, 메소드는 고정 - 거기에 데이터만넘겨주면 처리)
 *
 *   ========== 프로그램을 작성할 때 [[[항상 this를 활용]]]할 수 있는 방법을 생각하라 ==========
 *
 */

/**
 *           ===== ES5 array의 콜백함수 =====
 *
 *
 *       - forEach()                   배열을 반복하면서 콜백 함수 실행
 *       ---> 중간에서 빠져 나올수 없다. 처음부터끝까지 무조건돈다
 *
 *       - every()                     반환 값이 false일 때까지만 콜백 함수 실행
 *       --> 즉, 콜백함수에서 true를 반환해주면 반복을 끝낸다
 *
 *       - some()                      반환 값이 true일 때까지만 콜백 함수 실행
 *       --> 콜백함수에서 false를 반환하면 반복종료
 *
 *       - filter()                    콜백 함수에서 true를 반환한 엘리먼트 반환
 *       --> 필터링해준다고 보면된다.
 *
 *       - map()                       콜백 함수에서 반환한 값을 새로운 배열로 반환
 *       --> 애는 콜백함수에서 값을 조종할수 있다는 애기,변경가능
 *
 *       ---->>>> 위 5개의 공통점은 파라미터를 넘겨줄때 파라미터3개를 넘겨준다
 *                첫 번째에는 현재 처리중인 엘리먼트 값, 두 번째에는 인덱스,
 *                세번째는 배열 전체
 *
 *       - reduce()                    콜백 함수의 반환 값을 파라미터 값으로 사용
 *
 *       - reduceRight()               reduce()와 같음. 단, 배열의 끝에서 앞으로 진행
 */