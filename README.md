# Vaccation
Flight booking database system for ICT2103. This web application allows users to view and book a flight in times of Covid. It also serves as a portal to view Covid-19 related information of each country such as vaccination rates, Covid restrictions as well as PCR testing clinics available.

# Tech Stack (MERN + MySQL)
**Frontend:** ReactJS  
**Backend:** NodeJS, ExpressJS  
**Database:** MongoDB, MySQL  

## Project Setup
Create .env file and enter necessary configurations (follow keys in .env.example)
```
// In root folder
touch .env
```

Install packages in both client and server folders. Run `npm install` in root folder.

```
// In root folder
npm install
```

Run both client and server applications concurrently. Run `npm run dev` in root folder.

```
// In root folder
npm run dev
```

## Frontend Folder Structure
api - api function calls

assets - store all images or files needed for project

components - create a folder for each component inside this folder

constants - store constant variables to be used throughout the app

utils - useful code to use throughout the application

## Backend Folder Structure
config - database configurations and connections

constants - store constant variables to be used througout the app  

controllers - functions to handle each request  

datasets - contains all dataset csv files

middleware - middleware such as api authorization and rate limiter modules

models - models for each class

routes - routing for each request call

utils - useful code to use throughout the application

## GIT Workflow
### Setup branch
1. Create local branch ```git checkout -b <branchname>```
2. Push new local branch to github ```git push -u origin <branchname>```

### Normal flow
(Make sure you are in your own branch)  
Do the following when you finish coding:
1. Stage your codes ```git add .```
2. Double check if the files are the ones that you modified ```git status```
3. Commit the files and add a message ```git commit -m 'Some message'```
4. Push changes to your branch ```git push```


### Merging to main
1. Make sure your branch has the updated codes from main ```git pull origin main```
2. Push all updates to your own branch ```git push```
3. Create a pull request in Github
4. Make sure there is no conflicts (merge button is green)
5. Click merge

### Notes
- Commit regularly and keep your commits small
- Make sure your code is working before merging to main branch
- You can tag a commit to a Github issue by typing #issueNo into your commit message (e.g. '#15 Setup connection')
## Naming Conventions
variables/function names: camelCase  
component/model names: PascalCase