import { Container } from "@chakra-ui/react";
import CollectionsGrid from "../components/CollectionsGrid";
import CollectionTitle from "../components/CollectionTitle";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <Container maxW="container.2xl">
      <HeroSlider />
      <CollectionsGrid />
      <CollectionTitle title="Keyboards" />
      <CollectionTitle title="Mouse" />
      <CollectionTitle title="Keycaps" />
      <CollectionTitle title="Deskmats" />
      <CollectionTitle title="Switches" />
    </Container>
  );
};

export default Home;
