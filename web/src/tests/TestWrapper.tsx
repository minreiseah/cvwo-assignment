import { ReduxProvider } from "../providers/ReduxProvider"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"


type TestWrapperProps = {
  children: React.ReactNode
}

const TestWrapper = ({ children }: TestWrapperProps) => {
  const queryClient = new QueryClient();
  return (
    <ReduxProvider>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
        </BrowserRouter>
    </ReduxProvider>
  )
}

export default TestWrapper
