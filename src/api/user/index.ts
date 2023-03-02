import api from "../config";

export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    isAdm?: string;
}

export async function createUser(user: User) {
    return api.post("/user/register", user);
}

export async function getUsers() {
    return api.get("/user");
}

export async function getUser(id: string) {
    return api.get(`/user/${id}`);
}

export async function updateUser(id: string, user: User) {
    return api.put(`/user/${id}`, user);
}

export async function deleteUser(id: string) {
    return api.delete(`/user/${id}`);
}