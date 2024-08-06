function toggleFlyout(content) {
	var flyout = document.getElementById('flyout');
	var flyoutContent = document.getElementById('flyoutContent');
	var flyoutLinkContent = document.getElementById('flyoutLinkContent');
	if (flyout.classList.contains('show')) {
		flyout.classList.remove('show');
		setTimeout(() => { flyout.style.display = 'none'; }, 300);
	} else {
		flyout.style.display = 'block';
		setTimeout(() => { flyout.classList.add('show'); }, 10);

		var propertyAccessString = 'flyoutContent.' + content + '.link';

		function getValue(obj, propertyString) {
				return new Function('obj', 'return obj.' + propertyString)(obj);
		}

		var flyoutLink = getValue(window, propertyAccessString);

		var propertyAccessString = 'flyoutContent.' + content + '.header';

		function getValue(obj, propertyString) {
				return new Function('obj', 'return obj.' + propertyString)(obj);
		}

		var flyoutHeader = getValue(window, propertyAccessString);

		var propertyAccessString = 'flyoutContent.' + content + '.text';

		function getValue(obj, propertyString) {
				return new Function('obj', 'return obj.' + propertyString)(obj);
		}

		var flyoutText = getValue(window, propertyAccessString);

		flyoutContent.innerHTML = '<h3 style="font-weight: 400; text-align: center; letter-spacing: 1px;">' + flyoutHeader + '</h3><p>' + flyoutText + '</p>';
		flyoutLinkContent.innerHTML = '<a href="' + flyoutLink + '" target="_blank">Learn more</a>';
	}
}

function hideFlyout() {
	flyout.classList.remove('show');
	setTimeout(() => { flyout.style.display = 'none'; }, 300);
}