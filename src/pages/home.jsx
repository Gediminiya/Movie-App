import MovieCard from "../components/MovieCard";
import { useState, useEffect} from "react";
import { searchMovies , getPopularMovies} from "../services/api"
import "../Css/Home.css"
function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
        const loadPopularmovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                console.log("Fetched movies:", popularMovies);
                setMovies(popularMovies);
            } catch(err) {
                console.log(err);
                seterror("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        };

        loadPopularmovies();

    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
             type="text"
             placeholder="Search for movies..."
             className="search-input"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(
                (movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}

export default Home