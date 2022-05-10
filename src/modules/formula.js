const formula = () => {
  const formula = document.getElementById('formula'),
    formulaItems = formula.querySelectorAll('.formula-item');

  formulaItems.forEach(item => {
    const formulaItemPopup = item.querySelector('.formula-item-popup');

    if (!item.classList.contains('formula-slider__slide')) {
      item.addEventListener('mouseover', e => {
        if (e.target.matches('span')) {
          if (e.target.getBoundingClientRect().y < formulaItemPopup.clientHeight) {
            formulaItemPopup.classList.add('formula-item-popup-toggle');
          } else {
            formulaItemPopup.classList.remove('formula-item-popup-toggle');
          }
        }
        if (e.target.matches('span')) {
          item.style = 'z-index: 2';
          item.classList.toggle('active-item');
        }

      });
      item.addEventListener('mouseout', e => {
        if (e.target.matches('span')) {
          item.style = 'z-index: 1';
          item.classList.toggle('active-item');
        }
      });
    }
  });
};

export default formula;
