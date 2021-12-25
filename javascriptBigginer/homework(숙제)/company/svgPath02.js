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
    
    // 자식요소 찾는 함수
    // 그럼 이게 마지막으로 작동해야겠네
    // 데이터를 가공해서 여기로 보내줘야겠네
    // 근데 이걸내보내지말고 저장하려면 어떻게 해야할까
    // 애가 마지막처리를 하게하기 싫은데...
    var findChildNode = function( el ){
        var element = el[0].childNodes;
        for (var i = 0; i < element.length; i++) {
            if (element[i].nodeName != '#text') {
                // 이걸로 엘리먼트 innerHTML 값을 구했다
                // 근데 이값을 어딘가에 저장만하면 왜 변경될까
                // 그럼 저장을하지말고 바로내보낸다?
                // 여기서 값을 내보내면되는건가
                $circleObj.append(element[i]);
            }
        }
        // return elValue;
    };
    var $circleObj = $('.circle_chart > .highcharts-container');
    var el = $('.circle_chart').find('.highcharts-xaxis-grid');
    findChildNode( el );
    // $circleObj.append(findChildNode( el ));
    debugger;



    // }

    /* jquery 넣고 회사용 원래 소스 */
    //요소 집어넣기
    var setHighChart = function( elX , elY , elCtX , elCtY ,elCircle ){
       
        // for ( var i = 0; i < arguments.length; i++ ){
        //     findChildNode(arguments[i]);
        // }

        console.log( elX , elY , elCtX , elCtY ,elCircle );
        var joinCircleList = [];
        // -- 원을 감쌀 div
        var ctrCircleHd = "<div class='new-chart'><svg class='circle-container'><g class='highcharts-series-group' data-z-index='3'>";
        var ctrCircleFt = "</g></svg></div>"
       // 원(circle) 리스트

     elX = "<g class= 'highcharts-grid highcharts-xaxis-grid'>" + elX[0].innerHTML + '</g>';
     elY = "<g class= 'highcharts-grid highcharts-yaxis-grid'>"  + elY[0].innerHTML + '</g>';
     elCtX = elCtX[0].outerHTML;
     elCtY = elCtY[0].outerHTML;
     
     elCircle =  elCircle[0].outerHTML;
     
     
     
       var ctrCircleList = [ ctrCircleHd , elX  , elY , elCtX , elCtY , elCircle , ctrCircleFt ];
        joinCircleList = ctrCircleList.join("");
        return joinCircleList;
  
    }
 
    /* 복사 및 선언, 만들기 */
    
    // x,y 그리드
    var $x = $('.circle_chart').find('.highcharts-xaxis-grid');
    var $y = $('.circle_chart').find('.highcharts-yaxis-grid');
    // 중앙좌우 선
    var $criteriaX = $('.circle_chart').find('.highcharts-plot-lines-0').eq(0);
    var $criteriaY = $('.circle_chart').find('.highcharts-plot-lines-0').eq(1);
    // 원을 복사합니다
    var $circle = $('.circle_chart').find('.highcharts-series.highcharts-series-2').children('.highcharts-point');
    var $circleObj = $('.circle_chart > .highcharts-container');
    var $backSvg = $('.circle_chart > .highcharts-container > svg');
    var $targetObj = $(".highcharts-series-2" );
    
    // 클론 생성
    
    var $elX =  $x;
    var $elY =  $y;
    // 중앙선 클론생성
    var $elCtX = $criteriaX;
    var $elCtY = $criteriaY;
    // 원의 클론 생성
    var $elCircle = $circle;
    // 속성추가
    $elCtX.addClass('lineX-reset');
    $elCircle.addClass('circle-reset');
    $elCircle.attr("d","M 244.96252413052008 63.000003816415244 A 184 184 0 1 1 244.74442769139483 63.00017749249028 M 245 247 A 0 0 0 1 0 245 247 ");
    
    $targetObj = $targetObj.eq(0);
    
    
    /*  push 및 join, 집어넣기 */
    // 선을 넣습니다
    var lineX = setHighChart( $elX , $elY , $elCtX , $elCtY , $elCircle );
    // 원오브젝트에 line을 집어넣습니다
    $circleObj.append(lineX);
    
    // 좌우 선을 그려줍니다
    /*$targetObj.append( $elCtX );
    $targetObj.append( $elCtY );*/
    
    // 배경박스를 넣어줍니다
    $circleObj.prepend("<div class='new-circle-back'></div>");
    // 이미지박스를 넣어줍니다
    $circleObj.prepend("<div class='new-color-circle'></div>");
    
    
    $x.remove();
    $y.remove();
    $criteriaX.remove();
    $criteriaY.remove();
    $circle.remove();

}



