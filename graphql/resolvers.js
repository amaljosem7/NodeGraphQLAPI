module.exports = {
    hello() {
        return {
            text: 'Hello, Amal',
            views: 1234
        };
    },
    createUser: function async({userInput}, req) {
        return {
            id: 1,
            name: 'Amal',
            email: 'test@test.com',
            status: 'Active'
        }
    }
}
