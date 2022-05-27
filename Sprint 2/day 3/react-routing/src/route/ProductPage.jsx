import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:8080/product/${params.id}`,
    })
      .then((res) => {
        setLoading(false);
        setError(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [params.id]);

  //   console.log(data);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <h3>404 Error</h3>}
      <div>
        <img style={{ width: "12rem", marginTop: "1rem" }} src={data?.image} />
        <div>{data?.name} </div>
        <div>$ {data?.price}</div>
      </div>
    </div>
  );
};
