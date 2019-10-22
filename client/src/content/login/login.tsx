import React from "react";
import { GoogleLogin } from "react-google-login";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Login: React.SFC<RouteComponentProps> = props => {
  const onFailure = () => {
    console.log("Failure");
  };

  const onSuccess = () => {
    props.history.push("/board/0");
  };

  let clientId = "";
  if (process.env.GOOGLE_CLIENT_ID !== undefined) {
    clientId = process.env.GOOGLE_CLIENT_ID;
  }

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default withRouter(Login);
