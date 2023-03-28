import React from 'react'
import { NavLink } from 'react-router-dom';
import ShowMovieCard from '../ShowMovieCard/ShowMovieCard';

const SingleMovie = (item) => {
    console.log("singlemovie",item)
    return (
        <NavLink to ={`/Movie:${item.Title}`}>                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        </NavLink>
   )             
}                                              

export default SingleMovie;