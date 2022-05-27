import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:8080/products/${params.id}`,
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .then((err) => setLoading(false));
  }, [params.id]);

  //   console.log(data);

  return (
    <div>
      {loading && <div>Loading...</div>}
      <div>
        <img style={{ width: "12rem", marginTop: "1rem" }} src={data?.image} />
        <div>Name : {data?.name} </div>
        <div>Price : {data?.price}</div>
      </div>
    </div>
  );
};
