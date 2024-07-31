import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import StarRating from "./StarRating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating setMovieRating={setMovieRating} movieRating={movieRating} />
      <p>This movie was rating {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={14} color="blue" size={30} />
    <StarRating maxRating={14} size={37} />
    <Test />
  </React.StrictMode>
);
