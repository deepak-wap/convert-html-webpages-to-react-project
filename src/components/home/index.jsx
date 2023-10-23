import Hero from "./hero";
import Feature from "./feature";
import Professional from "./professional";
import Client from "./client";
import About from "../about";
import Services from "../services";
import Contanct from "../contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <About />
      <Professional />
      <Services />
      <Client />
      <Contanct />
    </>
  );
};

export default Home;
