console.log("ㅇ====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 인스턴스 연습 ---------------');

    function Func(){
        debugger;
        this.__PrimitiveValue__ = 10;
    }
    Func.for = function(){};
    Func.prototype = {
        constructor : Func,
        setPoint : 10,
        // toPrimitive로 PrimitiveValue 변경 가능
        [Symbol.toPrimitive](hint) {
            debugger;
            return typeof hint === 'number' ?
                this.__PrimitiveValue__ : this.__PrimitiveValue__.toString();
        },
        get [Symbol.species]() {
            return Array;
        },
        [Symbol.iterator](){
            return {
                count : 0,
                maxCount : this.__PrimitiveValue__,
                next(){
                    if (this.count < this.maxCount) {
                        return {value : this.count++ , done: false};
                    }
                    return {value : undefined , done: true};
                }
            }
        },
        __proto__ : Array.prototype,
    }

    const funcIns = new Func();
    console.log(funcIns);
    console.log(`${funcIns}` * 20);
    console.log(funcIns * 20);

    for (const value of funcIns) {
        log(value);
    }
    const genObj = funcIns[Symbol.iterator]();
    log(genObj.next());
    debugger;
    log(genObj.next());
    debugger;
    log(genObj.next());
    debugger;


}