export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  lastUpdate: Date;
  categoryName: string;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export type ProductAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: Product[] }
  | { type: "FETCH_ERROR"; payload: string };

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};
