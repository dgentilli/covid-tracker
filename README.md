# COVID Tracker - React w/ 3rd Party API

## Summary

This application can be used to check for unofficial updates to the number of COVID cases by country around the world. It is built with React, an Express server, a 3rd Party API, and React ChartJS.

This repo includes SERVER-SIDE code for:

- running server;
- pulling data from API.

CLIENT-SIDE code:

- 'client' directory with React app, created using [Create React App](https://github.com/facebook/create-react-app)
- Components: DisplayControl, DataDisplay, Chart, Card, and Pulldown.
- styling for desktop and mobile.

left off here

## Reference Materials

- For details on the API see the following documentation https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#00030720-fae3-4c72-8aea-ad01ba17adf8

#### MERN: Combining Client-Side and Server-Side Code

- [How to get 'create-react-app' to work with your API](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/) (~15-min read) -- this is a thorough guide for bringing client and server code together. It addresses file structure, using concurrently to run server and client simultaneously and implementing a proxy for API requests (read more below)
- [Proxying API Requests in Development](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development) -- a proxy is needed for the client to fetch from the server using a relative path and to avoid a CORS error.

#### Input and Events in React

- [React: Forms](https://reactjs.org/docs/forms.html)
- [React: Handling Events](https://reactjs.org/docs/handling-events.html)
- [How to Work with Forms, Inputs and Events in React](https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b)

#### State and Lifecycle

- [React Components: State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) - it's a common pattern to use state to keep input values in sync between user and client. This helps ensure that accurate information is refelcted in the UI and sent to the server for an AJAX call. See the following example implementation of **state** with **fetching and processing data from the server**: [State Updates are Merged](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged)

#### Lists using map() in React

- [React: Lists and Keys](https://reactjs.org/docs/lists-and-keys.html) - patterns for displaying a list of items in React using **map()**. Items can be simple, such as the numbers example on the top. They can also be more complex, mapping items from a list and displaying multiple properties from a data set in a unique "ListItem" component. See this example: [Embedding map() in JSX](https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx).

#### AJAX and React Fetch

- [React: AJAX and APIs](https://reactjs.org/docs/faq-ajax.html) - includes example using **fetch()** and the React Component lifecycle method **componentDidMount()**.
- [React: Fetching Data with AJAX Requests](https://facebook.github.io/create-react-app/docs/fetching-data-with-ajax-requests)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - how to use the **fetch() method**, how it uses Promises, and differs from jQuery AJAX, etc.

## Prerequisites

- Node
- NPM

```
$ node -v
$ npm -v
```

- React

## Installing

Steps for getting a local development env running

### 1 - Install dependencies

Install node modules:

```
$ cd covid-tracker
$ npm install
```

### 2 - Git & Gitignore file

Initialize Git in local repo:

```
git init
```

Create **.gitignore** file (if it doesn't already exist)

```
touch .gitignore
echo "/node_modules" >> .gitignore
echo ".DS_Store" >> .gitignore
```

Create a new empty remote git project (ex - on GitLab)

Add remote branch to local repo & push to remote

```
git remote add origin git@gitlab.com:YOUR-PROJECT-URL.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

## Running locally

### Run client and server simultaneously

From the root directory, enter the following command to run the client and server scripts, using the [concurrently](https://www.npmjs.com/package/concurrently) node module:

```
$ npm run dev
```

### Run server

From the root directory:

```
$ node server.js
```

The following messages should display in the terminal:

```
Server running on port 5000

```

### Run client

From the root directory:

```
npm start
```

React app will open on in browser: http://localhost:3000/

## Usage

## Built With

- React
- Node
- Express

## Authors

Dave Gentilli
