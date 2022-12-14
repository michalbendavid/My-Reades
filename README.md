# MyReads Project - By Udacity

# Student name: Michal Ben-David, MASTERSCHOOL
Due Date: 4 November 2022

React Project - building an App with React.

Dependencies: None
JS Version: ES2015/ES6
JS Standard: ESlint
Relevant versions:
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-scripts": "4.0.3",
"web-vitals": "^1.0.1"

The starter project had  HTML, CSS styling to display a static version of the Landing Page project. Also was provided basice static App.js, index.js, BooksAPI and the files needed to start the project.

The project included activating the App, by using the following methods that were provided in the BooksAPI.js file :

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```
- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:
```js
update(book, shelf);
```
- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```
- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
