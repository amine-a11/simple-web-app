// Simple test to simulate unit test
const assert = require('assert');

function multiply(a, b) {
    return a * b;
}

assert.strictEqual(multiply(2, 3), 6, "2 * 3 should equal 6");
// assert.strictEqual(multiply(2, 2), 5, "2 * 2 should equal 5 (this test will fail)");
console.log("✅ Test passed!");
