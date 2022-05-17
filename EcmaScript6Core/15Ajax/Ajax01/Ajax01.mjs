/**
 * 프로그람 설명문서 주석
 * 2022.05. 17 수업
 *
 *
 *           ===== 비동기 통신, 비동기 프로세스 =====
 *
 *      - 지금부터 4개 섹션으로 나누어
 *      --> 비동기 통신과 비동기 프로세스를 다룬다
 *
 *      - 전반적인 흐름을 단계별로 진행한다
 *      --> 통합된 시나리오 구성을 위해
 *          자바스크립트 스펙에 없는 것도 포함시켰다
 *
 *      - 4개 섹션
 *      --> Ajax
 *      --> XMLHttpRequest
 *      ----> 위 둘은 JS 스펙에 없는 것이지만
 *            통합된 시나리오 구성을 위해 진행한다
 *
 *      --> 비동기 통신과 비동기 프로세스
 *      --> Fetch
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
/**
 *          ===== 동기, 비동기 처리 =====
 *
 *      - 동기 처리는
 *      --> 현재 실행중인 처리가 끝나야
 *          다음 처리를 하게 된다
 *      --> 자바스크립트는 기본적으로 동기 처리
 *
 *      - 비동기 처리는
 *      --> 실행중인 처리가 끝나지 않아도
 *          다른 처리를 할 수 있다
 *      --> 처리 순서가 엉킬 수 있으므로
 *          이에 대응할 수 있도록 해야 한다.
 *
 *      - 동기 처리의 단점
 *      --> 서버에서 이미지 파일을 가져올 때
 *      --> 이미지를 수신하는 동안
 *          마우스 클릭 이벤트가 발생하지 않는다
 *      --> 사용자가 기다려야 한다
 *
 *      - 비동기 통신 처리
 *      --> 이미지를 수신하는 동안에도
 *          마우스 클릭 이벤트가 발생하며
 *          다른 처리를 할 수 있다
 *      --> UI를 향상시킬 수 있다
 *
 *      - 비동기 처리의 바탕은 Promise 개념
 *      --> JS 에서 대부분의 비동기 처리는 Promise 로 한다
 */

/**
 *          ===== Ajax =====
 *
 *      - 약칭 : Asynchronous JavaScript + XML
 *
 *      - 누가 : Jesse James Garrett
 *
 *      - 언제 : 2005.02.18
 *
 *      - 어디에 : 블로그( 현재는 연결되지 않음 )
 *
 *      - 글 제목 : A New Approach to Web Applications
 *                ( Ajax 는 이것이 목적이다 )
 */

/**
 *          ===== Ajax 요소 기술 =====
 *
 *      - XHTML 과 CSS 로 표준 기반의 프리젠테이션
 *      --> standards-based presentation using XHTML and CSS
 *
 *      ----> 이당시에는 XHTML 을 사용했었다
 *
 *      - DOM 으로 동적 표시 및 상호작용
 *      --> dynamic display and interaction using the DOM
 *
 *      ----> 상호작용은 이벤트가 동반되고, 동적 표시는 element 를
 *            DOM 과 JS 로 맨들어서 HTML 에다 붙이는 처리
 *
 *      - XML 과 XLST 로 데이터 변환 및 제어
 *      --> data interchange and manipulation using XML and XLST
 *
 *      ----> 지금은 XML 대신에 JSON 을 사용한다
 *            ( XML 은 Object 형태고, JSON 은 텍스트 형태이기 때문에,
 *              JSON 이 가볍다 )
 *
 *      - XMLHttpRequest 를 사용하여 비동기로 데이터 송수신
 *      --> asynchronous data retrieval using XMLHttpRequest
 *
 *      ----> 데이터 송수신을 비동기로 하는데 XMLHttpRequest 를 사용한다라는 것
 *            많은 사람들이 Ajax 라고 하면 XMLHttpRequest 라고 부르지만,
 *            그것은 아니다.
 *
 *            XMLHttpRequest 은 비동기로 데이터를 송수신하기 위한 것이다.
 *
 *      ----> Ajax 는 Web 을 Application 관점에서 새롭게 접근하자!! 라는 것.
 *
 *      - JavaScript 로 기술을 결합
 *      --> JavaScript binding everything together
 *
 *      ----> 위의것들은 각각 실행된다. 정적으로 실행되는데,
 *            JS 로 이러한 기술들을 결합하자는 것.
 *            묶는다는것, 바인딩한다는 것이다.
 *
 *      =====================================================
 *            비동기로 데이터를 수신하고, JSON 으로 받고,
 *            DOM 을 통해서 HTML 에다 presentation 을 하는데에
 *            CSS 를 묶자라는 것!
 *                      이것이 애플리케이션이다
 *      =====================================================
 *
 *      - 이러한 개념으로 접근하는것이 바로 Ajax 이다
 *
 *      --> Ajax !== XMLHttpRequest
 *      --> Ajax 는 더 상위레벨이다.
 *      ----> 그 하위 요소들이 HTML, CSS ,DOM ,JSON ,HTMLHttpRequest
 *
 *      - 이러한 기술들을 JS 로 묶자라는 것!!
 */

/**
 *          ===== XMLHttpRequest =====
 *
 *      - XMLHttpRequest 는?
 *      --> 동기, 비동기 통신을 지원하는 오브젝트
 *      ----> 비동기 통신만 하는것은 아니다. 동기 통신도 할 수 있다.
 *      ------> 동기와 비동기 통신은 뒤에서 자세히 다룬다
 *
 *      --> 오브젝트를 사용하여 데이터 송수신
 *
 *      - 그럼, Ajax 는?
 *      --> A New Approach to Web Applications
 *      --> 새로운 것은 하나도 없다
 *      --> Web 을 어플리케이션으로 접근하자~
 *      ----> 지금 Web 은 Applications 로 접근하고 있다
 *
 *      --> XMLHttpRequest 오브젝트는 이를 위한 하나의 요소, 수단
 *          ( 통신을 위한 수단, 요소기술 )
 *
 *     =====================================================
 *            - XMLHttpRequest 은 비동기 통신을 다루기 위한
 *              하나의 요소기술, 수단이다
 *
 *            - 요소 기술들을 묶어서 Ajax 로 서비스를 하는것.
 *     =====================================================
 *
 */
{
    log('------------ SharedArrayBuffer ---------------');
    debugger;
}

