/**
  * 프로그램 설명문서 주석
  * 2021.03 13 가져와서 분석했음
  * 
  *  
  * 
  */
console.log("=====================================");
console.log("Jeon Se Hoon");
console.log("=====================================");

"use strict"
window.onload = function() {

/** */
// ================================
// START YOUR APP HERE
// ================================


  // 선언.
  const init = {
    // 각 달 배열생성
    monList: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    // 각 일자 배열 생성
    dayList: ['일', '월', '화', '수', '목', '금', '토'],
    // 오늘 새로운 인스턴스 생성
    today: new Date(),
    
    //  바뀌는 달 : 새로운 달 인스턴스 생성
    monForChange: new Date().getMonth(),

    // 활성화된 날짜
    activeDate: new Date(),
    // getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getFirstDay: function( yy , mm ){
      var result = new Date( yy , mm ,1);
      return result;
    },

    // getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    getLastDay: function(yy, mm){
      // 달에 1달을 더함 + 일은 1부터 31일까지이므로
      // 일수에 0을 설정하면 전달의 마지막일을 반환
      var result = new Date(yy, mm + 1, 0);
      return result;
    },

    // 다음달
    nextMonth: function () {
      // d : 인스턴스 생성
      let d = new Date();
      // 날짜를 1일로 고정
      d.setDate(1);
      // 달은 1달을 더하고 바뀌는 달을 생성
      d.setMonth(++this.monForChange);
      // activeDate에 d를 설정
      this.activeDate = d;
      // d 반환
      return d;
    },

    // 이전달
    prevMonth: function () {
      // d : 인스턴스 생성
      let d = new Date();
      // 날짜를 1일로 고정
      d.setDate(1);

      // 달을 1달 빼고 바뀌는 달을 생성
      d.setMonth(--this.monForChange);
      // activeDate에 d를 설정
      this.activeDate = d;
      // d 반환
      return d;
    },
    // addZero: (num) => (num < 10) ? '0' + num : num,
    addZero: function(num) {
      // 매개변수보다 10이 클경우 '0' + num , 그렇지않을경우 num
      var result = (num < 10) ? '0' + num : num;
      return result;
    },
    // activeDtag DayTag를 active했을 경우
    activeDTag: null,

    // index 얻기
    // getIndex: function (node) {
    //   let index = 0;
    //   while (node = node.previousElementSibling) {
    //     index++;
    //   }
    //   return index;
    // }
  };







  // DOM 구조 몸에 날짜에 해당하는 부분을 선택합니다
  const $calBody = document.querySelector('.cal-body');
  // 버튼의 
  const $btnNext = document.querySelector('.btn-cal.next');
  const $btnPrev = document.querySelector('.btn-cal.prev');

  /**
   * 
   * 왼쪽에 크게보이는 날짜를 설정합니다
   * 
   * @param {number} date
   * @param {number} dayIn
   * 
  */

  // 날짜를 불러와서 설정함
  // 파라미터는 number 타입입니다.
  function loadDate (date, dayIn) {
    document.querySelector('.cal-date').textContent = date;
    document.querySelector('.cal-day').textContent = init.dayList[dayIn];
  }

  /**
   * @param {date} fullDate
   */

  // 모든데이터를 바디에 그립니다
  function loadYYMM (fullDate) {
    // 매개변수의 년을 받아옵니다
    let yy = fullDate.getFullYear();
    // 매개변수의 달을 받아옵니다
    let mm = fullDate.getMonth();
    // 달력을 시작할 번째
    let firstDay = init.getFirstDay(yy, mm);
    debugger;
    let lastDay = init.getLastDay(yy, mm);
    let markToday;  // for marking today date
    
    // 달이 today의 달과 같고 년도 today의 년과같을경우 
    if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
      // markToday는 today.getDate임
      markToday = init.today.getDate();
    }

    // 상단 달에 monList의[mm]번째를 설정합니다.
    document.querySelector('.cal-month').textContent = init.monList[mm];
    // 상단 년에 년을 설정합니다
    document.querySelector('.cal-year').textContent = yy;

    // trtd를 빈문자열로 선언합니다
    let trtd = '';

    // 카운트시작변수 선언
    // 날짜가 시작되는 카운트
    let startCount;
    // 카운트 day를 0으로 설정
    let countDay = 0;

    // 요일 설정
    // 0부터 시작해서 6보다 작을때까지
    // tr 6줄(행) - 한줄 줄여도 되갔쓰~
    for (let i = 0; i < 6; i++) {
      
      trtd += '<tr>';
      // td 7줄(열)
      for (let j = 0; j < 7; j++) {
        console.log("들어가기전 :" );
        console.log("i",i, "startCount :", !startCount, "j :",j ,"firstDay.getDay(): ", firstDay.getDay() );
        debugger;
        // 예외 처리
        // i 가 0과 똑같고 startCount가 아니며 j가 firstDay의 요일(0부터 시작)과 똑같을 경우
        if (i === 0 && !startCount && j === firstDay.getDay()) {
          console.log("들어간 후 :" );
          // firstDay.getDay() 이것이 시작을 구하는 로직이였어...
          console.log("i",i, "startCount :", !startCount, "j :",j ,"firstDay.getDay(): ", firstDay.getDay() );
          debugger;
          // startCount를 1로 설정
          startCount = 1;
        }
        // 만약 startCount가 거짓이라면(0 이라면)
        if (!startCount) {
          // trtd에 <td>를 더하라
          trtd += '<td>'
        } else {
          // fullDate는 년에다 .을 더하고 달에다 1을 더하고 . 더하고 countDay에다 1을 추가해서 넘겨줘라
          let fullDate = yy + '.' + init.addZero(mm + 1) + '.' + init.addZero(countDay + 1);
          // trtd에 day 클래스를 추가하고
          trtd += '<td class="day';
          // markToday거나 markToday가 countDay보다1이 클경우 today를 추가하고 그렇지않을 경우 추가하지말아라
          trtd += (markToday && markToday === countDay + 1) ? ' today" ' : '"';

          // 이문장을 해석해야해.
          // trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`
          // trtd = trtd + ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
          trtd = trtd + " data-date=" + (countDay + 1) + " data-fdate=" + fullDate + ">";
          // trtd = trtd.setAttribute();
        }
        // startCount가 참이면 countDay에1을 더하고 그렇지않으면 빈문자열 반환
        trtd += (startCount) ? ++countDay : '';

        // 만약 카운트 데이가 마지막카운트의 일자와 같을경우
        if (countDay === lastDay.getDate()) { 
          // startCount에 0을 설정
          startCount = 0; 
        }
        // trtd에 /td를 더해라
        trtd += '</td>';
      }
      // trtd에 /tr을 더해라
      trtd += '</tr>';
    }
    // 바디에 trtd를 그려라
    $calBody.innerHTML = trtd;
  }

  /**
   * @param {string} val
   */

  // createNewList를 만듬
  function createNewList (val) {
    // 시간과 ''를 더해서 반환
    let id = new Date().getTime() + '';
    // 년은 activeDate의년
    let yy = init.activeDate.getFullYear();
    // 애는 달
    let mm = init.activeDate.getMonth() + 1;
    // 애는 일자네
    let dd = init.activeDate.getDate();
    const $target = $calBody.querySelector(`.day[data-date="${dd}"]`);
    // date(일)은 년 + 달에다 0을더함 + . + 일
    let date = yy + '.' + init.addZero(mm) + '.' + init.addZero(dd);

    // 이벤트 데이터는 {}
    let eventData = {};
    // 이벤트데이터의 데이터는 데이터
    eventData['date'] = date;
    eventData['memo'] = val;
    eventData['complete'] = false;
    eventData['id'] = id;
    init.event.push(eventData);
    $todoList.appendChild(createLi(id, val, date));
  }

  // 년과 달을 받아오는 함수에 today를 설정
  loadYYMM(init.today);
  // 왼쪽에 크게보이는날짜에 오늘날자와 요일을 설정.
  loadDate(init.today.getDate(), init.today.getDay());
  
  // $btnNext.addEventListener('click', () => loadYYMM(init.nextMonth()));
  // $btnNext.addEventListener('click', function(){
  //   var result = loadYYMM(init.nextMonth());
  //   return result;
  // });
  $btnNext.addEventListener('click', function(){
    var result = loadYYMM(init.nextMonth());
    return result;
  });
 

  // $btnPrev.addEventListener('click', () => loadYYMM(init.prevMonth()));
  $btnPrev.addEventListener('click', function(){
    var result = loadYYMM(init.prevMonth());
    return result;
  });

  // body에 이벤트리스너 추가
  // $calBody.addEventListener('click', (e) => {
  //   if (e.target.classList.contains('day')) {
  //     if (init.activeDTag) {
  //       init.activeDTag.classList.remove('day-active');
  //     }
  //     let day = Number(e.target.textContent);
  //     console.log(day);
  //     debugger;
  //     
  //     loadDate(day, e.target.cellIndex);
  //     e.target.classList.add('day-active');
  //     init.activeDTag = e.target;
  //     init.activeDate.setDate(day);
  //     reloadTodo();
  //   }
  // });


  // 바디의 인자를 클릭했을 때
  $calBody.addEventListener('click', function(e){
    // Node.contains() 메소드는 주어진 인자가 node 의 자손인지, 아닌지에 대한 Boolean 값을 리턴합니다.
    // 이 함수는 요소가 페이지의 body 안에 있는지 검사합니다.  
    // contains 는 포괄적이므로 node 가 body 자기 자신일 경우에도 true 가 반환됩니다. 
    // 만약 이걸 원하지 않는 경우에는 node 가 body 자기 자신인지 검사하여  false 를 반환하여 버리면 됩니다.
    debugger;
    if(e.target.classList.contains('day')){
      if (init.activeDTag) {
        init.activeDTag.classList.remove('day-active');
      }
      let day = Number(e.target.innerHTML);
      console.log(Number(e.target.innerHTML));
      // debugger;
      // HTMLTableCellElement: cellIndex 이 대체 레이블은 데이터 셀에 
      // 적용되는 헤더를 설명 할 때와 같이 다른 컨텍스트에서 사용할 수 있습니다
      loadDate(day, e.target.cellIndex);
      e.target.classList.add('day-active');
      init.activeDTag = e.target;
      init.activeDate.setDate(day);
      // reloadTodo();
    }
  });

};

