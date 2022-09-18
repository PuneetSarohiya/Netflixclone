
import React from 'react';
import './HomeScreen.css';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../requests';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Nav />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      <Row title='Popular' fetchUrl={requests.fetchPopular} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Upcoming' fetchUrl={requests.fetchUpcoming} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Row title='Dramas' fetchUrl={requests.fetchDramas} />
      <Row title='Latest' fetchUrl={requests.fetchlatest} />
      <Row title='theater' fetchUrl={requests.fetchtheater} />
      <Row title='Science fiction' fetchUrl={requests.fetchSciencefiction} />
      <Row title='Animation' fetchUrl={requests.fetchtanimation} />
      <Row title='Thriller' fetchUrl={requests.fetchThriller} />
      <Row title='Adventure Movies' fetchUrl={requests.fetchAdventure} />
      <Row title='Crime' fetchUrl={requests.fetchCrime} />
      <Row title='History' fetchUrl={requests.fetchHistory} />
      <Row title='Music' fetchUrl={requests.fetchMusic} />
      <Row title='Mystery' fetchUrl={requests.fetchMystery} />
      <Row title='Tv Movie' fetchUrl={requests.fetchTvMovie} />
      <Row title='War Movie' fetchUrl={requests.fetchWar} />
      <Row title='Western' fetchUrl={requests.fetchWestern} />
      <Row title='Fantasy' fetchUrl={requests.fetchFantasy} />
      <Row title='Family' fetchUrl={requests.fetchFamily} />
    
      <Footer />
    </div>
  );
};

export default HomeScreen;
