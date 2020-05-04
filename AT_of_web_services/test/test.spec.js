/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const env = require('../endpoint/typicodeURI');


chai.use(chaiHttp);

describe('Verification with API', () => {
	it('Verifying Status code is 200', () => {
		chai.request(env.uri)
			.get('/')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
			});
	});

	it('Verify an http response header', () => {
		chai.request(env.uri)
			.get('/')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
			});
	});

	it('Verify an http response body', () => {
		chai.request(env.uri)
			.get('/')
			.end((err, res) => {
				const count = res.body;
				const storage = count.length;
				expect(err).to.be.null;
				expect(res.body).to.be.an('array');
				expect(storage).to.be.eql(10);
			});
	});
});