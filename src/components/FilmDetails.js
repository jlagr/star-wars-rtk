import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import  Spinner  from './Spinner';
import Separator from './Separator';
import CharactersTable from './CharactersTable';
import back from '../assets/images/go-back.svg';
import { fetchCharacters  } from '../app/features/films/charactersSlice';
import PageNotFound from './PageNorFound';

function FilmDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.data);
  const loading = useSelector((state) => state.characters.loading);
  const error = useSelector((state) => state.characters.error);
  const characters = useSelector((state) => state.characters.data);
 const film = films.find(f => parseInt(f.episode_id) === parseInt(params.episode_id));

  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const urls = film.characters;
    dispatch(fetchCharacters(urls));
  }, [true]);

if (error) {
  return <p className="py-5 text-red-500">Error: {error}</p>;
}
if (!film) {
  return <PageNotFound />
}
  
return (    
    <div className='border-gray-300 shadow-md p-4 w-4/5'>
      <div className="relative">
        <button onClick={ handleBack } className='absolute top-0 right-0 bg-gray-800 rounded-full px-2 py-2 flex items-center hover:bg-red-500'>
            <img src={back} alt='' className='w-6 h-6 mr-2' />
            <span className='text-white text-sm'>Back to Films</span>
        </button>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-lg font-extrabold'>{film.title}</h1>
        <h2>{`Directed by ${film.director}, Release date ${new Date(film.release_date).toLocaleDateString('en-US')}`}</h2> 
      </div>
      { <Separator /> }
      <p>Characters ({ loading ? "loading..." : film.characters.length })</p>
      { <Separator /> }
      {loading ? <Spinner /> : <CharactersTable characters={characters} /> }
    </div>
  )
}

export default FilmDetails
