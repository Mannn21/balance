import { NextResponse } from "next/server";

export const POST = async req => {
	const { userId, title, date, deadline, bill, status, category, description } =
		await req.json();
	if (!userId || !title || !date || !deadline || !bill || !status || !category) {
		return NextResponse.json(
			{ message: "Bad Request" },
			{ status: 400, statusText: "Mohon isi data dengan lengkap" }
		);
	}
    try {
        // Cari user dengan id
        // Cari data expense dengan title, date, categori dan bill yang sama
        // Jika tidak ada buat id expense
        // Buat data expense
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500, statusText: "Internal server error"})
    }
};
