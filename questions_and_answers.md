<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b> Answer </b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`

<i>We declared here `greeting` variable but assign empty object name is `greetign` for that after console.log(greetign) the result will be `ReferenceError: greetign is not defined`.</i>


</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>In this function there is a sum of a number and a string. where a = 1 is a `number` and  b = "2" is `string`. we know that in a number sum with a string the return will be a `string` thats why result is `"12"`.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `['🍝', '🍫', '🥑', '🍔']`

<i>Here we declare food in an array with four food. then we create an object with info variable having the property name favoriteFood and favoriteFood property assigned the the 0 index means first element of `food` . then changed the value of favoriteFood which doesn't effect the food object. for that when we console.log food the result we show unchanged</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ? B: `Hi there, undefined

<i>Certainly! In the provided code, the `sayHi` function has a `name` parameter. When you call `sayHi()` without passing any argument, the `name` parameter inside the function receives the value `undefined`. As a result, the function displays `Hi there, undefined` in its output.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>In this code, there's a `forEach` loop that iterates over the `nums` array. Inside the loop, each element, denoted as `num`, is evaluated to determine if it's truthy. In JavaScript, all numeric values except `0` are considered truthy. Consequently, for every element in the `nums` array that is not equal to `0`, the `count` variable is incremented by 1. Since there are three elements in the `nums` array (namely, 1, 2, and 3), the 'count' variable ultimately becomes 3. As a result, the output of the code is indeed 3.</i>

</p>
</details>
