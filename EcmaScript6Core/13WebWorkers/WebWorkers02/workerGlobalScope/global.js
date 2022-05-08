// global.js
importScripts( 'add.js' );
debugger;
onmessage = ( event ) => {
    const sum = add( event.data );
    debugger;
    postMessage( sum );
}