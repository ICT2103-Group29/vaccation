# Vaccation
Flight booking database system for ICT2103.

# Tech Stack (MERN)
**Frontend:** ReactJS  
**Backend:** NodeJS, ExpressJS  
**Database:** MongoDB  

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

middleware - middleware such as api authorization and rate limiter modules

models - models for each class

routes - routing for each request call

utils - useful code to use throughout the application

## Naming Conventions
variables/function names: camelCase  
component/model names: PascalCase