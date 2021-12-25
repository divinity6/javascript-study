
debugger;

const one = 1, two = 2;
const show = (text, plus, minus) => {
 console.log(`${text[0]}${plus}`);
 console.log(`${text[1]}${minus}`);
 console.log(`${text[2]}${text[3]}`);
};
show `1+2=${one+two}이고 1-2=${one-two}이다`;
