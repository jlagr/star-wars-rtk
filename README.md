# Small project to practice the use of React, Axios, Redux-Toolkit and Tailwind

This application use the free API https://swapi.dev who provides some date of Star Wars movies.
The first screen shows the list of mine movies in cards, each of them has a "More details" link to display the characters of the selected movie.

I'm using Redux Toolkit for manage application state, Axios to fetch data from the API and Tailwind to apply styles.
In second page the selected movie provides a list of URLs for each character, then a new acction is dispatched and all the URLs are requested in parallel then the results are merged in a single response.

Each Slice (reducer) has extra reducers to manage the request state, pending, error or filled on order to show to the user the state of loading, the error if happens or the response when is ready.

A possible enchament could be add some post reducers in order to include new data in the state.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
