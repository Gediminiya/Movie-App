import "./Css/App.css";
import Favourites from "./pages/favourites";
import Home from "./pages/home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/Navbar";

function App() {
    return (
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favourites" element={<Favourites />}/>        
          </Routes>
        </main>
       </div>
    );
}
export default App