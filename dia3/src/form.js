const inputName = document.querySelector('[data-js="name"]');

inputName.addEventListener('input', (e) =>
  e.target.value = e.target.value.split(" ").map(word => {
    if (['de', 'da', 'do', 'dos'].includes(word.toLowerCase())) {
      return word.toLowerCase()
    }
    return word.charAt(0).toUpperCase() + word.substr(1);
  }).join(' ')
)


