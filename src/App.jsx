import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routers } from "./Components/Routers/Routers";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routers />
    </div>
    </BrowserRouter>
  );
}

export default App;
