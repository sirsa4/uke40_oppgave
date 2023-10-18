import { createProducts,faker } from "@/features/cart/createCart";
import { NextResponse} from "next/server";

export const GET = ()=>{
    const response = createProducts({faker, count: 100})

    return NextResponse.json(
        {data: Array.from(response.values())},
        {status: 200}
    )
}