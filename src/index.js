import foods from "./foods";
import { choice, removeItem } from "./helper";

let food = choice(foods);

console.log(`I'd like one ${food}, please`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! May I have another?`);

let remainingFood = removeItem(foods, food);

console.log(`I'm sorry, we're all out. We have ${remainingFood.length} left.`);
