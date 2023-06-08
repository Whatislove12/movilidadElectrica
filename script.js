window.onload = function() {

  // Функция для плавного скролла к якорной ссылке
    function smoothScroll(linkId) {
      const element = document.getElementById(linkId); // ищем ИД жлемента, куда мы хотим переместиться
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }

  // Обработчик клика на ссылку
    function handleClick(event) {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('href').substring(1); //элемент на котором произошло событие.получение атрибута хреф.удаление символа "#"
      smoothScroll(target); // передаем констаннту таргет, как атрибут 
    }

  // Получение всех ссылок с якорями и привязка обработчика события
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

  // Плавный скролл к якорной ссылке при нажатии в любую часть страницы

    //first part of the page
      const FirstPartPage = document.getElementById('scrollTopatinete');
      FirstPartPage.addEventListener('click', e=> smoothScroll('patinete'));

    //second part of the page
      const SecondPartPage = document.getElementById('patinete');
      SecondPartPage.addEventListener('click', e=> smoothScroll('bici'));

    //third part of the page
      const ThirdPartPage = document.getElementById('bici');
      ThirdPartPage.addEventListener('click', e=> smoothScroll('escate'));

    //fourth part of the page
      const FourthPartPage = document.getElementById('escate');
      FourthPartPage.addEventListener('click', e=> smoothScroll('ventajas'));

    //fifth part of the page
      const FifthPartPage = document.getElementById('ventajas');
      FifthPartPage.addEventListener('click', e=> smoothScroll('top-mejores'));
};

console.log('frf', window.devicePixelRatio);


