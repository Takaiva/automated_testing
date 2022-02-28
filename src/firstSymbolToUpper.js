const capitalize = (text) => {
	if (text === '') {
		return '';
	}
	const [firstSymb, ...restOfSymbols] = text;
	return `${firstSymb.toUpperCase()}${restOfSymbols.join('')}`;
};

export default capitalize;
