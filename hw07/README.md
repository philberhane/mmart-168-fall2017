## THIS WEEK'S READING RESPONSE
  This week I listened to "The 3 Steps in the Cycle of Technological Abstraction"
by the Developer Tea podcast. This episode was a bit more on the business side,
and aimed at developers or tech entrepreneurs who don't know what to build or
what business to start (it was also more on the business side based on how many
times he'd mention his sponsors lol jk). Step 1, Value, is basically figuring
out what humans find valuable. Step 2, Optimization, is to make the most of your
time and resources. Step 3, Abstraction, is figuring out how to provide this
value by technological means.
  We haven't really talked about this in class. This isn't necessarily a technology,
but it's a pretty new and creative way of thinking before embarking on my own
projects. The pros of technological abstraction would probably be a page long on
it's own, so I'll limit it down to a few: autonomy, innovation, and making life
a whole lot easier. The cons, to name a few, would be automation taking away
human jobs, and, if you're Elon Musk, an iRobot-like world where AI has taken over.
  The author could have considered more than 3 steps (because nothing online is
ever 3 or 5 steps like they say it is), but it makes for a simple podcast episode
that's easy to listen to in the morning. The fact that the number one step is 'value'
is critical. In my opinion, value shifts the focus away from building things that
are useless and focuses on things that can make a difference in someone's life.




## HOMEWORK 6: PRACTICE WITH FUNCTIONS, LOOPS, DOM MANIPULATION, AND CONDITIONALS
> * Due date: Midnight on Wednesday, 10/18 (1 week)
> * Part I: Self study (reading / watching videos)
> * Part II: Setting up your new homework branch
> * Part III: Coding Homework
> * Part IV: Submit

## Part I: Self Study
This homework will require some initial review and video watching. Before beginning, please review the following references. Some are **required**, others recommended (optional).

### A. Loops
* **[Required]** [Intro to Loops: Lynda.com](https://www.lynda.com/JavaScript-tutorials/Loops/574716/612083-4.html)
* [Optional] [Examples of Loops: W3Schools](https://www.w3schools.com/js/js_loop_for.asp)
* [Optional] [Examples of Loops: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

### B. Adding DOM Elements
* **[Required]** [Adding elements](https://www.lynda.com/JavaScript-tutorials/Add-DOM-elements/574716/612057-4.html)<br>Note: this was assigned several weeks ago, so should be review.
* [Optional] [Examples of Addng Elements: W3Schools](https://www.w3schools.com/jsref/met_document_createelement.asp)
* [Optional] [Examples of Adding Elements: MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

### C. Functions
* [Optional] [Functions: Web Design Weekly](https://web-design-weekly.com/2013/01/20/introduction-to-functions-in-javascript/)<br>Remember that you'll be using arrow functions

### D. Conditional Statements
* [Optional] [If / Else: W3Schools](https://www.w3schools.com/js/js_if_else.asp)
* [Optional] [If / Else: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

### E. Math
* **[Required]** [Math Operators: W3Schools](https://www.w3schools.com/js/js_arithmetic.asp)<br>Note: take a look at division or modulus.


## Part II: GitHub Setup
1. Using the Terminal, navigate to your mmart-168-fall2017 git repository: `$ cd {your git repository path} #different for everyone`
2. Check out the master branch: `$ git checkout master`
3. Pull the most recent changes from the upstream repository: `$ git pull --rebase upstream master`
4. Create a new branch to do Homework 7: `$ git branch homework07`
5. Checkout your new homework07 branch: `$ git checkout homework07`
6. Verify that you are now on the new branch: `$ git branch` (check that your new homework07 branch has an asterisk next to it).

## Part III: Coding
### A. Create a Function that Appends Elements to the DOM
Create a function that appends an "li" element to an unordered list ("ul" element) in the DOM. This function should take a string as a parameter. In the body of the function, there should be code that appends an "li" element, with the string inside, to the un-ordered list ("ul" tag):

### B. Create the Loop
Using the strategy of your choice, write a loop over the numbers 1 - 100 that satisfies the following conditions:

1. If the number is divisible by 3, append "Fizz" to the unordered list
2. If the number is divisible by 5, append "Buzz" to the unordered list
3. If the number is divisible by 3 AND 5, append "FizzBuzz" to the unordered list.
4. Bonus points: Include both the number *and* the word you've appended to the list

## Part IV: Submit
1. Just as in Part II, open your Terminal and type: `$ git status`. It should tell you which files you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Complete homework 7'`
3. To "push" your change to up to your github account, type: `$ git push --set-upstream origin homework07`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look at your newly created homework07 branch.
5. **Submit your homework by pasting a link to your branch into the Moodle.**
