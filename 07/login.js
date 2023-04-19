const id = 'hello';
const pw = 'world';

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputId = form.elements.id.value;
  const inputPw = form.elements.pw.value;

  if (inputId === 'hello' && inputPw === 'world') {
    result.innerHTML = 'Success';
  } else {
    result.innerHTML = 'Error';
  }
});
