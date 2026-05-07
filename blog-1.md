TypeScript use korar shobcheye boro karon holo type safety. Kintu amra jokhoni any use kori, amra shei safety ta hariye feli.

any keno ektu "risk":
any use korle TypeScript kono check kore na. Tumi string er upor number er method chalao ba vul kono function call koro, TypeScript chup thakbe. Result? Runtime-e giye app crash korbe.

TypeScript
let myValue: any = "Hello World";

myValue.toUpperCase(); // Thik ache
myValue.push(5);       // Error! Kintu TypeScript runtime er agey bolbe na.
unknown kivabe amader bachay:
unknown o any er moto jekono value nite pare, kintu ekta boro difference ache. unknown type er kono kichu niye kaj korar agey TypeScript amader force kore check korte je ota ashole ki type.

TypeScript
let data: unknown = "Hello";

// data.toUpperCase(); // Eta korle TypeScript error dibe

if (typeof data === "string") {
    console.log(data.toUpperCase()); // Ekhon kaj korbe, karon amra check korechi!
}
Shohoj kothay: any mane "I don't care," ar unknown mane "I don't know yet, so let me check first." Tai unknown use kora onek beshi safe.