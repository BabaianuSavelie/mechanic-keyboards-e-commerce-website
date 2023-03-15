import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DisclosureProps } from "../shared/types";

const CardDrawer = ({ isOpen, onClose }: DisclosureProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size={{ base: "xs", md: "md" }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <h1>cart items</h1>
        </DrawerBody>

        <DrawerFooter>
          <Link to="/login">Login</Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CardDrawer;
