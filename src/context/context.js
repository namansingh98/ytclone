import { createContext, useEffect, useState } from "react";

import { fetchapi } from "../utils/api";

export const Context = createContext();

export const Appcontext = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [serachResult, setSearchResult] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(false);

  useEffect(() => {
    fetchselected(selectedCategories);
  }, [selectedCategories]);

  const fetchselected = (query) => {
    setLoading(true);
    fetchapi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResult(contents);
      setLoading(false);
    });
  };
  return (
    <Context.Provider
      value={{
        isLoading,
        setLoading,
        serachResult,
        setMobile,
        mobile,
        setSelectedCategories,
        selectedCategories,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
