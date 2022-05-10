const sliders = () => {
  const repairTypes = document.getElementById('repair-types'),
    repairTypesSlider = repairTypes.querySelectorAll('.repair-types-slider>div'),
    navListRepairBtns = repairTypes.querySelectorAll('.nav-list-repair>button'),
    repairCounterCurrent = document.querySelector('.slider-counter-content__current'),
    repairCounterTotal = document.querySelector('.slider-counter-content__total');


  let slideIndex = 1;
  /* Вызываем функцию, которая реализована ниже: */
  showSlides(slideIndex);

  /* Увеличиваем индекс на 1 — показываем следующий слайд: */
  function nextSlide() {
    showSlides(slideIndex += 1);
    repairCounterCurrent.textContent = slideIndex;
  }

  /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
  function previousSlide() {
    showSlides(slideIndex -= 1);
    repairCounterCurrent.textContent = slideIndex;

  }

  /* Функция перелистывания: */
  function showSlides(n) {

    //repairCounter
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    const slides = document.querySelectorAll('.active>.repair-types-slider__slide');
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    /* Проходим по каждому слайду в цикле for: */
    for (const slide of slides) {
      slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "flex";
  }
  repairCounterTotal.textContent = repairTypesSlider[0].childElementCount;
  repairTypes.addEventListener('click', e => {
    const togglenavListRepairBtns = index => {
      for (let i = 0; i < navListRepairBtns.length; i++) {
        if (index === i) {
          navListRepairBtns[i].classList.add('active');
          repairTypesSlider[i].style.display = 'block';
          repairTypesSlider[i].classList.add('active');
          slideIndex = 1;
          repairCounterCurrent.textContent = slideIndex;
          repairCounterTotal.textContent = repairTypesSlider[i].childElementCount;

        } else {
          navListRepairBtns[i].classList.remove('active');
          repairTypesSlider[i].style.display = 'none';
          repairTypesSlider[i].classList.remove('active');
          repairTypesSlider[i].childNodes.forEach(item => {
            if (item.tagName === 'DIV') {

              item.style.display = 'none';
            }
          });
          repairTypesSlider[i].firstElementChild.style.display = 'flex';
        }
      }
    };

    const target = e.target;
    if (target.closest('.button_o')) {
      navListRepairBtns.forEach((item, i) => {
        if (item === target) {
          togglenavListRepairBtns(i);
        }
      });
    }

    if (target.closest('#repair-types-arrow_right')) {
      repairTypesSlider.forEach(item => {
        if (item.classList.contains('active')) {
          nextSlide();
        }
      });

    } else if (target.closest('#repair-types-arrow_left')) {
      repairTypesSlider.forEach(item => {
        if (item.classList.contains('active')) {
          previousSlide();
        }
      });
    }

  });

};

export default sliders;
