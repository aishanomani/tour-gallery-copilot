import React from 'react';

const TourCard = ({ id, name, info, image, price, removeTour }) => {
  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      {/* tour image */}
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
          {/* tour name and price */}
        </div>
        <p>{info}</p>
        {/* tour description */}
        <button onClick={() => removeTour(id)}>Not Interested</button>
        {/* button to remove tour */}
      </footer>
    </article>
  );
};

export default TourCard;