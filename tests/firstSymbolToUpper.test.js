import capitalize from "../src/firstSymbolToUpper.js";
import { strict as assert } from 'assert';

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');

console.log('Tests passed');
