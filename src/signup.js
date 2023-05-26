const signupForm = document.querySelector('#register-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name =  document.querySelector('#name').value;
  const email =  document.querySelector('#email').value;
  const password =  document.querySelector('#password').value;

  const Users = JSON.parse(localStorage.getItem('users')) || [];
  const isUserRegistered = Users.find(user => user.email === email);
  const isNameRegistered = Users.find(user => user.name === name);

  if(isUserRegistered) {
    return alert('El email ya está en uso');
  }
  if(isNameRegistered) {
    return alert('El nombre de usuario ya está en uso')
  }

  Users.push({name: name, email: email, password: password});
    localStorage.setItem('users', JSON.stringify(Users));
    alert('¡Registro exitoso!');
    window.location.href = 'login.html'

})