
const inputValues = document.querySelectorAll('input');
for (let index = 0; index < inputValues.length; index++) {
   const inputValue = inputValues[index];

   inputValue.addEventListener('focus', function () {
      inputValue.value = ('');
   })

   inputValue.addEventListener('blur', function () {
      let inputLength = inputValue.value.length;
      if (inputLength == 0) {
         return inputValue.value = inputValue.getAttribute('value');
      }
   });
}
