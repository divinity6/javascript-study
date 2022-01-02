/**
 * @autor 전세훈
 * 
 * @note 다음주에 지금까지한거 먼저 리팩토링 할것.
 */

/**
 * @declaration 선언
 */

var DomObj = {

    // 상단 ui dom
    uiYear : document.body.querySelector('.ui-dates > .ui-year'),
    uiMonth : document.body.querySelector('.ui-dates > .ui-month'),
    uiDate : document.body.querySelector('.ui-dates > .ui-date'),

    // 상단 ui up,down btn
    prevBtn : document.body.querySelector('.item-btn.prev > .ui-btn'),
    nextBtn : document.body.querySelector('.item-btn.next > .ui-btn'),

    // 하단 rc dom
    rcDate : document.body.querySelector('.rc-table > .rc-body'),

};

 // 배열로 넣기
// var domList = [];
// for ( var list in DomObj ){
//     domList.push(DomObj[list]);
//     console.log(domList);
// }


var UiDate = new Date();

var UiDec = {
    year : UiDate.getFullYear(),
    month : UiDate.getMonth(),
    date : UiDate.getDate(),

    // 달력의 시작 td
    // 저번달 마지막날의 요일을 구하자
    // 그리고 그 요일에 시작을 하면되는 것임.
    startDate : function( year , month ){
        // 0을 넘겨줬기 때문에 마지막날이 나옴
        var lastMonth = new Date(year , month , 0);
        console.log("저번달 마지막 날의 요일 :",lastMonth.getDay());
        console.log("저번달 마지막 날짜 :",lastMonth.getDate());
        // 저번달을 반환
        return lastMonth;
    },

    // 이번 날짜달 길이 구할려고
    thisDate : function( year , month ){
        var thisMonth = new Date(year , month+1 , 0);
        console.log("이번달 마지막 날:",thisMonth.getDate());
        console.log(thisMonth);
        return thisMonth;
    },

    // 다음달
    lastDate : function( year, month ){
        var nextMonth = new Date(year, month + 1, 1);
        console.log("다음달 시작날의 요일 :",nextMonth.getDay());
        console.log("다음달 정보 :",nextMonth);
        return nextMonth;
    },

    
};

UiDec.thisDate(UiDate.getFullYear(),UiDate.getMonth());

// 함수
var setDate = {
    // 하단 rc
    // 이건 잘못되었어...
    // 이거안씁니다
    rcDateList : function( ){
        // 최소 날짜 값
        var minDate = new Date(1900,00);
        var date;
        // 전체 리스트
        var list= [];

        // 날짜 리스트
        var dayList = [];
        // 날짜 속성
        var dayAttr = [];

        // 날짜가 시작되는 카운트
        var startCount;

        // 5개의 행안에 최대로 들어갈 것
        for (var i = 1; i < 36; i++){
            date = new Date(1900,00, i);
            // console.log("날짜 :", date);
            //console.log("달:",date.getMonth());
            
            if ( date.getMonth() == minDate.getMonth()){
                dayList.push(date.getDate());
                dayAttr.push("");
            };
            // 만약 month가 바뀌면 어떤처리
            if( date.getMonth() != minDate.getMonth()){

               // console.log("달 바뀌엇습니다~");
               dayList.push(date.getDate());
               dayAttr.push("gray");
            };
            
        };
        list.push(dayList,dayAttr);
        //list안에 딱들어왓고~
        console.log(list);
        return list;
    },
    // 이번달 날짜 년, 월 , 일구하기
    thisDateList : function( thisDate ) {
        var date;
        // 전체 리스트
        var list= [];

        // 전체 년 리스트(필요없음) - 왜냐면 그달의 년은 고정이기 때문
        var yearList = [];
        // 전체 월 리스트(필요없음) - 왜냐면 그달의 월은 고정이기 때문
        var monthList = [];
        // 전체 일 리스트
        var dateList = [];
        debugger;
        console.log(thisDate.getDate());
        // 30일까지 반복
        for (var i = 1; i <= thisDate.getDate(); i++){
            var newDate = new Date(thisDate.getFullYear(),thisDate.getMonth(),i);
            // 날짜를 요안에 집어넣네
            // list.push(newDate.getDate());
            yearList.push(newDate.getFullYear());
            monthList.push(newDate.getMonth()+1);
            dateList.push(newDate.getDate());
        };
        list.push( yearList , monthList , dateList );
        console.log( "이번달 날짜 년,월,일 :" , list );
        return list;
    },

    // 이전달 날짜 년, 월, 일 구하기
    prevDateList: function( prevDate ){
        var list = [];
        // 이것도 리스트일 필요가없어
        var year = prevDate.getFullYear();
        // 이건 리스트일 필요가없네
        var month = prevDate.getMonth()+1;
        var dateList = [];
        
        console.log( "전달 day :",prevDate.getDay());
        var prevMonthDates = prevDate.getDate();
        for ( var i = 0; i < ( prevDate.getDay()+1 ); i++ ){
            // 각날짜를 담아서 배열로 반환
            dateList.push(prevMonthDates);
            prevMonthDates--;
        } 
        dateList.sort();
        list.push( year , month , dateList );
        console.log(list);
        return list;
    },
    // 다음달 날짜 년, 월, 일 구하기
    nextDateList: function( nextDate ){
        var list = [];
        // 이것도 리스트일 필요가없어
        var year = nextDate.getFullYear();
        // 이건 리스트일 필요가없네
        var month = nextDate.getMonth()+1;
        var dateList = [];
        
        var nextMonthDates = nextDate.getDate();
        console.log( nextMonthDates );
       
        for ( var i = 0; i < nextDate.getDate(); i++ ){
            // 각날짜를 담아서 배열로 반환
            dateList.push(nextMonthDates);
            nextMonthDates++;
        } 
        dateList.sort();
        list.push( year , month , dateList );
        return list;
        
    },


};



var getDate = {
    // 상단 ui
    uiDate : function( domObj , value ){
        return domObj.textContent = value;
    },
    
    // 하단 rc
    pushTable : function( today , dateInfoList ) {
        // 테이블에넣을 nodeList
        var list = [];
        // 시작 날 요일번째
        var startDate = UiDec.startDate( today.getFullYear(), today.getMonth());
        // 마지막 날 요일번째
        var lastDate = UiDec.lastDate( today.getFullYear(), today.getMonth());

        // tableDom 관련 변수
        var table = DomObj.rcDate;
        var outerTable = "<table> <tbody>"
        var closeTable = "</table> </tbody>"
        var innerTable = "";

        // 안에 넣는것
        list.push(outerTable);

        // 테이블 행의 길이
        var nodeTr = 5;
        // 테이블 열의 길이
        var nodeTd = 7;

        // 열
        var count = 0;
        // 시작 날짜
        var startCount = false;
        // 마무리 날짜
        var endDate = false;

        // 저번달 마지막날짜에 관한것
        var lastListValue = 0;
        var prevMonthList = setDate.prevDateList(UiDec.startDate( UiDate.getFullYear(),UiDate.getMonth()) );
        console.log(prevMonthList);
        

        // ---------- 이건 딴겁니당 ---------
        // 다음달 다음꺼 구하기
        var nextMonthValue = 0;
        var nextMonthList = setDate.nextDateList(UiDec.lastDate( UiDate.getFullYear(),UiDate.getMonth()));
        console.log(nextMonthList);
        debugger;

        // ---------- 이게 안에 그려주는 겁니당 ---------
        for (var i = 0; i < nodeTr; i++){
            list.push("<tr>")
            // 행
            for ( var j = 0; j < nodeTd; j++ ){
                 // i == 0 첫번째 행
                if ( i == 0 ) {
                    // 3이 들어오면 애를 실행하네
                    // 먼저 날짜가 시작될지 검사
                    if ( j == ( startDate.getDay()+ 1 ) ){
                        console.log("startDate.getDay() :" ,startDate.getDay() );
                        console.log( "i" , i , "j :" , j , "startDate :" , startDate.getDay() );
                        startCount = true;
                    };

                    // 날짜가 시작되어야 하면 시작
                    if ( startCount ) {
                        innerTable = 
                        "<td><span "+ "class ='" +  "'" + 
                        "data-day-list ='" + dateInfoList[0][count] + "-" + dateInfoList[1][count] + "-"
                        + dateInfoList[2][count] + "'>"
                         + dateInfoList[2][count] + "</span></td>";
                        list.push(innerTable);
                        count++;
                    };

                    // 그렇지 않으면 시작하지 않음
                    if ( !startCount ) {
                        console.log("날짜가 시작되지않음 :", j + "번째");
                        innerTable = "<td><span class='gray'" + 
                        "data-day-list ='"+ prevMonthList[0] + "-"+ prevMonthList[1] + "-"+ prevMonthList[2][lastListValue]
                         + "'>" + prevMonthList[2][lastListValue] + "</span></td>";
                        list.push(innerTable);
                        lastListValue++;
                    };
                    
                } 
                // i == 4 마지막 행
                else if (i == 4) {
                    // 먼저 이번달 날짜가 들어와야 되는지 검사
                    if ( j == lastDate.getDay() ){
                        console.log("lastDate :", lastDate.getDay(),"j :", j);
                        endDate = true;
                    };

                    // 이번달 날짜가 들어와야되면 넣고
                    if ( !endDate ) {
                        innerTable = 
                        "<td><span "+ "class ='" +  "'" + 
                        "data-day-list ='" + dateInfoList[0][count] + "-" + dateInfoList[1][count] + "-"
                        + dateInfoList[2][count] + "'>"
                         + dateInfoList[2][count] + "</span></td>";
                        list.push(innerTable);
                        count++;
                    };

                    // 들어와야 하지 않으면 넣지 않음
                    if ( endDate ) {
                        console.log("날짜가 끝나지않음 :", j + "번째");
                        var innerTable = "<td><span class='gray'"+ 
                        "data-day-list ='"+ nextMonthList[0] + "-"+ nextMonthList[1] + "-"+ nextMonthList[2][nextMonthValue]
                         + "'>" + nextMonthList[2][nextMonthValue] + "</span></td>";
                        list.push(innerTable);
                        nextMonthValue++;
                    };
                }
                // i == 1 , 2 , 3
                else {
                    innerTable = 
                    "<td><span "+ "class ='" +  "'" + 
                    "data-day-list ='" + dateInfoList[0][count] + "-" + dateInfoList[1][count] + "-"
                    + dateInfoList[2][count] + "'>"
                     + dateInfoList[2][count] + "</span></td>";
                    list.push(innerTable);
                    count++;
                };
                
               
            };
            list.push("</tr>");
        };
        list.push(closeTable);
        var inList = list.join("");
        
        // 지난달의 마지막달
        var pervLastDay = new Date(UiDate.getFullYear(), UiDate.getMonth(), 0).getDate();
        console.log(pervLastDay);

        return table.innerHTML = inList;

    },
    
 };

 // 좌우 클릭 이벤트
 function prevClickEvent(e){
    console.log(e);
    console.log(window.Event.preventDefault());
 };


/**
 *  @excution 실행
 */

// ui
getDate.uiDate( DomObj.uiYear , UiDec.year + "년" );
getDate.uiDate( DomObj.uiMonth, ( UiDec.month+1 ) + "월" );
getDate.uiDate( DomObj.uiDate , UiDec.date + "일");

// rc
// 오늘 날짜 구하기
var dayList = setDate.thisDateList( UiDec.thisDate( UiDate.getFullYear(),UiDate.getMonth() ) );
getDate.pushTable( UiDate , dayList );

// 클릭시 이벤트
DomObj.prevBtn.addEventListener("click", prevClickEvent );
DomObj.nextBtn.addEventListener("click", prevClickEvent );