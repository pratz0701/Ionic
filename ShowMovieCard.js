import React,{useEffect} from 'react'
import { useParams } from 'react-router';
import { UseMovieData } from '../Data/data';

const API ="https://www.omdbapi.com/?s=game&apikey=dab40600";

const ShowMovieCard = () => {
    console.log("showmoviecard")
    const {getsinglemovie,singlemovie}=UseMovieData();
    const {Title} = useParams(); 
    useEffect(() => {
        console.log("single movie card")
        getsinglemovie(`${API}?Title=${Title}`);
    }, []);
  return (
    <div>ShowMovieCard</div>
  )
}

export default ShowMovieCard;
