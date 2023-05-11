import { Container } from "@chakra-ui/react";
import { BsTypeH1 } from "react-icons/bs";
import { useQuery } from "react-query";
import CollectionsGrid from "../components/CollectionsGrid";
import HeroSlider from "../components/HeroSlider";
import ProductsSlider from "../components/ProductsSlider";

const Home = () => {
  return (
    <Container maxW="100%" padding={0}>
      <HeroSlider />
      <CollectionsGrid />
    </Container>
  );
};

export default Home;
