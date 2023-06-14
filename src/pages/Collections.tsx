import {
  SimpleGrid,
  Container,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import BoxOverlay from "../components/BoxOverlay";
import { getAll } from "../services/categoryService";

const Collections = () => {
  const { data: categories } = useQuery("categories", getAll);
  const navigate = useNavigate();

  return (
    <Container maxW="100%" p={0}>
      <Container maxW="100%" bgColor="blackAlpha.200" py="10">
        <Container maxW="container.xl">
          <Breadcrumb spacing=".8rem">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Text>Collections</Text>
            </BreadcrumbItem>
          </Breadcrumb>

          <Text fontSize="4xl" mt="10">
            Collections
          </Text>
        </Container>
      </Container>

      <Container maxW="container.xl" my="5">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
          {categories?.map((category) => (
            <Box
              key={category.id}
              minH="50vh"
              bgSize="cover"
              position="relative"
              cursor="pointer"
              style={{ backgroundImage: `url(${category.image})` }}
              onClick={() => navigate(category.name.toLowerCase())}
            >
              <BoxOverlay />
              <Box
                p="5"
                textTransform="capitalize"
                display="flex"
                height="100%"
                alignItems="end"
                position="relative"
                zIndex={2}
              >
                <Text fontWeight={500} fontSize="2xl" color="whiteAlpha.700">
                  {category.name}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default Collections;
