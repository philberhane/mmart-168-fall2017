## HOMEWORK 10: MORE PRACTICE WITH LOOPS
> * Due date: Midnight on Wednesday, 11/15 (2 weeks)
> * Part I: Setting up your new homework branch
> * Part II: Browsing the documentation
> * Part III: Coding
> * Part IV: Submit


## Reading Response
This week I watched a YouTube video called "Improving Your Coding Problem Solving Skills"
by a YouTuber named Simple Programmer. In this video, he advised some problem solving tips
that apply not only to coding, but to life. Tip#1 is to refine and define the problem
you're looking to solve. You can't solve a problem you don't understand.

Tip#2 is to slow it down. He says that often, people rush into finding a solution or coding
and end up frustrated. Tip#3 is to solve the simplest instance of the problem we're facing.
He gave an example of reversing an array: to start off reversing just one item in an array,
then a second, then a third. By starting simple and incrementing the difficulty, we're
able to find patterns that we could apply to our current problem.

This compliments what we've learned in this class. Whenever Sarah does an online lab for homework, I've noticed that she really breaks down what we're solving, and increments it so that by the time we're solving what the homework is asking for, everything seems easy.

I definitely intend on slowing it down while working on this final project. While reading and writing data to Google Sheets, I found myself getting into this erratic, non-logical, trial and error mindset after several hours of working and running into problems. I found that while stretching, walking my dogs, or even driving with the problem in mind, solutions elegantly pop up in my head.

I'm sure this isn't a new way of thinking. I never thought about the incrementing stuff prior to this class, but I guess that's kind of how we're taught math when we're young. We start off with one thing, which is a prerequisite for another thing, so on and so forth. I read about slowing it down from a couple of books in the past, to where one of the authors stated that brilliant minds throughout history solve their problems by relaxing or going to sleep with it in mind, from Einstein to Nikola Tesla.

I'm sure there's probably a dozen of other tips that he could have suggested, and probably could have pulled up studies confirming these tips, as opposed to a 6 minute video based on his subjective experience, but I'm pretty satisfied with this video and plan on implementing
the tips given.


## Part I: GitHub Setup
1. Using the Terminal, navigate to your mmart-168-fall2017 git repository: `$ cd {your git repository path} #different for everyone`
2. Check out the master branch: `$ git checkout master`
3. Pull the most recent changes from the upstream repository: `$ git pull --rebase upstream master`
4. Create a new branch to do Homework 10: `$ git branch homework10`
5. Checkout your new homework10 branch: `$ git checkout homework10`
6. Verify that you are now on the new branch: `$ git branch` (check that your new homework10 branch has an asterisk next to it).

## Part II: Browsing the BART API Documentation
Open the BART API Documentation, and take a look at the kinds of information the API
offers: https://api.bart.gov/docs/overview/examples.aspx. Consider the following:
* What kind of information does this API make available?
Pretty much everything about BART: from routes and scheduling to information about the station.
* What apps and websites do you think access this information?
I think transportation apps that deal with public transportation use this info.
For example, maps on smart phones typically have a walking, driving, and public
transportation option when configuring a route.
* Exercise (not to turn in): Open the following URL in your web browser:<br>
  https://api.bart.gov/api/sched.aspx?cmd=depart&orig=24th&dest=rock&key=MW9S-E7SL-26DU-VV8V&json=y
    * What happens when you change the "orig" and "dest" parameters (see [this list](https://api.bart.gov/docs/overview/abbrev.aspx))?
    It changes the real-time data that gets displayed.
    * What happens when you remove the "json=y" section of the URL?
    The data is displayed in XML format.

## PART III: Coding
Please complete the following activities
### A. Building the Station List Menu
Using any loop you want, modify the ***makeStationList*** function so that it populates the select menu with *ALL* of the stations that are returned from the BART data feed: https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y

### B. Create a Train Arrival Display
1. Update the ***getArrivalTimes*** function so that it queries whatever station the user selects.
2. Instead of printing all of the train arrival estimates to the console, output the following information to the DOM for each train:
    * time of arrival
    * direction
    * whether or not there is a delay
    * whether or not bikes are allowed
    * which platform
    * the color of the train line

### C. Extra Credit Opportunities
Make the information display look similar to the screenshot below (similar to how BART does it) using CSS (up to 40 points)
[![BART Dashboard](assets/BART-Dashboard.png "BART Dashboard")](http://www.bart.gov/)


## Part IV: Submit
1. Just as in Part II, open your Terminal and type: `$ git status`. It should tell you which files you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Completed homework 10'`
3. To "push" your change to up to your github account, type: `$ git push --set-upstream origin homework10`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look at your newly created homework10 branch.
5. **Submit your homework by pasting a link to your branch into the Moodle.**
