import React,{useEffect} from 'react'
import { useParams } from 'react-router';
import { UseMovieData } from '../Data/Data';
import '../Movie/Movie.css';
const API ="https://www.omdbapi.com/?s=game&apikey=dab40600";
                                                     
const ShowMovieCard = () => {                                                                                                                                                                                  
    const {getsinglemovie,singlemovie}=UseMovieData();
    const {Title} = useParams(); 
    useEffect(() => {
        console.log("single movie card")
        getsinglemovie(`${API}?Title=${Title}`);
    }, []);
    console.log("hey showmoviecard",singlemovie)
  return (                                                                                                                                                                                                                                                  
    <>
    <div className='moviebox'>
        <div className='image'>
        <img src={singlemovie.Poster} className ='img'/>
        </div>
        <div className='text-title'>{singlemovie.Title}</div>
        <div className='text-subt  itle'>{singlemovie.Year}</div>
       </div>
    </>              
  )
}

export default ShowMovieCard;                                                                                                                                                                                                                                                                                                                                                                                                                                                       