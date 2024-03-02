import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const PlanetCardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f0efeb',
  borderRadius: theme.spacing(1),
  height: '300px',
  overflow: 'auto',
  transition: 'transform 0.3s ease-in-out', // Add transition for smoother hover effect
  '&:hover': {
    transform: 'scale(1.05)', // Increase scale on hover for a subtle zoom effect
  },
  '&::-webkit-scrollbar': {
    width: '0px',  // Hide scrollbar for Webkit browsers (Chrome, Safari)
    background: 'transparent',  // Optional: set background color of the scrollbar track
  },
  scrollbarWidth: 'none',  // Hide scrollbar for Firefox
}));

const ResidentsList = styled('div')({
  marginTop: '16px',
  paddingLeft: '16px',
});

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const residentsData = await Promise.all(
          planet.residents.map(async (residentUrl) => {
            const response = await fetch(residentUrl);
            return await response.json();
          })
        );
        setResidents(residentsData);
      } catch (error) {
        console.error('Error fetching residents:', error);
      }
    };

    fetchResidents();
  }, [planet.residents]);

  // Define color mapping based on the content
  const getColor = (content) => {
    switch (content) {
      case 'Climate:':
        return "#485696"
      case 'Population:':
        return "b5e2fa"
      case 'Terrain:':
        return '#0000ff'; // Blue color for climate, population, and terrain
      case 'Residents:':
        return '#ff0000'; // Red color for "Residents" header
      default:
        return '#136f63'; // Green color for resident names
    }
  };

  return (
    <PlanetCardContainer elevation={3}>
      <Typography variant="h5" component="h2" gutterBottom style={{ color: getColor('Name:') }}>
        {planet.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom style={{ color: getColor('Climate:') }}>
        Climate: {planet.climate}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom style={{ color: getColor('Population:') }}>
        Population: {planet.population}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom style={{ color: getColor('Terrain:') }}>
        Terrain: {planet.terrain}
      </Typography>
      <ResidentsList>
        <Typography variant="body2" color="textSecondary" gutterBottom style={{ color: getColor('Residents:') }}>
          Residents:
        </Typography>
        <ul>
          {residents.map((resident, index) => (
            <li key={index} style={{ color: getColor(resident.name) }}>{resident.name}</li>
          ))}
        </ul>
      </ResidentsList>
    </PlanetCardContainer>
  );
};

export default PlanetCard;
