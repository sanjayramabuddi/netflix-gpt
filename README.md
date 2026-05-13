# Firebase

## Add Firebase SDK
npm install firebase
create a js file and add hte analytics data

## Install Firebase CLI
npm install -g firebase-tools

## Deploy to Firebase Hosting
firebase login
firebase init
firebase deploy

## Folder Structure
src
│
├── app
│   └── router.jsx
│
├── components
│   ├── common
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── Loader.jsx
│   │
│   ├── auth
│   │   └── Auth.jsx
│   │
│   ├── browse
│   │   ├── Browse.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   └── HeroBanner.jsx
│
├── hooks
│   ├── useAuth.js
│   └── useMovies.js
│
├── services
│   ├── firebase.js
│   └── tmdb.js
│
├── store
│   ├── store.js
│   ├── userSlice.js
│   └── movieSlice.js
│
├── utils
│   ├── constants.js
│   ├── helpers.js
│   └── validate.js
│
├── pages
│   ├── Login.jsx
│   ├── Browse.jsx
│   └── NotFound.jsx
│
├── assets
│
├── styles
│
├── App.jsx
└── main.jsx