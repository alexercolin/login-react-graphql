import "./style.css";
import { useState } from "react";
import { FormControl, Box, TextField, Button } from "@material-ui/core";

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleLogin() {
    console.log(username, password);
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
        <Button variant="outlined">Sign up</Button>
        <Button size="small">Forget Password?</Button>
      </Box>
    </FormControl>
  );
};

export default LoginForm;
