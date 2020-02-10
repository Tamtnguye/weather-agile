let database = [
    {id: 1, fullname: "Armaan", email: "ad123@gmail.com", password: "ad123"},
    {id: 2, fullname: "John", email: "jo123@gmail.com", password: "jo123"},
    {id: 3, fullname: "James", email: "ja123@gmail.com", password: "ja123"},
    {id: 4, fullname: "Jim", email: "jim123@gmail.com", password: "jim123"}
];

let userModel = {
    findOne: (email) => {
        for (let i =0; i < database.length; i++) {
            if (database[i].email === email) {
                return database[i];
            }
        }
    },
    findById: (id) => {
        for (let i =0; i < database.length; i++) {
            if (database[i].id === id) {
                return database[i];
            }
        }
    }
}

module.exports = { database, userModel};
