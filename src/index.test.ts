import codes from './index';

test('country-calling-code', () => {
  const countryMap = Object.create(null);
  const iso2Map = Object.create(null);
  const iso3Map = Object.create(null);

  expect(codes.length >= 240).toBe(true);

  codes.forEach(({ country, countryCodes, isoCode2, isoCode3 }) => {
    expect(country.trim()).toEqual(country);
    expect(country.length > 0).toBe(true);

    countryCodes.forEach((code) => expect(code).toMatch(/^\d+(\-\d+)?$/));

    expect(isoCode2).toMatch(/^[A-Z]{2}$/);
    expect(isoCode3).toMatch(/^[A-Z]{3}$/);

    // test uniqueness
    expect(country in countryMap).toBe(false);
    countryMap[country] = true;

    expect(isoCode2 in iso2Map).toBe(false);
    iso2Map[isoCode2] = true;

    expect(isoCode3 in iso3Map).toBe(false);
    iso3Map[isoCode3] = true;
  });
});
