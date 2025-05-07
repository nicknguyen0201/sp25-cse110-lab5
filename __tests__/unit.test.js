// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
/*
test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(sum(1,2)).toBe(3);
});
*/
test ('(123) 456-7890 is a valid phone number',()=>{
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test ('800-123-4567 is a valid phone number',()=>{
  expect(isPhoneNumber('800-123-4567')).toBe(true);
});
test ('1-234-1234-4568 is not a valid phone number',()=>{
  expect(isPhoneNumber('4568')).toBe(false);
});
test ('8001234567 is not a valid phone number',()=>{
  expect(isPhoneNumber('8001234567')).toBe(false);
});

test('nick@gmail.com is a valid email',()=>{
  expect(isEmail('nick@gmail.com')).toBe(true);
});
test('alisa@ucsd.edu is a valid email',()=>{
  expect(isEmail('alisa@ucsd.edu')).toBe(true);
});
test('alisa.edu is not a valid email',()=>{
  expect(isEmail('alisa.edu')).toBe(false);
});
test('alisa@gmail is not a valid email',()=>{
  expect(isEmail('alisa@gmail')).toBe(false);
});
test('abcd1234 is a strong password',()=>{
  expect(isStrongPassword('abcd1234')).toBe(true);
});
test('nick is a strong password',()=>{
  expect(isStrongPassword('nick')).toBe(true);
});
test('nick$$$ is not a strong password',()=>{
  expect(isStrongPassword('nick$$$')).toBe(false);
});
test('!@#$$$$ is not a strong password',()=>{
  expect(isStrongPassword('!@#$$$$')).toBe(false);
});
test('05/06/2025 is a valid date',()=>{
  expect(isDate('05/06/2025')).toBe(true);
});
test('5/6/2025 is a valid date',()=>{
  expect(isDate('5/6/2025')).toBe(true);
});
test('5/6/225 is not a valid date',()=>{
  expect(isDate('5/6/225')).toBe(false);
});
test('0/0/0 is not a valid date',()=>{
  expect(isDate('0/0/0')).toBe(false);
});
test('#aabbcc is a hex color',()=>{
  expect(isHexColor('#aabbcc')).toBe(true);
});
test('#aa66cc is a hex color',()=>{
  expect(isHexColor('#aa66cc')).toBe(true);
});
test('#aa66zz is not a hex color',()=>{
  expect(isHexColor('#aa66zz')).toBe(false);
});
test('#gg66zz is not a hex color',()=>{
  expect(isHexColor('#gg66zz')).toBe(false);
});


