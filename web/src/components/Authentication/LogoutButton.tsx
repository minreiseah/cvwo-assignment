import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@chakra-ui/react"
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin
    })
  }
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

      onClick={handleLogout}
    >Log Out</Button>
  )
}

export default LogoutButton
