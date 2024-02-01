import { NextResponse } from "next/server";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";

export const GET = async (req, { params }) => {
	const { userId } = params;
	if (!userId) {
		return NextResponse.json(
			{ message: "Mohon isi data dengan lengkap" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const id = userId.toString();
		const q = query(collection(db, "expense"), where("userId", "==", id))
		const getAllDocsById = await getDocs(q);
		let isDataExist;
		let allDatas = [];
        getAllDocsById.forEach(doc => {
			isDataExist = doc.exists()
			allDatas.push(doc.data())
		})
        if(!isDataExist) {
            return NextResponse.json({message: "Data expanse tidak ditemukan"}, {status: 404, statusText: "Not Found"})
        }
        return NextResponse.json(
            {message: allDatas},
            {status: 200, statusText: "Ok"}
        )
	} catch (error) {
		return NextResponse.json(
			{ message: error },
			{ status: 500, statusText: "Internal server error" }
		);
	}
};
