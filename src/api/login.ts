import api from "./config";

export async function login(email: string, password: string) {
    return api.post("/login", { email, password });
}