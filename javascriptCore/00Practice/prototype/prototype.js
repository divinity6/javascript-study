"use strict"

function Book() {
    this.point = 100;
}

Book.prototype = {
    constructor: Book,
    getPoint: function () {
        return this.point;
    },
    add: function () {
        console.log(12312331)
    }
}

var obj = new Book();
console.log(obj.getPoint())

// 100 이 호출되고
function Book() {
    this.point = 200;
}


Book.prototype = {
    constructor: undefined,
    getPoint: function (value) {
        return value + this.point;
    },
    add: function () {
        console.log(12312331)
    },
    minus: 100
}
var obj = new Book();
console.log("Book :" ,Book);
console.log("Book.prototype :",Book.prototype);
console.log(obj.getPoint(100))
console.log(Book.prototype.getPoint);
console.log(obj.getPoint);