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

    const handleSearch =async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return // trim removes leading and trailing characters
        if (loading) return
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            seterror(null)
        }
         catch (err) {
            console.log(err)
            seterror("Failed to search movies...")
        } finally {
            setLoading(false)
        }
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

        {error && <div className="error-message">{error}</div>}
        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
        <div className="movies-grid">
            {movies.map(
                (movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        )}
    </div>
    );
}

export default Home