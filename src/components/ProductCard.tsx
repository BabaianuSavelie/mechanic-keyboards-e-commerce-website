import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  AspectRatio,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { BsEye } from "react-icons/bs";
import { Product } from "../shared/types";
import { formatter } from "../utils/formatter";

type ProductCardProps = {
  product: Product;
  onClick: () => void;
  onViewClick: () => void;
};

const ProductCard = ({ product, onClick, onViewClick }: ProductCardProps) => {
  return (
    <Card maxW="sm" rounded="none">
      <CardHeader p={0} bgColor="gray.100" position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={product.image}
            alt="Green double couch with wooden legs"
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>

        <IconButton
          aria-label="Product Modal"
          icon={<BsEye />}
          position="absolute"
          right={2}
          bottom={2}
          colorScheme="blackAlpha"
          onClick={onViewClick}
          zIndex={1000}
        />
      </CardHeader>
      <CardBody py={{ base: 2, md: 3 }} onClick={onClick} cursor="pointer">
        <Stack spacing="3" textAlign="center">
          <Heading size="sm">{product.name}</Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>
            {formatter.format(product.price)}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
