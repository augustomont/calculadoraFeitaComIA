let result = '';

function clearResult() {
	result = '';
	document.querySelector('.result').value = '';
}

function deleteLast() {
	result = result.slice(0, -1);
	document.querySelector('.result').value = result;
}

function appendChar(char) {
	result += char;
	document.querySelector('.result').value = result;
}

function calculate() {
	try {
		result = eval(result);
		document.querySelector('.result').value = result;
	} catch (e) {
		alert('Invalid calculation');
		clearResult();
	}
}
