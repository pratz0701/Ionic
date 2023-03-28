import {
  setupIonicReact,
} from '@ionic/react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ReactDOM from "react-dom/client";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShowMovieCard from './components/ShowMovieCard/ShowMovieCard';                                                                                                                     
import Movie from './components/Movie/Movie';

setupIonicReact();

const App = () => {
  return (
    <>
 
  <BrowserRouter>
  <Switch> 
 
  <Route exact path= "/" >
  <><Header/><Movie/><Footer/></>
  </Route>                                                                         
   <Route path= "/Movie:Title"><ShowMovieCard/></Route>
  </Switch>                                                                                                                                                                               
  </BrowserRouter>       

  </>                                                        
  )               
}

export default App;                                                            