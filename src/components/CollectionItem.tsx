import { Box, Button, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import BoxOverlay from "./BoxOverlay";
import { GridItemProps } from "../shared/types";
import { Link } from "react-router-dom";

const CollectionItem = ({ image, colspan, rowspan, text }: GridItemProps) => {
  return (
    <GridItem
      rowSpan={rowspan}
      colSpan={colspan}
      bgImage={image}
      bgPosition="center"
      bgSize="cover"
      position="relative"
      className="gridItem"
    >
      <BoxOverlay />
      <Box
        display="flex"
        flexGrow={1}
        p="1rem"
        height="100%"
        alignItems="end"
        position="relative"
        zIndex={2}
      >
        <Box>
          <Text
            as="h1"
            color="gray.100"
            fontSize={30}
            fontWeight="700"
            my=".5rem"
          >
            {text}
          </Text>
          <Button colorScheme="gray" size="md" borderRadius={0}>
            <Link to="/keyboards">Vezi produsele</Link>
          </Button>
        </Box>
      </Box>
    </GridItem>
  );
};

export default CollectionItem;
