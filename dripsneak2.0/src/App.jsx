import { Toaster } from "react-hot-toast";
import { Routers } from "./routes/router";
import Header from "./Components/Header";
import ScrollToTopButton from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <Routers />
      <Toaster />
      <ScrollToTopButton />
    </>
  );
}

export default App;
