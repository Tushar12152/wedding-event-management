1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer:A.{}

explanation:at first declare a variable by let,which variable name is gretting. then reassign an empty object on this variable.and  out put will be empty array for this code.

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer:c."12"
explaination: sum() is a function and this functions has 2 pamamiters. which is a and b. and this function return sum of the paramiters. and when this function is called 1 argument is string and another is intezer .Integers and strings do not add, but sit side by side
and this output will be "12" .


3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer:A.['🍕', '🍫', '🥑', '🍔']

explaination: Food is an array ,and Info is an Object.info objects proparty is favoriteFood.which value is food arrays first element .and then replace object property value. No change have been made in Food Array.console.log has been food.and  food array will be output. 

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: B. Hi there, undefined

explanation:when called the seyHi() Function no arguments are pass then. and ${name} will be undefined in function. ${name} tries to interpolate the value of name. but it is undefined, and output will be "Hi there, undefined".



5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer: C. 3

explanation :js counts the number of truthy elements  in an array nums containing [0, 1, 2, 3]. and output will 3.