import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "./Article";

function Articles() {
  const [art, setArt] = useState([]);
  useEffect(() => {
    axios.get("/api/actuals").then((res) => {
      console.log(res.data);
      setArt(res.data);
    });
  }, []);
  return art.map((article, id) => {
    return (
      <div key={id}>
        <Article article={article} />
      </div>
    );
  });
}

export default Articles;
