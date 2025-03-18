const person = {
    firstName: 'Fname',
    lastName: null,
    age: 18,
}

delete person.age;
person.email = null;
const personHasFName = person.firstName ?? 'F name was not added';
const personHasLName = person.lastName ?? 'L name was not added';
const personHasEmail = person.email ?? 'Email was not added';

console.log(person);
console.log(`Person First Name: ${personHasFName} \nPerson Last Name: ${personHasLName} \nPerson email: ${personHasEmail}`);
