function convertToOptions(jsonObj) {
  let options = '';

  for (const key in jsonObj) {
    if (jsonObj.hasOwnProperty(key)) {
      const value = jsonObj[key];
      options += `<option value="${key}">${value}</option>\n`;
    }
  }

  return options;
}

const selectElement = document.getElementById('dropdownItem');

const optionsString = convertToOptions(items);

selectElement.innerHTML = optionsString;