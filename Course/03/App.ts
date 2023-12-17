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