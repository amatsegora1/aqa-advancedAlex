const axios = require('axios');
const fetchDataHeadersAndParams = require('./task2');
const jsonData = require('./env.json');

jest.mock('axios');

test('that custom headers and params are included in the request', async () => {
    axios.get.mockResolvedValue({ data: [] });

    await fetchDataHeadersAndParams();
    
    expect(axios.get).toHaveBeenCalledWith(
        `${jsonData.baseURL}`,
        expect.objectContaining({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token',
            },
            params: {
                postId: 1,
            },
        })
    );
})