 type DisclosureProps = {
  isOpen: boolean;
  onClose: () => void;
};

type GridItemProps = {
  text: string;
   image: string;
   colspan: number;
   rowspan: number;
} 

type CollectionTitleProps = {
  title: string;
}

export type {DisclosureProps, GridItemProps, CollectionTitleProps}