const accordion = () => {
  const accordionUl = document.querySelector('.accordion>ul');

  accordionUl.addEventListener('click', e => {
    if (e.target.matches('.title_block')) {
      for (const li of accordionUl.children) {
        li.firstElementChild.classList.remove('msg-active');
      }
      e.target.classList.add('msg-active');
    }
  });

};

export default accordion;
