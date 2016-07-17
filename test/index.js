import {describe, it} from 'mocha';
import {expect} from 'chai';
import codes from '../lib';


describe('country-calling-code', () => {
  it('is valid', () => {
    const countryMap = Object.create(null);
    const iso2Map = Object.create(null);
    const iso3Map = Object.create(null);

    expect(codes.length >= 240).to.be.true;

    codes.forEach(({country, countryCodes, isoCode2, isoCode3}) => {
      expect(country.trim()).to.equal(country);
      expect(country.length > 0).to.be.true;

      countryCodes.forEach((code) => expect(code).to.match(/^\d+(\-\d+)?$/));

      expect(isoCode2).to.match(/^[A-Z]{2}$/);
      expect(isoCode3).to.match(/^[A-Z]{3}$/);

      // test uniqueness
      expect(country in countryMap).to.be.false;
      countryMap[country] = true;

      expect(isoCode2 in iso2Map).to.be.false;
      iso2Map[isoCode2] = true;

      expect(isoCode3 in iso3Map).to.be.false;
      iso3Map[isoCode3] = true;
    });
  });
});
