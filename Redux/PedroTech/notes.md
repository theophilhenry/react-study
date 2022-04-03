## React Redux Tutorial 2021
By PedroTech | Source : https://www.youtube.com/watch?v=k68j9xlbHHk

### React Setup
```shell
~$ npm install redux react-redux @reduxjs/toolkit
# Redux : JS State Management (Not react)
# React-Redux : Connect React with Redux
# Reduxjs/toolkis : best practice for using redux
```

### Project Setup
We create `Profile` and `Login` components, and mount them into `App.js`


### Creating a Redux Store
`store` : Container, that holds information. 

When you create a store, we hold all the state global. 

in redux, we create single store, that contains multiple state. 

#### Creating Store
When using redux-toolkit, it is easy. You can either add it in src/app/store.js, or directly on index.js. For this case, let's do `index.js`
Open `index.js`, and add<br>
```javascript
import { configureStore } from "@reduxjs/toolkit"

// Inside the Configure Store, we pass some reducer
const store = configureStore({
    reducer: {}
})
```
`reducer` : A function, that takes in some information about the current state `i.e` the Previous value and some action that you want to perform on that state, and `returns` back the New value of that state. <br>
We will have reducer for all our different state. That's how we manage and change throughout our app.

How do we add Store in our app?
`Provider` : Which components can access the store. In theory it should be all of them.
```javascript
import { Provider } from 'react-redux'

// Wrap this around the App Components
<Provider store={store}> // Add the variable "store" above
    <App />
</Provider>
```


### Reducer / Slices / Actions
Say we want to have a user state, so we need a user reducer.

Create a `features` folder in src (recommended way), then create `userSlice.js`.

Because we're using toolkit, it is more intuitive creating it in the Slice.

```javascript
// CreateSlice allows for easy reducer creation
import { createSlice } from '@reduxjs/toolkit'

```
`state` param in reducer is keeping track of the current state, whether if it's unchanged or changed.
`payload` : is an object, which you can passed in information that you want to use when changing your state. The payload is the argument you passed in the useDispatch later.

Lastly, you want to export the `userSlice` and `Reducer`.

Some may do 
```javascript 
export const { login } = userSlice.actions
```
But here, we can also export the userSlice instead
```javascript 
export { userSlice }
```

Then impoprt it in `index.js`, inside the configureStore.
```javascript
import userSliceReducer from './features/user'

const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
})
```

### Selecting value with UseSelector
We want to grab the value of the state and display it on the profile

`useSelector` takes in a function, which allows to speficy which state we want to access.

`state` inside the use selector function, returns a list of reducer inside the configure store. You can access it's value, by calling the key of the reducer.

### Altering value with useDispatch
Say we want to access data from `login.js`

`useDispatch` modify value from our state. 

### Multiple Reducer
Say we want to have a change color component, to change color of text.

