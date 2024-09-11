import React from "react";
import Header from "./Header";
import Jokes from "./jokes";
function App(){
    return (
        <div>
             <Header/>
        <div className="container">
         <Jokes/>
          
        </div>
       
        </div>
       
    );
}
export default App;