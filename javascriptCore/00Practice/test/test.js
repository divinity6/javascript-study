window.onload = function() {

  // 합칠려면 이렇게 해야겠네 
  // 이름들의 집합
  var obj = {
    key1:'name1', 
    key2:'name2',
    key3:'name3',
    key4:'name4',
  }; 
  // url들의 집합
  var obj2 = {
    key1: "url1",
    key2: "url2",
    key3: "url3",
    key4: "url4",
  }
  var list = [];

  
  // 각각의 key가 같은지 확인합니다
  function valueInspection( obj1 , obj2 ) {
    var list = [];
    var nameList = [];
    var urlList = [];
  
    var keys = Object.keys(obj1); 
    var keys2 = Object.keys(obj2); 
    
    // 각각의 값이 같은지 확인합니다
    for (var index in keys ){
      if ( keys[index] == keys2[index]){
        // 값이 같다면 리스트에 집어넣습니다
        nameList.push(obj1[keys[index]]);
        urlList.push(obj2[keys[index]]);

        var value = getObj(obj1[keys[index]] , obj2[keys[index]]);
        list.push(value);
      } else { return "응~ 키값이 안같아~" }
    }

    // setObj에 값을 넣습니다
    //list = setObj( nameList , urlList );
    return list;
  }

 

  function getObj( name , url ){
    var obj = {
      name: undefined,
      url: undefined,
    }
    obj.name = name;
    obj.url = url;
    return obj;
  }

  list = valueInspection( obj , obj2 );
  console.log(list);

  // function setObj( nameList , urlList ){
  //   var list = []
  //   for (var i = 0; i < nameList.length; i++ ){
  //     var value = getObj(nameList[i],urlList[i]);
  //     list.push(value);
  //   }
  //   return list;
  // }
  
};
