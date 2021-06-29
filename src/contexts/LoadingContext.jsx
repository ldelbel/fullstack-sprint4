import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  function addRequest() {
    setIsLoading(true);
  }

  function removeRequest() {
    setIsLoading(false);
  }

  return (
    <LoadingContext.Provider value={{ isLoading, addRequest, removeRequest }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
