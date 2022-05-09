// clone.js
debugger;
console.log( '---------------- 난 clone.js!! ------------------' );
self.onmessage = ( event ) => {
    const book = { point : event.data.point + 300 };
    self.postMessage( book );
    debugger;
}