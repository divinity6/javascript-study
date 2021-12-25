
debugger;

//오브젝트를 문자열에 대응
const point = {bonus: 100};
console.log(point.toString());

const book = {
  toString() {
    return "책"
  }
};
console.log(`${book}`);
