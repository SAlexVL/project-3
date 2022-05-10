'use strict';

document.cookie = `admin=false; expires=Tue, 12 May 2022 00:00:00 GMT`;

const login = 'admin',
  password = 'admin';

const url = location.origin;

const user = document.getElementById('name'),
  type = document.getElementById('type'),
  form = document.querySelector('form');

user.onfocus = () => {
  user.nextElementSibling.classList.add('non-visible');
  type.nextElementSibling.classList.add('non-visible');
};

type.onfocus = () => {
  user.nextElementSibling.classList.add('non-visible');
  type.nextElementSibling.classList.add('non-visible');
};

form.addEventListener('submit', e => {
  e.preventDefault();
  //const target = e.target;

  if (user.value !== login || type.value !== password) {
    user.nextElementSibling.classList.remove('non-visible');
    type.nextElementSibling.classList.remove('non-visible');
    user.value = '';
    type.value = '';
  } else {
    document.cookie = `admin=true; expires=Tue, 12 May 2022 00:00:00 GMT`;
    document.location.href = `${url}/admin/table.html`;
  }

});

