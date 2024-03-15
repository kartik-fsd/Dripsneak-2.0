import { Toaster } from "react-hot-toast";
import { Routers } from "./routes/router";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routers />
      <Toaster />
    </>
  );
}

export default App;
