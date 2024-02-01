import { NextResponse } from "next/server";

export const POST = async req => {
	const { userId, task, date, deadline, reward, bonus, status, category, description } =
		await req.json();
	if (!userId || !task || !date || !deadline || !reward || !bonus || !status || !category) {
		return NextResponse.json(
			{ message: "Bad Request" },
			{ status: 400, statusText: "Mohon isi data dengan lengkap" }
		);
	}
    try {
        // Cari user dengan id
        // Cari data task / income dengan task, date, categori dan reward yang sama
        // Jika tidak ada buat id income
        // Buat data income
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500, statusText: "Internal server error"})
    }
};
