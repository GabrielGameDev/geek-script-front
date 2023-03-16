import api from "../config";

export async function createCategory(name: string) {
    return api.post("/category/admin", { name });
}

export async function getCategories() {
    return api.get("/category/catalog");
}

export async function getCategory(id: string) {
    return api.get(`/category/${id}`);
}

export async function updateCategory(id: string, name: string) {
    return api.put(`/category/admin/${id}`, { name });
}

export async function deleteCategory(id: string) {
    return api.delete(`/category/admin/${id}`);
}