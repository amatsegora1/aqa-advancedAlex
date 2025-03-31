//URLS
const toDoURL = 'https://jsonplaceholder.typicode.com/todos/1';
const usersURL = 'https://jsonplaceholder.typicode.com/users/1';

//Separete function to get ToDO
function getToDo(url) {
    return fetch(url)
    .then(response => response.json());
}

//Separete function to get users
function getUsers (url){
    return fetch(url)
    .then(response => response.json());
}

//Get To Do execution
getToDo(toDoURL)
    .then(data => {
        console.log('Get ToDo response (separete fucntion):', data);
    })
    .catch(error => {
        console.error('Error:', error);
      });

//Get Users execution
getUsers(usersURL)
    .then(data => {
        console.log('Get Users response (separete fucntion):', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


//All and Race promises
let allPromises = Promise.all([getToDo(toDoURL), getUsers(usersURL)])
let rasePromises = Promise.race ([getToDo(toDoURL), getUsers(usersURL)])


allPromises
    .then(results => {
        console.log('ToDo and Users results ALL:', results);
    })
    .catch(error => {
        console.error('ToDo and Users error ALL:', error);
    });


rasePromises
    .then(results => {
        console.log('ToDo and Users results RACE:', results);
    })
    .catch(error => {
        console.error('ToDo and Users error RACE:', error);
    });
