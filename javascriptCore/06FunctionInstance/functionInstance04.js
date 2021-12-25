/**
 * 프로그램 설명문서 주석
 * 2021.05 31 수업
 * 
 *           ===== prototype 오브젝트 목적 =====
 * 
 *     - prototype 확장 
 *     ----> prototype에 프로퍼티를 연결하여 prototype 확장
 *     ----> Book.prototype.getPoint = function(){}
 * 
 *     - 프로퍼티 공유
 *     ----> 생성한 인스턴스에서 원본 prototype의 프로퍼티 공유
 *     ----> var obj = new Book(123);
 *           obj.getPoint();
 * 
 *     - 인스턴스 상속(Inheritance)
 *     ----> function 인스턴스를 연결하여 상속
 *     ----> Point.prototype = new Book();
 * 
 *     --------------------------------------------------------------
 * 
 *     - prototype에 프로퍼티를 연결하여 prototype 확장( 가장 큰 목적 )
 *     ----> Book.prototype에 getPoint, setPoint 등등등 연결
 * 
 *     - 프로퍼티 공유
 *     ----> 생성한 인스턴스에서 원본 prototype의 프로퍼티 공유
 *     ----> var obj = new Book(123); 하고 
 *           인스턴스.getPoint를 호출하면 인스턴스에 있는 getPoint를
 *           호출하는 것이 아니라, Book.prototype의 getPoint를
 *           호출하게 된다.
 *           ( getPoint를 각 인스턴스에서 공유하게 되는 것. )
 * 
 *     ----> 만약, 이것을 공유가 아닌 인스턴스를 만들때마다 복사하는
 *           개념으로 간다고 하면, obj를 만개를 만들면 getPoint가
 *           만개가 생기는 논리이다(말이 안됨)
 * 
 *     ----> 원본, 즉  Book.prototype의 getPoint를 악세스할 수 있는,
 *           호출 할 수 있는, path만을 만들어 두는 것이다.
 * 
 *     - 이것이 공유개념이다. 또, 공유개념에는[ 프로퍼티 셰어링 ]이라는
 *       용어를 쓴다.( 이거외에도 다른하나가 더있다. )
 * 
 *     - 인스턴스 상속(Inheritance)
 *     ----> function 인스턴스를 연결하여 상속한다.
 *           Point.prototype = new Book(); 으로 연결
 * 
 *     ----> Point.prototype 에다가 new Book();을 해서 인스턴스를 만들어서
 *           연결을 시키는 것이다( 이것이 상속 개념이다. )
 * 
 *     - 뉘앙스 차이가 있다.Point.prototype = new Book(); 
 *       일반적인 상속 개념과...
 * 
 *    - 자바스크립트에서 상속은 확장개념이다.
 *    ----> 따라서, prototype의 확장이라고도 볼 수 있다.
 * 
 */

/**
 *           ===== 인스턴스 상속1 =====
 * 
 *      - 인스턴스 상속 방법
 *      ----> prototype에 연결된 프로퍼티로
 *            인스턴스로 생성하여
 *            상속받을 prototype에 연결한다.
 *            (prototype에 연결되지 않은 것은, 속하지 않는다는 뜻이다.)
 *      ----> 그래서, prototype-based 상속이라고 한다.
 *            (반대로 class-based 상속이 있다. 
 *             이것과 비교로써 사용하기도 한다.)
 * 
 *      ----> 다른언어는, class상속을 받는다.
 *            ES6도 Class 상속을 받기도 한다. 
 *            그러나 ES6의 Class가 완전하게 prototype-based 상속을
 *            벗어난 것은 아니다.
 *            ( ES6의 Class도 근본적으로 prototype에 연결된 것을 상속받는다 )
 * 
 */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};

log('인스턴스 상속');

// Book이 존재, 생성자 함수.
function Book(title){
    // 여기서 this는 인스턴스를 참조하자늠
    this.title = title;
};

// Book에 prototype이 연결되어 있음
Book.prototype.getTitle = function(){
    return this.title;
};

// Point 생성자 함수.
function Point(title){
    // 여기서의 this는 Point 인스턴스 참조
    Book.call( this , title);
};

// Object.create 함수 호출.
// 매개변수의 Book.prototype은 Book.prototype에 연결되어 있는
// getTitle을 Point.prototype에다가 연결 시켜준다.(할당)

// 즉, Book.prototype에 10개가 연결되어 있다고한다면 
// Point.prototype에 10개의 메소드가 연결된다.

// 두번째 파라미터는 Point.prototype이 갖는 메소드들을 작성하지만,
// 지금은 작성하지 않았다.
// (나중에 주석) Point.prototype에다가 Book.prototype Object를
//               만들어주는 거네 ㅋㅋㅋ
// 근데 Object.create로 붙이면 constructor가 사라지네
// (이걸 따로 붙여 줘야겟네)
// Book.prototype에 상속받았구나
Point.prototype = Object.create( Book.prototype , {} );

// 지금 이런 상태로 만들어 두는 것이다. ( 연결을 시켜두는 것. )
// 그리고나서 new 연산자로 Point 생성자함수를 호출하는 것이다.

// Book을 이용해 생겼네 왜냐하면 constructor 가 Book이기 때문
var obj = new Point("자바스크립트");
// 그냥 Book.prototype보다 한단계 더들어가게되겠네
/// Point.prototype.__proto__.getTitle
console.log( obj.getTitle() );

/**
 * 
 *  1. 그런데 getTitle은 Point.prototype에 연결되어 있지만
 *     Book은 연결되어 있지 않기때문에 Point에서 Book.call( this , title)로
 *     title 파라미터를 넘겨줘서 파라미터 값을 this로 참조하는, 즉 현재 만든
 *     인스턴스에 할당하게 하도록 코드 작성.
 * 
 *  2. Book.prototype에 연결되어 있는 것들은 이미 Point에 연결되어 있으니깐,
 *     getTitle등은 지금처리하지 않아도 된다.
 *     (이미 연결되어 있기 때문.)
 * 
 *  ===== 이런 사전작업을 해야 상속을 할 수 있다.(번거로움) =====
 * 
 *  그러나 ES6에서는 많이 완화되었다. 
 *  ES6 Class에서는 이런기능외에도 중요한 기능들이 추가되었기 때문에
 *  ES6의 Class를 사용 할 것을 권장한다.
 *  
 * 
 */


/**
 *           ===== 인스턴스 상속2 =====
 * 
 *      - JavaScript에서 prototype은 상속보다
 *      ----> 프로퍼티 연결이 의미가 더 크다.
 *            Point.prototype에다가 Book.prototype에 연결되어 있는
 *            메소드들을 쫙 연결, 그리고 인스턴스 생성.
 *      ----> 따라서, 인스턴스 연결도 프로퍼티 연결의 하나라는 것이다.
 *            ( 자바스크립트에서는 상속에대해서 의미를 두고싶지 않은 이유 )
 *      ----> 왜냐하면, 연결개념만 잡고있으면 
 *            Book.prototype을 Point.prototype에다가 전부 연결 시키는 것이다.
 * 
 *      - ES6에서는 위와같은 코드를 직접작성하지 않는 것이지,
 *        내부적으로는 이러한 처리를 할 수 밖에 없다.
 *      ----> 왜냐하면 JavaScript에서 prototype은 
 *            매우 중요한 아키텍쳐이자 메커니즘이다.
 *            ( 이것을 바꿀 수는 없다. 
 *              따라서, 상속의 의미보다는 연결의 의미가 더 크다)
 *      ----> 연결에 대한 정확한 의미를 알고 있다면 상속은 크게 이해하지 
 *            않아도 된다. 라는 것.( 갖다 붙이는 것이기 때문이다. )
 * 
 *      ===== 이부분에서는 뒤에대해서 다시 다룬다 =====
 *      - 왜냐하면, prototype을 붙이게 되면 this로 프로퍼티를 참조하는
 *        개념을 이해할 필요가 있기 때문이다.
 * 
 *      - ES5의 상속은 OOP의 상속기능이 부족하다.
 *        예) 상속받은 프로퍼티를 참조하는 super 키워드 같은 것이 없다.
 *        ( 이것은 상속에서 중요한 키워드 이다. )
 *      ----> 그러나 ES6에서는 이러한 키워드들을 지원을 한다.
 *            (따라서, 상속을 사용하려면 ES6의 Class 상속을 사용해야 한다)
 */

debugger;

log('ES6 Class 상속');

class Book2 {
    constructor(title){
        this.title = title;
    }
    getTitle(){
        return this.title;
    }
};

class Point2 extends Book2 {
    // constructor를 오버라이딩
    constructor(title){
        // 상속받은 프로퍼티를 참조
        super(title);
    };
};

const obj2 = new Point2("자바스크립트");
console.log(obj2.getTitle());

/**
 *  = ES6의 클래스는 키워드 자체도 class 이다.
 *  - ES6에서는 extends라는 키워드를 사용해서 Book을 상속받는다.
 *    constructor를 오버라이딩 할수 있다.
 * 
 *  - 지금 설명 할 수 있는 것은 아니고, 위와같은 형태로 구현한다.
 *    라고 보면 된다.
 * 
 *  - 위의 ES5에는 의도적으로 prototype에다 연결시켜야하는 코드들이 있는데
 *    ES6에는 그러한 코드들은 없는 것이다.
 *    ( 일반적으로 생각하는 class 개념으로 접근하면 된다. )
 * 
 *  - 그리고 Book2에는 prototype도 없다.
 *    그러나 의도적으로 prototype을 작성하지 않은 것이지
 *    getTitle이 prototype에 연결된다.
 *    (따라서, 내부는 같다)
 * 
 *  - 그리고 extends를 하게되면, prototype에 연결하는 처리를 해야하는데,
 *    그것을 연결해주는 처리를 안에서 하게된다.
 *    따라서 단지, 인스턴스를 만들면되는, 그러한 개념이 ES6에서 도입되었다.
 * 
 */