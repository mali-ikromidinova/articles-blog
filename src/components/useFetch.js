import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [loadedArticles, setLoadedArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = () => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          /* setIsLoading(false); */
          setLoadedArticles(json);
          setData(json);
        });
    };
    fetchData();
  }, [url]);

  const filterHandler = (e) => {
    if (e.target.value === "") {
      setLoadedArticles(data);
    } else {
      const filterResult = data.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.topic.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.author.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setLoadedArticles(filterResult);
    }
    setFilterValue(e.target.value);
  };

  const deleteHandler = (id) => {
    fetch("https://6373a125348e9472991207b8.mockapi.io/v1/articles/" + id, {
      method: "DELETE",
    }).then((response) => {
      setLoadedArticles(data.filter((article) => article.id !== id));
    });
  };
  return {
    data,
    filterValue,
    isLoading,
    loadedArticles,
    filterHandler,
    deleteHandler,
  };
};

export default UseFetch;
