import { Auth0Provider } from "@auth0/auth0-react"
import React from "react"
import { useNavigate } from "react-router-dom"

type Auth0ProviderWithHistoryProps = {
  children: React.ReactNode
}

export const Auth0ProviderWithHistory = ({children}: Auth0ProviderWithHistoryProps) => {
  const history = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState: any) => { // what type is appState?
    history(appState?.returnTo || window.location.pathname);
  };

  if(!(domain && clientId)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}
