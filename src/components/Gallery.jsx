import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, setTours }) => {

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <section className="gallery">
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