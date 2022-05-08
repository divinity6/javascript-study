// workers.js
debugger;
console.log( '---------------- 난 worker.js!! ------------------' );
/**
 * - 아 무친 여기 self 도 원래 window 객체안에들어잇는거엿어...
 */
self.onmessage = ( event ) => {
    const data = event.data;
    console.log( data );
    debugger;
};