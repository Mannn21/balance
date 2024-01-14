import {NextResponse} from "next/server"

export const POST = async req => {
    const {email, password} = await req.json()
    return NextResponse.json({message: "OK"}, {status: 200, statusText: "Ada"})
}