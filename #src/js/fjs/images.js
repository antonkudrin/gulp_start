//==КАРТИНКИ ВСТАВЛЯЮТСА ФОНОМ В РОДИТЕЛЬСКИЙ БЛОК======================
const imageBoxs = document.querySelectorAll('.ibg');

for (let index = 0; index < imageBoxs.length; index++) {
   const imageBox = imageBoxs[index];
   const image = imageBox.querySelector('img');
   const imgBackgroundWay = image.getAttribute('src');

   image.style.display = "none";
   imageBox.style.background = 'url("' + imgBackgroundWay + '") center / cover no-repeat';
}

//===ПАРАЛЛАКС ПРИ НАВИДЕНИИ МЫШИ=======_mpb====================
const bg = document.querySelectorAll('._bg > picture');

for (let index = 0; index < bg.length; index++) {
   const element = bg[index];
   element.style.top = '50%';
   element.style.right = '50%';
   element.style.bottom = '50%';
   element.style.left = '50%';
   element.style.opacity = '0';

}
document.querySelector('._mpb').onmouseover = function (el) {
   for (let index = 0; index < bg.length; index++) {
      const element = bg[index];
      element.style = false;
   }
}

document.querySelector('._mpb').onmousemove = function (event) {
   event = event || window.event;
   const x = event.x / window.innerWidth;
   const y = event.y / window.innerHeight;
   const bgImage = document.querySelectorAll('img')

   for (let index = 0; index < bgImage.length; index++) {
      const element = bgImage[index];
      element.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
   }
}