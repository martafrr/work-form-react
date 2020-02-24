This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


## Code slack: React & Redux

### React
I chose to use React because it provides:
- a component based structure with reusable components.
- fast render with Virtual DOM.
- a good abstraction, it does not expose any complex internals to the user.
- good toolset: React Developer Tools.

### Redux
Redux is a state management tool. React is built with a way for components to internally manage their state, but as the application grows bigger, the state management gets messy.
Why did I choose to use Redux?
- makes the state predictable: the reducers are pure functions and the state is immutable.
- it's strict about how code should be organized and makes it easier to maintain.
- easy to debug because of its structure.


### Styled Components
I have extracted the main reusable components in a design system folder.

### Responsive Design
As the assignment had explicit width and height, I assumed that the app is only for Desktop view. Therefore I did not implement a Mobile, Tablet or Phablet design. 

