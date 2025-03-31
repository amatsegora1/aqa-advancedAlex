class Users {
    
    constructor(url = 'https://jsonplaceholder.typicode.com/users/1') {
        this.url = url;
    }

    async getUsers() {
        try {
            const response = await fetch(this.url);
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
}
export default Users;