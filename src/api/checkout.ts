import api from "./config";

export interface Cart {
    purchaseIdList: any[];
    purchaseTotal: number;
}

export async function checkout(cart : Cart) {
    console.log("checkout", cart);
    return api.post("/checkout", cart );
}

export async function getOrders() {
    return api.get("/purchase/admin");
}