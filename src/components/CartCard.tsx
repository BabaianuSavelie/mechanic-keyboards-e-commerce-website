import {
  AspectRatio,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  HStack,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { formatter } from "../utils/formatter";
import { useCounter } from "../hooks/useCounter";

type CartProduct = {
  name: string;
  image: string;
  price: number | bigint;
};

const CartCard = ({ name, image, price }: CartProduct) => {
  const { counter, increment, decrement } = useCounter(1);

  return (
    <Card direction="row" variant="outline" p="2" gap="2" my="2">
      <AspectRatio ratio={4 / 3} minWidth="100px">
        <Image src={image} objectFit="cover" rounded="md" bgColor="gray.200" />
      </AspectRatio>

      <Stack flexGrow={1}>
        <Heading fontSize="4xs" fontWeight={400} noOfLines={2}>
          {name}
        </Heading>

        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight={600} fontSize="4xs">
            {formatter.format(price)}
          </Text>

          <Button variant="ghost" size="sm" fontWeight={400}>
            Elimina
          </Button>
        </Flex>
      </Stack>
    </Card>
  );
};

export default CartCard;
