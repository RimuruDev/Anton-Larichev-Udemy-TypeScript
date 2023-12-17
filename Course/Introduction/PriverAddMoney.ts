interface IUser
{
    Name: string;
    Money: number;
}

function AddMoney(user: IUser, sum: number): IUser
{
    if (sum < 0)
    {
        console.error("Error");
        return user;
    }

    user.Money += sum;

    return user;
}

AddMoney({Name: 'Frost', Money: 10}, 5)