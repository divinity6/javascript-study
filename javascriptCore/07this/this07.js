/**
 * 프로그램 설명문서 주석
 * 2021.07 05 수업
 *
 *
 *           ===== bind() =====
 *
 *  -------------------------------------------------------------------
 *          구분          타입              데이터(값)
 *  -------------------------------------------------------------------
 *          object      Function        호출할 함수 이름
 *
 *          파라미터      object         this로 참조할 오브젝트
 *                       Any           [파라미터]opt
 *
 *          반환          function      function 오브젝트
 *  -------------------------------------------------------------------
 *
 *      - 두 번에 나누어 처리
 *      --> function 오브젝트 생성
 *      --> 생성한 function 오브젝트를 함수로 호출
 *
 *      - 파라미터
 *      --> 1번째 파라미터에 함수에서 this로 참조할 오브젝트
 *      --> 2번째 파라미터에 호출된 함수의 파라미터 값
 *
 *      - 생성한 function을 호출할 때에도 파라미터 작성 가능
 *      --> 두 개의 파라미터를 병합하여 사용
 *
 *  =====================================================================
 *
 *      1. bind() 메소드는 시멘틱 그대로 묶는 것.
 *      --> 무엇을 묶는 것인가? 여기에 초점을 두고 강의를 들어야한다.
 *
 *          묶는 것들 :: function 오브젝트, this, arguments
 *
 *      2. bind 메소드는 두번에 나누어 처리한다
 *      --> 일반적으로 함수는 호출하면 바로실행한다.
 *          그러나 bind()메소드는
 *
 *         * function 오브젝트를 만드는 것과,
 *
 *         * 생성한 function 오브젝트를 함수로 호출하는 두 단계로 나뉘어 있다.
 *
 *      --> 그러면 각각의 단계에서 bind가 발생한다.
 *          ( bind를 위하여 이렇게 나누고 구분한것 )
 *
 *      --> 호출할때 바로 실행하면 묶을수가 없다.
 *          (나눈 이유는 묶기 위해서, bind를 위해 나눈 것이다)
 *
 *      3. 파라미터
 *      --> 첫번째 파라미터에 this로 참조할 오브젝트
 *      --> 두번째 파라미터에 호출된 함수의 파라미터 값
 *
 *          즉, 파라미터 값과 this로 참조할 오브젝트를 묶는 것.
 *          ( 호출된 함수는 bind된 환경을 사용해서 실행한다 )
 *
 *      --> 생성한 function 오브젝트를 호출할 때도 파라미터 작성 가능
 *          그래서 두 개의 파라미터를 병합하여 사용할 수 있다.
 *
 */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

/**
 *           ===== function 오브젝트 생성, 호출 =====
 *
 *      1. var obj = book.get.bind(book);
 *      - book.get()을 호출하지 않고
 *      - function 오브젝트를 생성하여 반환
 *      - 생성한 function 오브젝트를
 *        생성한 오브젝트의 [[TargetFunction]]에 설정
 *
 *      - 처리를 나누어서 하므로 저장 필요
 *        ( [[TargetFunction]]에 저장 )
 *
 *      2. console.log(typeof obj);
 *      - obj의 타입은 function 오브젝트
 *
 *      3. bind()의 첫 번째 파라미터
 *      - get() 함수에서 this로 참조할 오브젝트 작성
 *      - get() 앞에 작성한 오브젝트를 this로 참조하지 않음
 *      - 작성하지 않으면 undefined 설정
 *      - 생성한 function 오브젝트의 [[BoundThis]]에 설정
 *
 *      4. var result = obj();
 *      - bind()로 생성한 function 오브젝트 호출
 *      - book.get() 함수가 호출된다.
 *
 *      5. return this.point;
 *      - this가 [[BoundThis]]를 참조
 *      - 즉, book 오브젝트를 참조하므로 123 반환
 *
 *      =====================================================================
 *
 *      2. console.log(typeof obj);
 *      - obj의 타입은 function 오브젝트
 *        즉 bind가 만든 것은 function 오브젝트!!
 *
 *      3. bind()의 첫 번째 파라미터
 *      - get() 앞에 작성한 오브젝트를 this로 참조하지 않음
 *        (일반적으로 함수앞에 작성한 book을 get함수에서
 *         this로 참조하지만, 파라미터에 작성한 오브젝트를 참조 )
 *
 *      - 작성하지 않으면 undefined 설정
 *        이것이 바인딩. 이때 묶는 것.
 *      (this로 참조할 오브젝트를. 따라서 첫번째 파라미터는 필수)
 *
 *      - 생성한 function 오브젝트의 [[BoundThis]]에 설정
 *        ( var obj = book.get.bind(book); 에서
 *         처리가 분리되기 때문에 저장을 해두어야 한다 )
 *
 *      4. var result = obj();
 *      - bind()로 생성한 function 오브젝트 호출(book.get 호출)
 *
 *      5. return this.point;
 *      - this가 [[BoundThis]]를 참조
 *        (이것은 function 오브젝트에 설정되어 있다)
 *        ( this가 BoundThis에 설정된 오브젝트를 참조 )
 *
 *      ---> call이나 apply에서 this를 넘겨주는 개념
 *
 *
 */

log('function 오브젝트 생성, 호출');

var book = {
    point: 123,
    get: function () {
        console.log(this);
        // :: book
        debugger;
        return this.point;
    }
};
// 오잉 호출이안됬넹
// bind로 생성한 function 오브젝트를 obj에 묶어두네
var obj = book.get.bind(book);
debugger;
console.log(typeof obj);
// :: function
var result = obj();
// 심지어 result의 scope는 window자너 근데 bind(book)의 scope를 따르네
debugger;
console.log(result);
// :: 123
debugger;

/**
 *           ===== 파라미터 병합 =====
 *
 *      1. var obj2 = book2.get.bind(this, 10 ,20)
 *
 *      --> 두 번째, 세 번째 파라미터에 값을 작성했으며
 *      --> book2.get()의 파라미터 값으로 넘겨준다
 *      --> function 오브젝트의 [[BoundArguments]]에 설정
 *          (처리가 분리되기 때문에 저장을 해두는 것)
 *
 *      2. get()함수에 파라미터 이름을
 *      --> 작성하지 않고 arguments 사용
 *
 *      3. return Array.prototype.slice.call(arguments);
 *      --> slide()는 인덱스 범위의 엘리먼트를 배열로 반환
 *      --> 인덱스를 작성하지 않으면 arguments 전체를 반환
 *
 *      4. var result2 = obj2(30,40);
 *      --> book2.get() 함수가 호출되며
 *      --> book2.get.bind(this, 10, 20);에서
 *          10과 20을 [10,20]형태로 반환
 *
 *      --> 여기에 obj(30,40)의 30과 40을 병합(첨부)하여 반환.
 *
 *      =====================================================================
 *
 *      - var obj2 = book2.get.bind(this, 10, 20);
 *        여기서 book2.get 함수를 바인드시키고있다.
 *        (첫 번째 파라미터는 this, 10, 20 파라미터를 줌)
 *
 *      - 그리고다시 호출하면서 var result2 = obj2(30, 40);
 *        파라미터를 주고 있다.
 *
 *      - get 함수를 호출할 때, 10,20,30,40이 네개가 파라미터 값으로 넘어간다.
 *      
 *       4. var result2 = obj2(30,40);을 하게되면 30,40이 넘어간다.
 *
 *       - 넘어가기 전에 파라미터를 바인드 시킨다
 *         bind 메소드에 작성한 10,20을 앞에두고 뒤에 30,40을 첨부한다.
 *
 *       --> 따라서 파라미터 형태는 [10,20,30,40] 형태가 된다.
 *
 */

log('파라미터 병합');

var book2 = {
    get: function () {
        // this === window object
        debugger;
        // slice :: 배열의 일부를 복사하여 배열로 반환
        // default :: 시작 인덱스 : 0, 끝인덱스 : length
        return Array.prototype.slice.call(arguments);
        // 이것은 prototype에 연결된 메소드를 호출한 것.
        // arguments가 array-like 이다.( 0 :10, 1: 20...)이런형태
        
        // 이것을 [10,20,30,40] 같은 형태로 변환하기 위해서 slice 메소드 호출
    },
    test : function (one,two,three,four) {
        let list = [];
        list.push(arguments);
        debugger;
        return list;
    }
};

var obj2 = book2.get.bind(this, 10, 20);
debugger;
var result2 = obj2(30, 40);

debugger;
console.log(result2);
// :: [ 10, 20 ,30 , 40 ]

// 나의 기본생각 잘못된것 == test
var obj3 = book2.test.bind(this, 10,20);
var result3 = obj3(30, 40);
console.log(result3);
debugger;












