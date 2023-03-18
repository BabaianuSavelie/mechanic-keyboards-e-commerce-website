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

export type {DisclosureProps, GridItemProps}