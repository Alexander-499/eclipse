function toggleCustomInputTarget() {
	const dropdown = document.getElementById('dropdownTarget');
	const customInput = document.getElementById('inputTarget');

	if (dropdown.value === 'playerName') {
		customInput.style.display = 'block';
	} else {
		customInput.style.display = 'none';
	}
}

function toggleCustomInputGameMode() {
	const dropdown = document.getElementById('dropdownGameMode');
	const customInput = document.getElementById('checkboxGameMode');

	if (dropdown.value !== 'anyGameMode') {
		customInput.style.display = 'flex';
	} else {
		customInput.style.display = 'none';
	}
}

function toggleCustomInputSelectionArea() {
	const dropdown = document.getElementById('dropdownSelectionArea');
  const customInput = document.getElementById('inputSelectionArea');
  const customInputTwo = document.getElementById('inputSelectionAreaTwo');
  const customInputThree = document.getElementById('inputSelectionAreaThree');
  const customInputFour = document.getElementById('inputSelectionAreaFour');
  const customInputFive = document.getElementById('inputSelectionAreaFive');

  if (dropdown.value !== 'volume') {
    customInput.style.display = 'flex';
    customInputTwo.style.display = 'flex';
    customInputThree.style.display = 'none';
    customInputFour.style.display = 'none';
    customInputFive.style.display = 'none';
  } else {
    customInput.style.display = 'none';
    customInputTwo.style.display = 'none';
    customInputThree.style.display = 'flex';
    customInputFour.style.display = 'flex';
    customInputFive.style.display = 'flex';
  }
}
toggleCustomInputSelectionArea()