import "./App.css";
import React from "react";
import Main from "./Layout/Homepage/Main";
import Signup from "./Layout/Signup/Signup";
import Displaymovie from "./Layout/DisplayMovie/Displaymovie";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main/>} />
        <Route path="/login" element={<Signup/>}/>
        <Route path="/displaymovie" element={<Displaymovie/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

// async function movielist(){
//  let response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=1f4afe2164f64346d065a4f8af0e6f67")
// console.log(response);
// }
// movielist();
