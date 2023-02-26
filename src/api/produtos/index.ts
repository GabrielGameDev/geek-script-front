import api from "../config";

export interface Product {
    name: string;
    photo: string;
    category_id: string;
    price: number;
    description: string;
}

export async function getProducts() {
    return api.get("/product");
}

export async function getProduct(id: string) {
    return api.get(`/product/${id}`);
}

export async function createProduct(product: Product) {
    return api.post("/product", product);
}

export async function updateProduct(id: string, product: Product) {
    return api.put(`/product/${id}`, product);
}

export async function deleteProduct(id: string) {
    return api.delete(`/product/${id}`);
}