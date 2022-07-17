/**
 * 프로그람 설명문서 주석
 * 2022.07.17 수업
 *
 *
 *           ===== this 참조 =====
 *
 *      - Promise , then() 환경에서
 *      --> this 로 호출된 함수의 오브젝트를 참조
 *      --> 호출된 함수의 오브젝트란
 *          main.getPoint()에서 main 오브젝트
 *
 *      - Promise, async/await 환경에서
 *      --> this 로 호출된 함수의 오브젝트를 참조
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ Promise , then() 환경 ---------------');

    const main = {

        point : 500,

        getPoint(){
            create( this.option )
                .then( ( data ) => {

                    // promise 의 then 환경에선 getPoint 를 호출한 곳의 객체를 참조
                    // 그러고보니 화살표함수라서 가능했던거네...
                    log( data[ this.option.data.name ] + this.point );
                    // :: 600

                    debugger;
                } )
                .catch( ( xhr ) => {

                    log( xhr.status );

                    debugger;
                } );
        },
    };

    main.option = {
        url : "./file/pointData.txt",
        data : { name : "sports" },
    }

    main.getPoint();

    /**
     *  - xhr 환경에서는 this 가 호출된 오브젝트를 참조하지 않는다
     */

    debugger;
}

{
    log('------------ Promise , async/await 환경 ---------------');

    const main = {

        point : 500 ,

        async getPoint(){

            const res = await create( this.option );

            // async / await 환경도 호출된 함수의 오브젝트를 참조하네... 아니 당연한거아닌가?ㅋㅋㅋ
            log( res[ this.option.data.name ] + this.point );
            // :: 600

            debugger;
        },
    };

    main.option = {
        url : "./file/pointData.txt",
        data : { name : "sports" },
    }

    main.getPoint();

    debugger;
}

/**
 *           ===== 이벤트 핸들러 함수 분리 =====
 *
 *      - XHR 이벤트 핸들러 함수에
 *      --> 성공/실패 처리를 위한 코드를 작성하면
 *          확장성, 가독성이 떨어진다
 *
 *      --> 별도의 함수로 분리한다
 *
 *      --> create()는 메인 흐름을 위한 코드이고
 *          파생 처리는 분리된 함수에서 해야한다
 *
 *      - 이벤트 핸들러 함수 형태가 어색하다
 *
 *      - 오브젝트 안에서 this 는 어디에서든
 *      --> 함수가 속한 오브젝트를 참조해야 한다
 */
{
    log('------------ 이벤트 핸들러 함수 분리, create2.js ---------------');

    const main = {

        point : 500 ,

        async getPoint( opt ){

            // 위의 오브젝트와 같으나 설명을 위하여 promiseXHR 오브젝트를 두었다
            promiseXHR.create( this.option )
                .then( data => {

                    log( data[ this.option.data.name ] + this.point );
                    // :: 600

                    debugger;

                } )
                .catch( xhr => {

                    log( xhr.status );

                } );


            debugger;
        },
    };

    main.option = {
        url : "./file/pointData.txt",
        data : { name : "sports" },
    }

    main.getPoint();

    debugger;

    /**
     *   - 설계를 할때, 오브젝트 안에서 항상 this 는, 그 어디에서든!
     *     그 함수가 속한 오브젝트를 참조해야한다는 시멘틱이 부여되어 있다!!
     */

}
