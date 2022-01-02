/**
 * @autor 전세훈
 *  마지막에 prototype에 넣을것
 * 
 *  테이블을 그려주는건 독립적으로 해야함
 * 
 */

/**
 * =======================================================
 * 
 *  @declaration 선언
 * 
 * =======================================================
 */

// 데이터를 집어넣을 돔
/**
 *  @targetNode 타겟으로 잡은 돔 덩어리 입니다
 * */ 

var nodeContext = {
    // 상단 ui dom
    uiYear: document.body.querySelector('.ui-dates > .ui-year'),
    uiMonth: document.body.querySelector('.ui-dates > .ui-month'),
    uiDate: document.body.querySelector('.ui-dates > .ui-date'),

    // 상단 ui up,down btn
    prevBtn: document.body.querySelector('.item-btn.prev > .ui-btn'),
    nextBtn: document.body.querySelector('.item-btn.next > .ui-btn'),

    // 하단 rc dom
    calBody: document.body.querySelector('.rc-table > .rc-body'),
};
var today = new Date();
/**
 *  @dataDate 날짜에 관한 데이터 선언입니다
 *  @description 날짜에 관한 처리를 합니다
 * */

function defineDate( date ) {
   
    // 값을 넘겨줄 리스트
    var dateInfoList = [];
    var dateInfo = {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
    };
    dateInfoList.push( date , dateInfo );
    return dateInfoList;
}

// 먼저 이번달을 구할건지, 저번달을 구할건지, 다음달을 구할건지 구분

// 데이터를 분류하는 묶음
var sortDate = {
    // 이걸 대분류하는 데이터로 쓰자
    dateInfo: function ( key ){
        var keyList = [];
        switch( key ) {
            // 저번달
            case 0:
                keyList.push( 0 , 0 );

                break;
            // 이번달
            case 1:
                keyList.push( 1 , 0 );
                break;
            // 다음달
            case 2:
                keyList.push( 1 , 1 );
                break;
            default:
                return "올바르지 않은 key 값입니다";       
        };
        return keyList;
    },

};

var setDateList = {
    
}


// 데이터 가공하는 묶음
var setContext = {

    dateInfo: function(  dateInfoList , keyList ){
        
        var dateInfo = dateInfoList[1];
        var month = keyList[0];
        var date = keyList[1];
        // 각 날짜의 길이
        var dateVal = new Date( dateInfo.year , dateInfo.month + month, date );
        console.log( "이번, 저번 ,다음달 중 구한 값 :", dateVal);  
        // 그럼이걸가지고 다시 defineDate에 넘겨주면되겠네
        
        return dateVal;
    },
    dateList: function( dateInfoList , key ){
        var dateInfo = dateInfoList[1];
        var dateListAll = [];
        var length;
        var data;
        if ( key == 0 ) {
            var out = dateInfo.day;
            length = out + 1;
            data = dateInfo.date - out;
        }
        if ( key == 1 ) {
            length = dateInfo.date + 1;
            data = 1;
        }
        if ( key == 2) {
            // td의 최대 갯수(일~토)
            length = 7 - dateInfo.day;
            data = 1;
            debugger;
        }
        for (var i = 0; i < length; i++){
            dateListAll.push(data);
            data++;
        };
        dateInfoList.push(dateListAll);
        console.log( dateInfoList );
        
        return dateListAll;
    }
    
    
};

// 데이터를 내보내는 묶음
var getContext = {
    
   
}


var renderList;
// 저번달 값을 구함
var todayVal = defineDate( today );
var prevData = sortDate.dateInfo(0);

var thisData = sortDate.dateInfo(1);
var nextData = sortDate.dateInfo(2);

var prevMonth = setContext.dateInfo( todayVal , prevData );
setContext.dateList( defineDate( prevMonth ) , 0 );

var thisMonth = setContext.dateInfo( todayVal, thisData );
setContext.dateList( defineDate( thisMonth ) , 1 );

var nextMonth = setContext.dateInfo( todayVal , nextData );
setContext.dateList( defineDate( nextMonth ) , 2 );
console.log(nextMonth);
debugger;
