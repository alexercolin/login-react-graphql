import "./styles.scss";
import UserArea from "../UserArea";
import { useState, memo } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {LOGIN_USER, ADD_NEW_USER} from "../Queries/queries"

const LoginForm = memo(() => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const { data, loading, error } = useQuery(LOGIN_USER, {
    variables: {
      username: username,
      password: password,
    },
  });

  const [addUser] = useMutation(ADD_NEW_USER, {
    variables: {
      username: username,
      password: password,
    },
  });

  const handleLogin = () => {
    if (data.login === null) {
      setErrorMessage(true);
    } else {
      setLogin(true);
    }
  };

  const createUser = () => {
    addUser({
      variables: {
        username: username,
        password: password,
      },
    });
  };

  return (
    <div className="main__container">
      {login === false ? (
        <form className="container__login">
          <h3 className="welcome__message">Welcome, login to your account</h3>
          <input
            required
            placeholder="Username"
            className="input"
            onChange={(event) => setUsername(event.target.value)}
            id="input-username"
            label="Username"
          />
          <input
            required
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            id="input-password"
            label="Password"
            type="password"
          />
          {errorMessage && (
            <p>Username/password are wrong, please try again!</p>
          )}
          <div className="login__buttons">
            <button onClick={handleLogin}>Login</button>
            <button onClick={createUser}>Sign up</button>
          </div>
        </form>
      ) : (
        <UserArea />
      )}
    </div>
  );
});

export default LoginForm;
