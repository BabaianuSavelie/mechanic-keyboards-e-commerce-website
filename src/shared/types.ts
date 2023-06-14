type DisclosureProps = {
  isOpen: boolean;
  onClose: () => void;
};

type GridItemProps = {
  text: string;
  image: string;
  colspan: number;
  rowspan: number;
};

type CollectionTitleProps = {
  title: String;
};

type Category = {
  id: any;
  name: String;
  image: String;
  products: Product[];
};

type Product = {
  id?: any;
  name: string;
  price: number | bigint;
  category: Category;
  image: string;
  images: string[];
  slug: string;
  quantity?: number;
};

export type {
  DisclosureProps,
  GridItemProps,
  CollectionTitleProps,
  Category,
  Product,
};
