function copyOutput() {
	const textarea = document.getElementById('outputTextarea');
	textarea.select();
	textarea.setSelectionRange(0, 99999); // For mobile devices

	navigator.clipboard.writeText(textarea.value).then(function () {
		const button = document.getElementById('copyOutputButton');
	}
	)
}

function updateCharCount() {
	const textarea = document.getElementById('outputTextarea');
	const charCount = textarea.value.length;
	document.getElementById('charCountOutput').innerText = charCount + " Chars";
}