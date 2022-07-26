
const fetchDataFactory = () => {
  return {
    defaultFetch: {
      method : "POST" , type : "json",
    },

    /**
     * @name main
     * - fetch()로 서버와 통신한다.
     *   서버에서 받은 데이터를 데이터 타입에 맞게 변환한다.
     *
     * @ToDo 점진적으로 프레임워크 개념으로 접근하여 코드를 추가한다.
     *
     * @param { string } url
     * @param { object | { type : string ? , headers : Headers ? , body : Body ?, method : Request.method ? } } option
     *        , Request/Response 옵션
     */

    async main( url , option ){

      // 통신 옵션 결정
      this.option = Object.assign( {} , this.defaultFetch , option );

      this.setSendData();

      debugger;

      try {

        const response = await fetch( url , this.option );

        debugger;

        return response.ok ? await this.convertData( response )
            : { error : response , errorCode : "OKError" };

      }
      catch( error ){
        // server down 에 대비하여 try/catch 사용
        return { error : error , errorCode : "NetWork" }
      }

    },

    /**
     * @name setSendData
     * - 서버로 전송할 데이터를 JSON 형태로 변환한다
     *   전송할 데이터가 없으면 빈 문자열을 설정한다
     *
     * @param { XMLHttpRequest } xhr , XHR 인스턴스
     * - xhr.option.data 에 변환할 데이터가 있다
     */
    setSendData() {

      if ( undefined === this.option.data ){
        this.option.body = "";
        return;
      }

      this.option.body = JSON.stringify( this.option.data );

    },

    /**
     * @name convertData
     * - main()을 호출할 때 option 에 작성한 type 에 맞도록
     *   서버에서 받은 데이터를 변환한다
     *
     * @param { Object | Response } res , 서버에서 받은 response
     */

    async convertData( res ){

      debugger;

      switch( this.option.type ){

        case "json"        :
          return await res.json();

        case "blob"        :
          const blob = await res.blob();
          return URL.createObjectURL( blob );

        case "text"        :
          return await res.text();

        case "arrayBuffer" :
          // 코드 작성
          return;

        case "formData"    :
          // 코드 작성
          return;
      }
    }

    /**
     *  - 이것은 전반적인 프로세스이다. 실제로 서비스에 사용할때는,
     *    여기에 더 살을 붙여서 맨들게 된다.
     */
  }
}

window.fetchDataFactory = window.fetchDataFactory || fetchDataFactory;
