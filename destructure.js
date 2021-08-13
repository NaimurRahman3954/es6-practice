// JS object
const person = {name: "Jack William", age: 17, job: "facebooker", gfName: "Emma Watson", address: "Gulshan", phone: "01719696969", friends: ["Tom Hanks", "Tom Hiddleston", "Tom Holland", "Tom Hardy"]}

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Object destructuring
const {phone, gfName} = person;
console.log(gfName, phone);

// array destructuring
const friends = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan"]
 const [first] = friends; // selects the first item
 const [chottoBondhu]  = friends; // selects the first item
 const [ektaBondhu, arektabondhu, ...bakiBondhura] = friends; // select first two items then creates an array for rest of them
 console.log(bakiBondhura);
 
//  destructuring complex object
const complexObject = {
   name: "Kichu Ekta",
   info: {
      address: "Dhanmondi",
      leader: "Elon Musk"
   }
}
const {leader} = complexObject.info;
console.log(leader);
