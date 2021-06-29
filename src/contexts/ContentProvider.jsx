import { LoadingProvider } from "./LoadingContext";
import { SearchProvider } from "./SearchContext";

export function ContentProvider({children}) {

  return (
      <LoadingProvider>
        <SearchProvider>
          {children}
        </SearchProvider>
      </LoadingProvider>
  )
}