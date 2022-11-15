## Calculator App

This is a simple calculator app in React that handles input changes, user interaction, and complex calculations. It includes some most important React concepts, 
such as re-renders, state management, and breaking down code into components.

## Approaching the problem 

When I started the project and did some research online, I found a few demos that would use on the React project a math 
calculation package in order to execute all the code for the evaluation result. In this case, I thought it would be more advantageous 
if I do them from scratch, using my own code, and be able to demonstrate a few of the most important React Concepts such as re-renders, 
state management, and breaking down code into components. It might seem simple at first, but there are quite a few tricks we have to take into account. 
For example, the fact that I added a formatOperand() function that helps us format the current number using decimal and integer formatted.

I made 3 separate components App.js (parent) DigitButton.js and OperationButton.js (children) because it organises the code in a better way.
To save the state that includes currentOperand, previousOperand, operation, I've opted to useReducer.

useReducer returns an array with exactly two items:

The current state of this state variable, initially set to the initial state you provided.
The dispatch function that lets you change it in response to interaction.

For testing decided to use Cypress.

For future improvements, I would do more tests in order to check all possible scenarios and check them properly. 
At the minute I only have tests for the basic operations on the calculator, would be good to have the more complex ones as well.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
### Techonologies

React
Javascript
Cypress

### Author

Carolina Dias