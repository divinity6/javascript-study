/**
 * 프로그램 설명문서 주석
 * 2021.06 14 수업
 *
 *
 *           ===== prototype 프로퍼티 공유 시점 =====
 *
 *      - 사용하는 시점에 prototype의 프로퍼티 공유
 *          (즉, 메소드를 호출하는 시점에 프로토타입의 메소드를 공유한다.!!)
 *
 *      - prototype의 프로퍼티로 인스턴스를 생성하지만
 *      --> 인스턴스의 프로퍼티는
 *          원본 prototype의 프로퍼티를 참조
 *      --> 복사하여 인스턴스에 갖고 있는 개념이 아니다.
 *          (실제로는 패스만을 가지고 그것을 보여주는 것이다.)
 *
 *      - 인스턴스의 메소드를 호출하면
 *      --> 원본 prototype의 메소드를 호출한다
 *
 *      - 원본 prototype에 메소드를 추가하면
 *      --> 생성된 모든 인스턴스에서 추가한 메소드 사용 가능
 *          (왜냐하면 호출하는 시점, 사용하는 시점에 모든 프로퍼티를 공유하기 때문에 그렇다)
 *      --> 원본 prototype의 메소드를 호출하기 때문이다
 *
 */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

/**
 *           ===== prototype 프로퍼티 공유 시점 =====
 *
 *      1. var obj = new Book();
 *      - 인스턴스를 생성하여 obj에 할당
 *
 *      2. console.log(obj.getPoint);
 *      - obj 인스턴스에 getPoint()가 없음
 *
 *      3. Book.prototype.getPoint = function(){
 *          return thi.point;
 *      };
 *      - Book.prototype에 getPoint() 추가
 *      - 앞에서 생성한 obj 인스턴스에서
 *        getPoint()를 사용할 수 있다.
 *
 *      4. var result = obj.getPoint();
 *      - 인스턴스를 생성할 때는 obj에 getPoint가 없었지만
 *      - getPoint()를 호출하기전에
 *        Book.prototype에 getPoint를 추가했으므로
 *        호출할 수 있다.
 *        (이때, prototype에 가서 체크한다는 것)
 *      - 또한, 반대로 삭제를 해버리면 에러가 날 수도 있다.
 *
 *
 *      --> getPoint 메소드가 호출되어 들어가면 getPoint안의
 *          this는 호출하는 시점의 인스턴스를 참조한다.
 *
 *      ----> 실행 콘텍스트로 비교하게 되면, 실행 콘텍스트가 만들어지고,
 *            obj를 this바인딩 컴포넌트에 바인딩시키고,
 *            그것을 this로 참조하게 된다.
 *
 *      ----> 따라서, this가 obj인스턴스를 참조하게 되는 것이다.
 *            (즉, 이미 obj가 this바인딩 컴포넌트에 바인딩 되어있기 때문이다.)*
 *
 *     5. return this.point;
 *      - 추가하더라도 this가 인스턴스를 참조
 *      
 *     6. 이런 특징을 활용하여
 *     - 상황(필요)에 따라 메소드를 추가
 *     - 역동적인 프로그램 개발 가능
 *
 *      ----> 이것은 정적으로 바인딩되는 것이 아니라 동적으로 바인딩 된다.
 *
 *
 */

log('프로퍼티 공유 시점');

function Book() {
    this.point = 100;
};

var obj = new Book();
// :: undefined
// console.log(obj.getPoint);

// Book.prototype = {
//     constructor : Book,
// }

// 이렇게 추가하더라도
Book.prototype.getPoint = function () {
    return this.point;
}

Book.prototype = {
    constructor : Book,
}

// 호출하는 시점에 getPoint메소드가 있는지 체크하고 있으면
// 호출할 수 있다. (obj.getPoint 호출 가능!!)
var result = obj.getPoint();
// :: 100
console.log(result);







function Book(){

    this.point = 100;

}



Book.prototype = {

    constructor: Book,

    getPoint: function(){

        return this.point;

    },

    add: function(){

        console.log(12312331)

    }

}





