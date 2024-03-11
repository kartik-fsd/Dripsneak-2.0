import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <Link to={"/sneakers"}>Sneakers</Link>
    </div>
  );
}

export default Home;
