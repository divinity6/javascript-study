// transfer.js
debugger;
console.log( '---------------- 난 transfer.js!! ------------------' );
self.onmessage = ( event ) => {
    const view = new DataView( event.data );
    view.setInt8( 1 , 20 );
    self.postMessage( event.data );
    debugger;
};