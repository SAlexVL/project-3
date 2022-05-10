const privacyPopup = () => {
  const privacyLinks = document.querySelectorAll('.link-privacy'),
    popupPrivacy = document.querySelector('.popup-privacy');

  privacyLinks.forEach(item => {
    item.addEventListener('click', () => {
      popupPrivacy.classList.toggle('visibility-visible');
    });
  });

};

export default privacyPopup;
