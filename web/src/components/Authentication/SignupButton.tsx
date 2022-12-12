import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@chakra-ui/react"

const SignupButton: React.FC = () => {

  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
    });
  }

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

      onClick={handleSignUp}
    >
      Sign Up
    </Button>
  )
}

export default SignupButton
