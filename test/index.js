import {describe, it} from 'mocha';
import {expect} from 'chai';
import codes from '../lib';


describe('country-calling-code', () => {
  it('is valid', () => {
    expect(codes.length >= 240).to.be.true;
    codes.forEach(({country, countryCodes, isoCode2, isoCode3}) => {
      expect(country.trim()).to.equal(country);
      expect(country.length > 0).to.be.true;
      countryCodes.forEach((code) => expect(code).to.match(/^\d+(\-\d+)?$/));
      expect(isoCode2).to.match(/^[A-Z]{2}$/);
      expect(isoCode3).to.match(/^[A-Z]{3}$/);
    });
  });
});
