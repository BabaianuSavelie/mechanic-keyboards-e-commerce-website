import { Container } from "@chakra-ui/react";
import { BsTypeH1 } from "react-icons/bs";
import { useQuery } from "react-query";
import CollectionsGrid from "../components/CollectionsGrid";
import HeroSlider from "../components/HeroSlider";
import ProductsSlider from "../components/ProductsSlider";
import axios from "axios";
import { Category } from "../shared/types";
import { getAll } from "../services/categoryService";

const Home = () => {
  const { data: categories } = useQuery("categories", getAll);
  console.log(categories);

  return (
    <Container maxW="100%" padding={0}>
      <HeroSlider />
      <CollectionsGrid />

      <Container maxW="100%" bgColor="gray.200" mt="2rem">
        {categories?.map((category) => (
          <ProductsSlider
            key={category.id}
            name={category.name}
            products={category.products}
          />
        ))}
      </Container>
    </Container>
  );
};

export default Home;
