import axios from "axios";
import React, { useEffect, useState } from "react";

export const GithubRepositories = () => {
  const [data, setData] = useState([]);
  const [repo, setRepo] = useState("react");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.github.com/search/users",
      params: {
        q: repo,
        page: page,
        per_page: 5,
      },
    })
      .then((res) => {
        setLoading(false);
        setData(res.data.items);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [page, repo]);
  console.log(data);

  return (
    <div>
      <h1>Github</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <input
        style={{ width: "300px" }}
        type="text"
        placeholder="Search here"
        onChange={(e) => setRepo(e.target.value)}
      />
      <div style={{ width: "20%", margin: "auto" }}>
        {data?.map((elem) => (
          <div key={elem.id} style={{ display: "flex", marginTop: "10px" }}>
            <img
              style={{
                width: "40px",
                borderRadius: "50%",
                marginRight: "20px",
              }}
              src={elem.avatar_url}
              alt=""
            />
            <p>{elem.login}</p>
          </div>
        ))}
      </div>
      <button disabled={page == 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
