// worker.js
console.log( '---------------- 난 worker.js!! ------------------' );
debugger;
self.onmessage = ( event ) => {
    const obj = new Int16Array( event.data );
    obj[ 2 ] = 30;
    console.log( obj );
    // :: { 0 : 10 , 1 : 20 , 2 : 30 , 3 : 0 , 4 : 0 }
    self.postMessage( event.data );
    debugger;
};