
debugger;

//Rest 파라미터 사용
const one = 1, two = 2;
const show = (text, ...rest) => {
  console.log(`${text[0]}${rest[0]}`);
  console.log(`${text[1]}${rest[1]}${text[2]}`);
};
show `1+2=${one+two}이고 1-2=${one-two}이다`;
