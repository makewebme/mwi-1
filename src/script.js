import calc from './inc'
import './styles/style.scss'

console.log(calc(4))

const updateUsers = () => {
  fetch('http://localhost:1337/users')
    .then((res) => res.json())
    .then((users) => {
      const usersUL = document.querySelector('.users')
      let usersLIs = '';

      users.forEach((user) => {
        usersLIs += `<li>${user.email}</li>`
      });

      usersUL.innerHTML = usersLIs;
    })
}

updateUsers()

const btnUpdate = document.querySelector('.update')

btnUpdate.addEventListener('click', updateUsers)
