"use strict";

const defaultXHR = {
    method : 'POST'
};

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
function create( param ){

    return new Promise( ( resolve , reject ) => {

        const xhr = new XMLHttpRequest();

        xhr.onload = function(){

            // 공통적으로 파싱하기때문에 한번에 작성함
            this.status === 200 ? resolve( JSON.parse( this.response ) )
                                : reject( this );
        }

        debugger;

        // option 값이 없는데 여기에서 싱글톤 형태로 넣어주는구나...
        xhr.option = Object.assign( {} , defaultXHR , param );

        setSendData( xhr );

        xhr.open( xhr.option.method , xhr.option.url );

        xhr.send( xhr.option.sendData );

        debugger;
    } )
}

/**
 * @name setSendData<function>
 *     서버로 전송할 데이터를 JSON 형태로 변환한다
 *     전송할 데이터가 없으면 빈 문자열을 설정한다
 *
 * @param { object } xhr, XHR 인스턴스
 *      xhr.option.data 에 변환할 데이터가 있다
 * @return { void }
 */
function setSendData( xhr ){
    xhr.option.sendData = JSON.stringify( xhr.option.data || "" );
}

window.create = create;