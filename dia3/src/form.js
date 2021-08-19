const inputName = document.querySelector('[data-js="name"]');
const inputColor = document.querySelector('[data-js="color"]');

inputName.addEventListener('input', (e) =>
  e.target.value = e.target.value.split(" ").map(word => {
    if (['de', 'da', 'do', 'dos'].includes(word.toLowerCase())) {
      return word.toLowerCase()
    }
    return word.charAt(0).toUpperCase() + word.substr(1);
  }).join(' ')
)

inputColor.addEventListener('change', (e) => {
  const colors = ([...e.target.options].map(option => option.value))
  const selectedColors = ([...e.target.selectedOptions].map(option => option.value))

  colors.forEach(color => {
    const divColor = document.querySelector(`[data-js="${color}"]`);

    if (selectedColors.includes(color)) {
      divColor.setAttribute('style', 'display: block');
    } else {
      divColor.setAttribute('style', 'display: none');
    }
  });
})


