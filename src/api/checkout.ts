import api from "./config";

export async function checkout(cart: any) {
    return api.post("/checkout", { cart });
}

export async function getOrders() {
    return api.get("/purchase/admin");
}