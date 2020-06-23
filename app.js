const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if (!password) { return; }

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});


const randomFunc = {
	lower: getRandomLower,
	upper: getRandomNUmber,
	number: getRandomNUmber,
	symbol: getRandomSymbol,
};

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNUmber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 40);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*()[]{}_-=><,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}
