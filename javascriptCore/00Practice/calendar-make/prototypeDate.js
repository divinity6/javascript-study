



var CritDate = function( date ){
    // 오늘날 저장
    this.date = {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
    }
};

// 계산할 날짜를 받아옵니다
// 0은 저번달,
// 1은 이번달
// 2는 다음달
CritDate.prototype.getDateInfo = function( key ){
    // 날짜 값
    var dateVal;
    var month;
    var date;
    switch(key) {
        case 0:
            date = 0;
            month = 0;
            break;
        case 1:
            date = 0; 
            month = 1;
            break;
        case 2:
            date = 1;
            month = 1;
            break;
        default:
            return "올바르지 않은 key 값입니다";
            
    }
    // 각 날짜의 길이
    dateVal = new Date(this.date.year, this.date.month + month, date );
    console.log( "이번, 저번 ,다음달 중 구한 값 :", dateVal);
    
    return dateVal;
};

var today = new Date();
// 인스턴스를 한번만 만들고싶은데...

var result = new CritDate( today );
console.log(result.getDateInfo( 3 ));

debugger;

 /**
 * @param { 저번,이번,다음 달 분류 } key 
 * @returns { keyList, 숫자값 }
 */
  function sortDate( key , date ){
    // 값을 넘겨줄 리스트
    var keyList = [];
    // 작은 리스트
    var list = [];

    switch( key ) {
        case 0:
            list.push( 0 , 0 );
            break;
        case 1:
            list.push( 1 , 0 );
            break;
        case 2:
            list.push( 1 , 1 );
            break;
        default:
            return "올바르지 않은 key 값입니다";       
    };
    keyList.push( date , list );
    return keyList;
};