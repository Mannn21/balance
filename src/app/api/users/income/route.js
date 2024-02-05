import { NextResponse } from "next/server";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/app/firebase";

export const POST = async req => {
	const {
		userId,
		task,
		date,
		deadline,
		reward,
		bonus,
		status,
		category,
		description,
		target
	} = await req.json();
	if (
		!userId ||
		!task ||
		!date ||
		!deadline ||
		!reward ||
		!bonus ||
		!status ||
		!category ||
		!target
	) {
		return NextResponse.json(
			{ message: "Mohon isi data dengan lengkap" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const docRef = doc(db, "users", userId);
		const searchUserById = await getDoc(docRef);
		if (!searchUserById.exists()) {
			return NextResponse.json(
				{ message: "Data user tidak ditemukan" },
				{ status: 404, statusText: "Not Found" }
			);
		}
		if (searchUserById.exists()) {
			const id = uuidv4();
			await setDoc(doc(db, "income", id), {
				userId,
				task,
				date,
				deadline,
				reward,
				bonus,
				status,
				category,
				description,
				target
			});
			return NextResponse.json(
				{ message: "Data income berhasil dibuat!" },
				{ status: 201, statusText: "Ok" }
			);
		}
	} catch (error) {
		return NextResponse.json(
			{ message: error },
			{ status: 500, statusText: "Internal server error" }
		);
	}
};
