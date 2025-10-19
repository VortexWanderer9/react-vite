    import './App.css'
    import Card from './assets/Card'
    import Search from './assets/Search'
    import { use, useEffect, useState } from 'react';
    const API_BASE_URL = 'https://api.themoviedb.org/3';
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_OPTIONS = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    }
    console.log(API_KEY);
    
    function App() {
      const [searchTerm, setSearchTerm] = useState("");
      const [loading, setLogin] = useState(false);
      const [errorMessage, setError] = useState('');
      const [movies, setMovies] = useState([])
      const fetchMovie = async() =>{
    setLogin(true);
    setError('');
        try {
          const endPoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
          const response = await fetch(endPoint, API_OPTIONS)
          if(!response.ok){
            throw new Error('Network response was not ok')
            setMovies([]);
            return;
          }
          const data = await response.json()
          setMovies(data.results || [])
          console.log(data);
          

          
        } catch (error) {
          console.log(error);
          setError('Failed to fetch movies. Please try again later.')
        } finally{
          setLogin(false)
        }


      }
      useEffect(() =>{
        fetchMovie()
      }, [])
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
    </header>
    </section>
    <section className='all-movies'>
      
      <Card />
    </section>

      </>
      )

    }

    export default App
