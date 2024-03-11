import { Toaster } from "react-hot-toast";
import { Routers } from "./routes/router";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl text-woodsmoke-500">Hello world</h1> */}
      <Routers />
      <Toaster />
    </>
  );
}

export default App;
