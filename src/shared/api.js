export const api = (url) => {
    const headers = new Headers({ 'Content-Type': 'application/json' });

    const init = {
        headers,
    }

    return {
        get: async () => {
            init.method = 'GET';

            try {
                const response = await fetch(url, init);
                return response.json();
            } catch (error) {
                return ({
                    success: false,
                    message: 'Failed to FETCH().',
                    error: {
                        message: 'Failed to FETCH().',
                    },
                })
            }
        },
        post: async (body) => {
            init.method = 'POST';
            (body) && (init.body = JSON.stringify(body));

            try {
                const response = await fetch(url, init);
                return response.json();
            } catch (error) {
                return ({
                    success: false,
                    message: 'Failed to FETCH().',
                    error: {
                        message: 'Failed to FETCH().',
                    },
                })
            }
        },
        put: async (body) => {
            init.method = 'PUT';
            (body) && (init.body = JSON.stringify(body));

            try {
                const response = await fetch(url, init);
                return response.json();
            } catch (error) {
                return ({
                    success: false,
                    message: 'Failed to FETCH().',
                    error: {
                        message: 'Failed to FETCH().',
                    },
                })
            }
        },
        delete: async () => {
            init.method = 'DELETE';

            try {
                const response = await fetch(url, init);
                return response.json();
            } catch (error) {
                return ({
                    success: false,
                    message: 'Failed to FETCH().',
                    error: {
                        message: 'Failed to FETCH().',
                    },
                })
            }
        },
    }
}