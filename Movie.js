import React from 'react';
import {UseMovieData} from '../Data/Data';
import SingleMovie from '../SingleMovie/SingleMovie';
import '../Movie/Movie.css'

const Movie = () => {
  const {movies,isLoading} = UseMovieData();
console.log("hey",movies)
  return (

    <>
      <div className='container'>
       {
        movies.map((item)=>(
            <SingleMovie key={item.Title} {...item}/>         
        ))
       }
    </div>
    </>
  )
}
                                                                                                                                                                                                                    
export default Movie;




// import {React,useEffect,useState} from 'react';
// import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,IonList} from '@ionic/react';


// function Movie() {
//     const [movie,setmovie] = useState();

//     const getmovie = async () => {
//       try{
//       const res = await fetch("https://www.omdbapi.com/?s=game&apikey=dab40600");
//       const data = await res.json();
//       const realdata= data.Search;
//       setmovie(realdata);
//       // console.log(realdata);
      
//       } catch(error){
//         console.log(error);
//       }
//     };
  
//     useEffect(() => {                                                                                                                                                                              
//       // getmovie();
//     },[]);
  
  
//   return ( 
//     <>
//     </>
//   );
// }
// export default Movie;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    