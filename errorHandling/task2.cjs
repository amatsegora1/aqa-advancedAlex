const axios = require('axios');
const jsonData = require('./env.json');

async function fetchDataHeadersAndParams() {
    try {
        const params = {
            postId: 1,
        };

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token',
        };

        const response = await axios.get(`${jsonData.baseURL}`, { headers, params });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
}

module.exports = fetchDataHeadersAndParams;