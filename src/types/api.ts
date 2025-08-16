


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
    quantity:number
}>


export type Order = Entity<{
  total: string
  deliveryDate: string,
  address:string
  slug: string
  seller: string
  phoneNumber: string
}>


export type Meta = {
    page: number
}
