import React from "react";
import "./App.css";
import Sidebar from "./Components/Layouts/Sidebar";
import TopBar from "./Components/Layouts/TopBar";
import Routing from "./Components/Routing";
import Footer from "./Components/Layouts/Footer";
import BurgerMenuTopBar from "./Components/Layouts/BurgerMenuTopBar";



function App() {
  return (
      <div className="flex flex-column h-screen"> 
      <div className="flex flex-grow">
     
        <Sidebar />
        <div className="w-full"> 
          <BurgerMenuTopBar/>
          <TopBar />
          <Routing /> 
          <Footer/>
          
        </div>   
       
      </div>
   
    </div>
     


  );
}

export default App;