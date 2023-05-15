document.getElementById('guess-form').addEventListener('submit', function(event) {
	event.preventDefault();
	var guess = document.getElementById('guess-input').value;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var response = JSON.parse(xhr.responseText);
				var result = document.getElementById('result');
				if (response.result === 'correct') {
					result.innerHTML = 'You won! 🎉';
					result.style.color = 'white';
					result.style.fontWeight = "bold";
				} else if (response.result === 'higher') {
					result.innerHTML = 'The number is higher than ' + guess + '.';
					result.style.color = 'white';
				} else if (response.result === 'lower') {
					result.innerHTML = 'The number is lower than ' + guess + '.';
					result.style.color = 'white';
				}
			} else {
				console.error(xhr.statusText);
			}
		}
	};
	xhr.open('POST', 'index.php');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send('guess=' + guess);
    return false;
});

document.getElementById('new-game').addEventListener('click', function(event) {
	event.preventDefault();
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				document.getElementById('guess-input').value = '';
				document.getElementById('result').innerHTML = '';
			} else {
				console.error(xhr.statusText);
			}
		}
	};
	xhr.open('POST', 'index.php');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send();
});


