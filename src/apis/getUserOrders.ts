"use server";

import { getMyToken } from "@/utilities/token";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface TokenPayload {
  id: string;
}

export async function getUserOrders() {
  const token = await getMyToken();

  if (!token) {
    throw new Error("Login First");
  }

  const { id } = jwtDecode<TokenPayload>(token as string);

  const { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
  );

  return data;
}