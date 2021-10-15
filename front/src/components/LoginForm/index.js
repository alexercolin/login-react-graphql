import "./styles.scss";
import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const LOGIN_USER = gql`
  query ($username: String, $password: String) {
    login(username: $username, password: $password) {
      username
      password
    }
  }
`;

const ADD_NEW_USER = gql`
  mutation ($username: String, $password: String) {
    addUser(username: $username, password: $password) {
      username
    }
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { data, loading, error } = useQuery(LOGIN_USER, {
    variables: {
      username: username,
      password: password,
    },
  });
  const [addUser] = useMutation(ADD_NEW_USER);

  const handleLogin = () => {
    if (data.login === null) {
      window.alert("Usuário ou senha inválidos!");
    } else {
      return window.alert("Login realizado com sucesso!");
    }
  }

  return (
    <div className="main__container">
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
        <div className="login__buttons">
        <button onClick={handleLogin}>Login</button>
        <button
          onClick={() => {
            addUser({
              variables: {
                username: "alecasso",
                password: "alecao123",
              },
            });
          }}
        >
          Sign up
        </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
