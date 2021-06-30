import { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [isLoadingFetch, setIsLoadingFetch] = useState(false);
  const [fetchRequests, setFetchRequests] = useState([]);

  useEffect(() => {
    if (fetchRequests.length !== 0) {
      setIsLoadingFetch(true);
    } else {
      setIsLoadingFetch(false);
    }
  }, [fetchRequests]);

  function startSearching() {
    setIsLoadingSearch(true);
  }

  function finishSearching() {
    setIsLoadingSearch(false);
  }

  function addRequestFetch(name) {
    setFetchRequests((requests) => [...requests, name]);
  }

  function removeRequestFetch(name) {
    setFetchRequests((requests) => requests.filter((str) => str !== name));
  }

  return (
    <LoadingContext.Provider
      value={{
        isLoadingSearch,
        startSearching,
        finishSearching,
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
