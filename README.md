## PopMovie

The popMovie website is an application where you can discover popular movies and TV shows. You can access details of the movie you want to watch if you wish.

## Project Outcome

![Project gif](./src/assets/popMovie.gif)

[PopMovie Live Page](https://popmovie-esma.netlify.app/)

## Project Skeleton

```
PopMovie (folder)
|
|
├── public
│    └── index.html
├── src
│    ├── assets
│    │    ├── avatar.png
│    │    ├── defaultImage.png
│    │    ├── headerBG.png
│    │    └── pop.png
│    ├── components
│    │     ├──Footer.jsx
│    │     └──MovieCard.jsx
│    │     ├──MovieDetails.jsx
│    │     └──Navbar.jsx
│    │     └──ScroolToTop.jsx
│    ├── css
│    │     ├── detail.css
│    │     ├── footer.css
│    │     └── main.css
│    │     ├── movieCard.css
│    │     └── movieDetail.css
│    │     └── navbar.css
│    │     ├── notFound.css
│    │     └── theme.css
│    ├── pages
│    │     ├── Details.jsx
│    │     ├── Home.jsx
│    │     ├── NotFound.jsx
│    ├── router
│    │     └── AppRouter.jsx
│    ├── App.js
│    ├── index.js
├── .env
├── package-lock-json
├── package.json
└── README.md
```

## Tech/framework used

- **axios**
  Axios is a JavaScript library used for making HTTP requests. It can work in both browsers and Node.js environments and provides a Promise-based API.
  react
- **React**
  is a JavaScript library developed by Facebook. It is used to build user interface components and is a popular choice for developing single-page applications.
  react-dom
- **React Helmet**
  React Helmet is used to dynamically manage title, meta description, and other header tags in React applications. It allows you to add customized title and meta information for each page.
  react-icons
- **React Icons** is used to include icons in React applications. It includes various icon sets and can be easily used through components.
- **React Player**
  React Player is used to play media content (video and audio files) in React applications. It supports various media sources and formats.
  react-router-dom
- **OpenGraph Integration**
  OpenGraph tags are meta tags used to determine how web pages will appear when shared on social media platforms. This addition enhances the appearance and information provided in social media shares of the project.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
2. Clone the repo
   ```sh
   git clone https://github.com/esmaaksoy/PopMovie
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create .env file in home directory.
   ```sh
   REACT_APP_MOVIE_API_KEY=ENTER YOUR themoviedb.org APIKEY
   ```
5. The project is ready, you can start using it now.
   You can run:

   `npm start`

   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## İMPORTANT NOTES !

In the project, we were asked to display data with a score greater than 8 in the main section. However, upon checking the data within the API, the number of data points with a score greater than 8 was insufficient. For the sake of visual design, I opted to display data with a score greater than or equal to 7 in the main section
