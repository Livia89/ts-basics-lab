"use strict";
/*

Welcome to:

    ................................................................
    .                                                              .
    .     ####################    ####################      E      .
    .     ####################    ####################      X      .
    .             ####            ####                      E      .
    .             ####            ####                      R      .
    .             ####            ####################      C      .
    .             ####                            ####      I      .
    .             ####                            ####      S      .
    .             ####            ####################      E      .
    .             ####            ####################      S      .
    .                                                              .
    ................................................................

Exercise:

    Given the data, define the interface "User" and use it accordingly.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    const users = [
        {
            name: 'Max Mustermann',
            age: 25,
            occupation: 'Chimney sweep'
        },
        {
            name: 'Kate Müller',
            age: 23,
            occupation: 'Astronaut'
        }
    ];
    function logPerson(user) {
        console.log(` - ${user.name}, ${user.age}`);
    }
    console.log('Users:');
    users.forEach(logPerson);
    /* In case if you are stuck:
    
    // https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
    */
};
