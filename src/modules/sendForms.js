const sendForms = () => {
  const popupThank = document.querySelector('.popup-thank');

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const forms = [...document.getElementsByTagName('form')];

  forms.forEach(item => {
    const checkBox = item.querySelector('.checkbox__input'),
      inputs = item.querySelectorAll('input');

    item.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(item),
        body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });


      if (checkBox.checked && body.phone && (body.name || body.name === undefined)) {
        if (item.id === 'feedback6') {
          item.closest('.popup').classList.toggle('visibility-visible');
        }

        postData(body)
          .then(response => {
            if (response.status !== 200) {
              throw new Error('status Network not 200');
            }
          })
          .then(() => {
            popupThank.classList.toggle('visibility-visible');
            setTimeout(() => popupThank.classList.toggle('visibility-visible'), 3000);
            inputs.forEach(item => {
              item.value = '';
              if (item.checked) {
                item.checked = false;
              }
            });
          })
          .catch(error => {
            alert('При отправки заявки что-то пошло не так, попробуйте ещё раз');
            console.error(error);
          });
      } else {
        alert('Перед отправкой заявки убедитесь, что вы поставили согласие на обработку личных данных и заполнили все поля');

      }
    });
  });

};

export default sendForms;
