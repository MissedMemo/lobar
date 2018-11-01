const _ = require("../src/lobar");

const nums = [1, 2, 3];
const obj = {
  first: "Joe",
  last: "Schmoe",
  email: "test@example.com",
  phone: null,
  age: 24
};

let result = [];
_.forEach(nums, n => {
  result.push(n);
});
let success = JSON.stringify(result) === JSON.stringify(nums);
console.log(
  `${success ? "✓" : "✗"} forEach with array ${
    success ? "succeeded" : "failed!"
  }`
);

result = [];
_.each(obj, item => {
  result.push(item);
});
success = JSON.stringify(result) === JSON.stringify(Object.values(obj));
console.log(
  `${success ? "✓" : "✗"} each with object ${success ? "succeeded" : "failed!"}`
);
