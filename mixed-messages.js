//console.log('Hello GitHub and Git and test');


const person = ['Miss Scarlet', 'Mr. Green', 'Colonel Mustard', 'Professor Plum', 'Mrs. Peacock', 'Mrs. White'];
const weapon = ['Candlestick', 'Dagger', 'Lead Pipe', 'Revolver', 'Rope', 'Wrench'];
const room = ['Kitchen', 'Ball Room', 'Conservatory', 'Dining Room', 'Library', 'Billiard Room', 'Lounge', 'Hall', 'Study'];

let randomMessage = [];

let randomePerson = Math.floor(Math.random() * person.length);
let pickedPerson = person[randomePerson];
randomMessage.push(pickedPerson);

let randomeWeapon = Math.floor(Math.random() * weapon.length);
let pickedWeapon = weapon[randomeWeapon];
randomMessage.push(pickedWeapon);

let randomRoom = Math.floor(Math.random() * room.length);
let pickedRoom = room[randomRoom];
randomMessage.push(pickedRoom);

console.log(`Here is you generated crime: ${randomMessage.join(' ')}`);