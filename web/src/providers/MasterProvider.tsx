import { Auth0ProviderWithHistory } from "./Auth0ProviderWithHistory"
import { ChakraThemedProvider } from "./ChakraThemedProvider"
import { ReduxProvider } from "./ReduxProvider"

import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"


type MasterProviderProps = {
  children: React.ReactNode
}

const MasterProvider = ({ children }: MasterProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <ReduxProvider>
      <ChakraThemedProvider>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </ChakraThemedProvider>
    </ReduxProvider>
  )
}

export default MasterProvider
