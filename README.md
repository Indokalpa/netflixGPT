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

# Steps for Deployment
- Install firebase CLI - npm install -g firebase-tools
- firebase login - firebase login
- Initialize firebase - 'firebase init', then select hosting
- Deploy command - firebase deploy
- can use custom domain name also (go to Hosting)


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
