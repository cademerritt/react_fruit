import fruits from "./foods";
import { choice, remove } from "./helpers";

let fruit = choice(fruits);
console.log(`I'd like one ${fruit}, please.`);
console.log(`Delicius! May I have another?${fruit}, please.`);
let reman = remove(fruits, fruit);
console.log(
  `I'm sorry, we're all out. but we have ${reman.length} other fruits left`
);
