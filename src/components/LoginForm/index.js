import "./style.css";
import { useState } from "react";
import { FormControl, Box, TextField, Button } from "@material-ui/core";
import { useQuery,useMutation, gql } from "@apollo/client";

const GET_USERS_ATTEMPTS = gql`
  {
    users {
      attempts
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

  const { data, loading, error } = useQuery(GET_USERS_ATTEMPTS);
  const [addUser] =useMutation(ADD_NEW_USER)

  function handleLogin() {
    console.log(data, password);
  }

  return (
    <FormControl className="login-form">
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <TextField
          onChange={(event) => setUsername(event.target.value)}
          id="input-username"
          label="Username"
          variant="standard"
        />
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          id="input-password"
          label="Password"
          type="password"
          variant="standard"
        />
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
        <Button onClick={() => {addUser({
          variables:{
            username:"alecasso",
            password:"alecao123"
          }
        })}} variant="outlined">
          Sign up
        </Button>
        <Button size="small">Forget Password?</Button>
      </Box>
    </FormControl>
  );
};

export default LoginForm;
