// workers.js
debugger;
console.log( '---------------- 난 worker.js!! ------------------' );
self.onmessage = ( event ) => {
    const data = event.data;
    console.log( data );
    // :: Main 에서 전송
    self.postMessage( 'Worker 에서 전송');
    debugger;
};