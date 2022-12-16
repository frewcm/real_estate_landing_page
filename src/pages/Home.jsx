import Awards from "../components/homeComponents/Awards";
import Featured from "../components/homeComponents/Featured";
import Header from "../components/homeComponents/Header";
import Location from "../components/homeComponents/Location";
import Price from "../components/homeComponents/Price";
import Recent from "../components/homeComponents/Recent";
import Team from "../components/homeComponents/Team";

function Home() {
  return (
    <div>
      <Header />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
    </div>
  );
}

export default Home;
