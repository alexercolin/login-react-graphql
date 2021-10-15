import LoginForm from "../components/LoginForm";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../styles/global.scss";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <LoginForm />
    </ApolloProvider>
  );
}

export default App;
