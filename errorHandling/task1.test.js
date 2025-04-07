const axios = require('axios');
const fetchData = require('./task1.cjs');

// test('that should process error message and return correct message if the URL is invalid', async () => {
//     try {
//         await fetchData();
//     } catch (error) {
//         expect(error.message).toContain('Error fetching data:');
//         expect(error.message).toMatch(/getaddrinfo ENOTFOUND/);
//     }

// })
test('should return correct message if the URL is invalid', async () => {
    await expect(fetchData()).rejects.toThrow('Error fetching data:');
  });

