const createRandom = (min = 1, max = 10) => {
	const arrayOfRandomIntegers = [];
	let counter = 0;
	while (counter < 10) {
		const randomValue = +(Math.random() * (max - min) + min).toFixed(0);
		counter++;
		arrayOfRandomIntegers.push(randomValue);
	}
	return arrayOfRandomIntegers.join('');
};

module.exports = { createRandom };
