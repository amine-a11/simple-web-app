// Simple test to simulate unit test
const assert = require('assert');

function multiply(a, b) {
  return a * b;
}

assert.strictEqual(multiply(2, 3), 6, "2 * 3 should equal 6");
console.log("✅ Test passed!");
