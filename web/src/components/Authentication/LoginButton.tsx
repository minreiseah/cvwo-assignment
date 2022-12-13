import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@chakra-ui/react"
import UserService from "../../services/UserService";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { onUserLogin } from "../../app/slices/userProfileSlice";
import { useEffect, useRef } from "react";

const LoginButton: React.FC = () => {

  const { loginWithPopup, user, isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch()

  const handleLogin = async () => {
    await loginWithPopup({
      // appState: {
      //   // returnTo: window.location.origin,
      // }
    }); 
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

      onClick={handleLogin}
    >Log In</Button>
  )
}

export default LoginButton
