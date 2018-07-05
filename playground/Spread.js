function add (a, b){
  return a + b;
}

console.log(add(3,1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [3, ...groupA, ...groupB];

console.log(final);

var person = ['Andrew', 25];
var person2 = ['Jen', 29];

var names = ['Mike', 'Ben'];
var final1 = ['Nick', ...names];

function greet(name, age){
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...person2);

final1.forEach(function(name){
  console.log('Hi ' + name)
});
