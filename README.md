# Neflix GPT

- npx create-vite@latest (project scaffold)
- install tailwind CSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation( use Formik for large Forms )
- useRef Hook ( let us create a reference value )
- Firebase Setup (use 'dist' as public repository)
- Deploying our app to production
- Create SignUp user 
- Implement Sign In user Api
- Create Redux Store with userSlice to store user info
- Implemented sign out
- update profile
- fetch movies from TMDB movies(Netflix api not public)
- BugFix: Sign up user displayName and profile update.
- BugFix: if user is not logged in redirect /browse to login page and vice-versa.
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constant file
- Register for TMDB Api and create an app and get access token
- Get Data from TMDB now playing movies API
- Create movieSlice
- Custom Hook for Now Playing Movies
- Update Store with movies Data
- Planning gor MainContainer and Secondary Container
- Fetch Data for Trailer Video
- Update store with Trailer Video Data
- Embedded the Youtube and make it autoplay and mute
- Tailwind classed to make MainContiner look awsome


# Steps for Deployment
- Install firebase CLI - npm install -g firebase-tools
- firebase login - firebase login
- Initialize firebase - 'firebase init', then select hosting
- Deploy command - firebase deploy
- can use custom domain name also (go to Hosting)

- Api call happens twice because of <React.StrictMode>, only in local not in production build. 


# Features
- Login/Sign up
  - Sign In / Sign Up Form
  - redirect to Browse Page 
  
- Browse(after authentication)
  - Header
  - Main Movie
     - Trailer in Background
     - Title & Description
  - MovieSuggestions
       - MoviesList * N

- NeflixGPT
  - Search Bar
  - Movie Suggestion
