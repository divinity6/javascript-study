/**
 * 프로그람 설명문서 주석
 * 2022.06. 28 수업
 *
 *
 *           ===== responseText =====
 *
 *      - responseText
 *      --> 서버에서 Text 형태로 보내면
 *          responseText 에 설정된다
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ responseText ---------------');
    const obj = new XMLHttpRequest();
    obj.onload = () => {
        if( obj.status === 200 ){
            log( obj.response );
            // :: {"book": "책", "music": "음악"}
            log( obj.responseText );
            // :: {"book": "책", "music": "음악"}
            log( JSON.parse( obj.response ) );
            // :: {book: '책', music: '음악'}
            debugger;
        }
    }

    obj.open( "GET" , "./file/jsonData.txt" );
    obj.send();

    debugger;

    // 1. obj.response
    //    [ 실행 결과 ]는 jsonData.txt 에 작성된 형태이다
    //    텍스트 형태 그대로 반환된다

    // 2. obj.responseText
    //    텍스트 형태 그대로 반환된다

    // 3. 텍스트일 때는 일반적으로 response 를 사용하며
    //    JSON.parse()로 파싱하여 사용한다
}
/**
 *           ===== responseXML =====
 *
 *      - responseXML
 *      --> 서버에서 HTMLDocument
 *          또는 XML 형태를 보내면
 *          responseXML에 설정된다
 *
 *          <?xml version="1.0" encoding="utf-8" ?>
 *              <pointmain>
 *                  <item><point>100</point></item>
 *                  <item><point>200</point></item>
 *                  <item><point>300</point></item>
 *              </pointmain>
 */

{
    log('------------ responseXML ---------------');
    const obj = new XMLHttpRequest();
    obj.onload = () => {
        log( obj.response );
        log( "-----------" );

        const data = obj.responseXML;
        // DOM 메서드를 가지고 있네
        const nodes = data.getElementsByTagName( "item" );
        debugger;
        for ( let k = 0; k < nodes.length; k++ ){
            const node = nodes[ k ].children[ 0 ];
            log( node.textContent );
            // :: 만족
            // :: 보통
            // :: 불만
        }
    }

    obj.open( "GET" , "./file/xmlData.xml" );
    obj.send();

    debugger;

    // 1. obj.response
    //    response 에도 반환되지만 텍스트 형태이다

    // 2. obj.responseXML;
    //    XML 파일이므로 responseXML 에 설정된다

    // 3. data.getElementByTagName( "item" )
    //    DOM 메소드로 직접 엘리먼트를 구할 수 있는 것은
    //    DOM Document  형태이기 때문이다
    //    즉, 오브젝트 형태이므로 JSON 보다 무겁다
    /**
     *  - XML 도 DOM 메서드들을 가지고있네...ㅋㅋ
     *
     *  --> 오브젝트 형태이므로 JSON 보다 무겁다. 따라서,
     *      서버간에 통신할때는 일반적으로 JSON 을 사용한다
     */
}
/**
 *           ===== FormData =====
 *
 *      - XMLHttpRequest 스펙에
 *      --> FormData, ProgressEvent 오브젝트가 있으며
 *      --> 이에 대해서는 관련 자료를 참조하라
 *
 *      - FormData
 *      --> 순서를 가진 { name : value } 리스트로 전송한다
 *      --> new FormData( param ) 형태로 생성하며
 *      --> param 에 <form> 을 작성
 *      --> https://xhr.spec.whatwg.org/#formdata
 *
 *      - ProgressEvent
 *      --> Request 의 진행 상태를 제공한다
 *      --> https://xhr.spec.whatwg.org/#progressevent
 *
 *
 *      ----> XMLHttpRequest 오브젝트에는 FormData 와 ProgressEvent 오브젝트가 별도로 존재한다
 */
{
    log('------------ responseXML ---------------');

}