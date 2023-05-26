const loginForm = document.querySelector('.btn-login');

loginForm.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const Users = JSON.parse(localStorage.getItem('users')) || [];
  const validUser = Users.find(user => user.email === email && user.password === password);
  if(!validUser) {
    return alert('El usuario y/o la contraseña son incorrectos!')
  }
  alert(`Bienvenido ${validUser.name}`);
  localStorage.setItem('login_success', JSON.stringify(validUser));
  window.location.href = 'index.html';
})