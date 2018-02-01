const inputs = document.querySelectorAll('.controls input');
console.log("inputs", inputs);

function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(function(item) {
	item.addEventListener('change', handleUpdate);

	item.addEventListener('mousemove', handleUpdate);
})