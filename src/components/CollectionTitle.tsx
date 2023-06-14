import { Center, Text } from "@chakra-ui/react";
import { CollectionTitleProps } from "../shared/types";

const CollectionTitle = ({ title }: CollectionTitleProps) => {
  return (
    <Center position="relative" mt="1rem" minH={{ base: 130, md: 150 }}>
      <Text
        as="h1"
        fontSize={{ base: 32, md: 48 }}
        fontWeight="700"
        position="absolute"
        top={5}
        color="blackAlpha.800"
        zIndex={2}
        textTransform="capitalize"
      >
        {title}
      </Text>
      <Text
        as="h1"
        fontSize={{ base: 64, md: 128 }}
        fontWeight="700"
        position="absolute"
        color="whiteAlpha.900"
        textTransform="capitalize"
      >
        {title}
      </Text>
    </Center>
  );
};

export default CollectionTitle;
