import "./App.css";
import React from "react";
import axios from "axios";
import Index from "./Layout/Homepage/Index";
import Page1 from "./Layout/Pages/Page1";
import Page2 from "./Layout/Pages/Page2";
import FAQ from "./Layout/Pages/FAQ/FAQ";
import Footer from "./Layout/Pages/Footer/Footer";
function App() {

  return (
    <div className="App">
      <Index/>
      <Page1/>
      <Page2/>
      <Page1/>
      <Page2/>
<FAQ/>
<Footer/>
    </div>
  );
}

export default App;




// async function movielist(){
//  let response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=1f4afe2164f64346d065a4f8af0e6f67")
// console.log(response);  
// }
// movielist();