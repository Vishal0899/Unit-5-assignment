// import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

import { Pagination } from "./Pagination.jsx";
import { RestaurantDetails } from "./RestaurantDetails";

export const FetchRestaurants = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [ratingOrder, setRatingOrder] = useState("asc");
  const [costOrder, setCostOrder] = useState("asc");
  const [filterRating, setFilterRating] = useState(0);
  const [q, setQ] = useState("");
  const [text, setText] = useState("");
  const [cash, setCash] = useState(null);
  const [card, setCard] = useState(null);
  const [upi, setUpi] = useState(null);

  useEffect(() => {
    fetchData({
      page,
      ratingOrder,
      costOrder,
      filterRating,
      q,
      cash,
      card,
      upi,
    });
  }, [page, ratingOrder, costOrder, filterRating, q, cash, card, upi]);

  const fetchData = async ({
    page,
    ratingOrder,
    costOrder,
    filterRating,
    q,
    cash,
    card,
    upi,
  }) => {
    const paramsForPayment = {};
    if (cash !== null) paramsForPayment["paymentMethods.cash"] = cash;
    if (card !== null) paramsForPayment["paymentMethods.card"] = card;
    if (upi !== null) paramsForPayment["paymentMethods.upi"] = upi;

    axios({
      method: "GET",
      url: "http://localhost:8080/food",
      params: {
        _page: page,
        _limit: 5,
        _sort: "cost,rating",
        _order: `${costOrder},${ratingOrder}`,
        rating_gte: filterRating,
        q: q,
        ...paramsForPayment,
      },
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .then((error) => {
        setError(true);
        setLoading(false);
      });
  };
  return (
    <div>
      <h1>Restaurant Details</h1>
      {loading && <div>loading</div>}
      <div>
        <h3>Search </h3>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => setQ(text)}>Search</button>
      </div>
      <br />
      <div>
        <button
          disabled={costOrder === "desc"}
          onClick={() => setCostOrder("desc")}
        >
          COST SORT BY DESC
        </button>
        <button
          disabled={costOrder === "asc"}
          onClick={() => setCostOrder("asc")}
        >
          COST SORT BY ASC
        </button>
      </div>
      <div>
        <button
          disabled={ratingOrder === "desc"}
          onClick={() => setRatingOrder("desc")}
        >
          RATING SORT BY DESC
        </button>
        <button
          disabled={ratingOrder === "asc"}
          onClick={() => setRatingOrder("asc")}
        >
          RATING SORT BY ASC
        </button>
      </div>
      <div>
        <h3>Payments</h3>
        <button onClick={() => setCash(!cash)}>
          Cash - {cash ? "true" : "false"}
        </button>
        <button onClick={() => setCard(!card)}>
          Card - {card ? "true" : "false"}
        </button>
        <button onClick={() => setUpi(!upi)}>
          Upi - {upi ? "true" : "false"}
        </button>
        <button
          onClick={() => {
            setCash(null);
            setCard(null);
            setUpi(null);
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <h4>Filter ratings</h4>
        <button onClick={() => setFilterRating(4)}>greater than 4</button>
        <button onClick={() => setFilterRating(3)}>greater than 3</button>
        <button onClick={() => setFilterRating(2)}>greater than 2</button>
        <button onClick={() => setFilterRating(1)}>greater than 1</button>
        <button onClick={() => setFilterRating(0)}>All</button>
      </div>
      <div>
        {/* pagination */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          prev
        </button>
        <button onClick={() => setPage(page + 1)}>next</button>
        <Pagination currentPage={page} lastPage={5} onPageChange={setPage} />
      </div>
      <div>
        {data.map((item) => (
          <RestaurantDetails key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
