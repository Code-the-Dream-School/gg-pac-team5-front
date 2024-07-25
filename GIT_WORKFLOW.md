## Git Workflow for Cloned Repositories
We will be using a [clone workflow as opposed to a fork workflow](https://www.theserverside.com/answer/Git-fork-vs-clone-Whats-the-difference) since we won't be forking these repositories. 

1:  **Establish Your Repository on Your Local Machine**
- For frontend: `git clone https://github.com/Code-the-Dream-School/gg-pac-team5-front <name of project on your local machine>`
- For backend: `git clone https://github.com/Code-the-Dream-School/gg-pac-team5-back <name of project on your local machine>`

<br>

2: **Establish Your Remote**
- For frontend: `git remote add origin https://github.com/Code-the-Dream-School/gg-pac-team5-front`
- For backend: `git remote add origin https://github.com/Code-the-Dream-School/gg-pac-team5-back`

Make sure that your remote is set correctly by running `git remote -v`. If done correctly, your terminal should say this (depending on whether you're working on the frontend or backend): 
```
> origin  https://github.com/Code-the-Dream-School/gg-pac-team5-front (fetch)
> origin  https://github.com/Code-the-Dream-School/gg-pac-team5-front (push)
 ```

<br>

3: **Ensure That Your Main/master Branch is Always Up To Date.**

Always run this before you start coding. This will minimize merge conflicts.
- `git pull origin main`

<br>

4: **We Should be Utilizing a [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).**

This just means that you **never push directly to main**. You keep your main updated, and then you checkout to a new branch to work on your feature.
- `git checkout -b chases-awesome-new-feature` -- replace the name with whatever the feature that you're working on is.

<br>

5: **Add the Awesome Changes**
- `git add -A` or `git add .`

<br>

6: **Commit the Changes**
- `git commit -m '(feature): a description of my feature so its easy for a reviewer to read'`
A great convention to follow when writing our your commits can be found here: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

<br> 

7: **Push the Changes to a Remote Branch That Matches Your Current Local Branch: Do Not Push to Main**
- `git push origin chases-awesome-new-feature`

If you use this command, be careful of one thing: the name of the branch that you made in step 4, in this example it would be chases-awesome-new-feature, needs to be the exact same as the remote branch that you're pushing to, which in this example is also chases-awesome-new-feature, for there not to be any errors.

8: **Create the Pull Request**

Go to your remote branch: either the front-end or back-end GitHub repository, and go to the _pull requests_ tab, and you should see a banner right at the top that says something like: 
> "chases-awesome-new-feature had recent pushes a minute ago" 

and a big green button that says: "Compare & pull request"

Click "Compare & pull request" and create your [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Remember, when you create a pull request, you are asking someone to merge your code into the main branch. Think of this as a favor that they will do for you only if your code works with the main branch. So be descriptive and polite with your pull request. Explain what your feature is. What does it do? What code does it introduce? What changes did you make? Why should they merge your pull request into the main branch? What will your feature improve if merged? 

Answer all of these questions and then make your pull request. 

9: **Take Your Pull Request Out of Draft and Assign It to Someone**

Once you're ready for your code to be reviewed, take your Pull Request out of draft by scrolling down to the bottom of the Pull Request and clicking the button: "ready for review"

Next, assign someone to this Pull Request or else no one may be notified when your Pull Request is made. You can do this by going to the right side of your screen (on desktop) and, under the "Assignees" tab, click the small settings icon. From there, a list of all of the people who have access to these repos will appear and you will choose someone who you want to review and approve your code. Assign a fellow collegue of your choice who knows the code that you're working on, and assign a mentor as well. Mentors will oversee overall code quality, but will not be able to review every PR. We will be following a student-first strategy here, and if you feel that the content of the PR that you're reviewing is beyond your scope, reach out to a mentor for assistance!

10: **WAIT for someone else to approve your code**

Similar to how you should never push up to the main branch as to keep the main branch protected from breaking changes, you should also never merge your own code. 

Someone will review your code and either approve the code and merge it, or they will leave comments on your Pull Request asking for some things to be changed before the Pull Request gets approved. 

**How to Review and Approve a Pull Request**

Just as the person who made the pull request was clear and polite about their changes they wish to be made to the main branch, you will respond clearly and politely to their code. The best code is made when we're all a team. 

Go to the "Pull Requests" tab and click on the specific one that you intend to review. 

Right below the name of the Pull Request, in the middle of the screen, there should be a tab that says "Files changed" with a number of the files changed next to it. Click this.

Here, you can leave review comments by clicking on the big green button in the top-right of the screen labeled "Review changes". Click this.

Next, suggest the changes that you think should be made, but do it kindly. Here is a great example of a convention you should follow when leaving comments on a Pull Request called [Conventional Comments](https://conventionalcomments.org/). 

Once the code is up to standard and you think it should be merged into main, you can go ahead and approve the Pull Request.

After this, you can scroll down and merge the Pull Request by clicking another big green button that says: "Create a merge commit". You should click the small dropdown on this button, which should reveal a couple more options. You should choose the "Squash and merge" option. The code will then be merged!

## Finally

After your code is approved and merged into the main branch, you will update your main branch (go back to step 1), and do the whole thing over again for the next feature!