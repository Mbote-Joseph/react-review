import React, { useState, useEffect } from "react";

function Github({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  //   if (data) {
  // return <div>{JSON.stringify(data)}</div>;
  return (
    <div>
      <h3>{data.login}</h3>
      <h3>{data.id}</h3>
      <img
        src={data.avatar_url}
        height={100}
        style={{ borderRadius: "100px" }}
        alt="Avatar"
      />
      <p>
        <i>{data.bio}</i>
      </p>
      <h4>{data.location}</h4>
      <h3>Followers : {data.followers}</h3>
      <h3>Following : {data.following} </h3>
      Website:<a href={data.blog}> {data.blog}</a>
    </div>
  );
  //   } else {
  //     return (
  //       <div>
  //         <h1>No Data Available</h1>
  //       </div>
  //     );
  //   }
}

export default Github;
