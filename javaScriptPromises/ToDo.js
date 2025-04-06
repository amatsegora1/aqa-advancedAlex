class ToDo {

    constructor(url = 'https://jsonplaceholder.typicode.com/todos/1') {
        this.url = url;
    }

    async getToDo() {
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
export default ToDo;