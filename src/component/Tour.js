import React, { useState } from "react";
const Tour = ({ tour, deleteTour }) => {
  const { id, image, info, name, price } = tour;
  const [readMore, setreadMore] = useState(false);
  return (
    <article className="singletour">
      <img className="image" src={image} alt={name} />
      <footer>
        <div className="tourinfo">
          <h4>{name}</h4>
          <h4 className="tourprice">${price}</h4>
        </div>
        <p className="info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="readmore" onClick={() => setreadMore(!readMore)}>
            {readMore ? "Showless" : "Readmore"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};
export default Tour;
