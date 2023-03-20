import { Box, Button, Grid, GridItem, Image } from "@chakra-ui/react";
import Keycaps from "../assets/collections/keycaps.webp";
import Deskmats from "../assets/collections/deskmats.webp";
import Keyboards from "../assets/collections/keyboards.webp";
import Mouse from "../assets/collections/mouse.webp";
import Accesories from "../assets/collections/accesories.webp";
import Switches from "../assets/collections/switch.webp";
import BoxOverlay from "./BoxOverlay";
import CollectionItem from "./CollectionItem";

const CollectionsGrid = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(8,1fr)" }}
      templateRows={{ base: "10rem 10rem", sm: "15rem 15rem" }}
      gap={5}
      my="1rem"
    >
      <CollectionItem
        text="Keyboards"
        image={Keyboards}
        colspan={2}
        rowspan={2}
      />
      <CollectionItem text="Keycaps" image={Keycaps} colspan={2} rowspan={2} />
      <CollectionItem
        text="Deskmats"
        image={Deskmats}
        colspan={2}
        rowspan={1}
      />
      <CollectionItem text="Mouse" image={Mouse} colspan={2} rowspan={1} />
      <CollectionItem
        text="Accesories"
        image={Accesories}
        colspan={2}
        rowspan={1}
      />
      <CollectionItem
        text="Switches"
        image={Switches}
        colspan={2}
        rowspan={1}
      />
    </Grid>
  );
};

export default CollectionsGrid;
