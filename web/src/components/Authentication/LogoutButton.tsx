import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@chakra-ui/react"
import UserService from "../../services/UserService";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { onUserLogin } from "../../app/slices/userProfileSlice";

const LogoutButton: React.FC = () => {
  const { logout, user } = useAuth0();
  const userProfile = useAppSelector(state => state.userProfile)
  const dispatch = useAppDispatch()

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
      // onClick ={() => dispatch(onUserLogin(user))}
    >Log Out</Button>
  )
}

export default LogoutButton
