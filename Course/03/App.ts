// Test 1
{
    const a: number = 1;
    const b: string = "b";
    const v: string = 'v';
    const g: string = `g`;

    console.log(a + b + v + g);
}


// Test 2
{
    let revenue: number = 1000;
    let bonus: number = 500;
    let result: number = revenue + bonus;

    console.log(result);
}

// Test 3
{
    // Классическая функция //
    function GetFullName(firstName: string, surname: string): string
    {
        return `${firstName} ${surname}`
    }

    // Стрелочная функция //
    const GetFullNameArrow = (firstName: string, surname: string): string =>
    {
        return `${firstName} ${surname}`
    }
}

// Objects
{
    function GetFullPlayerName(PlayerEntity: { firstname: string, surname: string }): string
    {
        return `${PlayerEntity.firstname} ${PlayerEntity.surname}`
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
    interface IOffice
    {
        OfficeId: 45;
        IsOpened: false;
        Contacts: IContacts;
    }

    interface IContacts
    {
        Phone: "+79100000000";
        Email: "my@email.ru";
        Address: IAddress;
    }

    interface IAddress
    {
        City: "Москва";
    }

    let office: IOffice = {
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
    
    console.log(office);
}