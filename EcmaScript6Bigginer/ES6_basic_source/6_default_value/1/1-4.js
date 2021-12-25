
debugger;

//디폴트 값 적용 순서
const [one, two = one + 20, five = two + 50] = [10];
console.log(two);
console.log(five);
