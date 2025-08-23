export type BaseEntity = {
  id: string;
  createdAt: string;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;



export type Product = Entity<{
  name: string,
  description: string,
  price: number,
  quantity: number
}>


export type Order = Entity<{
  total: string
  deliveryDate: string,
  address: string
  slug: string
  seller: string
  phoneNumber: string
}>

export type Transaction = Entity<{
  reference: string,
  email: string,
  shopName: string,
  phoneNumber: string,
  status: string
}>


export type AuthResponse = {
  token:string
}

export type User = {
  email:string
}

export type Meta = {
  page: number
}
