import { NextResponse } from "next/server";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

export const GET = async (req, { params }) => {
	const { expenseId } = params;
	if (!expenseId) {
		return NextResponse.json(
			{ message: "Mohon isi data dengan lengkap" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const id = expenseId.toString();
		const docRef = doc(db, "expense", id);
		const getExpenseData = await getDoc(docRef);
		if (!getExpenseData.exists()) {
			return NextResponse.json(
				{ message: "Data expense tidak ditemukan" },
				{ status: 404, statusText: "Not Found" }
			);
		}
        const data = getExpenseData.data()
        return NextResponse.json(
            {message: data},
            {status: 200, statusText: "Ok"}
        )
	} catch (error) {
		return NextResponse.json(
			{ message: error },
			{ status: 500, statusText: "Internal server error" }
		);
	}
};

export const DELETE = async (req, { params }) => {
	const { expenseId } = params;
	if (!expenseId) {
		return NextResponse.json(
			{ message: "Mohon isi data dengan lengkap" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
	} catch (error) {
		return NextResponse.json(
			{ message: error },
			{ status: 500, statusText: "Internal server error" }
		);
	}
};
