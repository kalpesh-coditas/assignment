export type ProductData = {
    title: string,
    category: string,
    id: number,
    images: string[],
    price: number,
    stock: number
}

export type Pagination = {
    skip: number,
    limit: number,
}

export type ProductsState = {
    productData: ProductData[],
    isLoading: Boolean,
    error: string | null,
    total: number
} & Pagination;