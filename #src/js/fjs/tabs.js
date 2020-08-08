let tab = function () {
   let tabNav = document.querySelectorAll('.nav-tab__link'),
      tabContent = document.querySelectorAll('.body-tab__item'),
      tabName;

      tabNav.forEach(item => {
      item.addEventListener('click', SelectTabNav);
   })

   function SelectTabNav() {
      tabNav.forEach(item => {
         item.classList.remove('is-active')
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
   }

   function selectTabContent(tabName) {
      tabContent.forEach(item => {
         item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
   }
};
tab();