
debugger;

//배열이 대상
const one = [10, 20], two = ["A", "B"];
const show = () => {
  console.log(one.concat(two));
};
show();
two[Symbol.isConcatSpreadable] = true;
show();
two[Symbol.isConcatSpreadable] = false;
show();
