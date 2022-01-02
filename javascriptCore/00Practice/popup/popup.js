window.onload = function() {
  
  const DOMobj = {
    body : document.body,
    uiback : document.querySelector('.blank-mdpop'),
    uipopup : document.querySelector('.pop-modify'),
    uiCloseList : 
    [ document.querySelector('.closed01'), document.querySelector('.closed02'),  document.querySelector('.closed03') ]
  }
  for ( var i = 0; i < DOMobj.uiCloseList.length; i++ ){
    DOMobj.uiCloseList[i].addEventListener('click', function(){
      DOMobj.body.removeChild( DOMobj.uipopup);
      DOMobj.body.removeChild( DOMobj.uiback);
    });
  }

};