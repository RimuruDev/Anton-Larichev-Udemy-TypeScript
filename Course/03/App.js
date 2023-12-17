"use strict";
// Test 1
{
    const a = 1;
    const b = "b";
    const v = 'v';
    const g = `g`;
    console.log(a + b + v + g);
}
// Test 2
{
    let revenue = 1000;
    let bonus = 500;
    let result = revenue + bonus;
    console.log(result);
}
// Test 3
{
    // Классическая функция //
    function GetFullName(firstName, surname) {
        return `${firstName} ${surname}`;
    }
    // Стрелочная функция //
    const GetFullNameArrow = (firstName, surname) => {
        return `${firstName} ${surname}`;
    };
}
// Objects
{
    function GetFullPlayerName(PlayerEntity) {
        return `${PlayerEntity.firstname} ${PlayerEntity.surname}`;
    }
    const Player = {
        firstname: 'Rimuru',
        surname: 'Tempest',
        city: 'TempestCity',
        age: 22
    };
    console.log(GetFullPlayerName(Player));
}
// Дан JSON и его нужно типизировать.
// {
//     "officeId": 45,
//     "isOpened": false,
//     "contacts": {
//     "phone": "+79100000000",
//         "email": "my@email.ru",
//         "address": {
//         "city": "Москва"
//     }
// }
// }
{
    let office = {
        OfficeId: 45,
        IsOpened: false,
        Contacts: {
            Phone: "+79100000000",
            Email: "my@email.ru",
            Address: {
                City: "Москва"
            }
        }
    };
    console.log(office.OfficeId);
}
