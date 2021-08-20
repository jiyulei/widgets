import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("game");
  const [results, setResult] = useState([]);

  // method 1:
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchTerm,
        },
      });

      setResult(data.query.search);
    };

    if (searchTerm && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (searchTerm) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [results.length, searchTerm]);

  // method 2: define async function and immediately invoke
  // useEffect(() => {
  //   !!searchTerm && (async () => { // if searchTerm is empty string dont do a search
  //     const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: searchTerm,
  //       },
  //     });

  //     setResult(data.query.search);
  //   })();
  // }, [searchTerm]);

  // method 3: resolve promise use .then()
  //   useEffect(() => {
  //       axios.get('someUrl').then((response) => {
  //         console.log(response.data);
  //       });
  //   }, [searchTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={searchTerm}
            className="input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
