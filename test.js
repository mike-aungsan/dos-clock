var assert = require('assert'),
    clock = require('./index');

var numberDate = new clock.date(16649); // august 9, 2012

assert.equal(numberDate.year, 2012);
assert.equal(numberDate.month, 8);
assert.equal(numberDate.day, 9);

var numberTime = new clock.time(23911);  // 11:43:14

assert.equal(numberTime.hour,    11);
assert.equal(numberTime.minutes, 43);
assert.equal(numberTime.seconds, 14);

// get originals back out
assert.equal(numberDate.toDosDate(), 16649);
assert.equal(numberTime.toDosTime(), 23911);
