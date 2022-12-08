// import React
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Components and Pages
import { Header } from "./components/Header"
import { Contacts } from "./pages/Contacts"
import { Home } from "./pages/Home"
import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"



// import Styles
import "./styles/main.css"
import "./styles/media.css"






function App() {
  return (
    <div className="wrapper">
      {/* <div className="container"> */}
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/projects' element={ <Projects /> } />
            <Route path='/skills' element={ <Skills /> } />
            <Route path='/contacts' element={ <Contacts /> } />
          </Routes> 
        </BrowserRouter>
        <main className="page">
        </main>
      {/* </div> */}
    </div>
  );
}

export default App;
