import Delivery from "./delivery/Delivery";
import Features from "./features/Features";
import Hero from "./hero/Hero";
import NewsLetter from "./newsletter/NewsLetter";
import Popular from "./popular/Popular";
import Reservation from "./reservation/Reservation";
import Team from "./team/Team";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Features />
      <Popular />
      <Delivery />
      <Team />
      <Reservation />
      <NewsLetter />
     
    </div> 
  );
};

export default Home;
