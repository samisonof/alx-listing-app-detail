export interface Address {
  city: string;
  country: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Host {
  name: string;
  description: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string;
  description: string;
  category: string[];
  price: number;
  reviews: Review[];
  host: Host;
}
