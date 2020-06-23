function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNUmber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 40)
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*()[]{}_-=><,.'
	return symbols[Math.floor(Math.random() * symbols.length)]
}
