    import './App.css'
    import './index.css'
    import MovieCard from './assets/movieCard'
    import { useDebounce } from 'react-use'
    import Search from './assets/Search'
    import { useEffect, useState } from 'react';
    import Spinner from './assets/Spinner';
    import { getTTradingMovies, updataSearchTerm } from './appwrite';
    const API_BASE_URL = 'https://api.themoviedb.org/3';
 
    const API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWU2NDliZjI5NDNkZDEwZTgwNzYzM2EwY2IxNGRmYyIsIm5iZiI6MTc2MDM0MzE1OS4zODYsInN1YiI6IjY4ZWNiNDc3ZWZjMGEyMzc5MGQ2OGZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8TonxUyZmVe0Hx-Rvbe2VReN6khegeQbfi8dj6buaM`
    const API_OPTIONS = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    }
  
    function App() {
      const [searchTerm, setSearchTerm] = useState("");
      const [loading, setLogin] = useState(false);
      const [errorMessage, setError] = useState('');
      const [movies, setMovies] = useState([])
      const [debounceSearch, setDebounceSearch] = useState('');
      const [trending, setTrending] = useState([])
     useDebounce(() => setDebounceSearch(searchTerm), 500, [searchTerm]);
       useEffect(() =>{
        fetchMovie(debounceSearch)
      }, [debounceSearch])

      const fetchMovie = async(query = '') =>{
    setLogin(true);
    setError('');
        try {
          const endPoint = query ?
           `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
          : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
          const response = await fetch(endPoint, API_OPTIONS)
          if(!response.ok){
            throw new Error('Network response was not ok')
            setMovies([]);
            return;
          }
          const data = await response.json()
          setMovies(data.results || [])
          if(query && data.results.length > 0){
            await updataSearchTerm(query, data.results[0])
          }
        } catch (error) {
          console.log(error);
          setError('Failed to fetch movies. Please try again later.')
        } finally{
          setLogin(false)
        }
      }
      const loadingTrendingMovies = async() => {
        try {
          const movie = await getTTradingMovies()
          setTrending(movie)
          console.log(movie);
          
        } catch (error) {
          console.error(error)
        }
      }
      useEffect(() => {
        loadingTrendingMovies()
      },[])
    return (
      <>
      <section className='hero'>
        <div className="background-image">
        </div>
    <header className='flex flex-col items-center justify-center gap-4 text-center'>
      <img className='w-20 h-20' src="./logo.png" alt="" />
      <img className='relative z-10 mt-4' src="./hero.png" alt="" />
      <h1 className="text-4xl md:text-6xl font-semibold text-gray-100 italic mt-4">
        “Every great <span className='text-blue-900'>story</span> begins with a search.”
      </h1>
      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      <h2 className='heading font-bold text-emerald-500 text-4xl'>All Movies</h2>
    </header>
{trending.length > 0 && (
  <section className="trending p-10">
    <h2 className="text-2xl font-bold ml-3">Trending Movies</h2>

    <ul className="flex gap-10 overflow-x-auto scroll-smooth hide-scrollbar p-10 ">
      {trending.map((item, index) => (
        <li 
          key={item.$id}
          className="flex items-center gap-4 min-w-max"
        >
          {/* Big Index Number (same height visual weight as poster) */}
          <p className="text-[100px] leading-none font-extrabold text-neutral-900">
            {index + 1}
          </p>

          {/* Poster */}
          <img
            src={item.poster}
            alt={item.title}
            className="w-28 h-40 object-cover rounded-xl shadow-md 
                       hover:scale-105 transition-all duration-300"
          />
        </li>
      ))}
    </ul>
  </section>
)}
    </section>
    <section className='all-movies'>
      {loading ? (
        <Spinner/>
      ) : errorMessage ? (
         <p className='text-red-500'>{errorMessage}</p>
      ) : (
<div className="Card">
{movies.map((movie) => (
  <MovieCard key={movie.id} movie = {movie} />

  
))}
</div>
      )}

    </section>

      </>
      )

    }

    export default App
