
debugger;

const one = 1, two = 2;
const show = (text, value) => {
  console.log(`${text[0]}${value}`);
  console.log(text[1]);
};
show `1 + 2 = ${one + two}`;
