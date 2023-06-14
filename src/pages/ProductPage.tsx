import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { get } from "../services/productService";
import {
  Container,
  SimpleGrid,
  Image,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  Input,
  Divider,
} from "@chakra-ui/react";
import { formatter } from "../utils/formatter";
import { BsChevronRight } from "react-icons/bs";
import { useCounter } from "../hooks/useCounter";
import { useAppDispatch } from "../store/store";
import { addToCart } from "../store/features/cartSlice";
import { Product } from "../shared/types";

const ProductPage = () => {
  const { category, slug } = useParams();

  const { data: product } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => get(slug),
  });

  const { counter, increment, decrement } = useCounter(1);

  const dispatch = useAppDispatch();

  const addProduct = () => {
    product && dispatch(addToCart(product[0]));
  };

  return (
    <Container maxW="container.xl" my="10">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="5">
        <Box backgroundColor="gray.200">
          <Image src={product && product[0].image} objectPosition="center" />
          <SimpleGrid columns={2} gap="1">
            {product &&
              product[0].images.map((image: string) => (
                <Image src={image} objectFit="cover" />
              ))}
          </SimpleGrid>
        </Box>

        <Box padding={5} position="sticky" top={0}>
          <Heading fontWeight={600}>{product && product[0].name}</Heading>
          <Text mt={3}>{product && formatter.format(product[0].price)}</Text>

          <Divider my={5} borderColor="blackAlpha.900" />

          <Box>
            <HStack spacing={0} border="1px" width="fit-content">
              <Button
                variant="ghost"
                fontSize="md"
                rounded="none"
                onClick={() => decrement()}
              >
                -
              </Button>
              <Input
                type="number"
                variant="ghost"
                textAlign="center"
                value={counter}
                maxW="50px"
                min={1}
              />
              <Button
                variant="ghost"
                fontSize="md"
                rounded="none"
                onClick={() => increment()}
              >
                +
              </Button>
            </HStack>

            <Button
              width="100%"
              mt={2}
              rounded="none"
              colorScheme="blackAlpha"
              bgColor="blackAlpha.900"
              fontWeight={400}
              iconSpacing={3}
              rightIcon={<BsChevronRight />}
              onClick={() => addProduct()}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default ProductPage;
