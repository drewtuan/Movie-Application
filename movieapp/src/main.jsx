import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react';
//import './index.css'
//import App from './App.jsx'
import StarRating from "./StarRating";

// eslint-disable-next-line react-refresh/only-export-components
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}/>
    <StarRating maxRating={5} color="red" size={15} defaultRating={3}/>

    <Test/>
  </StrictMode>,
)
