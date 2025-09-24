document.addEventListener('DOMContentLoaded', function() {
	const counter = document.getElementById('counter');
	const incrementBtn = document.getElementById('incrementBtn');
	let count = 0;

	incrementBtn.addEventListener('click', function() {
		count++;
		counter.textContent = count;
	});
});
