// worker.js
console.log( '---------------- 난 worker.js!! ------------------' );
debugger;
self.onmessage = ( event ) => {
    const obj = new Int16Array( event.data );
    obj[ 2 ] = 30;
    self.postMessage( event.data );
    debugger;
};