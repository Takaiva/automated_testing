import capitalize from "../src/firstSymbolToUpper.js";

if (capitalize('hello') !== 'Hello') {
	throw new Error('Tests failed');
}

if (capitalize('') !== '') {
	throw new Error('Tests failed');
}

console.log('Tests passed');
