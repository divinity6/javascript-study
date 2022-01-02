/**
 * 프로그램 설명문서 주석
 *  2021.07.13 연습
 *
 */

// 변환시킬 값
var obj = {
    jan: {item: {title: "JS북", amount: 100}, point: [10, 20, 30]},
    Feb: {item: {title: "JS북", amount: 200}, point: [{test: 123}, 50, 60]}
};

var Point = function () {
    this.obj = {};
}

Point.prototype.getListVal = function (unclean, target) {

    unclean.forEach(function (element, index, all) {

        if (Array.isArray(element)) {
            // target[index]가 없을경우 array 할당
            if (!target[index]) {
                target[index] = [];
            }
            this.objCopy(element, target[index]);
        } else if (typeof element === 'object') {
            // target[name]이 없을경우 object 할당
            if (!target[index]) {
                target[index] = {};
            }
            this.objCopy(element, target[index]);
        } else {
            target[index] = element;
        }
    }, this);

}


Point.prototype.getObjVal = function (unclean, target) {
    for (name in unclean) {
        var value = unclean[name];

        if (Array.isArray(value)) {
            // target[name]이 없을경우 array 할당
            if (!target[name]) {
                target[name] = [];
            }
            this.objCopy(value, target[name]);
        } else if (typeof value === 'object') {
            // target[name]이 없을경우 object 할당
            if (!target[name]) {
                target[name] = {};
            }
            this.objCopy(value, target[name]);
        } else {
            target[name] = value;
        }
    }
}

Point.prototype.objCopy = function (unclean, target) {
    target === undefined || target === null ? target = this.obj : target;

    if (Array.isArray(unclean)) {
        this.getListVal(unclean, target);
    } else if (typeof unclean === 'object') {
        this.getObjVal(unclean, target);
    } else {
        return unclean + '는 객체가 아닙니다';
    }
}

var member = new Point();
member.objCopy(window.obj);