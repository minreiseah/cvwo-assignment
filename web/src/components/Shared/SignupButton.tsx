import { Button } from "@chakra-ui/react"

const SignupButton: React.FC = () => {
  return (
    <Button
      border="1px"
      borderColor="black"
      boxShadow="4px 4px 0 #000"
      borderRadius="xl"
      bg="primary.2"
      color="black"
      fontFamily="Metropolis"
      letterSpacing="wider"
    >
      Sign Up
    </Button>
  )
}

export default SignupButton
