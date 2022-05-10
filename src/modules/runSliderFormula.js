import SliderCarousel from './SliderCarousel';

const runSliderFormula = () => {
  const formulaSlider = document.querySelector('.formula-slider-wrap'),
    formulaItemsSlides = formulaSlider.querySelectorAll('.formula-slider__slide');

  formulaSlider.addEventListener('click', e => {
    const target = e.target;
    if (target.matches('.formula-slider__slide')) {
      target.classList.toggle('active-item');
    } else {
      formulaItemsSlides.forEach(item => {
        item.classList.remove('active-item');
      });
    }

  });

  const sliderFormula = new SliderCarousel({
    main: '.formula-slider-wrap',
    wrap: '.formula-slider',
    next: '#formula-arrow_right',
    prev: '#formula-arrow_left',
    slidesToShow: 3,
    infinity: true,
    responsive: [
      {
        breakpoint: 1025,
        slidesToShow: 1,
      },
    ]
  });

  sliderFormula.init();

};

export default runSliderFormula;
