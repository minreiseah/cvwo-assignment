import { Button } from "@chakra-ui/react"

const LoginButton: React.FC = () => {
  return (
    <Button
      border="1px"
      borderColor="black"
      boxShadow="4px 4px 0 #000"
      borderRadius="xl"
      bg="primary.1"
      color="black"
      fontFamily="Metropolis"
      letterSpacing="wider"
    >Log In</Button>
  )
}

export default LoginButton
