module.exports = {
	reporter: 'mochawesome',
	'reporter-options': 'reportDir=reports,reportFilename=serviceTests',
	spec: './AT_of_web_services/test/**/*spec.js',
	timeout: 10000,
};