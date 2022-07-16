/**
 * 프로그람 설명문서 주석
 * 2022.07.16 수업
 *
 *
 *           ===== 서버로 데이터 전송 =====
 *
 *      - 지금부터 다루는 코드는
 *      --> 김영보 쌤의 코딩 스타일이 반영되어 있다
 *
 *      - 서버로 데이터를 전송하는 코드
 *      --> create1.js 파일 참조
 *
 *      - 전송, 수신 데이터의 변환
 *      --> JSON 형태로 변환하는 것은
 *          공통이므로 create() 함수에서 수행
 *
 *      - JSON.stringify(), JSON.parse()
 *      --> 수신한 데이터는 resolve() 에서 파싱
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ 서버로 데이터 전송, create1.js ---------------');

    // 이런게 모듈이지...
    const main = {

        point : 500,

        async getPoint(){
            try{

                const data = await create( this.option );

                this.showPoint( data );

                debugger;

            }
            catch( xhr ){

                this.serverError( xhr );

                debugger;
            }
        },
        showPoint( data ){

            log( data[ this.option.data.name ] + this.point );
            // :: 600

            debugger;
        },
        // 에러는 별도로 함수로 분리하는 것이 좋다
        serverError(xhr) {

        },
    };

    debugger;

    // 여기에서 main 에 동적으로 넣어주는구만...
    main.option = {
        url : "./file/pointData.txt",
        data : { name : "sports" },
    }

    main.getPoint();

    /**
     *  - 되도록 객체안의 함수들은 심플하게 맨들어야 한다.
     *  --> 그래야 확장성이 생긴다
     *
     *  --> if 나 비즈니스 로직들을 함수안에서 처리하는것.
     *
     *  --> main 코드는 main 흐름이 되게하는 것이 바람직한 접근이다.
     *
     *  - 아직도 이 코드는 많이 부족하다
     *  --> 부족한 부분을 정리하고 , 채워나가야 한다
     */
}

