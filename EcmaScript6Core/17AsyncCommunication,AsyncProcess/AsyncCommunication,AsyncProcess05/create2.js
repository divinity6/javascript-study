"use strict";

const promiseXHR = {

    // 기본 옵션
    defaultXHR : {
        method : "POST" , parsing : true,
    },

    /**
     * @name create<function>
     * - Promise 인스턴스를 생성한다
     * - XMLHttpRequest 인스턴스를 생성한다
     * - onload 이벤트가 발생하면 resolve() 또는 reject()를 호출한다
     *
     * @param { { data : object , url : string } } param , 통신 옵션
     *
     * - param.data 에 서버로 전송할 데이터를 작성한다
     * - data : { name : "point" } 형태
     *
     * @return {Promise<unknown>}
     */
    create( param ){

        debugger;

        return new Promise( ( resolve , reject ) => {

            const xhr = new XMLHttpRequest();

            xhr.onload = function(){

                promiseXHR.onLoad( this , resolve , reject );

            }
            xhr.onerror = function(){

                promiseXHR.onError( this , reject );

            }

            console.log( this );

            // option 값이 없는데 여기에서 싱글톤 형태로 넣어주는구나...
            xhr.option = Object.assign( {} , this.defaultXHR , param );

            this.setSendData( xhr );

            xhr.open( xhr.option.method , xhr.option.url );

            xhr.send( xhr.option.sendData );

            debugger;
        } )
    },

    /**
     * @name setSendData<function>
     *     서버로 전송할 데이터를 JSON 형태로 변환한다
     *     전송할 데이터가 없으면 빈 문자열을 설정한다
     *
     * @param { object } xhr, XHR 인스턴스
     *      xhr.option.data 에 변환할 데이터가 있다
     * @return { void }
     */
    setSendData( xhr ){

        xhr.option.sendData = JSON.stringify( xhr.option.data || "" );
    },

    /**
     *
     * @name onLoad
     *  서버와 통신이 정상으로 종료되었을 때 호출된다.
     *  파일 수신을 성공하면 resolve()를 호출하고
     *  실패하면 reject()를 호출한다.
     *
     * @param { XMLHttpRequest | object } xhr  XHR 인스턴스, xhr.option.data에 변환할 데이터가 있다.
     * @param { function } resolve Promise resolve() 함수
     * @param { function } reject Promise reject() 함수
     */
    onLoad( xhr , resolve , reject ){

        if ( xhr.status !== 200 ){

            xhr.errorCode = "not200";

            return reject( xhr );
        }

        try {

            // parse 고려
            const data = JSON.parse( xhr.response );

            resolve( data );

        }
        catch {

            xhr.errorCode = "json";

            reject( xhr );

        }
    },

    /**
     *
     * @name onError
     *  서버와 통신이 비정상으로 종료되었을 때 호출된다.
     *
     * @param { XMLHttpRequest | object } xhr  XHR 인스턴스, xhr.option.data에 변환할 데이터가 있다.
     * @param { function } reject Promise reject() 함수
     */
    onError( xhr , reject ){

        reject( xhr );

    }

};

/**
 *  - 설계를 할때, 오브젝트 안에서 항상 this 는, 그 어디에서든!
 *     그 함수가 속한 오브젝트를 참조해야한다는 시멘틱이 부여되어 있다!!
 *
 *  --> 그런데 promiseXHR 을 다시 호출하면 뭔가 promiseXHR 객체가 따로 있다고 생각하게 된다
 */

window.promiseXHR = promiseXHR;