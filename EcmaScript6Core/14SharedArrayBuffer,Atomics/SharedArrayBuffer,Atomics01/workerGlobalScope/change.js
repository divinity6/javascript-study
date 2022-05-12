// change.js
self.onmessage = ( event ) => {
    /**
     *  - 여기 event.data 속성자체도 이미 ArrayBuffer 네
     */
    const obj = new Int16Array( event.data );
    obj[ 0 ] = 20;
    console.log( obj );
    // :: { 0 : 20 , 1 : 40 , 2 : 0 , 3 : 0 ,4 : 0 }
    debugger;
}