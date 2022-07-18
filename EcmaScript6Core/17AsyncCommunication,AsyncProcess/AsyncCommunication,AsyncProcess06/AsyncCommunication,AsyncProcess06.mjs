/**
 * 프로그람 설명문서 주석
 * 2022.07.18 수업
 *
 *
 *           ===== 이벤트 핸들러 바인딩 =====
 *
 *      - then(), catch() 코드 형태
 *
 *      - 이벤트 핸들러 함수에서 this 참조를 위해
 *      --> bind()로 핸들러 함수 바인딩
 *
 *      - 프레임워크 접근
 *      --> 여러 곳에서 사용하게 되며
 *          기능 추가가 발생한다
 *
 *      --> 확장성을 위해 처음부터 함수로 분리하고
 *          분리된 함수에서 처리한다
 *
 *      ----> 나중에 대응하기가 편하다
 *
 *      --> default 옵션을 활용한다
 *
 *      --> main 함수에는 플로우를 작성한다
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ then(), catch() 코드 형태 ---------------');

    const main = {

        point : 500,

        async getPoint(){

            for ( let opt of this.option ){

                promiseXHR.create( opt )

                    .then( ( data ) => {

                        this.showPoint( opt , data );

                    } )

                    .catch( ( xhr ) => {

                        this.rejectError( xhr );

                    } );
            }
        },

        showPoint( opt , data ){

            if ( Object.is( typeof data , "object" ) ){

                log( data[ opt.data.name ] + this.point );
                // :: 600

                return ;
            }

            log( data );
            // :: timeout 체크용 데이터
            debugger;
        },

        rejectError( xhr ){

            log( `${ xhr.errorCode } : ${ xhr.status } ` );
            // :: not200 : 404
            debugger;
        }
    }

    main.option = [
        { url : "./file/pointData.txt" , data : { name : "sports" } },
        { url : "./file/timeout_data.txt" },
        { url : "./file/없는파일.txt" },
    ];

    main.getPoint();

    /**
     *  - 메인 함수는 흐름을 알 수있도록 작성해야한다
     *  --> 나머지 가지들은 작성하지 않는다
     */
}


