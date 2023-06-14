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
import { useAppSelector } from "../store/store";
import CartCard from "./CartCard";

const CardDrawer = ({ isOpen, onClose }: DisclosureProps) => {
  const products = useAppSelector((state) => state.cart.cartItems);
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
        <DrawerHeader>Your Cart</DrawerHeader>

        <DrawerBody>
          {products.map((product) => (
            <CartCard
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Link to="/login">Login</Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CardDrawer;
