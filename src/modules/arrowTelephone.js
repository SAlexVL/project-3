const arrowTelephone = () => {
  const arrow = document.querySelector('.header-contacts__arrow'),
    phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord'),
    phoneNumber = phoneNumberAccord.querySelector('.header-contacts__phone-number');

  arrow.addEventListener('click', () => {
    phoneNumberAccord.classList.toggle('phone-number-accord-top25');
    phoneNumber.classList.toggle('show-phone-number');
    arrow.classList.toggle('rotate-arrow');
  });
};

export default arrowTelephone;
