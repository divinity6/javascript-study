/**
 * 프로그램 설명문서 주석
 *  2021.07.07 수업
 *
 *
 *              ===== 프로퍼티 연동 방지 =====
 *
 *      - Object에 Object를 할당하면
 *      --> 프로퍼티 값이 연동된다.
 *      ( 오브젝트를 할당하면 값을 공유한다!!! === 연동 )
 *
 *      - 배열도 마찬가지로 연동된다.
 *
 *      - 연동 방지 : 프로퍼티 단위로 할당
 *
 */


console.log('-------- Object 할당 ----------');
"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

var origin = {member: 100};
var dup = origin;
dup.member = 200;
// 헐 미친 연동되서 원래값도 바뀌네 ㅋㅋ
console.log(origin.member);
// :: 200

// 1. origin 오브젝트를 dup 변수에 할당한 후
// - dup.member에 200을 설정하면
// - origin.member 값이 연동되어 바뀝니다.
// 2. [[오브젝트를 할당하면 값을 공유]]하기 때문이다.

/**
 *  이렇게 값이 연동되면 곤란한 경우가 있다.
 *  원래 dup의 값만 변경하려 했지만 origin까지 변경되는 경우등!
 */
debugger;

console.log('-------- 배열 할당 ----------');

var origin2 = [1, 2, 3];
var dup2 = origin2;
// 즉, 여기서 origin의 값도 변경되네!!
dup2[1] = 200;
// 와 미친 배열역시도 할당되네!!
console.log(origin2);
// :: 200

// 1. 배열도 마찬가지로 배열을 할당하면 값을 공유한다.
debugger;
/**
 *  배열도 index번째의 값을 할당하면 값이 연동된다.
 *
 *  연동을 방지하려면 배열단위가 아닌, 프로퍼티 단위로(하나씩) 할당해야한다.
 *
 *  ( 애초에 dup2 = origin2 이런식으로 할당하면안되는구나... )
 */

console.log('-------- 프로퍼티 단위로 할당 ----------');

var origin3 = {member: 100};
var dup3 = {};

for (var name in origin3) {
    dup3[name] = origin3[name];
}
;
dup3.member = 200;
console.log(origin3);
// :: { member : 100 };
console.log(dup3.member);
// :: 200

// 1. 값의 공유를 방지하려면 프로퍼티 단위로 할당해야 한다.
debugger;


/**
 *                  ===== 재귀 함수 =====
 *
 *      - Recursive Function
 *      --> 함수 안에서 자신 함수를 다시 호출하는 형태
 *
 *      - 사용 사례
 *      --> { name : { name : { name : value }}}
 *      --> [ [1,2] ,[3,4],[5,6] ]
 *
 *      -------------------------------------------------
 *
 *      - { name : { name : { name : value }}}
 *        이런 형태를 for ~ in으로 전개해서 하려면 난감하다.
 *
 *      --> 일단 확장성 부족
 */

/**
 *                  ===== 재귀함수 형태 =====
 *
 *      1. show(book);
 *      - 마지막 줄에서 show(book)을 호출하면서
 *      - book 오브젝트를 파라미터 값으로 넘겨준다
 *
 *      2. for (var type in param){...}
 *      - for-in으로 파라미터로 받은 오브젝트 전개
 *
 *      3. typeof param[type] === "object"
 *          ? show(param[type])
 *          : console.log(type + ":", param[type]);
 *
 *      4. param[type] 타입이 "object"이면
 *      - show()를 호출
 *        자신을 호출하면서 param[type]을 넘겨준다
 *
 *      - book["member"]이므로 { name : 100 }이 넘어간다.
 *
 *      5. param[type] 타입이 "object"가 아니면
 *      - member : { name : 100 }에서
 *        { name : 100 }을 읽은 것이므로 값을 출력한다.
 *
 */

console.log('-------- 재귀 함수 형태 ----------');
var book = {
    member: {name: 100},
    point: {value: 200},
};

// 안의 값을 분류할때 매우 좋겠네
function show(param) {
    for (var type in param) {
        typeof param[type] === "object" ?
            show(param[type]) : console.log(type + ":", param[type]);
        // : name : 100
        // : value : 200
    }
};
show(book);
// 위와 같이 함수내에서 자기자신을 호출하는 것을 재귀 함수라고 한다.


/**
 *                  ===== 정리 시간 =====
 *
 *      ** 데이터 형태 **
 *
 *      var member = {
 *          Jan : { item : { title : "JS 북", amount : 100}, point: [10, 20, 30]},
 *          Feb : { item : { title : "JS 북", amount : 200}, point : [ 40, 50, 60]}
 *      }
 *
 *      - 재귀 함수로 데이터를 출력하라.
 *      --> 오브젝트이면 프로퍼티 이름(title, amount)과 값을 출력하고,
 *      --> 배열이면 값([10,20,30])을 출력하고 값을 누적하라
 *
 *      - 재귀 호출이 끝나면 누적한 값을 출력하라
 *
 */
debugger;
console.log('-------- 정리 시간 ----------');
var member = {
    Jan: {
        item: {
            title: "JS 북",
            amount: 100
        },
        point: [10, 20, 30]
    },
    Feb: {
        item: {
            title: "JS 북",
            amount: 200
        },
        point: [40, 50, 60]
    }
}
var obj = {};
var list = [];

function getMonth(month) {
    if (typeof month === "object") {

        if (Array.isArray(month)) {
            month.forEach(function (el) {
                list.push(el);
                console.log(el);
            }, member);
        } else {
            for (item in month) {
                if (typeof month[item] === "object") {

                    this.getMonth(month[item]);
                } else {
                    obj[item] = this.getValue(item, month[item]);
                }
            }
        }

    } else {
        console.log("예외상황 발생")
    }


}

function getValue(key, value) {
    console.log(key + ":" + value);
    return value;
}

getMonth(member);
console.log(obj);
console.log(list);
console.log('-------- 리팩토링 시간 ----------');

var members = {
    result: {
        obj: {},
        array: [],
    },
    // @param : member 
    // 구분하기 위함
    sortMember: function (member) {
        typeof member === "object" ? this.sortProperty(member) : this.exception();
    },

    sortProperty: function (member) {
        Array.isArray(member) ? this.setArray(member) : this.setObj(member);
    },

    setArray: function (member) {
        member.forEach(function (el) {
            this.result.array.push(el);
            console.log(el);
        }, this);
    },

    setObj: function (member) {
        for (item in member) {
            typeof member[item] === "object" ?
                this.sortMember(member[item]) : this.getObj(item, member[item]);
        }
    },

    getObj: function (key, value) {
        console.log(key + ":" + value);
        this.result.obj[key] = value;
    },

    exception: function () {
        console.log('예외상황 발생');
    }
}


members.sortMember(member);
console.log(members.result);
console.log(members.result.obj);
console.log(members.result.array);


console.log('=================== 보고 배울 코드 ===================');
console.log('==== (선생님이 작성한거임 분석하자!) ====');

var Point = {};
Point.member = {
    jan: {item: {title: "JS북", amount: 100}, point: [10, 20, 30]},
    Feb: {item: {title: "JS북", amount: 200}, point: [40, 50, 60]}
};
Point.dup = {};
Point.dupArray = function (target, dup) {
    debugger;
    dup.forEach(function (element, index) {
        if (Array.isArray(element)) {
            if (!target[index]) {
                target[index] = [];
            }
            ;
            this.deepCopy(target[index], element);
        } else if (typeof element === 'object') {
            if (!target[index]) {
                target[index] = {};
            }
            ;
            this.deepCopy(target[index], element);
        } else {
            target[index] = element;
        }
        ;
    }, this);
};

Point.dupObject = function (target, dup) {
    for (var pty in dup) {
        var value = dup[pty];
        debugger;
        if (Array.isArray(value)) {
            if (!target[pty]) {
                target[pty] = [];
            }
            ;
            this.deepCopy(target[pty], value);
        } else if (typeof value === 'object') {
            debugger;
            // 타겟의 value가 거짓이면 {} 할당
            if (!target[pty]) {
                target[pty] = {};
            }
            ;
            debugger;
            // key의 {}(빈오브젝트)와 value, 즉 값을 가지고 돌아감
            this.deepCopy(target[pty], value);
        } else {
            target[pty] = value;
        }
        ;
    }
    ;
};

Point.deepCopy = function (target, dup) {
    debugger;
    if (Array.isArray(dup)) {
        this.dupArray(target, dup);
    } else if (typeof dup === 'object') {
        this.dupObject(target, dup);
    }
    ;
};
debugger;
Point.deepCopy(Point.dup, Point.member);
