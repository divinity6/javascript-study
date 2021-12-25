
debugger;

const create = Object.getPrototypeOf(function*(){}).constructor;
console.log(create);

const sports = new create("one",
"yield one;"
);
console.log(typeof sports);

const obj = sports(100);
console.log(obj.next());
