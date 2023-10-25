import { usestate,useEffect} from 'react';
import MovieCard from './MovieCard';
import "./App.css";
import searchIcon from "./search.svg";
const API_URL = 'http://www.omdbapi.com/?apikey=58f07d09';

const movie = {
  "Title":"Amazing spiderman syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "type": "movie",
  "poster": "N/A"
}
const App = () => {
const [movies, setMovies] = usestate([]);
const [searchTerm, setsearchTerm] = usestate('');

  const searchMovies = async (title) =>{

    const response = await fetch(`${API_URL }&s=${title}`);
      const data = await response.json();

      setMovies(data.search);

  }
  useEffect (() => {

  searchMovies('Spiderman');

  } ,
   [] ) ;

  return (
        <div className='app'>
      <h1>movieLand</h1>
      <div className='search'>
        <input
        placeholder='search for movies'
        value={searchTerm}
        onChange={(e)=> setsearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt='search'
          onClick={()=>searchMovies(searchTerm)}/>
      </div>
    {movies?.length > 0
    ? (
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      
      </div>
       ) : (
      <div className="empty">
        <h2>no movies found</h2> 
        
        </div>
       )
     
       
   }
    </div>
    );
  } 

export  default App;