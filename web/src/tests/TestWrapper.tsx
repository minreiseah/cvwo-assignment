import { ReduxProvider } from "../providers/ReduxProvider"
import { HashRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"


type TestWrapperProps = {
  children: React.ReactNode
}

const TestWrapper = ({ children }: TestWrapperProps) => {
  const queryClient = new QueryClient();
  return (
    <ReduxProvider>
        <HashRouter>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
        </HashRouter>
    </ReduxProvider>
  )
}

export default TestWrapper
