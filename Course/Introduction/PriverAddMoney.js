"use strict";

function AddMoney(user, sum)
{
    if (sum < 0)
    {
        console.error("Error");
        return user;
    }
    user.Money += sum;
    return user;
}

AddMoney({Name: 'Frost', Money: 10}, 5);
