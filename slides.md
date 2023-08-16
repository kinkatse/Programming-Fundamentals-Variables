# Programming Fundamentals:
# Variables

---

## Welcome

---

## App Academy

Visit App Academy at appacademy.io to view all our programs

Learn to code for free at appacademy.io/course/app-academy-open

Join our Discord! https://discord.com/invite/wHfR7AcTp5

---

## Agenda
- var vs let vs const vs global
- Data Types & Primitives (Brief Overview)
- Variable References
- Variable Declaration
- Scope
- Other Use Cases

---

## What are Variables?
- Similar to algebra in that we have a value stored in that variable
![Math](https://i.gyazo.com/1eeab4d386b0c8cfb0076b306acbc4bf.png)

---

## Creating Variables
- Convention is to follow something called camelCase
![Camel](https://i.gyazo.com/9eedd0b57a6b346e7bcaa405adc672c4.png)
- We can also reassign variables with '=' sign
![Reassign](https://i.gyazo.com/f1248add7666a35d45d2c24753d733cf.png)

---

## var vs let vs const vs global
- You have to "declare" your variables
	- **global** - Variables accessible practically anywhere
	- **var** - functionally-scoped variable
	- **let** - block-scoped variables (ES6+)
	- **const** - Constant variables will not be re-declared or re-assigned and also are block scoped (ES6+)
![Variables](https://i.gyazo.com/6dada68d315b2adada704400ecb7d8d8.png)

---

## Data Types & Primitives (Brief Overview)
So what type of value can we store?
- Primitives and Objects

Primitives
- Boolean
- Null
- Undefined
- Number
- String
- Symbols (ES6)

---

## Variable References

**What is a reference?**
- When storing a variable, we will often point to a location in memory for where we actually stored the value
- The variable only holds the reference and knows where to find it's value
	- You can think of these as addresses in our computer, of where these values live

**What if we store a variable as the value to another variable?**
- Then both variables will point to the same location in memory
- So when you mutate the reference, that will actually affect both variables

---

## Variable References

![Variable2](https://i.gyazo.com/f920950c9286809c7a3bcd5e4110210c.png)

---

## Variable References

![Variable3](https://i.gyazo.com/699846c9f16bbb8b10c37f1b0b71e77a.png)

---

## Variable Reference

![Variable4](https://i.gyazo.com/d3fe8c63366b4d25d1d248cbbf097c01.png)

---

## Variable References Demo

---

## Variable Declaration

- **Declaration**: "Hey, here's a variable called banana"
- **Initialization**: "Hey, let's give this variable a starting value" aka 1st assignment.
- **Assignment (Reassignment)**: "Let's change the value of this variable"
- **Temporal dead zones**: Cannot access a variable before initialization.
	- So if you try to use a variable before initialization happens, you will get an error
- **JS hoists let/const** declarations **BUT NOT initialize**
- **JS hoists var** declaration and **will be initialized to undefined**

---

## Scope
Scope: Set of variables that are available for use within the method.
- The scope of a function includes
	- 1. the function's arguments
	- 2. any local variables declared inside the function
	- 3. any variables that were already declared when the function was defined.
		- a nested function's scope includes variables declared in an outer scope

---

## Scope

- global - Variables accessible practically anywhere.
	- Unintended global variables create confusing, unpredictable errors
- var - functionally-scoped variable
- let - block-scoped variables (ES6+)
- const - Constant variables will not be re-declared or re-assigned (ES6+) and also are block scoped

---

## Variable Declaration Demo

---

## Other Use Cases: String Interpolation
- JavaScript: ``hello ${name}``

---

## Other Use Cases: Declaring Multiple Variables

- let a, b, c;
	- a = 1;
	- b = 2;
	- c = 3;
- let a = 1, b = 2, c = 3;
- let [a, b, c] = [1,2,3]; (Destructuring Assignment)

---

## Questions

---

## Thank you!