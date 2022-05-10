import SliderCarousel from './SliderCarousel';

const worksList = () => {
  const getData = () => fetch('./crm-backend/db.json'),
    popupRepairTypes = document.querySelector('.popup-repair-types'),
    btns = document.querySelectorAll('.button_o'),
    switchInner = document.getElementById('switch-inner'),
    popupTableList = document.querySelector('.popup-repair-types-content-table__list'),
    navListPopupRepair = document.querySelector('.nav-list-popup-repair'),
    navListRepairWrap = document.querySelector('.nav-list-repair');


  const render = item => {

    const { name, cost } = item,
      tbody = document.createElement('tbody'),
      el = document.createElement('tr');

    el.classList.add('mobile-row');
    el.innerHTML = `
        <td class="repair-types-name">${name}</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
        <td class="repair-types-value">м<sup>2</sup></td>
        <td class="repair-types-value">${cost}</td>
      `;
    tbody.insertAdjacentElement('beforeend', el);

    popupTableList.appendChild(tbody);

  };

  popupRepairTypes.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.popup-repair-types-nav__item')) {
      popupTableList.innerHTML = '';
      for (const btn of btns) {
        btn.classList.remove('active');
      }
      target.classList.add('active');
      switchInner.textContent = target.textContent;
      getData()
        .then(response => {
          if (response.status !== 200) {
            throw new Error('status Network NOT 200');
          }
          return (response.json());
        })
        .then(data => {
          data.forEach(item => {
            if (item.type === target.textContent) {
              render(item);
            } else {
              return;
            }
          });
        })
        .catch(error => console.error(error));
    }
  });

  const sliderMini = new SliderCarousel({
    main: '.nav-wrap-repair',
    wrap: '.nav-list-popup-repair',
    next: '#nav-arrow-popup-repair_right',
    prev: '#nav-arrow-popup-repair_left',
    slidesToShow: 3,
    infinity: true,
    responsive: [
      {
        breakpoint: 1025,
        slidesToShow: 1,
      },
      {
        breakpoint: 576,
        slidesToShow: 1,
      },

    ]
  });
  const sliderMiniRep = new SliderCarousel({
    main: '.nav-wrap-repair',
    wrap: '.nav-list-repair',
    next: '#nav-arrow-repair-right_base',
    prev: '#nav-arrow-repair-left_base',
    slidesToShow: 3,
    infinity: true,
    responsive: [
      {
        breakpoint: 1025,
        slidesToShow: 1,
      },
      {
        breakpoint: 576,
        slidesToShow: 1,
      },

    ]
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1025) {

      btns.forEach(item => {
        item.classList.remove('glo-slider__item');
      });
      navListPopupRepair.classList.remove('glo-slider__wrap');
      navListPopupRepair.style = 'transform: translateX(0);';
      navListRepairWrap.style = 'transform: translateX(0%)';
      navListRepairWrap.classList.remove('glo-slider__wrap');
    } else {
      btns.forEach(item => {
        item.classList.add('glo-slider__item');
      });
      navListPopupRepair.classList.add('glo-slider__wrap');
    }
  });

  sliderMini.init();
  sliderMiniRep.init();

  if (window.innerWidth >= 1025) {
    btns.forEach(item => {
      item.classList.remove('glo-slider__item');
    });
    navListPopupRepair.classList.remove('glo-slider__wrap');
    navListPopupRepair.style = 'transform: translateX(0);';
    navListRepairWrap.style = 'transform: translateX(0%)';
    navListRepairWrap.classList.remove('glo-slider__wrap');
  } else {
    btns.forEach(item => {
      item.classList.add('glo-slider__item');
    });
    navListPopupRepair.classList.add('glo-slider__wrap');
  }
};

export default worksList;
