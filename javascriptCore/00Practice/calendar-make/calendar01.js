/**
  * 프로그램 설명문서 주석
  * 2021.03 14
  * hoon
  * @RemarkableCalendar
  * 
  *  
  * 
  */
console.log("=====================================");
console.log("Jeon Se Hoon");
console.log("=====================================");

"use strict"
window.onload = function() {

  /**
   * ================================
   * @Declaration
   * 선언 영역입니다
   * ================================
   */

  // 날짜 관련 오브젝트입니다
  const dateObj = {
    monthList: [ "1월" , "2월" , "3월" , "4월" , "5월" , "6월" , "7월" , "8월" , "9월" , "10월" , "11월" , "12월" ],
    dayList: [ "일" , "월" , "화" , "수" , "목" , "금" , "토" ],


    today: new Date(),
    // 바뀌는 달들
    chgMonth: new Date().getMonth(),
    // 활성화된 날짜
    activeDate: new Date(),
    // 저번달 마지막
    prevLast: new Date(),
    // 이번달 마지막
    thisLast: new Date(),

  };

  // 돔 관련 오브젝트입니다.
  const targetObj = {
    // 상단 UI
    uiYear: document.querySelector('.ui-year'),
    uiMonth: document.querySelector('.ui-month'),
    uiTodayBtn: document.querySelector('ui-btn.today'),
    uiPrevBtn: document.querySelector('.ui-btn.prev'),
    uiNextBtn: document.querySelector('.ui-btn.next'),

    // 하단 테이블
    rcCal: document.querySelector('.rc-body'),
  };

  // 날짜 변경 관련 오브젝트입니다





  /**
   * ================================
   * @Setting
   * 값을 설정 및 저장합니다.
   * ================================
   */

    // 이부분 수정 필!
    var sortDate = function( data , key ){
      this.data = data;
    }
    
    // 받은 데이터를 년,달,월 별로 저장합니다
    sortDate.prototype.getDate = function(){

      if( key == "month" ){ return this.data.getMonth(); }
      if( key == "year" ){ return this.data.getFullYear(); }
      if( key == "date"){ return this.data.getDate(); } 
      else { return this.data.Date(); }
    }

    const settingData = {

      setNextMonth: function(){
        
      },

      setInnerDate: function( day ){
        var startDate = new Date();
        var result = startDate.setDate( day );
        console.log("startDate :",startDate.getDate());
        return result
        // setDate를 1씩 증가시켜야함
      },

      // 그후 돌려주면되겠네
      // 이거를 메소드에 넣어노면 되겠다.
    };

  

  /**
   * ================================
   * @Getting
   * 값을 가져옵니다.
   * ================================
   */
  
  // 구분한 데이터를 내보냅니다
  const gettingData = {
    getFirstDay: function( yy , mm ){
      var result = new Date( yy , mm , 1 );
      return result;
    },
    getLastDay: function(yy, mm){
      // 달에 1달을 더함 + 일은 1부터 31일까지이므로
      // 일수에 0을 설정하면 전달의 마지막일을 반환
      var result = new Date(yy, mm + 1, 0);
      return result;
    },
  }


  /**
   * ================================
   * @Push
   * 설정된 날짜를 내보냅니다
   * ================================
   */

  // 상단 UI 영역
  const pushData = {
    pushUIDate: function( year , listIndex ) {
      // 내보내는 건 get이맞음
      targetObj.uiYear.textContent = year + "년";
      targetObj.uiMonth.textContent = dateObj.monthList[listIndex];
      
    },

    pushTableDate: function( fullDate ){
      var yy = fullDate.getFullYear();
      var mm = fullDate.getMonth();
      var firstDay = gettingData.getFirstDay( yy , mm );
      var lastDay = gettingData.getLastDay( yy , mm );

      // table 빈문자열 선언
      var tbody = "<table><tbody>";
      var startCount;
      var tr = 5;
      // tr길이

      
     
      
      for (var i = 0; i < tr; i++){
        tbody = tbody + "<tr>"
        for (var j = 0; j < 6;j++){
          // ======================================================================

          // 만약 오늘일 경우 클래스 추가.
          // 여기에 어트리뷰트를 추가해야됨
          // 미리추가해서 내보내면 될듯
          // ================== 이거를 글로 적어보면서 로직을 짜보자 =============================

          tbody = tbody + "<td class='day'>" + "</td>";
        }
        tbody = tbody + "</tr>"
      }

      targetObj.rcCal.innerHTML = tbody;
    },

  }


  /**
   * ================================
   * @Call
   * 설정한 부분을 호출합니다
   * ================================
   */

  // 상단 UI
  pushData.pushUIDate( dateObj.today.getFullYear() , dateObj.today.getMonth() );
  // 하단 몸통
  pushData.pushTableDate( dateObj.today );

  debugger;

};
