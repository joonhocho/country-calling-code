# country-calling-code
[![Build Status](https://travis-ci.org/joonhocho/country-calling-code.svg?branch=master)](https://travis-ci.org/joonhocho/country-calling-code)
[![Coverage Status](https://coveralls.io/repos/github/joonhocho/country-calling-code/badge.svg?branch=master)](https://coveralls.io/github/joonhocho/country-calling-code?branch=master)
[![npm version](https://badge.fury.io/js/country-calling-code.svg)](https://badge.fury.io/js/country-calling-code)
[![Dependency Status](https://david-dm.org/joonhocho/country-calling-code.svg)](https://david-dm.org/joonhocho/country-calling-code)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)


Country calling codes and iso codes based on countrycode.org

Data is from [countrycode.org](https://countrycode.org).


### Install
```
npm install --save country-calling-code
```


### Usage
```javascript
import codes from 'country-calling-code';

// codes with the following format:
[
  {country: 'Afghanistan', countryCodes: ['93'], isoCode2: 'AF', isoCode3: 'AFG'},
  {country: 'Albania', countryCodes: ['355'], isoCode2: 'AL', isoCode3: 'ALB'},
  {country: 'Algeria', countryCodes: ['213'], isoCode2: 'DZ', isoCode3: 'DZA'},
  ...
]
```


### License
```
The MIT License (MIT)

Copyright (c) 2016 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
