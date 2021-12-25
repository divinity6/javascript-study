console.log("================statement.1=================");
/**
 * 문제
 * for()문을 이용하여
 * 1에서 50까지 반복하면서 홀수 번째 값과 짝수번째 값을 누적하고
 * 반복한 값을 누적한다
 * 
 * 반복을 완료하면 누적한 홀수번째 값과 누적한 짝수번째 값을 출력한다
 * 누적한 전체 값을 출력한다
 * 
 * 
 * 
 * 
 * 
    var max_value = 50;
    for(var i=1; i <= max_value;i++) {
        var j = (i*2)-1;
        if(j <= max_value) {
            console.log('홀수값 :', j);
        }
    }

    for(var i=1; i <= max_value;i++) {
        var h = i*2;
        if (h <= max_value) {
            console.log('짝수값 :',h);
        }
    }

    for(var i=1; i <= max_value;i++) {
        console.log('전체값 :', i);
    }


    2번째
    var max_value = 50;
    for (var i = 1;i <=max_value; i++) {
        //i를 2로나눈 나머지가 0일경우
        if(i % 2 == 0) {
            even = i;
            console.log("짝",even);
        //그외의경우
        } else {
            odd = i;
            console.log("홀수값",odd);
        }
    }

 */











console.log("================statement.2=================");
/*
    label : 식별하고자 하는영역

    break와 라벨명을 같이쓰면 반복문을 종료하고 라벨로 점프하라는 말
    --그곳으로 점프할때 가지고있는 값은 그대로 변하지않는다
*/
outerloop:   //this is label name
for(var i=0;i <5;i++) {
    console.log('Outerloop :' + i);
    innerloop:
    for (var j =0;j < 5;j++){
        if(j > 3) break;   //Quit the innermost loop
        if(i == 2) break innerloop;  //Do the same thing
        if(i == 4) break outerloop;  //Quit the outerloop
        console.log('innerloop :' + j);
    }
}
console.log('Exiting the loop!');


// 2번째 샘플
console.log('----------');

outerloop2:
for (var i = 0; i < 3; i++) {
    console.log('Outerloop :' + i);
    for (var j = 0; j < 5;j++){
        if(j == 3) {
            continue outerloop2;
        }
        console.log('Innerloop :' + j);
    }
}
console.log('Exiting the loop!');





console.log("================statement.3=================");
/*
   "use strict" 아래 with문을 사용한 코드 작성
   //객체를 제어하는 명령어
   //객체를 제어할수있도록 도와줌
*/


a = {
    b: {
        c: {
            x: 5,
            y: 5,
            z: 5
        }
    }
}

with (a.b.c) {
    x= 10;
    z= 12;
}

console.log(a.b.c.x);
console.log(a.b.c.y);
console.log(a.b.c.z);

with(console){
    log('with 명령문 사용하면')
    log('반복 사용할 특정개체를')
    log('여러번 사용하지 않고도')
    log('편리하게 사용할 수 있다')
}

"use strict"


d = {
    e: {
        f: {
            g: 5,
            h: 5,
            i: 5
        }
    }
}

with (d.e.f) {
    g= 10;
    i= 12;
}

console.log(d.e.f.g);
console.log(d.e.f.h);
console.log(d.e.f.i);