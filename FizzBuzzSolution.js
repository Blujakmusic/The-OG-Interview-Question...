/* My simple solution for the classic "Fizz Buzz" prompt.
There are several variations of this prompt, but essentially the challenge
is to write a program that prints a sequence of numbers from 0-20 in descending order,
printing the word "Fizz" for every other even number starting at 20 and "Buzz" for every other
odd number after that. */

for (let n = 20; n >= 0; n--) {
    let output = "";
    if (n % 4 == 0) output += "Fizz";
    if (n % 4 == 3) output += "Buzz";
    console.log(output || n);
  }

/* -->

Result:

Fizz
Buzz
18
17
Fizz
Buzz
14
13
Fizz
Buzz
10
9
Fizz
Buzz
6
5
Fizz
Buzz
2
1
Fizz

*/