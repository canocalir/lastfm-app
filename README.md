# React-Redux Last FM App

React-Redux Last FM App is an artist showcase powered by the official LastFM API.

The App contains lists of Last FM's Top Artists and their details pages contain Top Tracks and Top Albums.
## [Click here for live demo](https://famous-fenglisu-81825c.netlify.app/)
![lastfm](https://user-images.githubusercontent.com/11324886/204116073-e0f64ee2-5671-41e4-8a1d-a8140038eec6.gif)

## Tech Stack
* React
* React-Redux
* React Router Dom
* React Query
* React Icons
* Styled Components
* Storybook

## Installation

Use the Yarn package manager install command.

```bash
yarn
```
---

Create a [.env](#) file in the project root and fill the following keys with your values.
```bash
REACT_APP_LASTFM_API_KEY=YOURVALUE
REACT_APP_LASTFM_BASE_URL=YOURVALUE
```

---
For starting the project run the Yarn's start command.

```bash
yarn start
```
* Project will go live on port number 3000 as default.
---
For starting the Storybook run the below command.

```bash
yarn storybook
```
* Storybook will go live on port number 6006 as default.

---

## Project Structure

![laststructure](https://user-images.githubusercontent.com/11324886/204117054-b6e21ca9-f977-48f3-b24e-8ef448faac6a.png)

---

## Usage

#### StoryBook Navigation
* In the Storybook, you will find those isolated components:

![storylast](https://user-images.githubusercontent.com/11324886/204116124-04e85a32-5306-406e-8f68-c035240a6f5b.png)

* There were no actions and controls written as default except the Navbar component which is interactive and to show [backToTop](#) button, you need to give a boolean value.

---

#### App's Usage
* LastFM React Redux App is a great example of clean UI and UX design. You will be introduced to a front page containing top artists of LastFM. 
* While you are scrolling to the bottom, you will be aware of there is an infinite scroll mechanism working for loading brand-new artists. You can go back to the top with the Back to Top button on the right.
* If you click a [Click for Artist Details](#) button, it will take you to the artist details page generated by React Router Dom. You can see its activity on the current page URL which is [baseURL/artistName](#)
* For styling purposes, I choosed Styled Components over SASS and module CSS/SASS because of its dynamic structure and its tracking ability of which components are rendered or not then inject only their styles to the page.  
* In album details page, for the purposes of Redux data persistance I used Localstorage.
* You can change between dark mode and light mode. It's state hold on themeSlice with Redux.

---
#### Test Cases
* There were some test cases coded for testing fetch top artists function and for testing render of some components. In the end, it should be better of course that these cases are not succesfully covered 100% of the app, but it was a good practice for showcasing react testing library functionalities.  

---
## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Project created by Can Berk Ocalir for educational purposes.
