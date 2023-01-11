
import { useSelector } from "react-redux";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";





function App() {
  const countOfMac = useSelector((state) => state.token)


  return (
    <div className="App">
      {
        !countOfMac.token? <Home /> :<Register />
    }

    </div>
  );

}

export default App;
