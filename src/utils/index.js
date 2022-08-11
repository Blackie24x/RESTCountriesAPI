export const createPopulationNum = (population) => {
  let num = population.toString();
  const strings = [];
  for (let index = 1; index < num.length; index++) {
    if (index % 3 === 0) {
      const string = num.slice(num.length - index, num.length + 3 - index);
      strings.push(string);
      if (num.length - index <= 3) {
        const string = num.slice(0, num.length - index);
        strings.push(string);
      }
    }
  }
  num = strings.reverse().join(",");

  return num;
};
