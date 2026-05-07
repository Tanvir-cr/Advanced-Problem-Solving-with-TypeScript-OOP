Programming-e amra shobshomoy chai ekta code jate bar bar bivinno jaygay use kora jay (DRY principle). TypeScript-e Generic amader thik ei kajtai korte shahajjo kore.

Problem ta kothay?
Dhoro, amar ekta function dorkar jeta input hisebe ja pabo, shetai return korbe. Generics chara amra hoyto protibari alada function likhtam:

TypeScript
function stringIdentity(arg: string): string {
    return arg;
}

function numberIdentity(arg: number): number {
    return arg;
}
Ekhane code duplicate hochche. Amra jodi any use kori, tahole type safety thake na.

Solution: Generics (<T>)
Generics amader ekta "Type Variable" use korte dey. Eta ekta placeholder er moto kaj kore.

TypeScript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("MyString");
let output2 = identity<number>(100);
Generic keno use korbo?
Reusability: Ekta function diyei string, number, ba object—shob kichu handle kora jay.

Type Safety: any er moto na, ekhane input er type jeta hobe, return type o thik shetai hobe. TypeScript janbe je output1 asholei ekta string.