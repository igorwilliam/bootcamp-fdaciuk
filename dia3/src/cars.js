const form = document.querySelector('[data-js="form"]');
const table = document.querySelector('[data-js="table"]');

form.addEventListener('submit',(e) => {
  e.preventDefault();

  const cellData = {
    image: e.target.elements.image.value,
    brand: e.target.elements.brand.value,
    year:  e.target.elements.year.value,
    licensePlate:  e.target.elements.licensePlate.value,
    color:  e.target.elements.color.value,
  }

  const htmlCell = document.createElement('tr');
  htmlCell.innerHTML = cellString(cellData);


  table.insertAdjacentElement('afterbegin', htmlCell)

  form.querySelector("input").focus()
  form.reset();
})

const cellString = (data) => `
    <td>
      <img src="${data.image}" height="100">
    </td>
    <td>${data.brand}</td>
    <td>${data.year}</td>
    <td>${data.licensePlate}</td>
    <td>${data.color}</td>
`;
