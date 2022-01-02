/**
 * 프로그램 설명문서 주석
 *  2021.07.12 연습
 *
 *
 *
 */


console.log('-------- Object 할당 ----------');
"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

var Score = {};
Score.member = {
    jan: {item: {title: "JS북", amount: 100}, point: [10, 20, 30]},
    Feb: {item: {title: "JS북", amount: 200}, point: [{test: 123}, 50, 60]}
};
Score.dup = {};


Score.infoObject = function (target, subject) {
    for (name in subject) {
        var value = subject[name];
        if (Array.isArray(value)) {
            if (target[name] === null || target[name] === undefined) {
                target[name] = [];
            }
            this.infoCopy(target[name], value);
        } else if (typeof value === 'object') {
            if (target[name] === null || target[name] === undefined) {
                target[name] = {};
            }
            this.infoCopy(target[name], value);
        } else {
            target[name] = value;
        }
    }
}

Score.infoArray = function (target, subject) {
    // array안의 값이 obj일 수도 있자네
    subject.forEach(function (el, index, all) {
        // array 인지 확인(그 값이)
        if (Array.isArray(el)) {
            if (target[index] === null || target[index] === undefined) {
                target[index] = [];
            }
            this.infoCopy(target[index], el);
            // 값은 object일수도 있자네
        } else if (typeof el === 'object') {
            if (target[index] === null || target[index] === undefined) {
                target[index] = {};
            }
            this.infoCopy(target[index], el);
        } else {
            target[index] = el;
        }
    }, this);
}

Score.infoCopy = function (target, value) {
    if (Array.isArray(value)) {
        debugger;
        this.infoArray(target, value);
    } else if (typeof value === 'object') {
        this.infoObject(target, value);
    } else {
        return '유효하지 않은 타입입니다';
    }
}

Score.infoCopy(Score.dup, Score.member);