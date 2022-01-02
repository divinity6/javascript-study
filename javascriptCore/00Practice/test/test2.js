window.onload = function() {
  var checkList = ["check1","check2","check3", "check4" , "check5"];
  var obj2 = {
    checkYn : false,
  };
  var name = "Assosiate";
  
  
  // 이것을 클릭을하면
  // 아무것도 선택되어있지 않으면 sweetaret를 띄우고
  // 선택된 것이 있다면
  // 체크되지 않은 것들을 지워라
  // 체크박스에 값이 들어있는 것들을 show를 하고 그렇지 않은건 hide를 해라

  // 클릭을하면? 그값들을 전부 배열?에 담아야되나?



  // 프롭스로 넘겨받은 값을 처음 실행을 할때 거기에 넣어야함(check값을)
  // 어떻게 넣을 수 있을까?
  // 그페이지에서 유일한 것 하나를 정해서 그것을 이름으로( 넘겨오는 props들을 살펴보자 )
  obj2.checkValue = name + "checkValue";
  debugger;
  // 이거 실무에선 each문사용 executionCheckValue안에 넣어야함
  function getCheckValue( el ){
    
    // 체크가 안되어 있는 것을 숨김(그런데 체크된 값을 른모다?)
    if ( !el ) {
      obj2.checkYn = true;
      // 이렇게되면 모든걸다 숨기게 되기때문에 어느오브젝트안에있는 checkYn을 해야됨
      // 그오브젝트안에 checkYn이걸 우겨넣어야됨
    }
    
  }
  function executionCheckValue(){
    // 체크된 값들이 들어오는 리스트( 체크된 값들이 여기로 들어온다 )
    let list = [];  
    list.push(checkList);
    list.forEach( getCheckValue );
    // 값들을 저리스트에 담아야됨
    // 값들에 v-if나 v-show로 보이고 안보이게 하면되겟네

  }














};
