import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:8080/product",
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  console.log(data);

  return (
    <div>
      {loading && <div>Loading....</div>}
      {error && <h3>404 Error</h3>}
      {data?.map((elem) => {
        return (
          <div style={{ marginTop: "1rem" }} key={elem.id}>
            <div>{elem.name}</div>
            <div>$ {elem.price}</div>
            <Link to={`/product/${elem.id}`}>Show More</Link>
          </div>
        );
      })}
    </div>
  );
};
