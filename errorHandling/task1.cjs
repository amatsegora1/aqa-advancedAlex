const axios = require('axios');
const jsonData = require ('./env.json');

async function fetchData() {
    try {
        const response = await axios.get(`${jsonData.invalidUrl}`);
        return response;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }

}

module.exports = fetchData;