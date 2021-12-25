/**
  * 프로그램 설명문서 주석
  * 2021.02.28 테스트
  * 
  * 
  *   svg 패스를 이용해 만들기
  * 
  * 
 */

console.log("=====================================");

window.onload = function() {
    "use strict"





    // 값
    var mainNodes = {
        // x,y 그리드
        gridX : $('.circle_chart').find('.highcharts-xaxis-grid'),
        gridY : $('.circle_chart').find('.highcharts-yaxis-grid'),
        // 중앙좌우 선
        criteriaX : $('.circle_chart').find('.highcharts-plot-lines-0').eq(0),
        criteriaY :  $('.circle_chart').find('.highcharts-plot-lines-0').eq(1),
        // 메인 원
        circleMain : $('.circle_chart').find('.highcharts-series.highcharts-series-2').children('.highcharts-point'),
    }

    // 값을 넣을 타겟
    var targetNodes = {
        // 하이차트 컨테이너 div
        Ctrtget : $('.circle_chart > .highcharts-container'),
        // 배경 svg
        backSvg : $('.circle_chart > .highcharts-container > svg'),
    }

    // 배열 생성
    var chartList = [];
    for ( var list in mainNodes ) {
        chartList.push(mainNodes[list]);
    }

    // 속성 추가(여기서 가공을 해야 하는데...안먹히네)
    var setNewChart = function( el ) {
        var attribute;
        if( el == mainNodes.gridX ){
            attribute = el.attr('d');
            el.attr('d', attribute);
            // el = "<g class= 'highcharts-grid highcharts-xaxis-grid'>" + el[0] + "</g>";
        }
        if( el == mainNodes.gridY ){
            attribute = el.attr('d');
            el.attr('d', attribute);
            // el = "<g class= 'highcharts-grid highcharts-yaxis-grid'>" + el[0] + "</g>";
        }
        if( el == mainNodes.criteriaX ){
            attribute = el.attr('d');
            el.attr('d', attribute);
            el.addClass('lineX-reset');
            // el = "<g class= 'highcharts-plot-lines-0'>" + el[0] + "</g>";
        }
        if( el == mainNodes.criteriaY ){
            attribute = el.attr('d');
            el.attr('d', attribute);
        }
        if( el == mainNodes.circleMain ){
            attribute = el.attr('d');
            el.attr('d', attribute);
            el.addClass('circle-reset');
            // el.attr("d","M 244.96252413052008 63.000003816415244 A 184 184 0 1 1 244.74442769139483 63.00017749249028 M 245 247 A 0 0 0 1 0 245 247 ");
        }
    };

    // 새로운 차트 반환(속성넣어주고 안에 g만 넣어주면 끝...)
    var getNewChart = function( chartList ){
        // 배경박스를 넣어줍니다
        targetNodes.Ctrtget.prepend("<div class='new-circle-back'></div>");
        // 이미지박스를 넣어줍니다
        targetNodes.Ctrtget.prepend("<div class='new-color-circle'></div>");
        // 내용을 감쌀 div
        targetNodes.Ctrtget.append("<div class='new-chart'><svg class='circle-container'><g class='highcharts-series-group' data-z-index='3'>");
        var newChart = $('.new-chart .highcharts-series-group');
        for ( var i = 0; i < chartList.length; i++ ){
            var list = chartList[i];
            // var el = list[0].childNodes;
            // var cName = list.selector;
            // cName = $(cName);
            // console.log(list[0]);
            // var newG = "<g class ='" + list[0].className.baseVal + "'></g>";
            // console.log(newG);
            console.log(list);
            newChart.append( list[0] );

            // for ( var j = 0; j < el.length; j++ ) {
            //     if (el[j].nodeName != "#text" ){
            //         // console.log(list.selector);
            //         // console.log(el[j]);
            //         // list.selector.append(el[j]);
            //     }
            // }
            // targetNodes.Ctrtget.append("</g>");
        };
        targetNodes.Ctrtget.append("</g></svg></div>");
    };

    // chartList 설정
    chartList.forEach( setNewChart );

    // chartList 반환
    getNewChart( chartList );

    // 원본 삭제 처리
    // for (var list in mainNodes ) {
    //     mainNodes[list].remove();
    // }

    
}



