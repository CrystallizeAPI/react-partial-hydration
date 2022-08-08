import type { NodeProps } from "@crystallize/react-content-transformer";

export type CrystallizeImage = {
  url: string;
  altText?: string;
  variants: {
    url: string;
    width: number;
    height?: number;
    size?: number;
  }[];
};

export type CrystallizeRichText = NodeProps | NodeProps[];

export type CrystallizeProductVariant = {
  sku: string;
  name: string;
  price: number;
  firstImage: CrystallizeImage;
};
