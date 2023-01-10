import { data } from './data.js';

(function () {
  const select = document.getElementById('select');
  const inputNumber = document.getElementById('input');

  window.addEventListener('DOMContentLoaded', createOptions);
  select.addEventListener('change', displayData.bind(select));
  inputNumber.addEventListener('change', validateInput.bind(inputNumber));
  document.getElementById('reset').addEventListener('click', resetForm);

  function createOptions() {
    data.forEach(object => {
      document.getElementById('select').insertAdjacentHTML('beforeend', `<option value='${object.name}'>${object.name}</option>`);
    })
  }
  
  function displayData() {
    resetForm();
    document.querySelectorAll('.fa').forEach(item => { item.remove() });
    data.filter(object => {
      if (this.value === object.name) {
        document.getElementById('prefix').textContent = object.prefix;
        document.getElementById('sufix').textContent = object.sufix;
        document.getElementById('output').textContent = object.output;
        document.getElementById('submit').addEventListener('click', (event) => {
          event.preventDefault();
          if (inputNumber.classList.contains('invalid')) {
            return null;
          } else {
            document.getElementById('result').textContent = object.method(inputNumber.value);
          }
        });
      }
    })
  }

  function validateInput() {
    data.filter(object => {
      if (select.value === object.name) {
        if (this.value <= object.min) {
          this.parentElement.querySelectorAll('.fa').forEach(item => { item.remove() });
          this.parentElement.insertAdjacentHTML('beforeend', `<span class='error'><i class='fa fa-exclamation-triangle error'> Wrong number <i class='fa fa-exclamation-triangle error'></span>`);
          inputNumber.classList.add('invalid');
        } else {
          this.parentElement.querySelectorAll('.fa').forEach(item => { item.remove() });
          inputNumber.classList.remove('invalid');
        }
      }
    })
  }

  function resetForm() {
    document.getElementById('prefix').textContent = '';
    document.getElementById('sufix').textContent = '';
    document.getElementById('output').textContent = '';
    document.getElementById('result').textContent = '';
    document.querySelectorAll('.fa').forEach(item => { item.remove() });
    inputNumber.value = "";
    inputNumber.classList.remove('invalid');
  }
})();