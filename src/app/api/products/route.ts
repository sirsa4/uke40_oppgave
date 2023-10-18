import { createProducts,faker } from "@/features/cart/createCart";
import { NextResponse} from "next/server";

export const GET = ()=>{
    const response = createProducts({faker, count: 20})
    return NextResponse.json(
        {data: Array.from(response.values())},
        {status: 200}
    )
}