/**
 * 프로그람 설명문서 주석
 * 2022.02 14 수업
 *
 *
 *           ===== Built-in 오브젝트 상속 =====
 *
 *      - 빌트인 오브젝트를 상속받을 수 있다
 *      --> 인스턴스가 빌트인 오브젝트의 특징을 갖게 되며
 *      --> this 로 빌트인 오브젝트에 접근할 수 있다
 *      --> extends 키워드로 구현한다
 *
 *      - 코드 프로세스
 *      --> class Point extends Array {...}
 *      --> const obj = new Point();
 *      --> constructor(){ super() }
 *      --> obj.push(10, 20, 30);
 *      --> obj.getTotal()
 *      --> for (const value of this) {...}
 *
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
{
    "use strict";
    log('------------ 빌트인 오브젝트 상속 ---------------');

    /**
     *  빌트-인 Array 오브젝트를 상속
     */
    class Point extends Array {
        constructor() {
            super();
        };

        getTotal(){
            let total = 0;
            for (const value of this){
                total += value;
            };
            return total;
        }
    };

    const obj = new Point();
    obj.push(10, 20 ,30);
    log(obj);
    // :: Point(3) [10, 20, 30]
    log(obj.getTotal());
    // :: 60
    debugger;

    // 1. class Point extends Array {...}
    //    빌트인 Array 오브젝트를 상속받는다

    // 2. constructor() { super();}
    //    빌트인 오브젝트의 constructor 를 호출한다
    //    생성하는 인스턴스의 __proto__.__proto__ 에
    //    Array.prototype 의 메소드가 설정된다

    // 3. obj.push(10, 20, 30);
    //    obj 가 Point 인스턴스 이지만
    //    Array 오브젝트를 상속받았으므로
    //    push() 메소드를 호출할 수 있다

    // 4. 인스턴스 프로퍼티로
    //    { 0 : 10, 1 : 20, 2: 30 , length: 3 } 이 설정된다
    //    --> 이것은 Array-like

    // 5. obj 에 [10, 20, 30] 이 있으며
    //    obj.__proto__에 getTotal() 이 있고
    //    obj.__proto__.__proto__ 에 Array 오브젝트의
    //    메소드가 있으므로 값과 메소드를 모두 사용할 수 있다.

    // 6. for (const value of this){...}
    //    this 가 obj 인스턴스를 참조하며
    //    Array [ 10, 20 ,30 ] 은 이터러블 오브젝트이므로
    //    for-of 로 반복할 수 있다.
}
/**
 *           ===== Object 상속 =====
 *
 *      - Object 는 클래스가 아니므로
 *      --> 다른 Object 를 상속받을 수 없지만
 *      --> 상속받으면 __proto__
 *          구조가 되는 것을 활용하여
 *          상속을 구현할 수 있다
 *
 *      - Object 상속
 *      --> Object.setPrototypeOf() 으로
 *      --> __proto__ 구조를 만든다
 */
{
    "use strict";
    log('------------ Object 상속 ---------------');
    /**
     * - 아래 것들은 class 가 아닌 Object 들이다
     */
    const Book = {
        getTitle(){
            log("Book");
        }
    };

    const Point = {
        getTitle() {
            debugger;
            /**
             *  - 여기서 super 는 한단계 아래의 __proto__ 를 참조한다
             *  --> 한단계 아래는 super 키워드를 사용해 호춣한다
             */
            super.getTitle();
        }
    };

    Object.setPrototypeOf(Point, Book);
    Point.getTitle();
    // :: Book
    debugger;

    // 1. Book 과 Point 는 Object 이다
    //    getTitle() 은 함수이며 각 Object 에 있다

    // 2. Object.setPrototypeOf(Point, Book);
    //    Point 에 getTitle() 이 있고
    //    Point.__proto__ 에
    //    Book 의 getTitle() 이 있는 구조가 된다

    // 3. Point.getTitle();
    //    Point 오브젝트의 getTitle() 이 호출된다

    // 4. super.getTitle();
    //    super() 가 아니라 super 이다

    // 5. super 는 한 단계 아래의 __proto__ 를 참조한다
    //    아래는 __proto__ 에 연결되어 있다는 뜻이다
    //    따라서, Book 오브젝트의 getTitle() 을 호출한다

    /**
     *  - super 를 함수로 호출한 형태가 아니라,
     *    경로로 지정해주는 모습이다!
     */
}

/**
 *           ===== Image 오브젝트 상속 =====
 *           --> 이것은 DOM 오브젝트다!!
 *
 *      - Image 오브젝트 상속 코드
 *
 *      - super();
 *      --> Image 오브젝트의 constructor 를 호출
 *
 *      - this.src, this.alt, this.title
 *      --> Image 오브젝트를 this 로 참조
 *      --> Image 속성에 값을 할당한다
 */
{
    "use strict";
    log('------------ Image Object 상속 ---------------');
    class ToyStory extends Image {
        constructor() {
            /**
             *  image 의 constructor 를 호출해 인스턴스를 만들어
             *  __proto__.__proto__ 에 첨부시켜야 한다
             */
            super();
        };

        setAttr(){
            debugger;
            this.src = "../00data/img_toystory.jpeg";
            this.alt = "우디와 보 핍이 있고" +
                    "골동품 상점이 있는 모습";
            this.title = '토이스토리';

            /**
             *  위의 property 들이 instance 프로퍼티로 설정된다
             */
        }
    };
    /**
     * - 여기서 dom 오브젝트의 img 가 생성되는구나!!
     */
    const obj = new ToyStory();
    log(obj);
    // :: <img />

    /**
     *  여기 setAttr 안에서 this 는 Image 오브젝트를 상속받은 class 전체를
     *  참조하게 된다
     */
    obj.setAttr();
    document.querySelector('#show').appendChild(obj);
    debugger;
}
/**
 *           ===== Audio 오브젝트 상속 =====
 *
 *      - Audio 오브젝트 상속
 *
 *      - super();
 *      --> Audio 오브젝트의 constructor 를 호출한다
 *
 *      - this.src, this.controls
 *      --> Audio 오브젝트를 this 로 참조
 *      --> Audio 속성에 값을 할당한다
 *      --> 파라미터 값을 받아 속성값을 설정하면
 *          범용 클래스로 사용할 수 있다
 */
{
    "use strict";
    log('------------ Audio Object 상속 ---------------');

    /**
     * Audio 오브젝트를 상속받음
     */
    class Music extends Audio {
        constructor() {
            /**
             *  인스턴스.__proto__.__proto__ 에 설정
             */
            super();
        }

        setAttr(src, controls, muted, loop){
            this.src = src;
            this.controls = controls;
            this.muted = muted;
            this.loop = loop;
        }
    };
    /**
     *  여기에 audio 돔이 잡히네
     */
    const obj = new Music();
    log(obj);
    // :: <audio />
    /**
     * - url 설정
     */
    const src = '../00data/audio_john_denver.mp3';
    obj.setAttr(src , true , true, true);
    debugger;
    document.querySelector('#audio').appendChild(obj);
    debugger;

    /**
     *  - 이처럼 DOM 관련 오브젝트를 상속받을 수 있다!!
     *  --> 웹에 관련된 Object 를 바로 상속받아서 사용할 수 있는
     *      환경을 자바스크립트는 가지고 있다
     */
}
/**
 *  - 이런것들이 앞으로 점점 더 확장될 것이다
 *  --> javascript 의 통합과 융합을 위한 환경이 더욱 더 확장될 것이다.
 *
 *          ===== javascript 가 나아갈 방향이다 =====
 */