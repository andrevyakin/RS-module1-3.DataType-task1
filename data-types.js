//task 1

//String
const name = "Андрей";
//Number
const age = 46;
//Boolean
const studiesJavaScript = true;
//Null
let x = null;
//Undefined
const y = undefined;
//Object
const settingData = {
    name : "Андрей",
    age : 46
};
//Symbol
const id = Symbol("id");
//BigInt
const bigNumber = 10n;

console.log("\"Type String\"", "значение:", name, "тип:", typeof(name));
console.log("\"Type Number\"", "значение:", age, "тип:", typeof(age));
console.log("\"Type Boolean\"", "значение:", studiesJavaScript, "тип:", typeof(studiesJavaScript));
console.log("\"Type Null\"", "значение:", x, "тип:", typeof(x));
console.log("\"Type Undefined\"", "значение:", y, "тип:", typeof(y));
console.log("\"Type Object\"", "значение:", settingData, "тип:", typeof(settingData));
console.log("\"Type Symbol\"", "значение:", id, "тип:", typeof(id));
console.log("\"Type BigInt\"", "значение:", bigNumber, "тип:", typeof(bigNumber));
