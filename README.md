# Portfolio

# Command line
reference - https://www.cloudbees.com/blog/git-remote-add

**Initializing git project (local)**

git init
git add .
git commit -m "Write Message"

**To check status**

git status 
git log

**Creating remote repository**

do all the necessary tasks to create new repo remotely

**Adding remote URL to a Local repo**

git remote add origin your-remote-url
//replace your-remote-url with valid url

**Push Changes**

git push -u origin master
// pushes the files and code from local into empty remote repo

**Pull**

git pull
//to sync the state of your local repo with the latest state of remote repo
