const substitution = {
	alphabet: "abcdefghijklmnopqrstuvwxyz",
	key: "jkcmzbnogxvepawstlyufdrhiq",
};

export function encode(text) {
	let encoded = "";
	for (let a in text) {
		encoded =
			encoded + substitution.key[substitution.alphabet.indexOf(text[a])];
	}
	return encoded;
}

export function decode(text) {
	let encoded = "";
	for (let a in text) {
		encoded =
			encoded + substitution.alphabet[substitution.key.indexOf(text[a])];
	}
	return encoded;
}
