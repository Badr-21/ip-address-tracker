import "./App.css";
import { Header } from "./components/Header";
import { IpOutput } from "./components/IpOutput";
import { Map } from "./components/Map";
import { createContext, useState } from "react";

export const dataContext = createContext();
function App() {
   const [data, setData] = useState();
   return (
      <div className="App">
         <dataContext.Provider value={{ data, setData }}>
            <Header />
            <IpOutput />
            <Map />
         </dataContext.Provider>
      </div>
   );
}

export default App;
