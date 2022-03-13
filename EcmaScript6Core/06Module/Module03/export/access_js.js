// 일반적인 js 파일에서 사용
const { log } = window.console;
{
    "use strict"
    /**
     *  - 일반적인 js 파일
     */
    log('------------ 별도의 스코프를 갖는다 ---------------');

    let result;
    try {
        // 스코프가 별도로 존재하기 때문에
        // point 사용 불가
        result = point;
    } catch {
        result = "모듈에서 사용 불가";
    };
    document.getElementById('result').innerHTML = result
    debugger;
    // 일반적인 js 파일에서도 사용할 수 없다
}

{
    log('------------ Module 과 Global 에서 this 참조 ---------------');
    const win = this;
    document.getElementById('js').innerHTML = this.Array.name;

    debugger;
    // 1. 일반적인 js 파일에선 this 가 window 오브젝트를 참조한다

    // 2. 따라서, window.Array.name 프로퍼티에 접근할 수 있다

    // 3. 이와같이 일반 js 파일에서 this 는 window 오브젝트를 참조한다!
}