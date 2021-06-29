import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [isLoadingFetch, setIsLoadingFetch] = useState(true);
  const [fetchRequests, setFetchRequests] = useState([]);

  function addRequestSearch() {
    setIsLoadingSearch(true);
  }

  function removeRequestSearch() {
    setIsLoadingSearch(false);
  }

  function addRequestFetch() {
    setIsLoadingFetch(true);
  }

  function removeRequestFetch() {
    setIsLoadingFetch(false);
  }

  return (
    <LoadingContext.Provider
      value={{
        isLoadingSearch,
        addRequestSearch,
        removeRequestSearch,
        isLoadingFetch,
        addRequestFetch,
        removeRequestFetch,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
