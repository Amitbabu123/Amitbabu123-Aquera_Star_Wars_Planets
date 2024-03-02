import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import PlanetCard from './components/PlanetCard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://swapi.dev/api/planets/');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [prevPageUrl, setPrevPageUrl] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(currentPageUrl);
        const data = await response.json();
        setPlanets(data.results);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, [currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  return (
    <>
    <Container className="mt-3" style={{ position: 'relative', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', backgroundColor:"rgba(0, 0, 0, 0.5)" }}>
      <h1 className="text-center mb-5" style={{ marginTop: '20px', marginBottom: '20px', padding: '10px', backgroundColor: '#0077b6', color: '#fff', position: 'sticky', top: 0, zIndex: 1 }}>
        Star Wars Planets Directory
      </h1>
      <Grid container spacing={3}>
        {planets.map((planet, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <PlanetCard planet={planet} />
          </Grid>
        ))}
      </Grid>
      <Pagination 
        goToNextPage={nextPageUrl ? goToNextPage : null} 
        goToPrevPage={prevPageUrl ? goToPrevPage : null} 
      />
    </Container>
      <Footer/>
      </>
  );
};

export default App;
