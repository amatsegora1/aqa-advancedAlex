const usersList = {
    users: [
        {fName: 'Jhon', lName:'Smith', age: 21},
        {fName: 'Viki', lName:'Brown', age: 25},
        {fName: 'Bill', lName:'Masterson', age: 31},
    ],

    displayUsers () {
    for (const {fName, lName, age} of this.users){
        console.log(fName, lName, age)
    }
}
}

usersList.displayUsers();