import Users from './Users.js';
import ToDo from './ToDo.js';
const todoURL = new ToDo();
const usersURL = new Users();

//Get To Do execution
todoURL.getToDo()
    .then(todo => console.log('ToDO data', todo))
    .catch(error => console.error('Error', error))

//Get User execution
usersURL.getUsers()
    .then(users => console.log('Users data:', users))
    .catch(error => console.error('Error', error))

//All and Race promises
let allPromises = Promise.all([todoURL.getToDo(), usersURL.getUsers()]);
let rasePromises = Promise.race([todoURL.getToDo(), usersURL.getUsers()]);


allPromises
    .then(results => {
        console.log('ToDo and Users results ALL:', results);
    })
    .catch(error => {
        console.error('ToDo and Users error ALL:', error);
    });


rasePromises
    .then(results => {
        console.log('ToDo and Users result RACE:', results);
    })
    .catch(error => {
        console.error('ToDo and Users error RACE:', error);
    });