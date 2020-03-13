const createRandom = (min = 1, max = 10) => {
  let arrayOfRandomIntegers = [];
  let counter = 0;
  while (counter < 10) {
    let randomValue = +(Math.random() * (max - min) + min).toFixed(0);
    counter++;
    arrayOfRandomIntegers.push(randomValue);
  }
  return arrayOfRandomIntegers.join('');
}

  module.exports = {
    createRandom
  }