import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:8080/products",
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .then(setLoading(false));
  },[]);
  
  console.log(data);

  return (
    <div>
        {loading && <div>Loading....</div>}
        {data?.map((elem) => {
            return (
                <div style={{marginTop : "1rem"}} key={elem.id}>
                    <div>Name : {elem.name}</div>
                    <div>Price : {elem.price}</div>
                    <Link to={`/products/${elem.id}`}>Show More</Link>
                </div>
            )
        })}
    </div>
  )
};
