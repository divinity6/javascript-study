/**
  * 프로그램 설명문서 주석
  * 2021.03 13 맹금
  * 
  *  
  * 
  */
console.log("=====================================");
console.log("Jeon Se Hoon");
console.log("=====================================");

"use strict"
window.onload = function() {

  // var today = new Date();
  
  // var getFirstDay2 = (yy, mm) => new Date( yy, mm, 1);
  // var getLastDay1 = function( yy , mm ){
  //   var newDate = new Date( yy, mm , 0 );
  //   return newDate;
  // };

  // console.log( 'getFirstDay2 :' , getFirstDay2 );

  // function loadYYMM2 (fullDate2) {
  //   var yy = fullDate2.getFullYear();
  //   var mm = fullDate2.getMonth();
  //   var lastDay1 = getLastDay1(yy, mm);
  //   var firstDay2 = getFirstDay2(yy, mm);

  //   console.log( 'lastDay1 :' , lastDay1 );
  //   console.log( 'firstDay2 :' , firstDay2 );
  // };
  // loadYYMM2(today);
  // var result = getFirstDay2;
  // // console.log(result);

  // var activeDate = new Date();

  


  debugger;

  // var test = ( el1 , el2 ) => new Date( yy , mm ,1);

  // function test( el1 , el2) {
  //   el1 = 2021;
  //   el2 = 01;
  // }
  // console.log(test(2021,02));


/** */
// ================================
// START YOUR APP HERE
// ================================

// 'January 1', 'February 2', 'March 3', 'April 4', 'May 5', 'June 6', 'July 7', 'August 8', 
// 'September 9', 'October 10', 'November 11', 'December 12',
// dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  // const init = {
  //   // 각 달 배열생성
  //   monList: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  //   // 각 일자 배열 생성
  //   dayList: ['일', '월', '화', '수', '목', '금', '토'],
  //   // 오늘 새로운 인스턴스 생성
  //   today: new Date(),
    
  //   // 
  //   monForChange: new Date().getMonth(),

  //   // 활성화된 날짜
  //   activeDate: new Date(),
  //   getFirstDay: (yy, mm) => new Date(yy, mm, 1),
  //   getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),

  //   // 다음달
  //   nextMonth: function () {
  //     let d = new Date();
  //     d.setDate(1);
  //     d.setMonth(++this.monForChange);
  //     this.activeDate = d;
  //     return d;
  //   },

  //   //
  //   prevMonth: function () {
  //     let d = new Date();
  //     d.setDate(1);
  //     d.setMonth(--this.monForChange);
  //     this.activeDate = d;
  //     return d;
  //   },
  //   addZero: (num) => (num < 10) ? '0' + num : num,
  //   activeDTag: null,
  //   getIndex: function (node) {
  //     let index = 0;
  //     while (node = node.previousElementSibling) {
  //       index++;
  //     }
  //     return index;
  //   }
  // };

  // const $calBody = document.querySelector('.cal-body');
  // const $btnNext = document.querySelector('.btn-cal.next');
  // const $btnPrev = document.querySelector('.btn-cal.prev');

  // /**
  //  * @param {number} date
  //  * @param {number} dayIn
  // */
  // function loadDate (date, dayIn) {
  //   document.querySelector('.cal-date').textContent = date;
  //   document.querySelector('.cal-day').textContent = init.dayList[dayIn];
  // }

  // /**
  //  * @param {date} fullDate
  //  */
  // function loadYYMM (fullDate) {
  //   let yy = fullDate.getFullYear();
  //   let mm = fullDate.getMonth();
  //   let firstDay = init.getFirstDay(yy, mm);
  //   let lastDay = init.getLastDay(yy, mm);
  //   let markToday;  // for marking today date
    
  //   if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
  //     markToday = init.today.getDate();
  //   }

  //   document.querySelector('.cal-month').textContent = init.monList[mm];
  //   document.querySelector('.cal-year').textContent = yy;

  //   let trtd = '';
  //   let startCount;
  //   let countDay = 0;
  //   for (let i = 0; i < 6; i++) {
  //     trtd += '<tr>';
  //     for (let j = 0; j < 7; j++) {
  //       if (i === 0 && !startCount && j === firstDay.getDay()) {
  //         startCount = 1;
  //       }
  //       if (!startCount) {
  //         trtd += '<td>'
  //       } else {
  //         let fullDate = yy + '.' + init.addZero(mm + 1) + '.' + init.addZero(countDay + 1);
  //         trtd += '<td class="day';
  //         trtd += (markToday && markToday === countDay + 1) ? ' today" ' : '"';
  //         trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
  //       }
  //       trtd += (startCount) ? ++countDay : '';
  //       if (countDay === lastDay.getDate()) { 
  //         startCount = 0; 
  //       }
  //       trtd += '</td>';
  //     }
  //     trtd += '</tr>';
  //   }
  //   $calBody.innerHTML = trtd;
  // }

  // /**
  //  * @param {string} val
  //  */
  // function createNewList (val) {
  //   let id = new Date().getTime() + '';
  //   let yy = init.activeDate.getFullYear();
  //   let mm = init.activeDate.getMonth() + 1;
  //   let dd = init.activeDate.getDate();
  //   const $target = $calBody.querySelector(`.day[data-date="${dd}"]`);

  //   let date = yy + '.' + init.addZero(mm) + '.' + init.addZero(dd);

  //   let eventData = {};
  //   eventData['date'] = date;
  //   eventData['memo'] = val;
  //   eventData['complete'] = false;
  //   eventData['id'] = id;
  //   init.event.push(eventData);
  //   $todoList.appendChild(createLi(id, val, date));
  // }

  // loadYYMM(init.today);
  // loadDate(init.today.getDate(), init.today.getDay());

  // $btnNext.addEventListener('click', () => loadYYMM(init.nextMonth()));
  // $btnPrev.addEventListener('click', () => loadYYMM(init.prevMonth()));

  // $calBody.addEventListener('click', (e) => {
  //   if (e.target.classList.contains('day')) {
  //     if (init.activeDTag) {
  //       init.activeDTag.classList.remove('day-active');
  //     }
  //     let day = Number(e.target.textContent);
  //     loadDate(day, e.target.cellIndex);
  //     e.target.classList.add('day-active');
  //     init.activeDTag = e.target;
  //     init.activeDate.setDate(day);
  //     reloadTodo();
  //   }
  // });

};

