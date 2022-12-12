import { Auth0ProviderWithHistory } from "./Auth0ProviderWithHistory"
import { ChakraThemedProvider } from "./ChakraThemedProvider"
import { ReduxProvider } from "./ReduxProvider"

import {BrowserRouter} from "react-router-dom"


type MasterProviderProps = {
  children: React.ReactNode
}

const MasterProvider = ({ children }: MasterProviderProps) => {
  return (
    <ReduxProvider>
      <ChakraThemedProvider>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            {children}
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </ChakraThemedProvider>
    </ReduxProvider>
  )
}

export default MasterProvider
