import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFilms } from '../app/features/films/filmsSlice';
import  Spinner  from './Spinner';

const FilmsList = () => {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.films.data);
    const loading = useSelector((state) => state.films.loading);
    const error = useSelector((state) => state.films.error);
 
    useEffect(() => {
        dispatch(fetchFilms());
    }, [dispatch]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <p className="py-5 text-red-500">Error: {error}</p>;
    }

    return (
        <div className='w-3/4 h-full mb-40'>
            <h1 className="flex item-center justify-center py-5 w-full text-lg font-extrabold">Movie's List</h1><br/>
            <div className="grid grid-cols-3 gap-4">
                {films.map((film) => (
                    <div key={film.episode_id} className="p-4 rounded-md bg-sky-500/[.4] shadow-md shadow-white">
                        <div className='flex flex-col items-center'>
                            <img src={process.env.PUBLIC_URL + `/images/episode_${film.episode_id}.jpeg`} alt={film.episode_id} className='w-32'/>
                            <p className='font-bold'>{film.title}</p>
                            <p className="font-light text-sm">Release: {film.release_date}</p>
                        </div>                        
                        <p className="font-light text-sm py-2">{film.opening_crawl}</p>
                        <div className="flex justify-end py-4 w-full relative">
                            <Link className='ml-auto absolute bottom-0 text-sm hover:text-red-500' to={`/film-details/${film.episode_id}`}>More Details...</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilmsList;
