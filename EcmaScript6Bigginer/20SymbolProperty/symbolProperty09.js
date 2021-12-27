/**
 * 프로그램 설명문서 주석
 * 2021.12.26 수업
 *
 *           ===== Well-known Symbol =====
 *
 *      - Well-known Symbols 을 지원하는 String 메소드
 *      --> match()
 *      --> replace()
 *      --> search()
 *      --> split()
 *
 *      - String.prototype.match()
 *      --> 문자열에 패턴을 매치하고
 *      --> 매치된 결과를 배열로 반환
 *
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{

    "use strict"
    log('------------ String match() ---------------');
    const result = "Sports".match(/s/);
    log(result);
    // :: ['s', index: 5, input: 'Sports', groups: undefined]
    debugger;

    // 1. 문자열 "Sports"에 패턴 /s/를 매치한다
    //    처음 S는 대문자이므로 매치가 되지 않지만
    //    끝 s는 소문자이므로 매치가 된다

    // 2. 매치된 결과를 배열로 반환
}

/**
 *           ===== Symbol.match() =====
 *
 *      - Symbol.match()
 *      --> 개발자 코드를 함수 블록에 작성
 *      --> String.prototype.match() 대신에
 *          Symbol.match()가 실행됨
 *
 *      - Symbol.match = false
 *      --> //를 패턴으로 인식하지 않고 문자열로 인식
 *
 *      - 메소드를 오버라이드하는 것으로
 *      --> 메소드의 시멘틱은 유지해야 한다.
 *
 */
{
    "use strict"
    log('------------ Symbol.match() ---------------');
    const sports = {
        base : "ball",
        // 파라미터 값은 "al"
        [Symbol.match](value){
            debugger;
            return this.base.indexOf(value) < 0 ? "없음" : "있음";
        }
    }

    const al = "al";
    // al.__proto__.match = function(){
    //     debugger;
    // }

    /**
     *  - 파라미터 값에서 match 가 존재하는지 체크하네...
     *    없으면 String.prototype.match()를 호출하는 구나.
     *
     *  - 아니, 이매치는 al.__proto__.match 이게 맞는데...
     *  --> 아 팩트는 match를 호출하면 내부프로퍼티인 new RegExp를 이용하여 sports를
     *      처리하기 때문에 그 그처리를 할때 sports안의 match를 사용하네...
     */
    log(al.match(sports));
    // :: 있음
    debugger;

    // 1. "ball"에 "al"이 있으면 "있음"을 반환하고
    //    없으면 "없음"을 반환한다

    // 2. "al".match(sports)

    // 3. sports 오브젝트에서 Symbol.match 작성 여부 체크
    //    없으면 String.prototype.match()를 호출하고
    //    있으면 Symbol.match()를 호출한다

    // 4. Symbol.match(value)를 호출하면서
    //    "al"를 파라미터 값으로 넘겨준다.

}

{
    "use strict"
    log('------------ 문자열로 인식 ---------------');
    // String.prototype.startsWith = function(search, pos) {
    //     debugger;
    //     // !pos || => 즉, pos 에 값이 있으면
    //     return this.substr(!pos || pos < 0 ? 0 : +pos, search.length );
    // }

    try {
        // /book/ 패턴.
        "/book/".startsWith(/book/);
    } catch {
        log("정규 표현식으로 처리");
    }
    // :: 정규 표현식으로 처리
    debugger;

    // 패턴을 할당하면 정규표현식 오브젝트가 만들어짐!
    let check = /book/;
    /**
     * - check를 정규 표현식으로 인식하지 않도록 처리
     *
     * --> 애는 정규표현식이 아닌데...? 흠트레스팅... 일단 오케이...
     */
    check[Symbol.match] = false;
    log("/book/".startsWith(check));
    // :: true
    debugger;

    // 1. 파라미터 /book/을 패턴으로 처리한다
    //    정규 표현식을 사용할 수 없으므로 에러 발생

    // 2. check[Symbol.match] = false;
    //    정규 표현식으로 인식하지 않도록 설정한다

    // 3. "/book/".startWidth(check)
    //    파라미터 check 값을 문자열로 인식한다

    // 4. endsWidth()도 같다.
    /**
     *  [Symbol.math]를 다양한 형태로 활용 가능.
     */
}