import { ReduxProvider } from "../providers/ReduxProvider"
import { BrowserRouter } from "react-router-dom"


type TestWrapperProps = {
  children: React.ReactNode
}

const TestWrapper = ({ children }: TestWrapperProps) => {
  return (
    <ReduxProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
    </ReduxProvider>
  )
}

export default TestWrapper
