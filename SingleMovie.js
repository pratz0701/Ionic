import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Movie/Movie.scss';
import ShowMovieCard from '../ShowMovieCard/ShowMovieCard';

const SingleMovie = (item) => {
    return (
        <NavLink to ={`/singlemovie/${item.Title}` }>
        <div className='moviebox'>
        <div className='image'>
        <img src={item.Poster} className ='img'/>
        </div>
        <div className='text-title'>{item.Title}</div>
        <div className='text-subtitle'>{item.Year}</div>
       </div>
       </NavLink>
   )
}

export default SingleMovie;