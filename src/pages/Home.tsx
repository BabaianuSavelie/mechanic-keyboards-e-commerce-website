import { Container } from "@chakra-ui/react";
import CollectionsGrid from "../components/CollectionsGrid";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <Container maxW="container.2xl">
      <HeroSlider />
      <CollectionsGrid />
    </Container>
  );
};

export default Home;
