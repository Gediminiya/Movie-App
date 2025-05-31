import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()
export const useMovieContext = () => useContext(MovieContext)
export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])
    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")

        if(storedFavs) setFavourites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites)) //this useEffect works whenever we add or remove favourites
    }, [favourites])

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId) //checks all the movie id in our favs and see if one of them is equal to the movie id that we're looking at
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }
    return <MovieContext.Provider value={value}>   
        {children}     
    </MovieContext.Provider>
}