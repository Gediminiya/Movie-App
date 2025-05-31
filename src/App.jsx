import "./Css/App.css";
import Favourites from "./pages/favourites";
import Home from "./pages/home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
    return (
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favourites" element={<Favourites />}/>        
          </Routes>
        </main>
        </MovieProvider>
    );
}
export default App