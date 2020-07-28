
var inputValue = document.querySelector('input');
inputValue.addEventListener('focus', function () {
   inputValue.value = ('');
})
// Если длина строки элемента равна 0, отобразить вспомогательное сообщение
inputValue.addEventListener('blur', function () {
   let inputLength = inputValue.value.length;
   if (inputLength == 0) {
      return inputValue.value = inputValue.getAttribute('value');
   }
});
