import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className="title">
        <h2>TOURS</h2>

      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />;
        })}
        ;
      </div>
    </section>
  );
};

export default Tours;
