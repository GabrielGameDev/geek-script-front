import api from "../config";

export interface User {
    id_user?: string;
    name: string;
    email: string;
    password: string;
    scope?: string;
}

export async function createUser(user: User) {
    return api.post("/user/register", user);
}

export async function getUsers() {
    return api.get("/user/admin");
}

export async function getUser() {
    return api.get(`/user/profile`);
}

export async function updateUser(id: string, user: User) {
    return api.put(`/user/${id}`, user);
}

export async function deleteUser(id: string) {
    return api.delete(`/user/${id}`);
}