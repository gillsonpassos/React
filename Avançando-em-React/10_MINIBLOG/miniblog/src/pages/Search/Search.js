import React from "react";

// hooks
import { useFetchDocuments } from "../../Hooks/useFetchDocuments";
import { useQuery } from "../../Hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  return (
    <div>
      <h2>Search</h2>
      <p>{search}</p>
    </div>
  );
};

export default Search;
