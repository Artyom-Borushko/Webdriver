
const EC = protractor.ExpectedConditions;

const expectedCondition = (shouldBe) => {
	let expectedConditionFunction;

	switch (shouldBe) {
	case 'present':
		expectedConditionFunction = EC.presenceOf.bind(EC);
		break;
	case 'clickable':
		expectedConditionFunction = EC.elementToBeClickable.bind(EC);
		break;
	case 'visible':
		expectedConditionFunction = EC.visibilityOf.bind(EC);
		break;
	case 'invisible':
		expectedConditionFunction = EC.invisibilityOf.bind(EC);
		break;
	case 'selected':
		expectedConditionFunction = EC.elementToBeSelected.bind(EC);
		break;
	case 'gone':
		expectedConditionFunction = EC.stalenessOf.bind(EC);
		break;
	case 'titleIs':
		expectedConditionFunction = EC.titleIs.bind(EC);
		break;
	default:
		throw new Error('Wrong expected condition provided.');
	}
	return expectedConditionFunction;
};

const waitForElement = async (element, condition) => {
	const expectedConditionFunction = expectedCondition(condition);
	return browser.wait(expectedConditionFunction(element), 5000, 'Element taking too long to appear on the page');
};

module.exports = waitForElement;