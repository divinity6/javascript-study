{
  "use strict"
  debugger;

  const point = () => {
    try {
      const args = arguments;
    } catch (error) {
      console.log("arguments 사용 불가");
    };
  };
  point(10, 20);
  debugger;
};
