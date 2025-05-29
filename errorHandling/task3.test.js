const axios = require('axios');
const fetchDataHeadersAndParams = require('./task2');
const jsonData = require('./env.json');

jest.mock('axios');

test('should return data when the request is successful', async () => {
    axios.get.mockResolvedValue({
        data: [{ id: 1, title: 'Test Post' }],
    });

    const result = await fetchDataHeadersAndParams();

    expect(result).toEqual([{ id: 1, title: 'Test Post' }]);

    expect(axios.get).toHaveBeenCalledWith(
        jsonData.baseURL,
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
});

test('should throw an error when the request fails', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(fetchDataHeadersAndParams()).rejects.toThrow('Network Error');

    expect(axios.get).toHaveBeenCalledWith(
        jsonData.baseURL,
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
});