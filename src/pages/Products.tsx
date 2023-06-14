import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { get } from "../services/categoryService";
import ProductCard from "../components/ProductCard";
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import ProductModal from "../components/ProductModal";
import { Product } from "../shared/types";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Product | null>(null);

  const { category } = useParams();
  const navigate = useNavigate();

  const { data: categories } = useQuery({
    queryKey: ["products", category],
    queryFn: () => get(category),
  });

  const openModal = (product: Product) => {
    setIsOpen(true);
    setModalContent(product);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <Container maxW="100%" p={0}>
      <Container maxW="100%" bgColor="blackAlpha.200" py="10">
        <Container maxW="container.xl">
          <Text
            textTransform="capitalize"
            fontSize="3xl"
            py={{ base: 3, md: 5 }}
          >
            {category}
          </Text>
        </Container>
      </Container>

      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        spacing="5"
        maxW="container.xl"
        m="auto"
        my="5"
        padding={{ base: 5, md: 0 }}
      >
        {categories &&
          categories[0].products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() =>
                navigate(`/collections/${category}/products/${product.slug}`)
              }
              onViewClick={() => openModal(product)}
            />
          ))}
      </SimpleGrid>
      <ProductModal
        isOpen={isOpen}
        onClose={closeModal}
        content={modalContent}
      />
    </Container>
  );
};

export default Products;
