import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, setTours }) => {

{/* function to remove a tour from the list by ID */}
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <section className="gallery">
    {/* map through tours array and render a TourCard for each */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          {...tour}
          removeTour={removeTour}
        />
      ))}
    </section>
  );
};

export default Gallery;