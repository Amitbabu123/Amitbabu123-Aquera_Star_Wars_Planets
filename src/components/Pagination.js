import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const PaginationContainer = styled('div')({
  textAlign: 'center',
  marginTop: '20px', // Add spacing from the top
});

const PaginationButton = styled(Button)({
  margin: '8px', // Add spacing between buttons
  backgroundColor: '#1976d2', // Custom button color
  color: '#ffffff', // White text color
  '&:hover': {
    backgroundColor: '#1565c0', // Darker shade on hover
  },
});

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <PaginationContainer>
      {goToPrevPage && (
        <PaginationButton onClick={goToPrevPage} variant="contained">
          Previous
        </PaginationButton>
      )}
      {goToNextPage && (
        <PaginationButton onClick={goToNextPage} variant="contained">
          Next
        </PaginationButton>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
