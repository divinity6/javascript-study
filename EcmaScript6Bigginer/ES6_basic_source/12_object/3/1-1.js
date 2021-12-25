
debugger;

//프로퍼티 값 연동()
const sports = {
  item: "축구"
};
let copy = sports;
sports.item = "농구";
console.log(copy.item);
