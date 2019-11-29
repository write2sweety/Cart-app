export interface ShoppingList {
  id: number;
  name: string;
  price: number;
  discount: number;
  category: string;
  img_url: string;
  count?: number;
}