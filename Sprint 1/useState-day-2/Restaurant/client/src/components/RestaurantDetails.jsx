import React from "react";

export const RestaurantDetails = ({
  image,
  name: title,
  cuisine: tag,
  cost,
  minPrice,
  paymentMethods,
  rating,
  votes,
  reviews,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        padding: "1rem",
        border: "0.5px solid black",
        margin: "5px",
      }}
    >
      <div>
        <img style={{ width: "110px" }} src={image} />
      </div>
      <div>
        <div>{title}</div>
        <div>{tag}</div>
        <div>Cost ${cost} for one</div>
        <div>Min {minPrice}</div>
        <div>{paymentMethods.data}</div>
      </div>
      <div>
        <div>{rating}</div>
        <div>{votes} votes</div>
        <div>{reviews} reviews</div>
      </div>
    </div>
  );
};
