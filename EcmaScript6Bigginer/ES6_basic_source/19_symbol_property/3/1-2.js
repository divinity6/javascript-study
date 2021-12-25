
debugger;

//Array-like가 대상
const one = [10, 20];
const like = {0: "A", 1: "B", length: 2};
const show = () => {
  console.log(one.concat(like));
};
show();
like[Symbol.isConcatSpreadable] = true;
show();
like[Symbol.isConcatSpreadable] = false;
show();
