export interface ProductData {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: Array<string>;
  company: string;
  description: string;
  category: string;
  shipping: boolean;
  featured: boolean;
}

export interface ImageData {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: {
      url: string;
      width: number;
      height: number;
    };
    large: {
      url: string;
      width: number;
      height: number;
    };
    full: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export interface SingleProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  colors: Array<string>;
  company: string;
  stock: number;
  stars: number;
  reviews: number;
  category: string;
  shipping: boolean;
  images: Array<ImageData>;
}
