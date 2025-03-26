//URLS
const toDoURL = 'https://jsonplaceholder.typicode.com/todos/1';
const usersURL = 'https://jsonplaceholder.typicode.com/users/1';

//Separete function to get ToDO using async/await
async function getToDo(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error happened');
        throw error;
    }
}

//Separete function to get users using async/await
async function getUsers(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error happened');
        throw error;
    }
}

//Get To Do execution
getToDo(toDoURL)
    .then(console.log)
    .catch(error => console.error('Error', error))

//Get User execution
getUsers(usersURL)
    .then(console.log)
    .catch(error => console.error('Error', error))

//All and Race promises
let allPromises = Promise.all([getToDo(toDoURL), getUsers(usersURL)])
let rasePromises = Promise.race([getToDo(toDoURL), getUsers(usersURL)])


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