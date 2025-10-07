const mongoose = require('mongoose');
const {createUser, User} = require('../functions/userModel.js');


//test suite
describe('User Model Testing', () => {
    ///AAA Pattern - Arrange, Act, Assert
    //jest hook
    beforeEach(()=>{
        jest.clearAllMocks();
    });

    //object literal
    const mockUser = {
        name: "Todd",
        email: "josh.nash@example.com",
        password: "password",
        age: 100
    }


});