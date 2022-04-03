## ReactRouter V6 Book
rrd creates a different route for our website. With RRD API, we can inject a page.

### Preparation
Install react router in our DOM
```shell
~$ npm install react-router-dom@6
```

In `App.js`
```javascript
import {BrowserRouter as Router, } from 'react-router-dom'
```
This is a component that will encapsulate all of the application. 

On the highest level, we return the `<Router></Router>` component

Then import `Routes`. Routes didn't exists before, usually we would use Switch. Where in our Router system we want to have Routes. 

Router vs Routes? We can have a link inside a Router, The href "/home". Routes will have an object inside it, and anything inside the Router (other than Routes), will remain the same.

Then import `Route`. 
```js
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/profile" element={<Profile />} />
```

### Error pages
```js
<Route path="*" element={<ErrorPage />} /> // Other Routes
```

<hr>

## Navbar
For exaple, we want to but the navbar inside the `<Router>` element.
```js
import { Link } from 'react-router-dom'

...
<Router>
    <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
    </nav>
...
```

## History
There was once a "useHistory" import, but now doesn't. 

Imagine we in Profile Page. There we have a button. When we click, we want to navigate to the about page. 
```js
<button>go to about page</button>
```
It might happen in a function right?
```js
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate();

...
<button onClick={() => {navigate("/about")}}>go to about page</button>
...
```

## Use Params
Imagine when we go to a website, we want to go to profile page. It changes base by the route right? `about/pedro`, it should show detail

Change the route for profile detail
```js
...
<Route path="profile/:username" element={<ProfileDetail />} />
...
```

On the profile detail
```js
import { useParams } from "react-router-dom"

...
let { username } = useParams()

```
When you call the variable, you need to have the same name as the one in the `Route` `:name`. 